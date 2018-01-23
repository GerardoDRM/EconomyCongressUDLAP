from flask import Flask
from flask_cors import CORS
from flask_mail import Mail, Message

app = Flask("congress")
app.config['SECRET_KEY'] = "congress"
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = ''
app.config['MAIL_PASSWORD'] = ''
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
mail=Mail(app)

import views
