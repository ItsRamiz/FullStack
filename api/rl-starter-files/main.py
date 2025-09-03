# backend/app.py
from flask import Flask, jsonify, request
import subprocess, shlex, os, sys

from database_operations import DatabaseManager

app = Flask(__name__)


@app.route("/visualize", methods=["POST"])
def generate():

    data = request.get_json()
    selected_name = data.get('selectedName')
    job_id = data.get('job_id')

    env = db.get_envname_by_modelname("my_model_1")

    cmd = [
        "python", "-m", "scripts.visualize",
        "--env", env,
        "--model", selected_name,
        "--gif" , job_id
    ]

    print(cmd)

    result = subprocess.run(
        cmd,
        capture_output=True,
        text=True,
        check=True
    )

    print("Finished Job ID:", job_id)
    
    return jsonify({"gifUrl": "your_generated_gif_url"})

@app.route("/refresh", methods=["GET"])
def refresh():
    base_path = "./storage"

    if not os.path.exists(base_path):
        return jsonify({"names": []})

    dir_names = [
        name for name in os.listdir(base_path)
        if os.path.isdir(os.path.join(base_path, name))
    ]

    return jsonify({"names": dir_names}) 


@app.route("/run", methods=["POST"])
def run_script():
    try:
        # Get JSON payload from frontend
        params = request.get_json(force=True)

        print("Received Job ID:", params.get("job_id"))

        # Default command
        base_cmd = [
            "python", "-m", "scripts.train",
            "--algo", "ppo",
            "--env", "MiniGrid-DoorKey-5x5-v0",
            "--model", "DoorKey",
            "--save-interval", "10",
        ]


        model_val = params.get("modelName")
        if model_val:
            try:
                i = base_cmd.index("--model")
                base_cmd[i + 1] = str(model_val)
            except ValueError:
                base_cmd.extend(["--model", str(model_val)])
        # ---------------------------------------

        # Map JSON keys to CLI args
        param_map = {
            "epochs": "--epochs",
            "framesPerProcess": "--frames",   # direct mapping (keep as you had)
            "learningRate": "--lr",
            "entropyCoefficient": "--entropy-coef",
            "maxGradientNorm": "--max-grad-norm",
            "batchSize": "--batch-size",
            "discount": "--discount",
            "gaeLambda": "--gae-lambda",
            "valueLossCoefficient": "--value-loss-coef",
        }

        # Add extra params dynamically
        for key, arg_name in param_map.items():
            if key in params and params[key] is not None:
                base_cmd.extend([arg_name, str(params[key])])

        print("Running command:", base_cmd)

        # Run the script
        result = subprocess.run(base_cmd)

        print("Finished Job ID:", job_id)

        return jsonify({
            "command": " ".join(shlex.quote(c) for c in base_cmd),
            "output": result.stdout
        })

    except subprocess.CalledProcessError as e:
        return jsonify({
            "command": " ".join(shlex.quote(c) for c in e.cmd),
            "error": e.stderr
        }), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":

    db = DatabaseManager(
        host='localhost',
        database='mydb',
        user='postgres',
        password='123',
        port=5004
    )

    if not db.connect():
        sys.exit(1)

    app.run(host="0.0.0.0", port=5002)
