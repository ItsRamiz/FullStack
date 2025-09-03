from database_operations import DatabaseManager

def example_usage():
    """Simple example of how to use the DatabaseManager"""
    
    # Create database manager instance
    db = DatabaseManager(
        host='localhost',
        database='mydb', 
        user='postgres',
        password='123',
        port=5004
    )
    
    # Connect to database
    if not db.connect():
        print("Failed to connect to database")
        return
    
    # Add some model data
    print("Adding model data...")
    db.add_model_data("my_model_1", "MiniGrid-BlockedUnlockPickup-v0")
    db.add_model_data("my_model_2", "MiniGrid-Empty-8x8-v0")
    
    # Retrieve environment by model name
    print("\nRetrieving environment names...")
    env1 = db.get_envname_by_modelname("my_model_1")
    env2 = db.get_envname_by_modelname("my_model_2")
    
    print(f"Model 'my_model_1' uses environment: {env1}")
    print(f"Model 'my_model_2' uses environment: {env2}")
    
    # Get all models
    print("\nAll models in database:")
    all_models = db.get_all_models()
    for modelname, envname in all_models:
        print(f"  {modelname} -> {envname}")
    
    # Clean up
    db.disconnect()

if __name__ == "__main__":
    example_usage()
