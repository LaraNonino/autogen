"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7247],{83622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=t(85893),s=t(11151);const o={custom_edit_url:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_guidance.ipynb",description:"Constrained responses via guidance.",source_notebook:"/notebook/agentchat_guidance.ipynb",tags:["guidance","integration","JSON"],title:"Using Guidance with AutoGen"},i="Using Guidance with AutoGen",r={id:"notebooks/agentchat_guidance",title:"Using Guidance with AutoGen",description:"Constrained responses via guidance.",source:"@site/docs/notebooks/agentchat_guidance.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_guidance",permalink:"/autogen/docs/notebooks/agentchat_guidance",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_guidance.ipynb",tags:[{label:"guidance",permalink:"/autogen/docs/tags/guidance"},{label:"integration",permalink:"/autogen/docs/tags/integration"},{label:"JSON",permalink:"/autogen/docs/tags/json"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_guidance.ipynb",description:"Constrained responses via guidance.",source_notebook:"/notebook/agentchat_guidance.ipynb",tags:["guidance","integration","JSON"],title:"Using Guidance with AutoGen"},sidebar:"notebooksSidebar",previous:{title:"Group Chat with Coder and Visualization Critic",permalink:"/autogen/docs/notebooks/agentchat_groupchat_vis"},next:{title:"Auto Generated Agent Chat: Task Solving with Code Generation, Execution, Debugging & Human Feedback",permalink:"/autogen/docs/notebooks/agentchat_human_feedback"}},c={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"using-guidance-with-autogen",children:"Using Guidance with AutoGen"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://colab.research.google.com/github/autogenhub/autogen/blob/main/notebook/agentchat_guidance.ipynb",children:(0,a.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/autogenhub/autogen/blob/main/notebook/agentchat_guidance.ipynb",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsx)(n.p,{children:"This notebook shows how Guidance can be used to enable structured\nresponses from AutoGen agents. In particular, this notebook focuses on\ncreating agents that always output a valid code block or valid json\nobject."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import re\n\nfrom guidance import assistant, gen, models, system, user\nfrom pydantic import BaseModel\n\nfrom autogen import Agent, AssistantAgent, UserProxyAgent, config_list_from_json\n\nllm_config = config_list_from_json("OAI_CONFIG_LIST")[0]  # use the first config\ngpt = models.OpenAI("gpt-4", api_key=llm_config.get("api_key"))\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The example below uses guidance to create a ",(0,a.jsx)(n.code,{children:"guidance_coder"})," agent that\nonly responds with valid code blocks."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def is_valid_code_block(code):\n    pattern = r"```[\\w\\s]*\\n([\\s\\S]*?)\\n```"\n    match = re.search(pattern, code)\n    if match:\n        return True\n    else:\n        return False\n\n\ndef generate_structured_response(recipient, messages, sender, config):\n    gpt = models.OpenAI("gpt-4", api_key=llm_config.get("api_key"), echo=False)\n\n    # populate the recipient with the messages from the history\n    with system():\n        lm = gpt + recipient.system_message\n\n    for message in messages:\n        if message.get("role") == "user":\n            with user():\n                lm += message.get("content")\n        else:\n            with assistant():\n                lm += message.get("content")\n\n    # generate a new response and store it\n    with assistant():\n        lm += gen(name="initial_response")\n    # ask the agent to reflect on the nature of the response and store it\n    with user():\n        lm += "Does the very last response from you contain code? Respond with yes or no."\n    with assistant():\n        lm += gen(name="contains_code")\n    # if the response contains code, ask the agent to generate a proper code block\n    if "yes" in lm["contains_code"].lower():\n        with user():\n            lm += "Respond with a single blocks containing the valid code. Valid code blocks start with ```"\n        with assistant():\n            lm += "```" + gen(name="code")\n            response = "```" + lm["code"]\n\n            is_valid = is_valid_code_block(response)\n            if not is_valid:\n                raise ValueError(f"Failed to generate a valid code block\\n {response}")\n\n    # otherwise, just use the initial response\n    else:\n        response = lm["initial_response"]\n\n    return True, response\n\n\nguidance_agent = AssistantAgent("guidance_coder", llm_config=llm_config)\nguidance_agent.register_reply(Agent, generate_structured_response, 1)\nuser_proxy = UserProxyAgent(\n    "user",\n    human_input_mode="TERMINATE",\n    code_execution_config={\n        "work_dir": "coding",\n        "use_docker": False,\n    },  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n    is_termination_msg=lambda msg: "TERMINATE" in msg.get("content"),\n)\nuser_proxy.initiate_chat(guidance_agent, message="Plot and save a chart of nvidia and tsla stock price change YTD.")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"user (to guidance_coder):\n\nPlot and save a chart of nvidia and tsla stock price change YTD.\n\n--------------------------------------------------------------------------------\nguidance_coder (to user):\n\n```python\n# filename: stock_price_change.py\n\nimport pandas as pd\nimport yfinance as yf\nimport matplotlib.pyplot as plt\nfrom datetime import datetime\n\n# Get today's date\ntoday = datetime.today().strftime('%Y-%m-%d')\n\n# Download stock data\nnvda = yf.download('NVDA', start='2022-01-01', end=today)\ntsla = yf.download('TSLA', start='2022-01-01', end=today)\n\n# Calculate percentage change in closing price\nnvda['Pct Change'] = nvda['Close'].pct_change()\ntsla['Pct Change'] = tsla['Close'].pct_change()\n\n# Plot percentage change\nplt.figure(figsize=(14,7))\nplt.plot(nvda['Pct Change'], label='NVDA')\nplt.plot(tsla['Pct Change'], label='TSLA')\nplt.title('Nvidia and Tesla Stock Price Change YTD')\nplt.xlabel('Date')\nplt.ylabel('Percentage Change')\nplt.legend()\nplt.grid(True)\n\n# Save the plot as a PNG file\nplt.savefig('stock_price_change.png')\n```\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\nuser (to guidance_coder):\n\nexitcode: 0 (execution succeeded)\nCode output: \n\n[*********************100%%**********************]  1 of 1 completed\n\n[*********************100%%**********************]  1 of 1 completed\n\n\n--------------------------------------------------------------------------------\nguidance_coder (to user):\n\nGreat! The code executed successfully and the chart of Nvidia and Tesla stock price change Year-To-Date (YTD) has been saved as 'stock_price_change.png' in the current directory. You can open this file to view the chart.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"execute_code was called without specifying a value for use_docker. Since the python docker package is not available, code will be run natively. Note: this fallback behavior is subject to change\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The example below uses Guidance to enable a ",(0,a.jsx)(n.code,{children:"guidance_labeler"})," agent\nthat only responds with a valid JSON that labels a given comment/joke."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'class Response(BaseModel):\n    label: str\n    explanation: str\n\n\nresponse_prompt_instructions = """The label must be a JSON of the format:\n{\n    "label": str,\n    "explanation": str\n}"""\n\n\ndef generate_structured_response(recipient, messages, sender, config):\n    gpt = models.OpenAI("gpt-4", api_key=llm_config.get("api_key"), echo=False)\n\n    # populate the recipient with the messages from the history\n    with system():\n        lm = gpt + recipient.system_message\n\n    for message in messages:\n        if message.get("role") == "user":\n            with user():\n                lm += message.get("content")\n        else:\n            with assistant():\n                lm += message.get("content")\n\n    # generate a new response and store it\n    with assistant():\n        lm += gen(name="initial_response")\n    # ask the agent to reflect on the nature of the response and store it\n    with user():\n        lm += "Does the very last response from you contain JSON object? Respond with yes or no."\n    with assistant():\n        lm += gen(name="contains_json")\n    # if the response contains code, ask the agent to generate a proper code block\n    if "yes" in lm["contains_json"].lower():\n        with user():\n            lm += (\n                "What was that JSON object? Only respond with that valid JSON string. A valid JSON string starts with {"\n            )\n        with assistant():\n            lm += "{" + gen(name="json")\n            response = "{" + lm["json"]\n            # verify that the response is valid json\n            try:\n                response_obj = Response.model_validate_json(response)\n                response = response_obj.model_dump_json()\n            except Exception as e:\n                response = str(e)\n    # otherwise, just use the initial response\n    else:\n        response = lm["initial_response"]\n\n    return True, response\n\n\nguidance_agent = AssistantAgent("guidance_labeler", llm_config=llm_config, system_message="You are a helpful assistant")\nguidance_agent.register_reply(Agent, generate_structured_response, 1)\nuser_proxy = UserProxyAgent("user", human_input_mode="ALWAYS", code_execution_config=False)\nuser_proxy.initiate_chat(\n    guidance_agent,\n    message=f"""\nLabel the TEXT via the following instructions:\n\n{response_prompt_instructions}\n\nTEXT: what did the fish say when it bumped into a wall? Dam!\n\n""",\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'user (to guidance_labeler):\n\n\nLabel the TEXT via the following instructions:\n                         \nThe label must be a JSON of the format:\n{\n    "label": str,\n    "explanation": str\n}\n                         \nTEXT: what did the fish say when it bumped into a wall? Dam!\n\n\n\n--------------------------------------------------------------------------------\nguidance_labeler (to user):\n\n{"label":"Joke","explanation":"The text is a joke, using a play on words where the fish says \'Dam!\' after bumping into a wall, which is a pun on the word \'damn\' and a \'dam\' which is a barrier that stops or restricts the flow of water, often creating a reservoir, and is something a fish might encounter."}\n\n--------------------------------------------------------------------------------\n'})})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(67294);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);