from ultralytics import YOLO
import cv2 
import math
import cvzone

from post import postToNode
from captureImg import captureImg
import random 
places=["mspalya","basavangudi","gangamacircle"]
# Initialize video capture


videoName=2

accidentMark=0
ACCIDEN_TRESHOLD=3
postedTOServer=False;

cap = cv2.VideoCapture(f"./crashes/{videoName}.mp4")



model = YOLO("yolov8n.pt")

classname = [ 'person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch', 'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone', 'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush']

mask=cv2.imread(f"./mask/{videoName}.png")

maskSize=int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)),int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

resizeMask=cv2.resize(mask,maskSize) 

while True:
    success, img = cap.read()
    AccidentZone=cv2.bitwise_and(img,resizeMask)
    if not success:
        break

    results = model(AccidentZone, stream=True)
    car_centers = []
    car_boxes = []

    for r in results:
        boxes = r.boxes
        for box in boxes:
            cls = int(box.cls[0])
            confidence = float(box.conf[0])

            #  seperate only cars
            if classname[cls] == "car" and confidence > 0.4:
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                cx, cy = (x1 + x2) // 2, (y1 + y2) // 2
                car_centers.append((cx, cy))
                car_boxes.append((x1, y1, x2, y2))

                cv2.rectangle(img, (x1, y1), (x2, y2), (0, 200, 0), 3)
                for i in range(len(car_centers)):
                    for j in range(i + 1, len(car_centers)):
                        cx1, cy1 = car_centers[i]
                        cx2, cy2 = car_centers[j]
                        # coordinate geo x2-x1 whole square + y2-y1 whole sq
                        #  to calculate distance between two points
                        distance = math.sqrt((cx2 - cx1) ** 2 + (cy2 - cy1) ** 2)
                        # center of a point
                        mid_x, mid_y = (cx1 + cx2) // 2, (cy1 + cy2) // 2
                        # considering it as a accident when it is less than 100 units
                        if distance <100:
                            cvzone.putTextRect(img,f"Accident",(mid_x, mid_y) , 1, 1,1,(0, 0,255))
                            accidentMark+=1;
                            cv2.line(img, (cx1, cy1), (cx2, cy2), (255, 0, 0), 2)
                        # further steps when we met with an accident
                        if accidentMark>ACCIDEN_TRESHOLD and not postedTOServer:
                            # checking it accident has maked more than accident threshold and not postedtoserver
                            imgStr=captureImg(img)
                            # capturing the image
                            #  making a post request to the server
                            postToNode({
                                "name": "this is from model",
                                "location": random.choice(places).title(),
                            "intensity": "finally this is working...!!",
                            "isAmbulanceReq": True,
                            "img":imgStr
                        })
                            postedTOServer=True


    # looping through all the cars

               

    cv2.imshow("Img", img)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
