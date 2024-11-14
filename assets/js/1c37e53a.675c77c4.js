"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[845],{66986:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=t(85893),s=t(11151);const i={custom_edit_url:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_oai_assistant_function_call.ipynb",description:"This Jupyter Notebook demonstrates how to leverage OSS Insight (Open Source Software Insight) for advanced GitHub data analysis by defining `Function calls` in AutoGen for the OpenAI Assistant.",source_notebook:"/notebook/agentchat_oai_assistant_function_call.ipynb",tags:["OpenAI Assistant","tool/function"],title:"Chat with OpenAI Assistant using function call in AutoGen: OSS Insights for Advanced GitHub Data Analysis"},a="Chat with OpenAI Assistant using function call in AutoGen: OSS Insights for Advanced GitHub Data Analysis",r={id:"notebooks/agentchat_oai_assistant_function_call",title:"Chat with OpenAI Assistant using function call in AutoGen: OSS Insights for Advanced GitHub Data Analysis",description:"This Jupyter Notebook demonstrates how to leverage OSS Insight (Open Source Software Insight) for advanced GitHub data analysis by defining `Function calls` in AutoGen for the OpenAI Assistant.",source:"@site/docs/notebooks/agentchat_oai_assistant_function_call.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_oai_assistant_function_call",permalink:"/autogen/docs/notebooks/agentchat_oai_assistant_function_call",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_oai_assistant_function_call.ipynb",tags:[{label:"OpenAI Assistant",permalink:"/autogen/docs/tags/open-ai-assistant"},{label:"tool/function",permalink:"/autogen/docs/tags/tool-function"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_oai_assistant_function_call.ipynb",description:"This Jupyter Notebook demonstrates how to leverage OSS Insight (Open Source Software Insight) for advanced GitHub data analysis by defining `Function calls` in AutoGen for the OpenAI Assistant.",source_notebook:"/notebook/agentchat_oai_assistant_function_call.ipynb",tags:["OpenAI Assistant","tool/function"],title:"Chat with OpenAI Assistant using function call in AutoGen: OSS Insights for Advanced GitHub Data Analysis"},sidebar:"notebooksSidebar",previous:{title:"OptiGuide with Nested Chats in AutoGen",permalink:"/autogen/docs/notebooks/agentchat_nestedchat_optiguide"},next:{title:"Auto Generated Agent Chat: Group Chat with GPTAssistantAgent",permalink:"/autogen/docs/notebooks/agentchat_oai_assistant_groupchat"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Function Schema and Implementation",id:"function-schema-and-implementation",level:2},{value:"Defining an OpenAI Assistant Agent in AutoGen",id:"defining-an-openai-assistant-agent-in-autogen",level:2},{value:"Fetching GitHub Insight Data using Function Call",id:"fetching-github-insight-data-using-function-call",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"chat-with-openai-assistant-using-function-call-in-autogen-oss-insights-for-advanced-github-data-analysis",children:"Chat with OpenAI Assistant using function call in AutoGen: OSS Insights for Advanced GitHub Data Analysis"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://colab.research.google.com/github/autogenhub/autogen/blob/main/notebook/agentchat_oai_assistant_function_call.ipynb",children:(0,o.jsx)(e.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(e.a,{href:"https://github.com/autogenhub/autogen/blob/main/notebook/agentchat_oai_assistant_function_call.ipynb",children:(0,o.jsx)(e.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsxs)(e.p,{children:["This Jupyter Notebook demonstrates how to leverage OSS Insight (Open\nSource Software Insight) for advanced GitHub data analysis by defining\n",(0,o.jsx)(e.code,{children:"Function calls"})," in AutoGen for the OpenAI Assistant."]}),"\n",(0,o.jsx)(e.p,{children:"The notebook is structured into four main sections:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Function Schema and Implementation"}),"\n",(0,o.jsx)(e.li,{children:"Defining an OpenAI Assistant Agent in AutoGen"}),"\n",(0,o.jsx)(e.li,{children:"Fetching GitHub Insight Data using Function Call"}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(e.p,{children:["AutoGen requires ",(0,o.jsx)(e.code,{children:"Python>=3.8"}),". To run this notebook example, please\ninstall:"]}),"\n",(0,o.jsxs)(e.admonition,{title:"Requirements",type:"info",children:[(0,o.jsxs)(e.p,{children:["Install ",(0,o.jsx)(e.code,{children:"pyautogen"}),":"]}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"pip install pyautogen\n"})}),(0,o.jsxs)(e.p,{children:["For more information, please refer to the ",(0,o.jsx)(e.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'%%capture --no-stderr\n# %pip install "pyautogen>=0.2.3"\n'})}),"\n",(0,o.jsx)(e.h2,{id:"function-schema-and-implementation",children:"Function Schema and Implementation"}),"\n",(0,o.jsx)(e.p,{children:"This section provides the function schema definition and their\nimplementation details. These functions are tailored to fetch and\nprocess data from GitHub, utilizing OSS Insight\u2019s capabilities."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:"import logging\nimport os\n\nfrom autogen import UserProxyAgent, config_list_from_json\nfrom autogen.agentchat.contrib.gpt_assistant_agent import GPTAssistantAgent\n\nlogger = logging.getLogger(__name__)\nlogger.setLevel(logging.WARNING)\n\nossinsight_api_schema = {\n    \"name\": \"ossinsight_data_api\",\n    \"parameters\": {\n        \"type\": \"object\",\n        \"properties\": {\n            \"question\": {\n                \"type\": \"string\",\n                \"description\": (\n                    \"Enter your GitHub data question in the form of a clear and specific question to ensure the returned data is accurate and valuable. \"\n                    \"For optimal results, specify the desired format for the data table in your request.\"\n                ),\n            }\n        },\n        \"required\": [\"question\"],\n    },\n    \"description\": \"This is an API endpoint allowing users (analysts) to input question about GitHub in text format to retrieve the related and structured data.\",\n}\n\n\ndef get_ossinsight(question):\n    \"\"\"\n    [Mock] Retrieve the top 10 developers with the most followers on GitHub.\n    \"\"\"\n    report_components = [\n        f\"Question: {question}\",\n        \"SQL: SELECT `login` AS `user_login`, `followers` AS `followers` FROM `github_users` ORDER BY `followers` DESC LIMIT 10\",\n        \"\"\"Results:\n  {'followers': 166730, 'user_login': 'torvalds'}\n  {'followers': 86239, 'user_login': 'yyx990803'}\n  {'followers': 77611, 'user_login': 'gaearon'}\n  {'followers': 72668, 'user_login': 'ruanyf'}\n  {'followers': 65415, 'user_login': 'JakeWharton'}\n  {'followers': 60972, 'user_login': 'peng-zhihui'}\n  {'followers': 58172, 'user_login': 'bradtraversy'}\n  {'followers': 52143, 'user_login': 'gustavoguanabara'}\n  {'followers': 51542, 'user_login': 'sindresorhus'}\n  {'followers': 49621, 'user_login': 'tj'}\"\"\",\n    ]\n    return \"\\n\" + \"\\n\\n\".join(report_components) + \"\\n\"\n"})}),"\n",(0,o.jsx)(e.h2,{id:"defining-an-openai-assistant-agent-in-autogen",children:"Defining an OpenAI Assistant Agent in AutoGen"}),"\n",(0,o.jsx)(e.p,{children:"Here, we explore how to define an OpenAI Assistant Agent within the\nAutoGen. This includes setting up the agent to make use of the\npreviously defined function calls for data retrieval and analysis."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'assistant_id = os.environ.get("ASSISTANT_ID", None)\nconfig_list = config_list_from_json("OAI_CONFIG_LIST")\nllm_config = {\n    "config_list": config_list,\n}\nassistant_config = {\n    "assistant_id": assistant_id,\n    "tools": [\n        {\n            "type": "function",\n            "function": ossinsight_api_schema,\n        }\n    ],\n}\n\noss_analyst = GPTAssistantAgent(\n    name="OSS Analyst",\n    instructions=(\n        "Hello, Open Source Project Analyst. You\'ll conduct comprehensive evaluations of open source projects or organizations on the GitHub platform, "\n        "analyzing project trajectories, contributor engagements, open source trends, and other vital parameters. "\n        "Please carefully read the context of the conversation to identify the current analysis question or problem that needs addressing."\n    ),\n    llm_config=llm_config,\n    assistant_config=assistant_config,\n    verbose=True,\n)\noss_analyst.register_function(\n    function_map={\n        "ossinsight_data_api": get_ossinsight,\n    }\n)\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"OpenAI client config of GPTAssistantAgent(OSS Analyst) - model: gpt-4-turbo-preview\nGPT Assistant only supports one OpenAI client. Using the first client in the list.\nNo matching assistant found, creating a new assistant\n"})}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["Learn more about configuring LLMs for agents ",(0,o.jsx)(e.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]})}),"\n",(0,o.jsx)(e.h2,{id:"fetching-github-insight-data-using-function-call",children:"Fetching GitHub Insight Data using Function Call"}),"\n",(0,o.jsx)(e.p,{children:"This part of the notebook demonstrates the practical application of the\ndefined functions and the OpenAI Assistant Agent in fetching and\ninterpreting GitHub Insight data."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'user_proxy = UserProxyAgent(\n    name="user_proxy",\n    code_execution_config={\n        "work_dir": "coding",\n        "use_docker": False,\n    },  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n    is_termination_msg=lambda msg: "TERMINATE" in msg["content"],\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=1,\n)\n\nuser_proxy.initiate_chat(oss_analyst, message="Top 10 developers with the most followers")\noss_analyst.delete_assistant()\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"user_proxy (to OSS Analyst):\n\nTop 10 developers with the most followers\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION ossinsight_data_api...\n\nInput arguments: {'question': 'Top 10 developers with the most followers'}\nOutput:\n\nQuestion: Top 10 developers with the most followers\n\nSQL: SELECT `login` AS `user_login`, `followers` AS `followers` FROM `github_users` ORDER BY `followers` DESC LIMIT 10\n\nResults:\n  {'followers': 166730, 'user_login': 'torvalds'}\n  {'followers': 86239, 'user_login': 'yyx990803'}\n  {'followers': 77611, 'user_login': 'gaearon'}\n  {'followers': 72668, 'user_login': 'ruanyf'}\n  {'followers': 65415, 'user_login': 'JakeWharton'}\n  {'followers': 60972, 'user_login': 'peng-zhihui'}\n  {'followers': 58172, 'user_login': 'bradtraversy'}\n  {'followers': 52143, 'user_login': 'gustavoguanabara'}\n  {'followers': 51542, 'user_login': 'sindresorhus'}\n  {'followers': 49621, 'user_login': 'tj'}\n\nOSS Analyst (to user_proxy):\n\nThe top 10 developers with the most followers on GitHub are:\n\n1. **Linus Torvalds** (`torvalds`) with 166,730 followers\n2. **Evan You** (`yyx990803`) with 86,239 followers\n3. **Dan Abramov** (`gaearon`) with 77,611 followers\n4. **Ruan YiFeng** (`ruanyf`) with 72,668 followers\n5. **Jake Wharton** (`JakeWharton`) with 65,415 followers\n6. **Peng Zhihui** (`peng-zhihui`) with 60,972 followers\n7. **Brad Traversy** (`bradtraversy`) with 58,172 followers\n8. **Gustavo Guanabara** (`gustavoguanabara`) with 52,143 followers\n9. **Sindre Sorhus** (`sindresorhus`) with 51,542 followers\n10. **TJ Holowaychuk** (`tj`) with 49,621 followers\n\n\n--------------------------------------------------------------------------------\nuser_proxy (to OSS Analyst):\n\n\n\n--------------------------------------------------------------------------------\nOSS Analyst (to user_proxy):\n\nIt looks like there is no question or prompt for me to respond to. Could you please provide more details or ask a question that you would like assistance with?\n\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"Permanently deleting assistant...\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>a});var o=t(67294);const s={},i=o.createContext(s);function a(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);