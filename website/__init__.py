<<<<<<< HEAD

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
>>>>>>> c80a2ac5083a0922960d4c0e1125b693a1dba088
