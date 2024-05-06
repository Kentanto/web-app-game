import os
import shutil
from datetime import datetime

DB_NAME = "/home/kentanto65/web-app-game/instance/deathgamecharacters.db"

def backup_database():
    backups_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'backups_db')
    db_file_path = DB_NAME

    if not os.path.exists(backups_dir):
        os.makedirs(backups_dir)

    timestamp = datetime.now().strftime('%Y-%m-%d_%H')
    backup_file_name = f'databackup_{timestamp}.db'
    backup_file_path = os.path.join(backups_dir, backup_file_name)

    shutil.copy(db_file_path, backup_file_path)

    print(f"Database backed up to: {backup_file_path}")

if __name__ == "__main__":
    backup_database()