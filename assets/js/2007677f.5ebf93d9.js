"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3799],{2231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var s=t(85893),a=t(11151);const o={custom_edit_url:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_two_users.ipynb",description:"Involve multiple human users via function calls and nested chat.",source_notebook:"/notebook/agentchat_two_users.ipynb",tags:["human","tool/function"],title:"Auto Generated Agent Chat: Collaborative Task Solving with Multiple Agents and Human Users"},i="Auto Generated Agent Chat: Collaborative Task Solving with Multiple Agents and Human Users",r={id:"notebooks/agentchat_two_users",title:"Auto Generated Agent Chat: Collaborative Task Solving with Multiple Agents and Human Users",description:"Involve multiple human users via function calls and nested chat.",source:"@site/docs/notebooks/agentchat_two_users.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_two_users",permalink:"/autogen/docs/notebooks/agentchat_two_users",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_two_users.ipynb",tags:[{label:"human",permalink:"/autogen/docs/tags/human"},{label:"tool/function",permalink:"/autogen/docs/tags/tool-function"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_two_users.ipynb",description:"Involve multiple human users via function calls and nested chat.",source_notebook:"/notebook/agentchat_two_users.ipynb",tags:["human","tool/function"],title:"Auto Generated Agent Chat: Collaborative Task Solving with Multiple Agents and Human Users"},sidebar:"notebooksSidebar",previous:{title:"Preprocessing Chat History with `TransformMessages`",permalink:"/autogen/docs/notebooks/agentchat_transform_messages"},next:{title:"Translating Video audio using Whisper and GPT-3.5-turbo",permalink:"/autogen/docs/notebooks/agentchat_video_transcript_translate_with_whisper"}},l={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Construct Agents",id:"construct-agents",level:2},{value:"Perform a task",id:"perform-a-task",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"auto-generated-agent-chat-collaborative-task-solving-with-multiple-agents-and-human-users",children:"Auto Generated Agent Chat: Collaborative Task Solving with Multiple Agents and Human Users"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://colab.research.google.com/github/autogenhub/autogen/blob/main/notebook/agentchat_two_users.ipynb",children:(0,s.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/autogenhub/autogen/blob/main/notebook/agentchat_two_users.ipynb",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,s.jsxs)(n.p,{children:["AutoGen offers conversable agents powered by LLM, tool, or human, which\ncan be used to perform tasks collectively via automated chat. This\nframework allows tool use and human participation through multi-agent\nconversation. Please find documentation about this feature\n",(0,s.jsx)(n.a,{href:"https://autogenhub.github.io/autogen/docs/Use-Cases/agent_chat",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In this notebook, we demonstrate an application involving multiple\nagents and human users to work together and accomplish a task.\n",(0,s.jsx)(n.code,{children:"AssistantAgent"})," is an LLM-based agent that can write Python code (in a\nPython coding block) for a user to execute for a given task.\n",(0,s.jsx)(n.code,{children:"UserProxyAgent"})," is an agent which serves as a proxy for a user to\nexecute the code written by ",(0,s.jsx)(n.code,{children:"AssistantAgent"}),". We create multiple\n",(0,s.jsx)(n.code,{children:"UserProxyAgent"})," instances that can represent different human users."]}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.p,{children:["AutoGen requires ",(0,s.jsx)(n.code,{children:"Python>=3.8"}),". To run this notebook example, please\ninstall:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install autogen\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# %pip install "autogen"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["The\n",(0,s.jsx)(n.a,{href:"https://autogenhub.github.io/autogen/docs/reference/oai/openai_utils#config_list_from_json",children:(0,s.jsx)(n.code,{children:"config_list_from_json"})}),"\nfunction loads a list of configurations from an environment variable or\na json file."]}),"\n",(0,s.jsx)(n.p,{children:"It first looks for an environment variable of a specified name\n(\u201cOAI_CONFIG_LIST\u201d in this example), which needs to be a valid json\nstring. If that variable is not found, it looks for a json file with the\nsame name. It filters the configs by models (you can filter by other\nkeys as well)."}),"\n",(0,s.jsx)(n.p,{children:"The json looks like the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "model": "gpt-4",\n        "api_key": "<your OpenAI API key here>"\n    },\n    {\n        "model": "gpt-4",\n        "api_key": "<your Azure OpenAI API key here>",\n        "base_url": "<your Azure OpenAI API base here>",\n        "api_type": "azure",\n        "api_version": "2024-02-01"\n    },\n    {\n        "model": "gpt-4-32k",\n        "api_key": "<your Azure OpenAI API key here>",\n        "base_url": "<your Azure OpenAI API base here>",\n        "api_type": "azure",\n        "api_version": "2024-02-01"\n    }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can set the value of config_list in any way you prefer. Please refer\nto this\n",(0,s.jsx)(n.a,{href:"https://github.com/autogenhub/autogen/blob/main/website/docs/topics/llm_configuration.ipynb",children:"notebook"}),"\nfor full code examples of the different methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import autogen\n\nconfig_list = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={\n        "model": ["gpt-4", "gpt4", "gpt-4-32k", "gpt-4-32k-0314", "gpt-4-32k-v0314"],\n    },\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"construct-agents",children:"Construct Agents"}),"\n",(0,s.jsxs)(n.p,{children:["We define ",(0,s.jsx)(n.code,{children:"ask_expert"})," function to start a conversation between two\nagents and return a summary of the result. We construct an assistant\nagent named \u201cassistant_for_expert\u201d and a user proxy agent named\n\u201cexpert\u201d. We specify ",(0,s.jsx)(n.code,{children:"human_input_mode"})," as \u201cALWAYS\u201d in the user proxy\nagent, which will always ask for feedback from the expert user."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def ask_expert(message):\n    assistant_for_expert = autogen.AssistantAgent(\n        name="assistant_for_expert",\n        llm_config={\n            "temperature": 0,\n            "config_list": config_list,\n        },\n    )\n    expert = autogen.UserProxyAgent(\n        name="expert",\n        human_input_mode="ALWAYS",\n        code_execution_config={\n            "work_dir": "expert",\n            "use_docker": False,\n        },  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n    )\n\n    expert.initiate_chat(assistant_for_expert, message=message)\n    expert.stop_reply_at_receive(assistant_for_expert)\n    # expert.human_input_mode, expert.max_consecutive_auto_reply = "NEVER", 0\n    # final message sent from the expert\n    expert.send("summarize the solution and explain the answer in an easy-to-understand way", assistant_for_expert)\n    # return the last message the expert received\n    return expert.last_message()["content"]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We construct another assistant agent named \u201cassistant_for_student\u201d and a\nuser proxy agent named \u201cstudent\u201d. We specify ",(0,s.jsx)(n.code,{children:"human_input_mode"})," as\n\u201cTERMINATE\u201d in the user proxy agent, which will ask for feedback when it\nreceives a \u201cTERMINATE\u201d signal from the assistant agent. We set the\n",(0,s.jsx)(n.code,{children:"functions"})," in ",(0,s.jsx)(n.code,{children:"AssistantAgent"})," and ",(0,s.jsx)(n.code,{children:"function_map"})," in ",(0,s.jsx)(n.code,{children:"UserProxyAgent"}),"\nto use the created ",(0,s.jsx)(n.code,{children:"ask_expert"})," function."]}),"\n",(0,s.jsxs)(n.p,{children:["For simplicity, the ",(0,s.jsx)(n.code,{children:"ask_expert"})," function is defined to run locally. For\nreal applications, the function should run remotely to interact with an\nexpert user."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'assistant_for_student = autogen.AssistantAgent(\n    name="assistant_for_student",\n    system_message="You are a helpful assistant. Reply TERMINATE when the task is done.",\n    llm_config={\n        "timeout": 600,\n        "cache_seed": 42,\n        "config_list": config_list,\n        "temperature": 0,\n        "functions": [\n            {\n                "name": "ask_expert",\n                "description": "ask expert when you can\'t solve the problem satisfactorily.",\n                "parameters": {\n                    "type": "object",\n                    "properties": {\n                        "message": {\n                            "type": "string",\n                            "description": "question to ask expert. Ensure the question includes enough context, such as the code and the execution result. The expert does not know the conversation between you and the user unless you share the conversation with the expert.",\n                        },\n                    },\n                    "required": ["message"],\n                },\n            }\n        ],\n    },\n)\n\nstudent = autogen.UserProxyAgent(\n    name="student",\n    human_input_mode="TERMINATE",\n    max_consecutive_auto_reply=10,\n    code_execution_config={\n        "work_dir": "student",\n        "use_docker": False,\n    },  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n    function_map={"ask_expert": ask_expert},\n)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"perform-a-task",children:"Perform a task"}),"\n",(0,s.jsxs)(n.p,{children:["We invoke the ",(0,s.jsx)(n.code,{children:"initiate_chat()"})," method of the student proxy agent to\nstart the conversation. When you run the cell below, you will be\nprompted to provide feedback after the assistant agent sends a\n\u201cTERMINATE\u201d signal at the end of the message. The conversation will\nfinish if you don\u2019t provide any feedback (by pressing Enter directly).\nBefore the \u201cTERMINATE\u201d signal, the student proxy agent will try to\nexecute the code suggested by the assistant agent on behalf of the user."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# the assistant receives a message from the student, which contains the task description\nstudent.initiate_chat(\n    assistant_for_student,\n    message="""Find $a + b + c$, given that $x+y \\\\neq -1$ and\n\\\\begin{align}\n    ax + by + c & = x + 7,\\\\\n    a + bx + cy & = 2x + 6y,\\\\\n    ay + b + cx & = 4x + y.\n\\\\end{align}.\n""",\n)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"student (to assistant_for_student):\n\nFind $a + b + c$, given that $x+y \\neq -1$ and \n\\begin{align}\n    ax + by + c & = x + 7,\\\n    a + bx + cy & = 2x + 6y,\\\n    ay + b + cx & = 4x + y.\n\\end{align}.\n\n\n--------------------------------------------------------------------------------\nassistant_for_student (to student):\n\nTo find the values of $a$, $b$, and $c$, we need to solve the system of equations. However, the system of equations you provided seems to be incomplete or incorrect. The equations are not properly formatted, and it's unclear how $x$ and $y$ are related to $a$, $b$, and $c$. \n\nCould you please provide the correct system of equations?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nstudent (to assistant_for_student):\n\n\n\n--------------------------------------------------------------------------------\nassistant_for_student (to student):\n\n***** Suggested function Call: ask_expert *****\nArguments: \n{\n  \"message\": \"The user provided a system of equations and asked to find $a + b + c$, given that $x+y \\\\neq -1$ and \\n\\\\begin{align}\\n\\tax + by + c & = x + 7,\\\\\\n\\ta + bx + cy & = 2x + 6y,\\\\\\n\\tay + b + cx & = 4x + y.\\n\\\\end{align}. However, the system of equations seems to be incomplete or incorrectly formatted. How should I proceed?\"\n}\n***********************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION ask_expert...\nexpert (to assistant_for_expert):\n\nThe user provided a system of equations and asked to find $a + b + c$, given that $x+y \\neq -1$ and \n\\begin{align}\n    ax + by + c & = x + 7,\\\n    a + bx + cy & = 2x + 6y,\\\n    ay + b + cx & = 4x + y.\n\\end{align}. However, the system of equations seems to be incomplete or incorrectly formatted. How should I proceed?\n\n--------------------------------------------------------------------------------\nassistant_for_expert (to expert):\n\nTo proceed, we can first try to solve the given system of equations and see if we can find a unique solution for $a$, $b$, and $c$. If we can't find a unique solution, we can then determine if there's any additional information needed or if the system is indeed incomplete or incorrectly formatted.\n\nLet's solve the given system of equations using Python's SymPy library.\n\n--------------------------------------------------------------------------------\nexpert (to assistant_for_expert):\n\nmake sure you simplify the answer\n\n--------------------------------------------------------------------------------\nassistant_for_expert (to expert):\n\nSure, I will simplify the answer. Let's solve the given system of equations using Python's SymPy library and simplify the result.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\nexpert (to assistant_for_expert):\n\n\n\n--------------------------------------------------------------------------------\nassistant_for_expert (to expert):\n\nFirst, let's install the SymPy library if you haven't already. Execute the following command to install it:\n\n```sh\npip install sympy\n```\n\nNow, let's solve the given system of equations using Python's SymPy library and simplify the result.\n\n```python\nfrom sympy import symbols, Eq, solve, simplify\n\na, b, c, x, y = symbols('a b c x y')\n\neq1 = Eq(a * x + b * y + c, x + 7)\neq2 = Eq(a + b * x + c * y, 2 * x + 6 * y)\neq3 = Eq(a * y + b + c * x, 4 * x + y)\n\nsolutions = solve((eq1, eq2, eq3), (a, b, c))\n\nsimplified_solutions = {key: simplify(value) for key, value in solutions.items()}\na_val, b_val, c_val = simplified_solutions[a], simplified_solutions[b], simplified_solutions[c]\nsum_abc = simplify(a_val + b_val + c_val)\n\nprint(f\"a: {a_val}\")\nprint(f\"b: {b_val}\")\nprint(f\"c: {c_val}\")\nprint(f\"a + b + c: {sum_abc}\")\n```\n\nPlease execute the above Python code to solve the system of equations and simplify the result.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is sh)...\n\n>>>>>>>> EXECUTING CODE BLOCK 1 (inferred language is python)...\nexpert (to assistant_for_expert):\n\nexitcode: 0 (execution succeeded)\nCode output: \nDefaulting to user installation because normal site-packages is not writeable\nRequirement already satisfied: sympy in /home/vscode/.local/lib/python3.9/site-packages (1.12)\nRequirement already satisfied: mpmath>=0.19 in /home/vscode/.local/lib/python3.9/site-packages (from sympy) (1.3.0)\n\na: (x**2 - 3*x*y + 2*x + y**2 - y)/(x**2 - x*y - x + y**2 - y + 1)\nb: (2*x**2 - 3*x + y)/(x**2 - x*y - x + y**2 - y + 1)\nc: (4*x**2 - 4*x*y - 6*x + 6*y**2 - 7*y + 7)/(x**2 - x*y - x + y**2 - y + 1)\na + b + c: 7\n\n\n--------------------------------------------------------------------------------\nassistant_for_expert (to expert):\n\nThe given system of equations has been solved and simplified. The result is:\n\n$$\na = \\frac{x^2 - 3xy + 2x + y^2 - y}{x^2 - xy - x + y^2 - y + 1}, \\\\\nb = \\frac{2x^2 - 3x + y}{x^2 - xy - x + y^2 - y + 1}, \\\\\nc = \\frac{4x^2 - 4xy - 6x + 6y^2 - 7y + 7}{x^2 - xy - x + y^2 - y + 1}.\n$$\n\nThe sum $a + b + c$ is equal to $7$. Since we were able to find a unique solution for $a$, $b$, and $c$, the system of equations is complete and correctly formatted.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\nexpert (to assistant_for_expert):\n\n\n\n--------------------------------------------------------------------------------\nassistant_for_expert (to expert):\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\nexpert (to assistant_for_expert):\n\nsummarize the solution and explain the answer in an easy-to-understand way\n\n--------------------------------------------------------------------------------\nassistant_for_expert (to expert):\n\nSure, let me summarize the solution and explain the answer in an easy-to-understand way.\n\nWe were given a system of three equations with three unknowns, $a$, $b$, and $c$. The equations were:\n\n1. $ax + by + c = x + 7$\n2. $a + bx + cy = 2x + 6y$\n3. $ay + b + cx = 4x + y$\n\nWe were asked to find the sum $a + b + c$ given that $x + y \\neq -1$.\n\nWe used Python's SymPy library to solve the system of equations and found the following solutions for $a$, $b$, and $c$:\n\n$$\na = \\frac{x^2 - 3xy + 2x + y^2 - y}{x^2 - xy - x + y^2 - y + 1}, \\\\\nb = \\frac{2x^2 - 3x + y}{x^2 - xy - x + y^2 - y + 1}, \\\\\nc = \\frac{4x^2 - 4xy - 6x + 6y^2 - 7y + 7}{x^2 - xy - x + y^2 - y + 1}.\n$$\n\nThese solutions are expressed in terms of $x$ and $y$. However, we were able to find the sum $a + b + c$ without knowing the values of $x$ and $y$. The sum $a + b + c$ simplifies to $7$.\n\nIn conclusion, the sum $a + b + c$ for the given system of equations is equal to $7$.\n\n--------------------------------------------------------------------------------\nstudent (to assistant_for_student):\n\n***** Response from calling function \"ask_expert\" *****\nSure, let me summarize the solution and explain the answer in an easy-to-understand way.\n\nWe were given a system of three equations with three unknowns, $a$, $b$, and $c$. The equations were:\n\n1. $ax + by + c = x + 7$\n2. $a + bx + cy = 2x + 6y$\n3. $ay + b + cx = 4x + y$\n\nWe were asked to find the sum $a + b + c$ given that $x + y \\neq -1$.\n\nWe used Python's SymPy library to solve the system of equations and found the following solutions for $a$, $b$, and $c$:\n\n$$\na = \\frac{x^2 - 3xy + 2x + y^2 - y}{x^2 - xy - x + y^2 - y + 1}, \\\\\nb = \\frac{2x^2 - 3x + y}{x^2 - xy - x + y^2 - y + 1}, \\\\\nc = \\frac{4x^2 - 4xy - 6x + 6y^2 - 7y + 7}{x^2 - xy - x + y^2 - y + 1}.\n$$\n\nThese solutions are expressed in terms of $x$ and $y$. However, we were able to find the sum $a + b + c$ without knowing the values of $x$ and $y$. The sum $a + b + c$ simplifies to $7$.\n\nIn conclusion, the sum $a + b + c$ for the given system of equations is equal to $7$.\n*******************************************************\n\n--------------------------------------------------------------------------------\nassistant_for_student (to student):\n\nThe solution to the system of equations you provided is:\n\n1. $a = \\frac{x^2 - 3xy + 2x + y^2 - y}{x^2 - xy - x + y^2 - y + 1}$\n2. $b = \\frac{2x^2 - 3x + y}{x^2 - xy - x + y^2 - y + 1}$\n3. $c = \\frac{4x^2 - 4xy - 6x + 6y^2 - 7y + 7}{x^2 - xy - x + y^2 - y + 1}$\n\nThese solutions are expressed in terms of $x$ and $y$. However, we can find the sum $a + b + c$ without knowing the values of $x$ and $y$. The sum $a + b + c$ simplifies to $7$.\n\nSo, the sum $a + b + c$ for the given system of equations is equal to $7$.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nstudent (to assistant_for_student):\n\n\n\n--------------------------------------------------------------------------------\nassistant_for_student (to student):\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When the assistant needs to consult the expert, it suggests a function\ncall to ",(0,s.jsx)(n.code,{children:"ask_expert"}),". When this happens, a line like the following will\nbe displayed:"]}),"\n",(0,s.jsx)(n.p,{children:"***** Suggested function Call: ask_expert *****"})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(67294);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);