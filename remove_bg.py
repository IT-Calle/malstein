import os
import sys

try:
    from PIL import Image
except ImportError:
    print("Pillow not installed")
    sys.exit(1)

def process_image(img_path, out_path, tolerance=235):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # A simple check for near-white pixels
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Crop the image to its bounding box containing non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        # add a small padding
        padding = 10
        bbox = (
            max(0, bbox[0] - padding),
            max(0, bbox[1] - padding),
            min(img.width, bbox[2] + padding),
            min(img.height, bbox[3] + padding)
        )
        img = img.crop(bbox)
        
    img.save(out_path, "PNG")
    print("Successfully processed image")

if __name__ == "__main__":
    process_image("src/data/logo.png", "src/data/logo.png")
