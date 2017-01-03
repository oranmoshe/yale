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
            return js['icons'][random_index]['icon_url']
    except(error):
        print("getIconByTerm crushed!")  


def getQuot():
    try:
        response = get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        if(response.status_code==200):
            response = (response.content).decode("utf-8")
            js = json.loads(response)
            return js['quoteText']
    except(error):
        print("getQuot crushed!")  

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
    except(error):
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