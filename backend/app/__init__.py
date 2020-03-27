from flask import Flask
from flask_pymongo import PyMongo

# Initialize the app
app = Flask(__name__, instance_relative_config = True)
app.config["MONGO_URI"] = "mongodb+srv://admin-db:g9LdLMiYf5mwvoDl@cluster0-ioxp7.mongodb.net/test?retryWrites=true&w=majorityp"
mongo = PyMongo(app)

# Load the views
from app import views

# Load the config file
app.config.from_object('config')