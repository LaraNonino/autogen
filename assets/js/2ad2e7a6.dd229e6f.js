"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[462],{18852:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var c=t(85893),s=t(11151);const a={sidebar_label:"abstract_cache_base",title:"cache.abstract_cache_base"},r=void 0,i={id:"reference/cache/abstract_cache_base",title:"cache.abstract_cache_base",description:"AbstractCache",source:"@site/docs/reference/cache/abstract_cache_base.md",sourceDirName:"reference/cache",slug:"/reference/cache/abstract_cache_base",permalink:"/autogen/docs/reference/cache/abstract_cache_base",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/reference/cache/abstract_cache_base.md",tags:[],version:"current",frontMatter:{sidebar_label:"abstract_cache_base",title:"cache.abstract_cache_base"},sidebar:"referenceSideBar",previous:{title:"utils",permalink:"/autogen/docs/reference/agentchat/utils"},next:{title:"cache",permalink:"/autogen/docs/reference/cache/"}},l={},h=[{value:"AbstractCache",id:"abstractcache",level:2},{value:"get",id:"get",level:3},{value:"set",id:"set",level:3},{value:"close",id:"close",level:3},{value:"__enter__",id:"__enter__",level:3},{value:"__exit__",id:"__exit__",level:3}];function o(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"abstractcache",children:"AbstractCache"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"class AbstractCache(Protocol)\n"})}),"\n",(0,c.jsx)(n.p,{children:"This protocol defines the basic interface for cache operations.\nImplementing classes should provide concrete implementations for\nthese methods to handle caching mechanisms."}),"\n",(0,c.jsx)(n.h3,{id:"get",children:"get"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def get(key: str, default: Optional[Any] = None) -> Optional[Any]\n"})}),"\n",(0,c.jsx)(n.p,{children:"Retrieve an item from the cache."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"key"})," ",(0,c.jsx)(n.em,{children:"str"})," - The key identifying the item in the cache."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"default"})," ",(0,c.jsx)(n.em,{children:"optional"})," - The default value to return if the key is not found.\nDefaults to None."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,c.jsx)(n.p,{children:"The value associated with the key if found, else the default value."}),"\n",(0,c.jsx)(n.h3,{id:"set",children:"set"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def set(key: str, value: Any) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Set an item in the cache."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"key"})," ",(0,c.jsx)(n.em,{children:"str"})," - The key under which the item is to be stored."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"value"})," - The value to be stored in the cache."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"close",children:"close"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def close() -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Close the cache. Perform any necessary cleanup, such as closing network connections or\nreleasing resources."}),"\n",(0,c.jsx)(n.h3,{id:"__enter__",children:"__enter__"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def __enter__() -> Self\n"})}),"\n",(0,c.jsx)(n.p,{children:"Enter the runtime context related to this object."}),"\n",(0,c.jsx)(n.p,{children:"The with statement will bind this method's return value to the target(s)\nspecified in the as clause of the statement, if any."}),"\n",(0,c.jsx)(n.h3,{id:"__exit__",children:"__exit__"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"def __exit__(exc_type: Optional[Type[BaseException]],\n             exc_value: Optional[BaseException],\n             traceback: Optional[TracebackType]) -> None\n"})}),"\n",(0,c.jsx)(n.p,{children:"Exit the runtime context and close the cache."}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"exc_type"})," - The exception type if an exception was raised in the context."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"exc_value"})," - The exception value if an exception was raised in the context."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"traceback"})," - The traceback if an exception was raised in the context."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var c=t(67294);const s={},a=c.createContext(s);function r(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);