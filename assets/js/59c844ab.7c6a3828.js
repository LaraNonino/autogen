"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[726],{5969:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var s=c(85893),i=c(11151);const t={sidebar_label:"disk_cache",title:"cache.disk_cache"},r=void 0,l={id:"reference/cache/disk_cache",title:"cache.disk_cache",description:"DiskCache",source:"@site/docs/reference/cache/disk_cache.md",sourceDirName:"reference/cache",slug:"/reference/cache/disk_cache",permalink:"/autogen/docs/reference/cache/disk_cache",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/reference/cache/disk_cache.md",tags:[],version:"current",frontMatter:{sidebar_label:"disk_cache",title:"cache.disk_cache"},sidebar:"referenceSideBar",previous:{title:"cosmos_db_cache",permalink:"/autogen/docs/reference/cache/cosmos_db_cache"},next:{title:"in_memory_cache",permalink:"/autogen/docs/reference/cache/in_memory_cache"}},a={},h=[{value:"DiskCache",id:"diskcache",level:2},{value:"__init__",id:"__init__",level:3},{value:"get",id:"get",level:3},{value:"set",id:"set",level:3},{value:"close",id:"close",level:3},{value:"__enter__",id:"__enter__",level:3},{value:"__exit__",id:"__exit__",level:3}];function d(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"diskcache",children:"DiskCache"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class DiskCache(AbstractCache)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Implementation of AbstractCache using the DiskCache library."}),"\n",(0,s.jsx)(n.p,{children:"This class provides a concrete implementation of the AbstractCache\ninterface using the diskcache library for caching data on disk."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cache"})," ",(0,s.jsx)(n.em,{children:"diskcache.Cache"})," - The DiskCache instance used for caching."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Methods"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"init"}),"(self, seed): Initializes the DiskCache with the given seed.\nget(self, key, default=None): Retrieves an item from the cache.\nset(self, key, value): Sets an item in the cache."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"close(self)"})," - Closes the cache."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"__enter__(self)"})," - Context management entry.\n",(0,s.jsx)(n.strong,{children:"exit"}),"(self, exc_type, exc_value, traceback): Context management exit."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __init__(seed: Union[str, int])\n"})}),"\n",(0,s.jsx)(n.p,{children:"Initialize the DiskCache instance."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"seed"})," ",(0,s.jsx)(n.em,{children:"Union[str, int]"})," - A seed or namespace for the cache. This is used to create\na unique storage location for the cache data."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"get",children:"get"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def get(key: str, default: Optional[Any] = None) -> Optional[Any]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieve an item from the cache."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," ",(0,s.jsx)(n.em,{children:"str"})," - The key identifying the item in the cache."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"default"})," ",(0,s.jsx)(n.em,{children:"optional"})," - The default value to return if the key is not found.\nDefaults to None."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"The value associated with the key if found, else the default value."}),"\n",(0,s.jsx)(n.h3,{id:"set",children:"set"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def set(key: str, value: Any) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set an item in the cache."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," ",(0,s.jsx)(n.em,{children:"str"})," - The key under which the item is to be stored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"})," - The value to be stored in the cache."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"close",children:"close"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def close() -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Close the cache."}),"\n",(0,s.jsx)(n.p,{children:"Perform any necessary cleanup, such as closing file handles or\nreleasing resources."}),"\n",(0,s.jsx)(n.h3,{id:"__enter__",children:"__enter__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __enter__() -> Self\n"})}),"\n",(0,s.jsx)(n.p,{children:"Enter the runtime context related to the object."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"self"})," - The instance itself."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"__exit__",children:"__exit__"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def __exit__(exc_type: Optional[Type[BaseException]],\n             exc_value: Optional[BaseException],\n             traceback: Optional[TracebackType]) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Exit the runtime context related to the object."}),"\n",(0,s.jsx)(n.p,{children:"Perform cleanup actions such as closing the cache."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exc_type"})," - The exception type if an exception was raised in the context."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exc_value"})," - The exception value if an exception was raised in the context."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"traceback"})," - The traceback if an exception was raised in the context."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>l,a:()=>r});var s=c(67294);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);