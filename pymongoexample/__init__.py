from flask import Flask
from .extensions import mongo
from .main import main

def create_app(config_obj='pymongoexample.settings'):
    app = Flask(__name__)
    print(config_obj)
    app.config.from_object(config_obj)
    print(app)
    mongo.init_app(app)
    app.register_blueprint(main)

    return app