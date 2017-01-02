from flask import Flask, url_for, json,Response


import requests,os
from requests_oauthlib import OAuth1
from requests import get
from json import loads

tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
app = Flask(__name__, template_folder=tmpl_dir)

# height:{200,42,84}
def getIconByTerm(term,height):
    auth = OAuth1("85a512e87dce48dba9ea17e2f770e044", "2a1a3389bc624597a54e9af0adb18403")
    endpoint = "http://api.thenounproject.com/icon/" + term
    response = requests.get(endpoint, auth=auth)
    #print d['glossary']['title']
    if(response.status_code==200):
        response = (response.content).decode("utf-8");
        js = json.loads(response)
        if(height=="200"):
            height = ""
        else:
            height = "_"+height
        return js['icon']['preview_url'+height+'']
    
def getQuot():
    response = get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    if(response.status_code==200):
        response = (response.content).decode("utf-8")
        js = json.loads(response)
        return js['quoteText']
    
#size {full,regular,small,raw,thumb}
def getRandomImage(query,size):
    payload = {'client_id':'1c0bb206a9c3cfdd323a17038e7ffea88053a03fd42e23e20f12cfd766fa8107','query':query}
    r = requests.get('https://api.unsplash.com/photos/random', params = payload)
    if(r.status_code==200):
        response = r.json()
        data = {}
        data["url"] = response["urls"][size]
        data["name"] = response["user"]["name"]
        return data
    
@app.route('/product/<query>', methods = ['GET'])
def api_hello(query):
    data = {}
    data["icon"] = getIconByTerm(query,"200")
    image = getRandomImage(query,"regular")
    data["image_url"] = image["url"]
    data["image_credit"] = image["name"]
    data["quot"] = getQuot()
    json_data = json.dumps(data)

    resp = Response(json_data, status=200, mimetype='application/json')
    resp.headers['Link'] = 'http://yo.com'

    return resp


@app.route('/')
def root():
    return app.send_static_file('index.html')


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)