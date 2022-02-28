from flask import Flask, render_template

app = Flask(__name__)

# CodeWord accepts only GET requests, and returns only a single web page and
# its JavaScript dependenies to play the game.
@app.route('/')
def index():
    return render_template('index.html')
