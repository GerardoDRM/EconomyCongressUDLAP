from flask import Flask
from flask_restful import Api
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask("congress")
app.config['SECRET_KEY'] = ""
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 587
# app.config['MAIL_USE_SSL'] = False
# app.config['MAIL_USE_TLS'] = True
# app.config['MAIL_USERNAME'] = ''
# app.config['MAIL_PASSWORD'] = ''
api = Api(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
# mail=Mail(app)

import views
