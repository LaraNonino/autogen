"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5101],{14031:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=s(85893),i=s(11151);const c={sidebar_label:"pgvectordb",title:"agentchat.contrib.vectordb.pgvectordb"},l=void 0,o={id:"reference/agentchat/contrib/vectordb/pgvectordb",title:"agentchat.contrib.vectordb.pgvectordb",description:"Collection",source:"@site/docs/reference/agentchat/contrib/vectordb/pgvectordb.md",sourceDirName:"reference/agentchat/contrib/vectordb",slug:"/reference/agentchat/contrib/vectordb/pgvectordb",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/pgvectordb",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/reference/agentchat/contrib/vectordb/pgvectordb.md",tags:[],version:"current",frontMatter:{sidebar_label:"pgvectordb",title:"agentchat.contrib.vectordb.pgvectordb"},sidebar:"referenceSideBar",previous:{title:"mongodb",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/mongodb"},next:{title:"qdrant",permalink:"/autogen/docs/reference/agentchat/contrib/vectordb/qdrant"}},r={},d=[{value:"Collection",id:"collection",level:2},{value:"__init__",id:"__init__",level:3},{value:"add",id:"add",level:3},{value:"upsert",id:"upsert",level:3},{value:"count",id:"count",level:3},{value:"table_exists",id:"table_exists",level:3},{value:"get",id:"get",level:3},{value:"update",id:"update",level:3},{value:"euclidean_distance",id:"euclidean_distance",level:3},{value:"cosine_distance",id:"cosine_distance",level:3},{value:"inner_product_distance",id:"inner_product_distance",level:3},{value:"query",id:"query",level:3},{value:"convert_string_to_array",id:"convert_string_to_array",level:3},{value:"modify",id:"modify",level:3},{value:"delete",id:"delete",level:3},{value:"delete_collection",id:"delete_collection",level:3},{value:"create_collection",id:"create_collection",level:3},{value:"PGVectorDB",id:"pgvectordb",level:2},{value:"__init__",id:"__init__-1",level:3},{value:"establish_connection",id:"establish_connection",level:3},{value:"create_collection",id:"create_collection-1",level:3},{value:"get_collection",id:"get_collection",level:3},{value:"delete_collection",id:"delete_collection-1",level:3},{value:"insert_docs",id:"insert_docs",level:3},{value:"update_docs",id:"update_docs",level:3},{value:"delete_docs",id:"delete_docs",level:3},{value:"retrieve_docs",id:"retrieve_docs",level:3},{value:"get_docs_by_ids",id:"get_docs_by_ids",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"collection",children:"Collection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Collection()\n"})}),"\n",(0,t.jsx)(n.p,{children:"A Collection object for PGVector."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attributes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"client"})," - The PGVector client."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," ",(0,t.jsx)(n.em,{children:"str"}),' - The name of the collection. Default is "documents".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"embedding_function"})," ",(0,t.jsx)(n.em,{children:"Callable"}),' - The embedding function used to generate the vector representation.\nDefault is None. SentenceTransformer("all-MiniLM-L6-v2").encode will be used when None.\nModels can be chosen from:\n',(0,t.jsx)(n.a,{href:"https://huggingface.co/models?library=sentence-transformers",children:"https://huggingface.co/models?library=sentence-transformers"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadata"})," ",(0,t.jsx)(n.em,{children:"Optional[dict]"})," - The metadata of the collection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"get_or_create"})," ",(0,t.jsx)(n.em,{children:"Optional"})," - The flag indicating whether to get or create the collection."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def __init__(client=None,\n             collection_name: str = "autogen-docs",\n             embedding_function: Callable = None,\n             metadata=None,\n             get_or_create=None)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Initialize the Collection object."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"client"})," - The PostgreSQL client."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"}),' - The name of the collection. Default is "documents".']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"embedding_function"})," - The embedding function used to generate the vector representation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadata"})," - The metadata of the collection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"get_or_create"})," - The flag indicating whether to get or create the collection."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"add",children:"add"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def add(ids: List[ItemID],\n        documents: List,\n        embeddings: List = None,\n        metadatas: List = None) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add documents to the collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ids"})," ",(0,t.jsx)(n.em,{children:"List[ItemID]"})," - A list of document IDs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"embeddings"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of document embeddings. Optional"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadatas"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of document metadatas. Optional"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"documents"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of documents."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"upsert",children:"upsert"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def upsert(ids: List[ItemID],\n           documents: List,\n           embeddings: List = None,\n           metadatas: List = None) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Upsert documents into the collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ids"})," ",(0,t.jsx)(n.em,{children:"List[ItemID]"})," - A list of document IDs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"documents"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of documents."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"embeddings"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of document embeddings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadatas"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of document metadatas."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"count",children:"count"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def count() -> int\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the total number of documents in the collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"int"})," - The total number of documents."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"table_exists",children:"table_exists"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def table_exists(table_name: str) -> bool\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check if a table exists in the PostgreSQL database."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"table_name"})," ",(0,t.jsx)(n.em,{children:"str"})," - The name of the table to check."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bool"})," - True if the table exists, False otherwise."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"get",children:"get"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def get(ids: Optional[str] = None,\n        include: Optional[str] = None,\n        where: Optional[str] = None,\n        limit: Optional[Union[int, str]] = None,\n        offset: Optional[Union[int, str]] = None) -> List[Document]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve documents from the collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ids"})," ",(0,t.jsx)(n.em,{children:"Optional[List]"})," - A list of document IDs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"include"})," ",(0,t.jsx)(n.em,{children:"Optional"})," - The fields to include."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"where"})," ",(0,t.jsx)(n.em,{children:"Optional"})," - Additional filtering criteria."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"limit"})," ",(0,t.jsx)(n.em,{children:"Optional"})," - The maximum number of documents to retrieve."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"offset"})," ",(0,t.jsx)(n.em,{children:"Optional"})," - The offset for pagination."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"List"})," - The retrieved documents."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"update",children:"update"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def update(ids: List, embeddings: List, metadatas: List,\n           documents: List) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Update documents in the collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ids"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of document IDs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"embeddings"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of document embeddings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadatas"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of document metadatas."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"documents"})," ",(0,t.jsx)(n.em,{children:"List"})," - A list of documents."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"euclidean_distance",children:"euclidean_distance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@staticmethod\ndef euclidean_distance(arr1: List[float], arr2: List[float]) -> float\n"})}),"\n",(0,t.jsx)(n.p,{children:"Calculate the Euclidean distance between two vectors."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"arr1 (List[float]): The first vector."}),"\n",(0,t.jsx)(n.li,{children:"arr2 (List[float]): The second vector."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"float: The Euclidean distance between arr1 and arr2."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cosine_distance",children:"cosine_distance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@staticmethod\ndef cosine_distance(arr1: List[float], arr2: List[float]) -> float\n"})}),"\n",(0,t.jsx)(n.p,{children:"Calculate the cosine distance between two vectors."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"arr1 (List[float]): The first vector."}),"\n",(0,t.jsx)(n.li,{children:"arr2 (List[float]): The second vector."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"float: The cosine distance between arr1 and arr2."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"inner_product_distance",children:"inner_product_distance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@staticmethod\ndef inner_product_distance(arr1: List[float], arr2: List[float]) -> float\n"})}),"\n",(0,t.jsx)(n.p,{children:"Calculate the Euclidean distance between two vectors."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"arr1 (List[float]): The first vector."}),"\n",(0,t.jsx)(n.li,{children:"arr2 (List[float]): The second vector."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"float: The Euclidean distance between arr1 and arr2."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"query",children:"query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def query(query_texts: List[str],\n          collection_name: Optional[str] = None,\n          n_results: Optional[int] = 10,\n          distance_type: Optional[str] = "euclidean",\n          distance_threshold: Optional[float] = -1,\n          include_embedding: Optional[bool] = False) -> QueryResults\n'})}),"\n",(0,t.jsx)(n.p,{children:"Query documents in the collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"query_texts"})," ",(0,t.jsx)(n.em,{children:"List[str]"})," - A list of query texts."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," ",(0,t.jsx)(n.em,{children:"Optional[str]"})," - The name of the collection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"n_results"})," ",(0,t.jsx)(n.em,{children:"int"})," - The maximum number of results to return."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"distance_type"})," ",(0,t.jsx)(n.em,{children:"Optional[str]"})," - Distance search type - euclidean or cosine"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"distance_threshold"})," ",(0,t.jsx)(n.em,{children:"Optional[float]"})," - Distance threshold to limit searches"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"include_embedding"})," ",(0,t.jsx)(n.em,{children:"Optional[bool]"})," - Include embedding values in QueryResults"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"QueryResults"})," - The query results."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"convert_string_to_array",children:"convert_string_to_array"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@staticmethod\ndef convert_string_to_array(array_string: str) -> List[float]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Convert a string representation of an array to a list of floats."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"array_string (str): The string representation of the array."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"list: A list of floats parsed from the input string. If the input is\nnot a string, it returns the input itself."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"modify",children:"modify"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def modify(metadata, collection_name: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Modify metadata for the collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," - The name of the collection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadata"})," - The new metadata."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"delete",children:"delete"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def delete(ids: List[ItemID], collection_name: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Delete documents from the collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ids"})," ",(0,t.jsx)(n.em,{children:"List[ItemID]"})," - A list of document IDs to delete."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," ",(0,t.jsx)(n.em,{children:"str"})," - The name of the collection to delete."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"delete_collection",children:"delete_collection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def delete_collection(collection_name: Optional[str] = None) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Delete the entire collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," ",(0,t.jsx)(n.em,{children:"Optional[str]"})," - The name of the collection to delete."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"create_collection",children:"create_collection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def create_collection(collection_name: Optional[str] = None,\n                      dimension: Optional[Union[str, int]] = None) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create a new collection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," ",(0,t.jsx)(n.em,{children:"Optional[str]"})," - The name of the new collection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dimension"})," ",(0,t.jsx)(n.em,{children:"Optional[Union[str, int]]"})," - The dimension size of the sentence embedding model"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h2,{id:"pgvectordb",children:"PGVectorDB"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class PGVectorDB(VectorDB)\n"})}),"\n",(0,t.jsx)(n.p,{children:"A vector database that uses PGVector as the backend."}),"\n",(0,t.jsx)(n.h3,{id:"__init__-1",children:"__init__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def __init__(*,\n             conn: Optional[psycopg.Connection] = None,\n             connection_string: Optional[str] = None,\n             host: Optional[str] = None,\n             port: Optional[Union[int, str]] = None,\n             dbname: Optional[str] = None,\n             username: Optional[str] = None,\n             password: Optional[str] = None,\n             connect_timeout: Optional[int] = 10,\n             embedding_function: Callable = None,\n             metadata: Optional[dict] = None) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Initialize the vector database."}),"\n",(0,t.jsx)(n.p,{children:"Note: connection_string or host + port + dbname must be specified"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"conn"})," - psycopg.Connection | A customer connection object to connect to the database.\nA connection object may include additional key/values:\n",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING",children:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connection_string"}),' - "postgresql://username:password@hostname:port/database" | The PGVector connection string. Default is None.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"host"})," - str | The host to connect to. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"port"})," - int | The port to connect to. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dbname"})," - str | The database name to connect to. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"username"})," - str | The database username to use. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"password"})," - str | The database user password to use. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connect_timeout"})," - int | The timeout to set for the connection. Default is 10."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"embedding_function"}),' - Callable | The embedding function used to generate the vector representation.\nDefault is None. SentenceTransformer("all-MiniLM-L6-v2").encode will be used when None.\nModels can be chosen from:\n',(0,t.jsx)(n.a,{href:"https://huggingface.co/models?library=sentence-transformers",children:"https://huggingface.co/models?library=sentence-transformers"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metadata"})," - dict | The metadata of the vector database. Default is None. If None, it will use this"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setting"}),' - {"hnsw:space": "ip", "hnsw:construction_ef": 30, "hnsw:M": 16}. Creates Index on table\nusing hnsw (embedding vector_l2_ops) WITH (m = hnsw:M) ef_construction = "hnsw:construction_ef".\nFor more info: ',(0,t.jsx)(n.a,{href:"https://github.com/pgvector/pgvector?tab=readme-ov-file#hnsw",children:"https://github.com/pgvector/pgvector?tab=readme-ov-file#hnsw"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"establish_connection",children:"establish_connection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def establish_connection(\n        conn: Optional[psycopg.Connection] = None,\n        connection_string: Optional[str] = None,\n        host: Optional[str] = None,\n        port: Optional[Union[int, str]] = None,\n        dbname: Optional[str] = None,\n        username: Optional[str] = None,\n        password: Optional[str] = None,\n        connect_timeout: Optional[int] = 10) -> psycopg.Connection\n"})}),"\n",(0,t.jsx)(n.p,{children:"Establishes a connection to a PostgreSQL database using psycopg."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"conn"})," - An existing psycopg connection object. If provided, this connection will be used."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connection_string"})," - A string containing the connection information. If provided, a new connection will be established using this string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"host"})," - The hostname of the PostgreSQL server. Used if connection_string is not provided."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"port"})," - The port number to connect to at the server host. Used if connection_string is not provided."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dbname"})," - The database name. Used if connection_string is not provided."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"username"})," - The username to connect as. Used if connection_string is not provided."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"password"})," - The user's password. Used if connection_string is not provided."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connect_timeout"})," - Maximum wait for connection, in seconds. The default is 10 seconds."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"A psycopg.Connection object representing the established connection."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"PermissionError if no credentials are supplied"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"psycopg.Error"})," - If an error occurs while trying to connect to the database."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create_collection-1",children:"create_collection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def create_collection(collection_name: str,\n                      overwrite: bool = False,\n                      get_or_create: bool = True) -> Collection\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create a collection in the vector database.\nCase 1. if the collection does not exist, create the collection.\nCase 2. the collection exists, if overwrite is True, it will overwrite the collection.\nCase 3. the collection exists and overwrite is False, if get_or_create is True, it will get the collection,\notherwise it raise a ValueError."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"overwrite"})," - bool | Whether to overwrite the collection if it exists. Default is False."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"get_or_create"})," - bool | Whether to get the collection if it exists. Default is True."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Collection | The collection object."}),"\n",(0,t.jsx)(n.h3,{id:"get_collection",children:"get_collection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def get_collection(collection_name: str = None) -> Collection\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the collection from the vector database."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None. If None, return the\ncurrent active collection."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Collection | The collection object."}),"\n",(0,t.jsx)(n.h3,{id:"delete_collection-1",children:"delete_collection"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def delete_collection(collection_name: str) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Delete the collection from the vector database."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"insert_docs",children:"insert_docs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def insert_docs(docs: List[Document],\n                collection_name: str = None,\n                upsert: bool = False) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Insert documents into the collection of the vector database."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docs"})," - List[Document] | A list of documents. Each document is a TypedDict ",(0,t.jsx)(n.code,{children:"Document"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"upsert"})," - bool | Whether to update the document if it exists. Default is False."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"update_docs",children:"update_docs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def update_docs(docs: List[Document], collection_name: str = None) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Update documents in the collection of the vector database."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docs"})," - List[Document] | A list of documents."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"delete_docs",children:"delete_docs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def delete_docs(ids: List[ItemID], collection_name: str = None) -> None\n"})}),"\n",(0,t.jsx)(n.p,{children:"Delete documents from the collection of the vector database."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. Each id is a typed ",(0,t.jsx)(n.code,{children:"ItemID"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"retrieve_docs",children:"retrieve_docs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def retrieve_docs(queries: List[str],\n                  collection_name: str = None,\n                  n_results: int = 10,\n                  distance_threshold: float = -1) -> QueryResults\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the queries."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"queries"})," - List[str] | A list of queries. Each query is a string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"n_results"})," - int | The number of relevant documents to return. Default is 10."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"distance_threshold"})," - float | The threshold for the distance score, only distance smaller than it will be\nreturned. Don't filter with it if < 0. Default is -1."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kwargs"})," - Dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"QueryResults | The query results. Each query result is a list of list of tuples containing the document and\nthe distance."}),"\n",(0,t.jsx)(n.h3,{id:"get_docs_by_ids",children:"get_docs_by_ids"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def get_docs_by_ids(ids: List[ItemID] = None,\n                    collection_name: str = None,\n                    include=None,\n                    **kwargs) -> List[Document]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve documents from the collection of the vector database based on the ids."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ids"})," - List[ItemID] | A list of document ids. If None, will return all the documents. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"collection_name"})," - str | The name of the collection. Default is None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"include"}),' - List[str] | The fields to include. Default is None.\nIf None, will include ["metadatas", "documents"], ids will always be included.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"kwargs"})," - dict | Additional keyword arguments."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"List[Document] | The results."})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var t=s(67294);const i={},c=t.createContext(i);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);