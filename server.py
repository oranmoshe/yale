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

import controller

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



    
@app.route('/product/<query>', methods = ['GET'])
@cross_origin()
def api_hello(query):
    data = {}
    data["icon"] = controller.getIconByTerm(query,"200")
    image = controller.getRandomImage(query,"full")
    if(image):
        data["image_url"] = image["url"]
        data["image_credit"] = image["name"]
    data["quot"] = getQuot()
    json_data = json.dumps(data)

    resp = Response(json_data, status=200, mimetype='application/json')
    resp.headers['Link'] = 'http://yo.com'

    return resp

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