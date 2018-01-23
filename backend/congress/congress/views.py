from congress import app, mail
from flask import jsonify, request, render_template
from flask_cors import cross_origin
from flask_mail import Message
import pyqrcode
import uuid

@app.route('/api/qr', methods=['POST'])
def qr_register():
    status = 500
    if request.method == 'POST':
        # Get data from form
        student = {
            "id": request.form["id"],
            "name": request.form['name'],
            "email": request.form["email"],
            "career": request.form['career']
        }
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
