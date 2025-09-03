import gymnasium as gym
import minigrid  # required for MiniGrid environments

def make_env(env_key: str, seed: int | None = None, render_mode: str | None = None):
    """
    Create and return a Gymnasium environment.
    Assumes env_key is valid (e.g., 'MiniGrid-BlockedUnlockPickup-v0').
    """
    env = gym.make(env_key, render_mode=render_mode)
    env.reset(seed=seed)
    return env
