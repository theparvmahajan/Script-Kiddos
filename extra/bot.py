"""
This agent writes a greeting in the logs on startup.
"""

from uagents import Agent, Context

agent = Agent()

@agent.on_event("startup")
async def say_hello(ctx: Context):
    """Logs hello message on startup"""
    ctx.logger.info(f"Hello, I'm an agent and my address is {ctx.agent.address}.")

if __name__ == "__main__":
    agent.run()
