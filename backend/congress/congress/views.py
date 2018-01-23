from congress import app, api
from flask import jsonify, request, render_template
from flask_cors import cross_origin
from flask_mail import Message
import pyqrcode

@app.route('/api/qr', methods=['POST'])
def qr_register():
    # Get data from form
    # Create QR code
    qr = pyqrcode.create("Hello")
    qr.png('%s.png' % str(uuid.uuid4())
    # Send mail
    # Return ack
    return jsonify({"status":200})
