from flask import Flask, url_for, json,Response,render_template,send_from_directory
from flask_cors import CORS, cross_origin

import requests,os
from requests_oauthlib import OAuth1
from requests import get

from json import loads

# color thief
import sys
if sys.version_info < (3, 0):
    from urllib2 import urlopen
else:
    from urllib.request import urlopen
import io
from colorthief import ColorThief

from random import randint

from urllib.request import urlopen


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# height:{200,42,84}
def getIconByTerm(term,height):
    try:
        auth = OAuth1("85a512e87dce48dba9ea17e2f770e044", "2a1a3389bc624597a54e9af0adb18403")
        endpoint = "http://api.thenounproject.com/icons/" + term
        response = requests.get(endpoint, auth=auth)
        #print d['glossary']['title']
        if(response.status_code==200):
            response = (response.content).decode("utf-8");
            js = json.loads(response)
            if(height=="200"):
                height = ""
            else:
                height = "_"+height
            counts = len(js['icons'])
           
            print(counts)
            svg = -1
            random_index = 0
            while svg == -1:
                random_index =  randint(0,counts-1)
                svg = str(js['icons'][random_index]).find('.svg')
            return getSVG(js['icons'][random_index]['icon_url'])
    except:
        print("getIconByTerm crushed!")  


def getQuot():
    try:
        response = get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        if(response.status_code==200):
            response = (response.content).decode("utf-8")
            js = json.loads(response)
            return js['quoteText']
    except:
        print("getQuot crushed!")  

def getSVG(url):
    response = urlopen(url)
    return response.read()
   

#size {full,regular,small,raw,thumb}
def getRandomImage(query,size):
    try:
        payload = {'client_id':'1c0bb206a9c3cfdd323a17038e7ffea88053a03fd42e23e20f12cfd766fa8107','query':query}
        r = requests.get('https://api.unsplash.com/photos/random', params = payload)
        if(r.status_code==200):
            response = r.json()
            data = {}
            data["url"] = response["urls"][size]
            data["name"] = response["user"]["name"]
            return data
    except:
        print("getRandomImage crushed!")  

def getDominantColor(url,_quality=1):
    fd = urlopen('http://lokeshdhakar.com/projects/color-thief/img/photo1.jpg')
    f = io.BytesIO(fd.read())
    color_thief = ColorThief(f)
    return color_thief.get_color(quality=1)

def getPalette(url,_color_count=6):
    fd = urlopen('http://lokeshdhakar.com/projects/color-thief/img/photo1.jpg')
    f = io.BytesIO(fd.read())
    color_thief = ColorThief(f)
    return color_thief.get_palette(quality=1)

    
@app.route('/product/<query>', methods = ['GET'])
@cross_origin()
def api_hello(query):
    data = {}
    data["icon"] = getIconByTerm(query,"200")
    image = getRandomImage(query,"full")
    if(image):
        data["image_url"] = image["url"]
        data["image_credit"] = image["name"]
    data["quot"] = getQuot()
    json_data = json.dumps(data)

    resp = Response(json_data, status=200, mimetype='application/json')
    resp.headers['Link'] = 'http://yo.com'

    return resp


@app.route('/svg/<url>', methods = ['GET'])
@cross_origin()
def svg(url):
    return getSVG(url)

@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/')
def root():
    return render_template('index.html')


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug = True)