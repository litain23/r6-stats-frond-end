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

for rank in ranks:
    images = rank["images"]
    svg = "https://game-rainbow6.ubi.com/" + images["default"]
    myfile = requests.get(svg)
    paths = images["default"].split('/')
    filename = paths[len(paths)-1]
    regexp = "(?<=rank)[0-9]+"
    m = re.search("(?<=rank)[0-9]+", filename)
    downloadpath = './' + m.group(0) +'.svg'
    open(downloadpath, 'wb').write(myfile.content)

