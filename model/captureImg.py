from PIL import Image
import base64
from io import BytesIO
import numpy as np

def captureImg(array):
  array = array.astype(np.uint8)

  # Convert to image
  image = Image.fromarray(array)

  # Save image to a buffer
  buffer = BytesIO()
  image.save(buffer, format="PNG")
  buffer.seek(0)

  # Encode buffer to base64
  img_str = base64.b64encode(buffer.read()).decode('utf-8')

  # Output the base64 string
  return("data:image/png;base64,"+img_str)
