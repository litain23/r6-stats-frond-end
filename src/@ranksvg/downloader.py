import requests
import re;

'''
download all svg files.
'''
x = requests.get('https://r6unhash.tk/');
json = x.json();
url = json["unlocalized"]["data"]["ranks"]["url"];
x = requests.get(url);
json = x.json();
data = json["seasons"]
seasons = data[len(data)-1];
ranks = seasons["ranks"]

contents = ""
exportlist = []

for rank in ranks:
    images = rank["images"]
    svg = "https://game-rainbow6.ubi.com/" + images["default"]
    myfile = requests.get(svg)
    paths = images["default"].split('/')
    filename = paths[len(paths)-1]
    regexp = "(?<=rank)[0-9]+"
    m = re.search("(?<=rank)[0-9]+", filename)

    # index.ts src contents (original contents)
    # contents += "export { ReactComponent as " + 'rank' + m.group(0) + " } from \'./" + m.group(0) + '.svg\'\n'
    # index.ts only for source.
    contents += "import rank" + m.group(0) + " from \'./" + m.group(0) + '.svg\'\n'
    exportlist.append("rank" + m.group(0))
    downloadpath = './' + m.group(0) +'.svg'
    open(downloadpath, 'wb').write(myfile.content)

f = open("index.ts", "w")

contents += "export { "
for src in exportlist:
    contents += src + ","
contents += " }"

f.write(contents)
f.close()

