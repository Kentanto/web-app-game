<<<<<<< HEAD
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
=======
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
DB_NAME = "/home/kentanto65/web-app-game/instance/deathgamecharacters.db"

def init_game():
    game = Flask(__name__)
    game.config["SECRET_KEY"] = "ye atomic's pretty good"
    game.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(game)
    
    from .views import head
    game.register_blueprint(head, url_prefix='/')
        
    return game
>>>>>>> 04435538c6d4ea0b67cd0cb0ac646b380f3dcf40
