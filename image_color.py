import json
from PIL import Image
import urllib.request as urllib


with open('/Users/mukkan/Desktop/personal_projects/color-schemer/testscrape/paints.json') as f:
    data = json.load(f)

img_arr = []

for entry in data:
    for key in entry:

        if key == "image":
            img_arr.append(entry[key])

matt_black = Image.open(urllib.urlopen(img_arr[0]))
matt_white = Image.open(urllib.urlopen(img_arr[1]))

rgb_arr = []

for img in img_arr:
    opened_img = Image.open(urllib.urlopen(img))
    color = opened_img.load()[100,300]
    rgb_arr.append(color)

print(rgb_arr)