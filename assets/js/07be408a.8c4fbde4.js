"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9012],{15038:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(85893),t=r(11151);const i={sidebar_label:"base_logger",title:"logger.base_logger"},o=void 0,l={id:"reference/logger/base_logger",title:"logger.base_logger",description:"BaseLogger",source:"@site/docs/reference/logger/base_logger.md",sourceDirName:"reference/logger",slug:"/reference/logger/base_logger",permalink:"/autogen/docs/reference/logger/base_logger",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/reference/logger/base_logger.md",tags:[],version:"current",frontMatter:{sidebar_label:"base_logger",title:"logger.base_logger"},sidebar:"referenceSideBar",previous:{title:"websockets",permalink:"/autogen/docs/reference/io/websockets"},next:{title:"file_logger",permalink:"/autogen/docs/reference/logger/file_logger"}},c={},d=[{value:"BaseLogger",id:"baselogger",level:2},{value:"start",id:"start",level:3},{value:"log_chat_completion",id:"log_chat_completion",level:3},{value:"log_new_agent",id:"log_new_agent",level:3},{value:"log_event",id:"log_event",level:3},{value:"log_new_wrapper",id:"log_new_wrapper",level:3},{value:"log_new_client",id:"log_new_client",level:3},{value:"log_function_use",id:"log_function_use",level:3},{value:"stop",id:"stop",level:3},{value:"get_connection",id:"get_connection",level:3}];function a(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"baselogger",children:"BaseLogger"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class BaseLogger(ABC)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"start",children:"start"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef start() -> str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Open a connection to the logging database, and start recording."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"session_id"})," ",(0,s.jsx)(n.em,{children:"str"})," - a unique id for the logging session"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"log_chat_completion",children:"log_chat_completion"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef log_chat_completion(invocation_id: uuid.UUID, client_id: int,\n                        wrapper_id: int, source: Union[str, Agent],\n                        request: Dict[str, Union[float, str, List[Dict[str,\n                                                                       str]]]],\n                        response: Union[str, ChatCompletion], is_cached: int,\n                        cost: float, start_time: str) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Log a chat completion to database."}),"\n",(0,s.jsxs)(n.p,{children:["In AutoGen, chat completions are somewhat complicated because they are handled by the ",(0,s.jsx)(n.code,{children:"autogen.oai.OpenAIWrapper"})," class.\nOne invocation to ",(0,s.jsx)(n.code,{children:"create"})," can lead to multiple underlying OpenAI calls, depending on the llm_config list used, and\nany errors or retries."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"invocation_id"})," ",(0,s.jsx)(n.em,{children:"uuid"})," - A unique identifier for the invocation to the OpenAIWrapper.create method call"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"client_id"})," ",(0,s.jsx)(n.em,{children:"int"})," - A unique identifier for the underlying OpenAI client instance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"wrapper_id"})," ",(0,s.jsx)(n.em,{children:"int"})," - A unique identifier for the OpenAIWrapper instance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"source"})," ",(0,s.jsx)(n.em,{children:"str or Agent"})," - The source/creator of the event as a string name or an Agent instance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"request"})," ",(0,s.jsx)(n.em,{children:"dict"})," - A dictionary representing the request or call to the OpenAI client endpoint"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"response"})," ",(0,s.jsx)(n.em,{children:"str or ChatCompletion"})," - The response from OpenAI"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"is_cached"})," ",(0,s.jsx)(n.em,{children:"int"})," - 1 if the response was a cache hit, 0 otherwise"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cost(float)"})," - The cost for OpenAI response"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"start_time"})," ",(0,s.jsx)(n.em,{children:"str"})," - A string representing the moment the request was initiated"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"log_new_agent",children:"log_new_agent"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef log_new_agent(agent: ConversableAgent, init_args: Dict[str, Any]) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Log the birth of a new agent."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent"})," ",(0,s.jsx)(n.em,{children:"ConversableAgent"})," - The agent to log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"init_args"})," ",(0,s.jsx)(n.em,{children:"dict"})," - The arguments passed to the construct the conversable agent"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"log_event",children:"log_event"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef log_event(source: Union[str, Agent], name: str,\n              **kwargs: Dict[str, Any]) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Log an event for an agent."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"source"})," ",(0,s.jsx)(n.em,{children:"str or Agent"})," - The source/creator of the event as a string name or an Agent instance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"})," ",(0,s.jsx)(n.em,{children:"str"})," - The name of the event"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kwargs"})," ",(0,s.jsx)(n.em,{children:"dict"})," - The event information to log"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"log_new_wrapper",children:"log_new_wrapper"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef log_new_wrapper(\n        wrapper: OpenAIWrapper,\n        init_args: Dict[str, Union[LLMConfig, List[LLMConfig]]]) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Log the birth of a new OpenAIWrapper."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"wrapper"})," ",(0,s.jsx)(n.em,{children:"OpenAIWrapper"})," - The wrapper to log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"init_args"})," ",(0,s.jsx)(n.em,{children:"dict"})," - The arguments passed to the construct the wrapper"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"log_new_client",children:"log_new_client"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef log_new_client(client: Union[AzureOpenAI, OpenAI], wrapper: OpenAIWrapper,\n                   init_args: Dict[str, Any]) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Log the birth of a new OpenAIWrapper."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"wrapper"})," ",(0,s.jsx)(n.em,{children:"OpenAI"})," - The OpenAI client to log."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"init_args"})," ",(0,s.jsx)(n.em,{children:"dict"})," - The arguments passed to the construct the client"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"log_function_use",children:"log_function_use"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef log_function_use(source: Union[str, Agent], function: F,\n                     args: Dict[str, Any], returns: Any) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Log the use of a registered function (could be a tool)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"source"})," ",(0,s.jsx)(n.em,{children:"str or Agent"})," - The source/creator of the event as a string name or an Agent instance"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"function"})," ",(0,s.jsx)(n.em,{children:"F"})," - The function information"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"args"})," ",(0,s.jsx)(n.em,{children:"dict"})," - The function args to log"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"returns"})," ",(0,s.jsx)(n.em,{children:"any"})," - The return"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"stop",children:"stop"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef stop() -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Close the connection to the logging database, and stop logging."}),"\n",(0,s.jsx)(n.h3,{id:"get_connection",children:"get_connection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@abstractmethod\ndef get_connection() -> Union[None, sqlite3.Connection]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Return a connection to the logging database."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>o});var s=r(67294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);