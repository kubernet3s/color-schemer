# views.py
from flask import render_template
import asyncio
from app import app, mongo

@app.route('/')
def index():
    paints = mongo.db.acryllicpaints.list
    test = "I'm a test variable"
    return render_template('index.html', paints = paints, test = test)

@app.route('/about')
def about():
    return render_template('about.html')