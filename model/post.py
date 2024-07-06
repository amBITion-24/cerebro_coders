import requests

def postToNode(data):
    try:
        response = requests.post("http://localhost:5000", json=data)
        if response.status_code == 200:
            print("Posted to Server")
        else:
            print(f"Failed to post to Server, Status Code: {response.status_code}")
    except:
        print("server connection failed")


