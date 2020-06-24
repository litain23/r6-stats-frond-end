import requests
import re;
import json;

'''
download all svg files.
'''
url = "https://game-rainbow6.ubi.com/assets/data/ranks.754ab452.json"
x = requests.get(url);
json1 = x.json();
seasons = json1["seasons"]

oasis = "https://game-rainbow6.ubi.com/assets/locales/locale.en-us.d43d058a.json"
x = requests.get(oasis);
json2 = x.json();

contents = "";
newData = []

# 시즌 2부터 시작함.
for season in seasons:
    seasonNumber = season["id"]
    ranks = season["ranks"]
    
    tempData = { "season" : seasonNumber, "ranks" : []}

    for rank in ranks:
        try :
            tempData["ranks"].append(rank["range"][1])
        except:
            tempData["ranks"].append(0)

    newData.append(tempData)
    
    
jsonData = json.dumps(newData)

f = open("range.tsx", "w")

contents += "export const rangeData = "
contents += jsonData
f.write(contents)
f.close()


