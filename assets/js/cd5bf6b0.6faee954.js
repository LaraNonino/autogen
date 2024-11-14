"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[693],{88518:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=i(85893),o=i(11151);const r={},a="Migration Guide",s={id:"Migration-Guide",title:"Migration Guide",description:"Migrating to 0.2",source:"@site/docs/Migration-Guide.md",sourceDirName:".",slug:"/Migration-Guide",permalink:"/autogen/docs/Migration-Guide",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/Migration-Guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Research",permalink:"/autogen/docs/Research"}},c={},d=[{value:"Migrating to 0.2",id:"migrating-to-02",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"migration-guide",children:"Migration Guide"}),"\n",(0,t.jsx)(n.h2,{id:"migrating-to-02",children:"Migrating to 0.2"}),"\n",(0,t.jsxs)(n.p,{children:["openai v1 is a total rewrite of the library with many breaking changes. For example, the inference requires instantiating a client, instead of using a global class method.\nTherefore, some changes are required for users of ",(0,t.jsx)(n.code,{children:"pyautogen<0.2"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_base"})," -> ",(0,t.jsx)(n.code,{children:"base_url"}),", ",(0,t.jsx)(n.code,{children:"request_timeout"})," -> ",(0,t.jsx)(n.code,{children:"timeout"})," in ",(0,t.jsx)(n.code,{children:"llm_config"})," and ",(0,t.jsx)(n.code,{children:"config_list"}),". ",(0,t.jsx)(n.code,{children:"max_retry_period"})," and ",(0,t.jsx)(n.code,{children:"retry_wait_time"})," are deprecated. ",(0,t.jsx)(n.code,{children:"max_retries"})," can be set for each client."]}),"\n",(0,t.jsx)(n.li,{children:"MathChat is unsupported until it is tested in future release."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"autogen.Completion"})," and ",(0,t.jsx)(n.code,{children:"autogen.ChatCompletion"})," are deprecated. The essential functionalities are moved to ",(0,t.jsx)(n.code,{children:"autogen.OpenAIWrapper"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from autogen import OpenAIWrapper\nclient = OpenAIWrapper(config_list=config_list)\nresponse = client.create(messages=[{"role": "user", "content": "2+2="}])\nprint(client.extract_text_or_completion_object(response))\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Inference parameter tuning and inference logging features are updated:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import autogen.runtime_logging\n\n# Start logging\nautogen.runtime_logging.start()\n\n# Stop logging\nautogen.runtime_logging.stop()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Checkout ",(0,t.jsx)(n.a,{href:"https://autogenhub.github.io/autogen/docs/Use-Cases/enhanced_inference#logging",children:"Logging documentation"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/autogenhub/autogen/blob/main/notebook/agentchat_logging.ipynb",children:"Logging example notebook"})," to learn more."]}),"\n",(0,t.jsxs)(n.p,{children:["Inference parameter tuning can be done via ",(0,t.jsx)(n.a,{href:"https://microsoft.github.io/FLAML/docs/Use-Cases/Tune-User-Defined-Function",children:(0,t.jsx)(n.code,{children:"flaml.tune"})}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"seed"})," in autogen is renamed into ",(0,t.jsx)(n.code,{children:"cache_seed"})," to accommodate the newly added ",(0,t.jsx)(n.code,{children:"seed"})," param in openai chat completion api. ",(0,t.jsx)(n.code,{children:"use_cache"})," is removed as a kwarg in ",(0,t.jsx)(n.code,{children:"OpenAIWrapper.create()"})," for being automatically decided by ",(0,t.jsx)(n.code,{children:"cache_seed"}),": int | None. The difference between autogen's ",(0,t.jsx)(n.code,{children:"cache_seed"})," and openai's ",(0,t.jsx)(n.code,{children:"seed"})," is that:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"autogen uses local disk cache to guarantee the exactly same output is produced for the same input and when cache is hit, no openai api call will be made."}),"\n",(0,t.jsxs)(n.li,{children:["openai's ",(0,t.jsx)(n.code,{children:"seed"})," is a best-effort deterministic sampling with no guarantee of determinism. When using openai's ",(0,t.jsx)(n.code,{children:"seed"})," with ",(0,t.jsx)(n.code,{children:"cache_seed"})," set to None, even for the same input, an openai api call will be made and there is no guarantee for getting exactly the same output."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>a});var t=i(67294);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);