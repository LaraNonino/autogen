"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3922],{54173:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=o(85893),c=o(11151);const i={sidebar_label:"local_commandline_code_executor",title:"coding.local_commandline_code_executor"},r=void 0,l={id:"reference/coding/local_commandline_code_executor",title:"coding.local_commandline_code_executor",description:"LocalCommandLineCodeExecutor",source:"@site/docs/reference/coding/local_commandline_code_executor.md",sourceDirName:"reference/coding",slug:"/reference/coding/local_commandline_code_executor",permalink:"/autogen/docs/reference/coding/local_commandline_code_executor",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/reference/coding/local_commandline_code_executor.md",tags:[],version:"current",frontMatter:{sidebar_label:"local_commandline_code_executor",title:"coding.local_commandline_code_executor"},sidebar:"referenceSideBar",previous:{title:"func_with_reqs",permalink:"/autogen/docs/reference/coding/func_with_reqs"},next:{title:"markdown_code_extractor",permalink:"/autogen/docs/reference/coding/markdown_code_extractor"}},s={},d=[{value:"LocalCommandLineCodeExecutor",id:"localcommandlinecodeexecutor",level:2},{value:"__init__",id:"__init__",level:3},{value:"Execution with a Python virtual environment",id:"execution-with-a-python-virtual-environment",level:2},{value:"format_functions_for_prompt",id:"format_functions_for_prompt",level:3},{value:"functions_module",id:"functions_module",level:3},{value:"functions",id:"functions",level:3},{value:"timeout",id:"timeout",level:3},{value:"work_dir",id:"work_dir",level:3},{value:"code_extractor",id:"code_extractor",level:3},{value:"sanitize_command",id:"sanitize_command",level:3},{value:"execute_code_blocks",id:"execute_code_blocks",level:3},{value:"restart",id:"restart",level:3},{value:"LocalCommandlineCodeExecutor",id:"localcommandlinecodeexecutor-1",level:2},{value:"CommandlineCodeResult",id:"commandlinecoderesult",level:2}];function a(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"localcommandlinecodeexecutor",children:"LocalCommandLineCodeExecutor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class LocalCommandLineCodeExecutor(CodeExecutor)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def __init__(timeout: int = 60,\n             virtual_env_context: Optional[SimpleNamespace] = None,\n             work_dir: Union[Path, str] = Path("."),\n             functions: List[Union[FunctionWithRequirements[Any, A],\n                                   Callable[..., Any],\n                                   FunctionWithRequirementsStr]] = [],\n             functions_module: str = "functions",\n             execution_policies: Optional[Dict[str, bool]] = None)\n'})}),"\n",(0,t.jsx)(n.p,{children:"(Experimental) A code executor class that executes or saves LLM generated code a local command line\nenvironment."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"This will execute or save LLM generated code on the local machine."})}),"\n",(0,t.jsx)(n.p,{children:"Each code block is saved as a file in the working directory. Depending on the execution policy,\nthe code may be executed in a separate process.\nThe code blocks are executed or save in the order they are received.\nCommand line code is sanitized against a list of dangerous commands to prevent self-destructive commands from being executed,\nwhich could potentially affect the user's environment. Supported languages include Python, shell scripts (bash, shell, sh),\nPowerShell (pwsh, powershell, ps1), HTML, CSS, and JavaScript.\nExecution policies determine whether each language's code blocks are executed or saved only."}),"\n",(0,t.jsx)(n.h2,{id:"execution-with-a-python-virtual-environment",children:"Execution with a Python virtual environment"}),"\n",(0,t.jsx)(n.p,{children:"A python virtual env can be used to execute code and install dependencies. This has the added benefit of not polluting the\nbase environment with unwanted modules."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from autogen.code_utils import create_virtual_env\nfrom autogen.coding import LocalCommandLineCodeExecutor\n\nvenv_dir = ".venv"\nvenv_context = create_virtual_env(venv_dir)\n\nexecutor = LocalCommandLineCodeExecutor(virtual_env_context=venv_context)\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeout"})," ",(0,t.jsx)(n.em,{children:"int"})," - The timeout for code execution, default is 60 seconds."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"virtual_env_context"})," ",(0,t.jsx)(n.em,{children:"Optional[SimpleNamespace]"})," - The virtual environment context to use."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"work_dir"})," ",(0,t.jsx)(n.em,{children:"Union[Path, str]"})," - The working directory for code execution, defaults to the current directory."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"functions"})," ",(0,t.jsx)(n.em,{children:"List[Union[FunctionWithRequirements[Any, A], Callable[..., Any], FunctionWithRequirementsStr]]"})," - A list of callable functions available to the executor."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"functions_module"})," ",(0,t.jsx)(n.em,{children:"str"})," - The module name under which functions are accessible."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"execution_policies"})," ",(0,t.jsx)(n.em,{children:"Optional[Dict[str, bool]]"})," - A dictionary mapping languages to execution policies (True for execution, False for saving only). Defaults to class-wide DEFAULT_EXECUTION_POLICY."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"format_functions_for_prompt",children:"format_functions_for_prompt"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def format_functions_for_prompt(\n        prompt_template: str = FUNCTION_PROMPT_TEMPLATE) -> str\n"})}),"\n",(0,t.jsx)(n.p,{children:"(Experimental) Format the functions for a prompt."}),"\n",(0,t.jsx)(n.p,{children:"The template includes two variables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$module_name"}),": The module name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$functions"}),": The functions formatted as stubs with two newlines between each function."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prompt_template"})," ",(0,t.jsx)(n.em,{children:"str"})," - The prompt template. Default is the class default."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"})," - The formatted prompt."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"functions_module",children:"functions_module"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@property\ndef functions_module() -> str\n"})}),"\n",(0,t.jsx)(n.p,{children:"(Experimental) The module name for the functions."}),"\n",(0,t.jsx)(n.h3,{id:"functions",children:"functions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@property\ndef functions() -> List[Union[FunctionWithRequirements[Any, A], Callable[\n    ..., Any], FunctionWithRequirementsStr]]\n"})}),"\n",(0,t.jsx)(n.p,{children:"(Experimental) The functions that are available to the code executor."}),"\n",(0,t.jsx)(n.h3,{id:"timeout",children:"timeout"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@property\ndef timeout() -> int\n"})}),"\n",(0,t.jsx)(n.p,{children:"(Experimental) The timeout for code execution."}),"\n",(0,t.jsx)(n.h3,{id:"work_dir",children:"work_dir"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@property\ndef work_dir() -> Path\n"})}),"\n",(0,t.jsx)(n.p,{children:"(Experimental) The working directory for the code execution."}),"\n",(0,t.jsx)(n.h3,{id:"code_extractor",children:"code_extractor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@property\ndef code_extractor() -> CodeExtractor\n"})}),"\n",(0,t.jsx)(n.p,{children:"(Experimental) Export a code extractor that can be used by an agent."}),"\n",(0,t.jsx)(n.h3,{id:"sanitize_command",children:"sanitize_command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@staticmethod\ndef sanitize_command(lang: str, code: str) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Sanitize the code block to prevent dangerous commands.\nThis approach acknowledges that while Docker or similar\ncontainerization/sandboxing technologies provide a robust layer of security,\nnot all users may have Docker installed or may choose not to use it.\nTherefore, having a baseline level of protection helps mitigate risks for users who,\neither out of choice or necessity, run code outside of a sandboxed environment."}),"\n",(0,t.jsx)(n.h3,{id:"execute_code_blocks",children:"execute_code_blocks"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def execute_code_blocks(code_blocks: List[CodeBlock]) -> CommandLineCodeResult\n"})}),"\n",(0,t.jsx)(n.p,{children:"(Experimental) Execute the code blocks and return the result."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"code_blocks"})," ",(0,t.jsx)(n.em,{children:"List[CodeBlock]"})," - The code blocks to execute."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CommandLineCodeResult"})," - The result of the code execution."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"restart",children:"restart"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def restart() -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"(Experimental) Restart the code executor."}),"\n",(0,t.jsx)(n.h2,{id:"localcommandlinecodeexecutor-1",children:"LocalCommandlineCodeExecutor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class LocalCommandlineCodeExecutor(metaclass=_DeprecatedClassMeta)\n"})}),"\n",(0,t.jsx)(n.p,{children:"LocalCommandlineCodeExecutor renamed to LocalCommandLineCodeExecutor"}),"\n",(0,t.jsx)(n.h2,{id:"commandlinecoderesult",children:"CommandlineCodeResult"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class CommandlineCodeResult(metaclass=_DeprecatedClassMeta)\n"})}),"\n",(0,t.jsx)(n.p,{children:"CommandlineCodeResult renamed to CommandLineCodeResult"})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var t=o(67294);const c={},i=t.createContext(c);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);