from setuptools import setup

setup(
    name='congress',
    packages=['congress'],
    include_package_data=True,
    install_requires=[
        'flask',
        'flask-cors',
        'Flask-Mail',
        'pyqrcode',
        'pypng'
    ],
)
