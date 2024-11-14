"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4906],{35683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(85893),c=n(11151);const o={sidebar_label:"jupyter_code_executor",title:"coding.jupyter.jupyter_code_executor"},s=void 0,i={id:"reference/coding/jupyter/jupyter_code_executor",title:"coding.jupyter.jupyter_code_executor",description:"JupyterCodeExecutor",source:"@site/docs/reference/coding/jupyter/jupyter_code_executor.md",sourceDirName:"reference/coding/jupyter",slug:"/reference/coding/jupyter/jupyter_code_executor",permalink:"/autogen/docs/reference/coding/jupyter/jupyter_code_executor",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/reference/coding/jupyter/jupyter_code_executor.md",tags:[],version:"current",frontMatter:{sidebar_label:"jupyter_code_executor",title:"coding.jupyter.jupyter_code_executor"},sidebar:"referenceSideBar",previous:{title:"jupyter_client",permalink:"/autogen/docs/reference/coding/jupyter/jupyter_client"},next:{title:"local_jupyter_server",permalink:"/autogen/docs/reference/coding/jupyter/local_jupyter_server"}},d={},l=[{value:"JupyterCodeExecutor",id:"jupytercodeexecutor",level:2},{value:"__init__",id:"__init__",level:3},{value:"code_extractor",id:"code_extractor",level:3},{value:"execute_code_blocks",id:"execute_code_blocks",level:3},{value:"restart",id:"restart",level:3},{value:"stop",id:"stop",level:3}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"jupytercodeexecutor",children:"JupyterCodeExecutor"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class JupyterCodeExecutor(CodeExecutor)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"__init__",children:"__init__"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'def __init__(jupyter_server: Union[JupyterConnectable, JupyterConnectionInfo],\n             kernel_name: str = "python3",\n             timeout: int = 60,\n             output_dir: Union[Path, str] = Path("."))\n'})}),"\n",(0,r.jsx)(t.p,{children:"(Experimental) A code executor class that executes code statefully using\na Jupyter server supplied to this class."}),"\n",(0,r.jsx)(t.p,{children:"Each execution is stateful and can access variables created from previous\nexecutions in the same session."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"jupyter_server"})," ",(0,r.jsx)(t.em,{children:"Union[JupyterConnectable, JupyterConnectionInfo]"})," - The Jupyter server to use."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"timeout"})," ",(0,r.jsx)(t.em,{children:"int"})," - The timeout for code execution, by default 60."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"kernel_name"})," ",(0,r.jsx)(t.em,{children:"str"}),' - The kernel name to use. Make sure it is installed.\nBy default, it is "python3".']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"output_dir"})," ",(0,r.jsx)(t.em,{children:"str"}),' - The directory to save output files, by default ".".']}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"code_extractor",children:"code_extractor"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"@property\ndef code_extractor() -> CodeExtractor\n"})}),"\n",(0,r.jsx)(t.p,{children:"(Experimental) Export a code extractor that can be used by an agent."}),"\n",(0,r.jsx)(t.h3,{id:"execute_code_blocks",children:"execute_code_blocks"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def execute_code_blocks(code_blocks: List[CodeBlock]) -> IPythonCodeResult\n"})}),"\n",(0,r.jsx)(t.p,{children:"(Experimental) Execute a list of code blocks and return the result."}),"\n",(0,r.jsxs)(t.p,{children:["This method executes a list of code blocks as cells in the Jupyter kernel.\nSee: ",(0,r.jsx)(t.a,{href:"https://jupyter-client.readthedocs.io/en/stable/messaging.html",children:"https://jupyter-client.readthedocs.io/en/stable/messaging.html"}),"\nfor the message protocol."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"code_blocks"})," ",(0,r.jsx)(t.em,{children:"List[CodeBlock]"})," - A list of code blocks to execute."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"IPythonCodeResult"})," - The result of the code execution."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"restart",children:"restart"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def restart() -> None\n"})}),"\n",(0,r.jsx)(t.p,{children:"(Experimental) Restart a new session."}),"\n",(0,r.jsx)(t.h3,{id:"stop",children:"stop"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def stop() -> None\n"})}),"\n",(0,r.jsx)(t.p,{children:"Stop the kernel."})]})}function a(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const c={},o=r.createContext(c);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);