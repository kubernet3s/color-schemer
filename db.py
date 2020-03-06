import pymongo
from pymongo import MongoClient

cluster =  MongoClient("mongodb+srv://admin-db:g9LdLMiYf5mwvoDl@cluster0-ioxp7.mongodb.net/test?retryWrites=true&w=majorityp")

db = cluster["color-schemer"]
collection = db["acryllic-paints"]

