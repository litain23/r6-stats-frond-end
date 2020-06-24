import requests
import re

'''
download all png badges.
'''
x = requests.get('https://r6unhash.tk/');
json = x.json();
url = json["unlocalized"]["data"]["operators"]["url"];
x = requests.get(url);
json = x.json();

# print(json);
# contents = "";
# exportlist = [];



# url = "https://game-rainbow6.ubi.com/assets/data/operators.f660ac39.json"
# x = requests.get(url)
# json = x.json()
contents = ""
exportlist = []

'''
download all page for season 18
'''

for operator in json:
    print(operator == 'nakk')
    if (operator == 'nakk'):
        images = json[operator]["badge"]
        png = "https://game-rainbow6.ubi.com/" + images
        myfile = requests.get(png)
        downloadpath = './' + operator +'.png'
        open(downloadpath, 'wb').write(myfile.content)
        contents += "import " + operator + " from \'./" +operator + '.png\'\n'
        exportlist.append(operator)

    # index.ts src contents (original contents)
    # contents += "export { ReactComponent as " + 'rank' + m.group(0) + " } from \'./" + m.group(0) + '.svg\'\n'
    # index.ts only for source.

# f = open("index.ts", "w")
# contents += "export { "
# for src in exportlist:
#     contents += src + ","
# contents += " }"

# f.write(contents)
# f.close()

