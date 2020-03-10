import pymongo
from pymongo import MongoClient
import json
from flask import Flask
from flask_restful import Api, Resource, reqparse
import random

cluster =  MongoClient("mongodb+srv://admin-db:g9LdLMiYf5mwvoDl@cluster0-ioxp7.mongodb.net/test?retryWrites=true&w=majorityp")

db = cluster["color-schemer"]
collection = db["acryllic-paints"]

with open('/Users/mukkan/Desktop/personal_projects/color-schemer/testscrape/paints.json') as f:
    data = json.load(f)

class AcryllicPaint(Resource):

    def get(self, id):
        for paint in collection:
            if paint["_id"] == id:
                return paint, 200
            return "paint not found", 400

    print(get(collection, 1))