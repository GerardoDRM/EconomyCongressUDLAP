from congress import app, mail, api
from flask import jsonify, request, render_template
from flask_cors import cross_origin
from flask_mail import Message
import pyqrcode
import uuid
from flask_restful import Resource, reqparse


class QR(Resource):

    @cross_origin()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=str, required=True)
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('email', type=str, required=True)
        parser.add_argument('career', type=str, required=True)
        parser.add_argument('number', type=str, required=True)
        args = parser.parse_args()

        status = 500

        # Get data from form
        student = {a:args[a] for a in args}

        # Create QR code
        data = '\n'.join(["%s:%s" % (s, student[s]) for s in student])
        qr = pyqrcode.create(data)
        img_name = "images/%s.png" % str(uuid.uuid4())
        qr.png(img_name, scale=6)

        # Send mail
        msg=Message(sender="no-reply@congreso.com",
                    recipients=[student["email"]],
                    html=render_template("confirmation.html",
                    data=student),
                    subject="Congreso de Negocios y Economia")
        with app.open_resource("%s" % img_name) as fp:
            msg.attach("%s" % img_name, "image/png", fp.read())

        mail.send(msg)
        # Return ack
        status=200

        return jsonify({"status": status})


api.add_resource(QR, '/api/qr',
                 endpoint="qr")
