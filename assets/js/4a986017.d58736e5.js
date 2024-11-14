"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8231],{14746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=t(85893),i=t(11151);const o={custom_edit_url:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_groupchat_research.ipynb",description:"Perform research using a group chat with a number of specialized agents.",source_notebook:"/notebook/agentchat_groupchat_research.ipynb",tags:["group chat","planning","code generation"],title:"Perform Research with Multi-Agent Group Chat"},r="Perform Research with Multi-Agent Group Chat",s={id:"notebooks/agentchat_groupchat_research",title:"Perform Research with Multi-Agent Group Chat",description:"Perform research using a group chat with a number of specialized agents.",source:"@site/docs/notebooks/agentchat_groupchat_research.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_groupchat_research",permalink:"/autogen/docs/notebooks/agentchat_groupchat_research",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_groupchat_research.ipynb",tags:[{label:"group chat",permalink:"/autogen/docs/tags/group-chat"},{label:"planning",permalink:"/autogen/docs/tags/planning"},{label:"code generation",permalink:"/autogen/docs/tags/code-generation"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/autogenhub/autogen/edit/main/notebook/agentchat_groupchat_research.ipynb",description:"Perform research using a group chat with a number of specialized agents.",source_notebook:"/notebook/agentchat_groupchat_research.ipynb",tags:["group chat","planning","code generation"],title:"Perform Research with Multi-Agent Group Chat"},sidebar:"notebooksSidebar",previous:{title:"FSM - User can input speaker transition constraints",permalink:"/autogen/docs/notebooks/agentchat_groupchat_finite_state_machine"},next:{title:"StateFlow: Build Workflows through State-Oriented Actions",permalink:"/autogen/docs/notebooks/agentchat_groupchat_stateflow"}},c={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Construct Agents",id:"construct-agents",level:2},{value:"Start Chat",id:"start-chat",level:2},{value:"Create Group Chat without Critic for Comparison",id:"create-group-chat-without-critic-for-comparison",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"perform-research-with-multi-agent-group-chat",children:"Perform Research with Multi-Agent Group Chat"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://colab.research.google.com/github/autogenhub/autogen/blob/main/notebook/agentchat_groupchat_research.ipynb",children:(0,a.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/autogenhub/autogen/blob/main/notebook/agentchat_groupchat_research.ipynb",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsxs)(n.p,{children:["AutoGen offers conversable agents powered by LLM, tool, or human, which\ncan be used to perform tasks collectively via automated chat. This\nframework allows tool use and human participation through multi-agent\nconversation. Please find documentation about this feature\n",(0,a.jsx)(n.a,{href:"https://autogenhub.github.io/autogen/docs/Use-Cases/agent_chat",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(n.admonition,{title:"Requirements",type:"info",children:[(0,a.jsxs)(n.p,{children:["Install ",(0,a.jsx)(n.code,{children:"pyautogen"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen\n"})}),(0,a.jsxs)(n.p,{children:["For more information, please refer to the ",(0,a.jsx)(n.a,{href:"/docs/installation/",children:"installation guide"}),"."]})]}),"\n",(0,a.jsx)(n.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,a.jsxs)(n.p,{children:["The\n",(0,a.jsx)(n.a,{href:"https://autogenhub.github.io/autogen/docs/reference/oai/openai_utils#config_list_from_json",children:(0,a.jsx)(n.code,{children:"config_list_from_json"})}),"\nfunction loads a list of configurations from an environment variable or\na json file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import autogen\n\nconfig_list_gpt4 = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={\n        "model": ["gpt-4-32k", "gpt-4-32k-0314", "gpt-4-32k-v0314"],\n    },\n)\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Learn more about configuring LLMs for agents ",(0,a.jsx)(n.a,{href:"/docs/topics/llm_configuration",children:"here"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"construct-agents",children:"Construct Agents"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'gpt4_config = {\n    "cache_seed": 42,  # change the cache_seed for different trials\n    "temperature": 0,\n    "config_list": config_list_gpt4,\n    "timeout": 120,\n}\nuser_proxy = autogen.UserProxyAgent(\n    name="Admin",\n    system_message="A human admin. Interact with the planner to discuss the plan. Plan execution needs to be approved by this admin.",\n    code_execution_config=False,\n)\nengineer = autogen.AssistantAgent(\n    name="Engineer",\n    llm_config=gpt4_config,\n    system_message="""Engineer. You follow an approved plan. You write python/shell code to solve tasks. Wrap the code in a code block that specifies the script type. The user can\'t modify your code. So do not suggest incomplete code which requires others to modify. Don\'t use a code block if it\'s not intended to be executed by the executor.\nDon\'t include multiple code blocks in one response. Do not ask others to copy and paste the result. Check the execution result returned by the executor.\nIf the result indicates there is an error, fix the error and output the code again. Suggest the full code instead of partial code or code changes. If the error can\'t be fixed or if the task is not solved even after the code is executed successfully, analyze the problem, revisit your assumption, collect additional info you need, and think of a different approach to try.\n""",\n)\nscientist = autogen.AssistantAgent(\n    name="Scientist",\n    llm_config=gpt4_config,\n    system_message="""Scientist. You follow an approved plan. You are able to categorize papers after seeing their abstracts printed. You don\'t write code.""",\n)\nplanner = autogen.AssistantAgent(\n    name="Planner",\n    system_message="""Planner. Suggest a plan. Revise the plan based on feedback from admin and critic, until admin approval.\nThe plan may involve an engineer who can write code and a scientist who doesn\'t write code.\nExplain the plan first. Be clear which step is performed by an engineer, and which step is performed by a scientist.\n""",\n    llm_config=gpt4_config,\n)\nexecutor = autogen.UserProxyAgent(\n    name="Executor",\n    system_message="Executor. Execute the code written by the engineer and report the result.",\n    human_input_mode="NEVER",\n    code_execution_config={\n        "last_n_messages": 3,\n        "work_dir": "paper",\n        "use_docker": False,\n    },  # Please set use_docker=True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n)\ncritic = autogen.AssistantAgent(\n    name="Critic",\n    system_message="Critic. Double check plan, claims, code from other agents and provide feedback. Check whether the plan includes adding verifiable info such as source URL.",\n    llm_config=gpt4_config,\n)\ngroupchat = autogen.GroupChat(\n    agents=[user_proxy, engineer, scientist, planner, executor, critic], messages=[], max_round=50\n)\nmanager = autogen.GroupChatManager(groupchat=groupchat, llm_config=gpt4_config)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"start-chat",children:"Start Chat"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'user_proxy.initiate_chat(\n    manager,\n    message="""\nfind papers on LLM applications from arxiv in the last week, create a markdown table of different domains.\n""",\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Admin (to chat_manager):\n\n\nfind papers on LLM applications from arxiv in the last week, create a markdown table of different domains.\n\n\n--------------------------------------------------------------------------------\nPlanner (to chat_manager):\n\nPlan:\n\n1. Engineer: Write a script to scrape the arXiv website for papers related to LLM (Language Model) applications published in the last week. The script should extract the title, authors, abstract, and link to the paper.\n\n2. Scientist: Review the scraped data to identify the different domains in which LLM is applied. This could be based on keywords in the title or abstract, or the scientist's knowledge of the field.\n\n3. Engineer: Modify the script to categorize the papers based on the domains identified by the scientist. The script should output a markdown table with columns for the domain, title, authors, abstract, and link.\n\n4. Scientist: Review the markdown table to ensure the papers are correctly categorized and the information is accurate.\n\n5. Engineer: Make any necessary revisions to the script based on the scientist's feedback.\n\n6. Scientist: Give final approval of the markdown table.\n\n7. Engineer: Submit the final markdown table.\n\n--------------------------------------------------------------------------------\nCritic (to chat_manager):\n\nThe plan seems solid and well-structured. However, it lacks the inclusion of verifiable information such as source URLs. Here's a revised version:\n\n1. Engineer: Write a script to scrape the arXiv website for papers related to LLM (Language Model) applications published in the last week. The script should extract the title, authors, abstract, and link to the paper.\n\n2. Scientist: Review the scraped data to identify the different domains in which LLM is applied. This could be based on keywords in the title or abstract, or the scientist's knowledge of the field.\n\n3. Engineer: Modify the script to categorize the papers based on the domains identified by the scientist. The script should output a markdown table with columns for the domain, title, authors, abstract, and link (source URL).\n\n4. Scientist: Review the markdown table to ensure the papers are correctly categorized and the information is accurate. Check the source URLs to verify the information.\n\n5. Engineer: Make any necessary revisions to the script based on the scientist's feedback.\n\n6. Scientist: Give final approval of the markdown table, ensuring all entries have a valid source URL.\n\n7. Engineer: Submit the final markdown table.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\nAdmin (to chat_manager):\n\n\n\n--------------------------------------------------------------------------------\nEngineer (to chat_manager):\n\nI'm sorry for the confusion, but as an AI model developed by OpenAI, I don't have the ability to directly scrape websites or access real-time data from external databases or websites, including arXiv. However, I can help you write a Python script that uses the arXiv API to fetch the data you need.\n\nHere's a Python script that uses the `arxiv` package to search for papers related to \"LLM applications\" from the last week. This script will print out the title, authors, summary, and URL of each paper.\n\n```python\nimport arxiv\nimport datetime\n\n# Calculate the date one week ago\none_week_ago = (datetime.datetime.now() - datetime.timedelta(days=7)).strftime('%Y%m%d%H%M%S')\n\n# Search for papers on LLM applications\nsearch = arxiv.Search(\n  query=\"LLM applications\",\n  max_results=100,\n  sort_by=arxiv.SortCriterion.SubmittedDate,\n  sort_order=arxiv.SortOrder.Descending\n)\n\nfor result in search.get():\n  # Check if the paper was submitted in the last week\n  if result.submitted.strftime('%Y%m%d%H%M%S') > one_week_ago:\n    print(f\"Title: {result.title}\")\n    print(f\"Authors: {', '.join(author.name for author in result.authors)}\")\n    print(f\"Summary: {result.summary}\")\n    print(f\"URL: {result.entry_id}\")\n    print(\"\\n\")\n```\n\nYou can install the `arxiv` package using pip:\n\n```shell\npip install arxiv\n```\n\nPlease note that you'll need to replace `\"LLM applications\"` with the actual search term you're interested in. The arXiv API doesn't support searching by the submission date, so the script fetches the 100 most recent results and filters them manually. You may need to increase `max_results` if there are more than 100 papers submitted per week on your topic.\n\nTo create a markdown table, you'll need to format the output like this:\n\n```markdown\n| Title | Authors | Summary | URL |\n|-------|---------|---------|-----|\n| ...   | ...     | ...     | ... |\n```\n\nYou can do this in Python using f-strings:\n\n```python\nprint(\"| Title | Authors | Summary | URL |\")\nprint(\"|-------|---------|---------|-----|\")\nfor result in search.get():\n  # Check if the paper was submitted in the last week\n  if result.submitted.strftime('%Y%m%d%H%M%S') > one_week_ago:\n    print(f\"| {result.title} | {', '.join(author.name for author in result.authors)} | {result.summary} | {result.entry_id} |\")\n```\n\nThis will print a markdown table to the console. If you want to write the table to a file, you can open a file and use the `write` method instead of `print`.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\nExecutor (to chat_manager):\n\nexitcode: 1 (execution failed)\nCode output: \n:15: DeprecationWarning: The 'get' method is deprecated, use 'results' instead\n  for result in search.get():\nTraceback (most recent call last):\n  File \"\", line 17, in <module>\n    if result.submitted.strftime('%Y%m%d%H%M%S') > one_week_ago:\nAttributeError: 'Result' object has no attribute 'submitted'\n\n\n--------------------------------------------------------------------------------\nEngineer (to chat_manager):\n\nI apologize for the confusion. It seems there was a mistake in the code. The `arxiv` package's `Result` object doesn't have a `submitted` attribute. Instead, we should use the `published` attribute to get the date when the paper was published.\n\nHere's the corrected code:\n\n```python\nimport arxiv\nimport datetime\n\n# Calculate the date one week ago\none_week_ago = (datetime.datetime.now() - datetime.timedelta(days=7)).strftime('%Y%m%d%H%M%S')\n\n# Search for papers on LLM applications\nsearch = arxiv.Search(\n  query=\"LLM applications\",\n  max_results=100,\n  sort_by=arxiv.SortCriterion.Relevance,\n  sort_order=arxiv.SortOrder.Descending\n)\n\nprint(\"| Title | Authors | Summary | URL |\")\nprint(\"|-------|---------|---------|-----|\")\nfor result in search.results():\n  # Check if the paper was published in the last week\n  if result.published.strftime('%Y%m%d%H%M%S') > one_week_ago:\n    print(f\"| {result.title} | {', '.join(author.name for author in result.authors)} | {result.summary} | {result.entry_id} |\")\n```\n\nThis script will print a markdown table of papers related to \"LLM applications\" that were published in the last week. The table includes the title, authors, summary, and URL of each paper.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING CODE BLOCK 0 (inferred language is python)...\nExecutor (to chat_manager):\n\nexitcode: 0 (execution succeeded)\nCode output: \n| Title | Authors | Summary | URL |\n|-------|---------|---------|-----|\n| Large Language Models as Data Preprocessors | Haochen Zhang, Yuyang Dong, Chuan Xiao, Masafumi Oyamada | Large Language Models (LLMs), typified by OpenAI's GPT series and Meta's\nLLaMA variants, have marked a significant advancement in artificial\nintelligence. Trained on vast amounts of text data, LLMs are capable of\nunderstanding and generating human-like text across a diverse range of topics.\nThis study expands on the applications of LLMs, exploring their potential in\ndata preprocessing, a critical stage in data mining and analytics applications.\nWe delve into the applicability of state-of-the-art LLMs such as GPT-3.5,\nGPT-4, and Vicuna-13B for error detection, data imputation, schema matching,\nand entity matching tasks. Alongside showcasing the inherent capabilities of\nLLMs, we highlight their limitations, particularly in terms of computational\nexpense and inefficiency. We propose an LLM-based framework for data\npreprocessing, which integrates cutting-edge prompt engineering techniques,\ncoupled with traditional methods like contextualization and feature selection,\nto improve the performance and efficiency of these models. The effectiveness of\nLLMs in data preprocessing is evaluated through an experimental study spanning\n12 datasets. GPT-4 emerged as a standout, achieving 100\\% accuracy or F1 score\non 4 datasets, suggesting LLMs' immense potential in these tasks. Despite\ncertain limitations, our study underscores the promise of LLMs in this domain\nand anticipates future developments to overcome current hurdles. | http://arxiv.org/abs/2308.16361v1 |\n| Large language models in medicine: the potentials and pitfalls | Jesutofunmi A. Omiye, Haiwen Gui, Shawheen J. Rezaei, James Zou, Roxana Daneshjou | Large language models (LLMs) have been applied to tasks in healthcare,\nranging from medical exam questions to responding to patient questions. With\nincreasing institutional partnerships between companies producing LLMs and\nhealthcare systems, real world clinical application is coming closer to\nreality. As these models gain traction, it is essential for healthcare\npractitioners to understand what LLMs are, their development, their current and\npotential applications, and the associated pitfalls when utilized in medicine.\nThis review and accompanying tutorial aim to give an overview of these topics\nto aid healthcare practitioners in understanding the rapidly changing landscape\nof LLMs as applied to medicine. | http://arxiv.org/abs/2309.00087v1 |\n| Point-Bind & Point-LLM: Aligning Point Cloud with Multi-modality for 3D Understanding, Generation, and Instruction Following | Ziyu Guo, Renrui Zhang, Xiangyang Zhu, Yiwen Tang, Xianzheng Ma, Jiaming Han, Kexin Chen, Peng Gao, Xianzhi Li, Hongsheng Li, Pheng-Ann Heng | We introduce Point-Bind, a 3D multi-modality model aligning point clouds with\n2D image, language, audio, and video. Guided by ImageBind, we construct a joint\nembedding space between 3D and multi-modalities, enabling many promising\napplications, e.g., any-to-3D generation, 3D embedding arithmetic, and 3D\nopen-world understanding. On top of this, we further present Point-LLM, the\nfirst 3D large language model (LLM) following 3D multi-modal instructions. By\nparameter-efficient fine-tuning techniques, Point-LLM injects the semantics of\nPoint-Bind into pre-trained LLMs, e.g., LLaMA, which requires no 3D instruction\ndata, but exhibits superior 3D and multi-modal question-answering capacity. We\nhope our work may cast a light on the community for extending 3D point clouds\nto multi-modality applications. Code is available at\nhttps://github.com/ZiyuGuo99/Point-Bind_Point-LLM. | http://arxiv.org/abs/2309.00615v1 |\n| Where Would I Go Next? Large Language Models as Human Mobility Predictors | Xinglei Wang, Meng Fang, Zichao Zeng, Tao Cheng | Accurate human mobility prediction underpins many important applications\nacross a variety of domains, including epidemic modelling, transport planning,\nand emergency responses. Due to the sparsity of mobility data and the\nstochastic nature of people's daily activities, achieving precise predictions\nof people's locations remains a challenge. While recently developed large\nlanguage models (LLMs) have demonstrated superior performance across numerous\nlanguage-related tasks, their applicability to human mobility studies remains\nunexplored. Addressing this gap, this article delves into the potential of LLMs\nfor human mobility prediction tasks. We introduce a novel method, LLM-Mob,\nwhich leverages the language understanding and reasoning capabilities of LLMs\nfor analysing human mobility data. We present concepts of historical stays and\ncontext stays to capture both long-term and short-term dependencies in human\nmovement and enable time-aware prediction by using time information of the\nprediction target. Additionally, we design context-inclusive prompts that\nenable LLMs to generate more accurate predictions. Comprehensive evaluations of\nour method reveal that LLM-Mob excels in providing accurate and interpretable\npredictions, highlighting the untapped potential of LLMs in advancing human\nmobility prediction techniques. We posit that our research marks a significant\nparadigm shift in human mobility modelling, transitioning from building complex\ndomain-specific models to harnessing general-purpose LLMs that yield accurate\npredictions through language instructions. The code for this work is available\nat https://github.com/xlwang233/LLM-Mob. | http://arxiv.org/abs/2308.15197v1 |\n| Interactively Robot Action Planning with Uncertainty Analysis and Active Questioning by Large Language Model | Kazuki Hori, Kanata Suzuki, Tetsuya Ogata | The application of the Large Language Model (LLM) to robot action planning\nhas been actively studied. The instructions given to the LLM by natural\nlanguage may include ambiguity and lack of information depending on the task\ncontext. It is possible to adjust the output of LLM by making the instruction\ninput more detailed; however, the design cost is high. In this paper, we\npropose the interactive robot action planning method that allows the LLM to\nanalyze and gather missing information by asking questions to humans. The\nmethod can minimize the design cost of generating precise robot instructions.\nWe demonstrated the effectiveness of our method through concrete examples in\ncooking tasks. However, our experiments also revealed challenges in robot\naction planning with LLM, such as asking unimportant questions and assuming\ncrucial information without asking. Shedding light on these issues provides\nvaluable insights for future research on utilizing LLM for robotics. | http://arxiv.org/abs/2308.15684v1 |\n| AskIt: Unified Programming Interface for Programming with Large Language Models | Katsumi Okuda, Saman Amarasinghe | In the evolving landscape of software development, Large Language Models\n(LLMs) exhibit a unique phenomenon known as emergent abilities, demonstrating\nadeptness across numerous tasks, from text summarization to code generation.\nWhile these abilities open up novel avenues in software design and crafting,\ntheir incorporation presents substantial challenges. Developers grapple with\ndecisions surrounding the direct embedding of LLMs within applications versus\nemploying them for code generation. Moreover, effective prompt design becomes a\ncritical concern, given the necessity of data extraction from natural language\noutputs. To address these intricacies, this paper introduces AskIt, a\ndomain-specific language (DSL) specifically designed for LLMs. AskIt simplifies\nLLM integration, offering type-guided output control, template-based function\ndefinitions, and a unified interface that diminishes the distinction between\nLLM-based code generation and application integration. Furthermore, through\nProgramming by Example (PBE), AskIt harnesses the power of few-shot learning at\nthe programming language level. Our evaluations underscore AskIt's potency.\nAcross 50 tasks, AskIt generated concise prompts for the given tasks, achieving\na 16.14% reduction in prompt length relative to benchmarks. Additionally, by\nenabling the transition from direct LLM application usage to function\ngeneration, AskIt achieved significant speedups, as observed in our GSM8K\nbenchmark experiments. Through these advancements, AskIt streamlines the\nintegration of LLMs in software development, offering a more efficient,\nversatile approach for leveraging emergent abilities. The implementations of\nAskIt in TypeScript and Python are available at\nhttps://github.com/katsumiok/ts-askit and https://github.com/katsumiok/pyaskit,\nrespectively. | http://arxiv.org/abs/2308.15645v1 |\n\n\n--------------------------------------------------------------------------------\nScientist (to chat_manager):\n\nHere are the papers related to LLM applications published in the last week:\n\n| Domain | Title | Authors | Summary | URL |\n|-------|---------|---------|-----|-----|\n| Data Preprocessing | [Large Language Models as Data Preprocessors](http://arxiv.org/abs/2308.16361v1) | Haochen Zhang, Yuyang Dong, Chuan Xiao, Masafumi Oyamada | This study expands on the applications of LLMs, exploring their potential in data preprocessing, a critical stage in data mining and analytics applications. | [Link](http://arxiv.org/abs/2308.16361v1) |\n| Medicine | [Large language models in medicine: the potentials and pitfalls](http://arxiv.org/abs/2309.00087v1) | Jesutofunmi A. Omiye, Haiwen Gui, Shawheen J. Rezaei, James Zou, Roxana Daneshjou | This review and accompanying tutorial aim to give an overview of these topics to aid healthcare practitioners in understanding the rapidly changing landscape of LLMs as applied to medicine. | [Link](http://arxiv.org/abs/2309.00087v1) |\n| 3D Understanding, Generation, and Instruction Following | [Point-Bind & Point-LLM: Aligning Point Cloud with Multi-modality for 3D Understanding, Generation, and Instruction Following](http://arxiv.org/abs/2309.00615v1) | Ziyu Guo, Renrui Zhang, Xiangyang Zhu, Yiwen Tang, Xianzheng Ma, Jiaming Han, Kexin Chen, Peng Gao, Xianzhi Li, Hongsheng Li, Pheng-Ann Heng | We introduce Point-Bind, a 3D multi-modality model aligning point clouds with 2D image, language, audio, and video. | [Link](http://arxiv.org/abs/2309.00615v1) |\n| Human Mobility Prediction | [Where Would I Go Next? Large Language Models as Human Mobility Predictors](http://arxiv.org/abs/2308.15197v1) | Xinglei Wang, Meng Fang, Zichao Zeng, Tao Cheng | This article delves into the potential of LLMs for human mobility prediction tasks. | [Link](http://arxiv.org/abs/2308.15197v1) |\n| Robotics | [Interactively Robot Action Planning with Uncertainty Analysis and Active Questioning by Large Language Model](http://arxiv.org/abs/2308.15684v1) | Kazuki Hori, Kanata Suzuki, Tetsuya Ogata | In this paper, we propose the interactive robot action planning method that allows the LLM to analyze and gather missing information by asking questions to humans. | [Link](http://arxiv.org/abs/2308.15684v1) |\n| Software Development | [AskIt: Unified Programming Interface for Programming with Large Language Models](http://arxiv.org/abs/2308.15645v1) | Katsumi Okuda, Saman Amarasinghe | This paper introduces AskIt, a domain-specific language (DSL) specifically designed for LLMs. | [Link](http://arxiv.org/abs/2308.15645v1) |\n\n--------------------------------------------------------------------------------\nCritic (to chat_manager):\n\nThe scientist has done a good job categorizing the papers into different domains and providing a summary for each. The markdown table is correctly formatted and includes the source URL for each paper, which allows for verification of the information. The domains identified are diverse, indicating a broad range of applications for Large Language Models (LLMs). This review and categorization should provide a useful resource for anyone interested in the recent applications of LLMs.\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.h2,{id:"create-group-chat-without-critic-for-comparison",children:"Create Group Chat without Critic for Comparison"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'groupchat_nocritic = autogen.GroupChat(\n    agents=[user_proxy, engineer, scientist, planner, executor], messages=[], max_round=50\n)\nfor agent in groupchat.agents:\n    agent.reset()\nmanager_nocritic = autogen.GroupChatManager(groupchat=groupchat_nocritic, llm_config=gpt4_config)\nuser_proxy.initiate_chat(\n    manager_nocritic,\n    message="""\nfind papers on LLM applications from arxiv in the last week, create a markdown table of different domains.\n""",\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Admin (to chat_manager):\n\n\nfind papers on LLM applications from arxiv in the last week, create a markdown table of different domains.\n\n\n--------------------------------------------------------------------------------\nPlanner (to chat_manager):\n\nPlan:\n\n1. Engineer: Write a script to scrape the arXiv website for papers related to LLM (Language Model) applications published in the last week. The script should extract the title, authors, abstract, and link to the paper.\n\n2. Scientist: Review the scraped data to identify the different domains in which LLM is applied. This could be based on keywords in the title or abstract, or the scientist's knowledge of the field.\n\n3. Engineer: Modify the script to categorize the papers based on the domains identified by the scientist. The script should output a markdown table with columns for the domain, title, authors, abstract, and link.\n\n4. Scientist: Review the markdown table to ensure the papers are correctly categorized and the information is accurate.\n\n5. Engineer: Make any necessary revisions to the script based on the scientist's feedback.\n\n6. Scientist: Give final approval of the markdown table.\n\n7. Engineer: Submit the final markdown table.\n\n--------------------------------------------------------------------------------\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);