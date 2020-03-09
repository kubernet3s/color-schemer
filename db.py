import pymongo
from pymongo import MongoClient
import json

cluster =  MongoClient("mongodb+srv://admin-db:g9LdLMiYf5mwvoDl@cluster0-ioxp7.mongodb.net/test?retryWrites=true&w=majorityp")

db = cluster["color-schemer"]
collection = db["acryllic-paints"]

with open('/Users/mukkan/Desktop/personal_projects/color-schemer/testscrape/paints.json') as f:
    data = json.load(f)

collection.insert(data[0])