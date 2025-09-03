import psycopg2
from psycopg2 import Error
import os
from typing import Optional, List, Tuple

class DatabaseManager:
    def __init__(self, host='localhost', database='mydb', user='postgres', password='123', port=5004):
        self.host = host
        self.database = database
        self.user = user
        self.password = password
        self.port = port
        self.connection = None
        
    def connect(self):
        """Establish connection to PostgreSQL database"""
        try:
            self.connection = psycopg2.connect(
                host=self.host,
                database=self.database,
                user=self.user,
                password=self.password,
                port=self.port
            )
            print("Successfully connected to PostgreSQL database")
            return True
        except Error as e:
            print(f"Error connecting to PostgreSQL: {e}")
            return False
    
    def disconnect(self):
        """Close database connection"""
        if self.connection:
            self.connection.close()
            print("Database connection closed")
    
    def create_table_if_not_exists(self):
        """Create the models table if it doesn't exist"""
        try:
            cursor = self.connection.cursor()
            create_table_query = """
            CREATE TABLE IF NOT EXISTS models (
                id SERIAL PRIMARY KEY,
                modelname VARCHAR(255) NOT NULL,
                envname VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            """
            cursor.execute(create_table_query)
            self.connection.commit()
            cursor.close()
            print("Table 'models' is ready")
        except Error as e:
            print(f"Error creating table: {e}")
    
    def add_model_data(self, modelname: str, envname: str) -> bool:
        """
        Add a new model entry to the database
        
        Args:
            modelname: Name of the model
            envname: Name of the environment
            
        Returns:
            bool: True if successful, False otherwise
        """
        try:
            cursor = self.connection.cursor()
            insert_query = """
            INSERT INTO models (modelname, envname) 
            VALUES (%s, %s)
            """
            cursor.execute(insert_query, (modelname, envname))
            self.connection.commit()
            cursor.close()
            print(f"Successfully added model: {modelname} with environment: {envname}")
            return True
        except Error as e:
            print(f"Error adding model data: {e}")
            return False
    
    def get_envname_by_modelname(self, modelname: str) -> Optional[str]:
        """
        Retrieve environment name by model name
        
        Args:
            modelname: Name of the model to search for
            
        Returns:
            str: Environment name if found, None otherwise
        """
        try:
            cursor = self.connection.cursor()
            select_query = """
            SELECT envname FROM models 
            WHERE modelname = %s
            """
            cursor.execute(select_query, (modelname,))
            result = cursor.fetchone()
            cursor.close()
            
            if result:
                print(f"Found environment '{result[0]}' for model '{modelname}'")
                return result[0]
            else:
                print(f"No environment found for model '{modelname}'")
                return None
        except Error as e:
            print(f"Error retrieving environment: {e}")
            return None
    
    def get_all_models(self) -> List[Tuple[str, str]]:
        """
        Retrieve all model entries
        
        Returns:
            List[Tuple[str, str]]: List of (modelname, envname) tuples
        """
        try:
            cursor = self.connection.cursor()
            select_query = """
            SELECT modelname, envname FROM models 
            ORDER BY created_at DESC
            """
            cursor.execute(select_query)
            results = cursor.fetchall()
            cursor.close()
            
            print(f"Retrieved {len(results)} model entries")
            return results
        except Error as e:
            print(f"Error retrieving all models: {e}")
            return []
    
    def delete_model(self, modelname: str) -> bool:
        """
        Delete a model entry by model name
        
        Args:
            modelname: Name of the model to delete
            
        Returns:
            bool: True if successful, False otherwise
        """
        try:
            cursor = self.connection.cursor()
            delete_query = """
            DELETE FROM models 
            WHERE modelname = %s
            """
            cursor.execute(delete_query, (modelname,))
            self.connection.commit()
            cursor.close()
            
            if cursor.rowcount > 0:
                print(f"Successfully deleted model: {modelname}")
                return True
            else:
                print(f"No model found to delete: {modelname}")
                return False
        except Error as e:
            print(f"Error deleting model: {e}")
            return False

def main():
    """Example usage of the DatabaseManager"""
    # Initialize database manager
    db = DatabaseManager()
    
    # Connect to database
    if not db.connect():
        return
    
    # Create table if it doesn't exist
    db.create_table_if_not_exists()
    
    # Example operations
    print("\n=== Adding Model Data ===")
    db.add_model_data("model1", "MiniGrid-BlockedUnlockPickup-v0")
    db.add_model_data("model2", "MiniGrid-Empty-8x8-v0")
    db.add_model_data("model3", "MiniGrid-FourRooms-v0")
    
    print("\n=== Retrieving Environment by Model Name ===")
    env1 = db.get_envname_by_modelname("model1")
    env2 = db.get_envname_by_modelname("model2")
    env3 = db.get_envname_by_modelname("nonexistent")
    
    print(f"Environment for model1: {env1}")
    print(f"Environment for model2: {env2}")
    print(f"Environment for nonexistent: {env3}")
    
    print("\n=== Retrieving All Models ===")
    all_models = db.get_all_models()
    for modelname, envname in all_models:
        print(f"Model: {modelname}, Environment: {envname}")
    
    print("\n=== Deleting a Model ===")
    db.delete_model("model3")
    
    print("\n=== Final State ===")
    all_models = db.get_all_models()
    for modelname, envname in all_models:
        print(f"Model: {modelname}, Environment: {envname}")
    
    # Disconnect from database
    db.disconnect()

if __name__ == "__main__":
    main()
