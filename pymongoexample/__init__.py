from flask import Flask
from .extensions import mongo
from .main import main

def create_app(config_obj='pymongoexample.settings'):
    app = Flask(__name__)

    app.config.from_object(config_obj)

    mongo.init_app(app)
    app.register_blueprint(main)

    return app