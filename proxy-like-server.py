'''
미리 실제 데이터를 python request모듈로 요청하고,
그 response를 기준으로 flask서버를 open하는 소스입니다.
'''


import requests;
import sys,getopt;
import grequests;
from gevent import monkey
from flask import abort, Flask, request, jsonify
from flask import Response
import json
from flask_cors import CORS, cross_origin


    
def exception_handler(request, exception):
    print("Request failed")
    sys.exit()

Platform = {
    "PC" : "uplay",
    "XBOX" : "xbl",
    "PLAYSTATION" : "psn",
    "GLOBAL" : "global",
}


id = ''
platform = ''

try:
    opts, args = getopt.getopt(sys.argv[1:],"hi:p:",["id=","platform="])
    
except getopt.GetoptError:
    print('Usage: python -i <id> -p <platform>')
    sys.exit(2)
    
for opt, arg in opts:
    
    if (opt == '-h') :
        print('Usage: python -i <id> -p <platform>')
    elif opt in ("-i", "--id"):
        id = "/" + arg
    elif opt in ("-p", "--platform"):
        if (arg in Platform):
            platform = "/" + Platform[arg]
        else:
            print('Error: platform should be one of [ ' + " ".join(list(Platform.keys())) + ' ]')
            sys.exit();    
            
serverurl = 'http://ec2-52-78-165-226.ap-northeast-2.compute.amazonaws.com:8080/api/v1'
profile = '/profile'
rank = '/rank'
rankpvp = '/rankpvp'
casualpvp = '/casualpvp'
generalpvp = '/generalpvp'
operator = '/operator'
all= '/all'

profileURL = profile + platform + id
rankURL = rank + platform + id
rankAllURL = rankURL + all
operatorURL = operator + platform + id
generalpvpURL = generalpvp + platform + id
casualpvpURL = casualpvp + platform + id
casualpvpAllURL = casualpvpURL + all
rankpvpURL = rankpvp + platform + id + all
rankpvpAllURL = rankpvpURL + all

urls = [rankURL, rankAllURL, operatorURL, generalpvpURL, casualpvpURL, casualpvpAllURL, rankpvpURL, rankpvpAllURL, profileURL]
requests = (grequests.get(serverurl+u) for u in urls)
responses = grequests.map(requests, exception_handler=exception_handler)
jsons = [response.json() for response in responses]
app = Flask("a")

def flaskResponseWrapper(response) :
    return Response(json.dumps(response), mimetype='application/json')
    # if type(response) is dict :
    #     return Response(json.dumps(response), mimetype='application/json')
    # elif type(response) is list :
    #     return Response(json.dumps(response), mimetype='application/json')

wrapped = list(map(flaskResponseWrapper, jsons))
monkey.patch_all()


@app.route(rankURL)
def rankresponse():
    return wrapped[0]

@app.route(rankAllURL)
def rankAllURLResponse():
    return wrapped[1]

@app.route(operatorURL)
def operatorURLResponse():
    return wrapped[2]

@app.route(generalpvpURL)
def generalpvpURLResponse():
    return wrapped[3]

@app.route(casualpvpURL)
def casualpvpURLResponse():
    return wrapped[4]

@app.route(casualpvpAllURL)
def casualpvpAllURLResponse():
    return wrapped[5]

@app.route(rankpvpURL)
def rankpvpURLResponse():
    return wrapped[6]

@app.route(rankpvpAllURL)
def rankpvpAllURLResponse():
    return wrapped[7]

@app.route(profileURL)
def profileResponse():
    return wrapped[8]

CORS(app)
print(chr(27) + "[2J")
print("-----------AVAILABBLE URLS-----------")
print("\n".join(urls))
app.run(debug=True)



