from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
DB_NAME = "/home/kentanto65/web-app-game/instance/deathgamecharacters.db"

def init_game():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "ye atomic's pretty good"
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)

    from .views import head
    app.register_blueprint(head, url_prefix='/')

    return app
