"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7555],{69497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var s=t(85893),a=t(11151);const o={},i="vLLM",r={id:"topics/non-openai-models/local-vllm",title:"vLLM",description:"vLLM is a locally run proxy and inference server,",source:"@site/docs/topics/non-openai-models/local-vllm.md",sourceDirName:"topics/non-openai-models",slug:"/topics/non-openai-models/local-vllm",permalink:"/autogen/docs/topics/non-openai-models/local-vllm",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/topics/non-openai-models/local-vllm.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Ollama",permalink:"/autogen/docs/topics/non-openai-models/local-ollama"},next:{title:"Compressing Text with LLMLingua",permalink:"/autogen/docs/topics/handling_long_contexts/compressing_text_w_llmligua"}},l={},h=[{value:"Installing vLLM",id:"installing-vllm",level:2},{value:"Choosing models",id:"choosing-models",level:2},{value:"Chat Template",id:"chat-template",level:2},{value:"Running vLLM proxy server",id:"running-vllm-proxy-server",level:2},{value:"Using vLLM with AutoGen",id:"using-vllm-with-autogen",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vllm",children:"vLLM"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/vllm-project/vllm",children:"vLLM"})," is a locally run proxy and inference server,\nproviding an OpenAI-compatible API. As it performs both the proxy and the inferencing,\nyou don't need to install an additional inference server."]}),"\n",(0,s.jsxs)(n.p,{children:["Note: vLLM does not support OpenAI's ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/function-calling",children:"Function Calling"}),"\n(usable with AutoGen). However, it is in development and may be available by the time you\nread this."]}),"\n",(0,s.jsx)(n.p,{children:"Running this stack requires the installation of:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["AutoGen (",(0,s.jsx)(n.a,{href:"/docs/installation",children:"installation instructions"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"vLLM"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note: We recommend using a virtual environment for your stack, see ",(0,s.jsx)(n.a,{href:"https://autogenhub.github.io/autogen/docs/installation/#create-a-virtual-environment-optional",children:"this article"}),"\nfor guidance."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-vllm",children:"Installing vLLM"}),"\n",(0,s.jsx)(n.p,{children:"In your terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install vllm\n"})}),"\n",(0,s.jsx)(n.h2,{id:"choosing-models",children:"Choosing models"}),"\n",(0,s.jsx)(n.p,{children:"vLLM will download new models when you run the server."}),"\n",(0,s.jsxs)(n.p,{children:["The models are sourced from ",(0,s.jsx)(n.a,{href:"https://huggingface.co",children:"Hugging Face"}),", a filtered list of Text\nGeneration models is ",(0,s.jsx)(n.a,{href:"https://huggingface.co/models?pipeline_tag=text-generation&sort=trending",children:"here"}),"\nand vLLM has a list of ",(0,s.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/models/supported_models.html",children:"commonly used models"}),".\nUse the full model name, e.g. ",(0,s.jsx)(n.code,{children:"mistralai/Mistral-7B-Instruct-v0.2"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"chat-template",children:"Chat Template"}),"\n",(0,s.jsxs)(n.p,{children:["vLLM uses a pre-defined chat template, unless the model has a chat template defined in its config file on Hugging Face.\nThis can cause an issue if the chat template doesn't allow ",(0,s.jsx)(n.code,{children:"'role' : 'system'"})," messages, as used in AutoGen."]}),"\n",(0,s.jsx)(n.p,{children:"Therefore, we will create a chat template for the Mistral.AI Mistral 7B model we are using that allows roles of 'user',\n'assistant', and 'system'."}),"\n",(0,s.jsxs)(n.p,{children:["Create a file name ",(0,s.jsx)(n.code,{children:"autogenmistraltemplate.jinja"})," with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"{{ bos_token }}\n{% for message in messages %}\n    {% if ((message['role'] == 'user' or message['role'] == 'system') != (loop.index0 % 2 == 0)) %}\n        {{ raise_exception('Conversation roles must alternate user/assistant/user/assistant/...') }}\n    {% endif %}\n\n    {% if (message['role'] == 'user' or message['role'] == 'system') %}\n        {{ '[INST] ' + message['content'] + ' [/INST]' }}\n    {% elif message['role'] == 'assistant' %}\n        {{ message['content'] + eos_token}}\n    {% else %}\n        {{ raise_exception('Only system, user and assistant roles are supported!') }}\n    {% endif %}\n{% endfor %}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Chat Templates are specific to the model/model family. The example shown here is for Mistral-based models like Mistral 7B and Mixtral 8x7B."}),(0,s.jsxs)(n.p,{children:["vLLM has a number of ",(0,s.jsx)(n.a,{href:"https://github.com/vllm-project/vllm/tree/main/examples",children:"example templates"})," for models that can be a\nstarting point for your chat template. Just remember, the template may need to be adjusted to support 'system' role messages."]})]}),"\n",(0,s.jsx)(n.h2,{id:"running-vllm-proxy-server",children:"Running vLLM proxy server"}),"\n",(0,s.jsx)(n.p,{children:"To run vLLM with the chosen model and our chat template, in your terminal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python -m vllm.entrypoints.openai.api_server --model mistralai/Mistral-7B-Instruct-v0.2 --chat-template autogenmistraltemplate.jinja\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, vLLM will run on '",(0,s.jsx)(n.a,{href:"http://0.0.0.0:8000",children:"http://0.0.0.0:8000"}),"'."]}),"\n",(0,s.jsx)(n.h2,{id:"using-vllm-with-autogen",children:"Using vLLM with AutoGen"}),"\n",(0,s.jsx)(n.p,{children:"Now that we have the URL for the vLLM proxy server, you can use it within AutoGen in the same\nway as OpenAI or cloud-based proxy servers."}),"\n",(0,s.jsxs)(n.p,{children:["As you are running this proxy server locally, no API key is required. As ",(0,s.jsx)(n.code,{children:"api_key"})," is a mandatory\nfield for configurations within AutoGen we put a dummy value in it, as per the example below."]}),"\n",(0,s.jsxs)(n.p,{children:["Although we are specifying the model when running the vLLM command, we must still put it into the\n",(0,s.jsx)(n.code,{children:"model"})," value for vLLM."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from autogen import UserProxyAgent, ConversableAgent\n\nlocal_llm_config={\n    "config_list": [\n        {\n            "model": "mistralai/Mistral-7B-Instruct-v0.2", # Same as in vLLM command\n            "api_key": "NotRequired", # Not needed\n            "base_url": "http://0.0.0.0:8000/v1"  # Your vLLM URL, with \'/v1\' added\n        }\n    ],\n    "cache_seed": None # Turns off caching, useful for testing different models\n}\n\n# Create the agent that uses the LLM.\nassistant = ConversableAgent("agent", llm_config=local_llm_config,system_message="")\n\n# Create the agent that represents the user in the conversation.\nuser_proxy = UserProxyAgent("user", code_execution_config=False,system_message="")\n\n# Let the assistant start the conversation.  It will end when the user types exit.\nassistant.initiate_chat(user_proxy, message="How can I help you today?")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"agent (to user):\n\nHow can I help you today?\n\n--------------------------------------------------------------------------------\nProvide feedback to agent. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: Why is the sky blue?\nuser (to agent):\n\nWhy is the sky blue?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nagent (to user):\n\n\nThe sky appears blue due to a phenomenon called Rayleigh scattering. As sunlight reaches Earth's atmosphere, it interacts with molecules and particles in the air, causing the scattering of light. Blue light has a shorter wavelength and gets scattered more easily than other colors, which is why the sky appears blue during a clear day.\n\nHowever, during sunrise and sunset, the sky can appear red, orange, or purple due to a different type of scattering called scattering by dust, pollutants, and water droplets, which scatter longer wavelengths of light more effectively.\n\n--------------------------------------------------------------------------------\nProvide feedback to agent. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: and why does it turn red?\nuser (to agent):\n\nand why does it turn red?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nagent (to user):\n\n\nDuring sunrise and sunset, the angle of the sun's rays in the sky is lower, and they have to pass through more of the Earth's atmosphere before reaching an observer. This additional distance results in more scattering of sunlight, which preferentially scatters the longer wavelengths (red, orange, and yellow) more than the shorter wavelengths (blue and green).\n\nThe scattering of sunlight by the Earth's atmosphere causes the red, orange, and yellow colors to be more prevalent in the sky during sunrise and sunset, resulting in the beautiful display of colors often referred to as a sunrise or sunset.\n\nAs the sun continues to set, the sky can transition to various shades of purple, pink, and eventually dark blue or black, as the available sunlight continues to decrease and the longer wavelengths are progressively scattered less effectively.\n\n--------------------------------------------------------------------------------\nProvide feedback to agent. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: exit\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(67294);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);