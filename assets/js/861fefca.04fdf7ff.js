"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2744],{46163:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var t=s(85893),i=s(11151);const l={sidebar_label:"completion",title:"oai.completion"},o=void 0,r={id:"reference/oai/completion",title:"oai.completion",description:"Completion",source:"@site/docs/reference/oai/completion.md",sourceDirName:"reference/oai",slug:"/reference/oai/completion",permalink:"/autogen/docs/reference/oai/completion",draft:!1,unlisted:!1,editUrl:"https://github.com/autogenhub/autogen/edit/main/website/docs/reference/oai/completion.md",tags:[],version:"current",frontMatter:{sidebar_label:"completion",title:"oai.completion"},sidebar:"referenceSideBar",previous:{title:"cohere",permalink:"/autogen/docs/reference/oai/cohere"},next:{title:"gemini",permalink:"/autogen/docs/reference/oai/gemini"}},c={},a=[{value:"Completion",id:"completion",level:2},{value:"set_cache",id:"set_cache",level:3},{value:"clear_cache",id:"clear_cache",level:3},{value:"tune",id:"tune",level:3},{value:"create",id:"create",level:3},{value:"test",id:"test",level:3},{value:"cost",id:"cost",level:3},{value:"extract_text",id:"extract_text",level:3},{value:"extract_text_or_function_call",id:"extract_text_or_function_call",level:3},{value:"logged_history",id:"logged_history",level:3},{value:"print_usage_summary",id:"print_usage_summary",level:3},{value:"start_logging",id:"start_logging",level:3},{value:"stop_logging",id:"stop_logging",level:3},{value:"ChatCompletion",id:"chatcompletion",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"completion",children:"Completion"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Completion(openai_Completion)\n"})}),"\n",(0,t.jsx)(n.p,{children:"(openai<1) A class for OpenAI completion API."}),"\n",(0,t.jsx)(n.p,{children:"It also supports: ChatCompletion, Azure OpenAI API."}),"\n",(0,t.jsx)(n.h3,{id:"set_cache",children:"set_cache"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@classmethod\ndef set_cache(cls,\n              seed: Optional[int] = 41,\n              cache_path_root: Optional[str] = ".cache")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Set cache path."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"seed"})," ",(0,t.jsx)(n.em,{children:"int, Optional"})," - The integer identifier for the pseudo seed.\nResults corresponding to different seeds will be cached in different places."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cache_path"})," ",(0,t.jsx)(n.em,{children:"str, Optional"})," - The root path for the cache.\nThe complete cache path will be {cache_path_root}/{seed}."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"clear_cache",children:"clear_cache"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@classmethod\ndef clear_cache(cls,\n                seed: Optional[int] = None,\n                cache_path_root: Optional[str] = ".cache")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Clear cache."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"seed"})," ",(0,t.jsx)(n.em,{children:"int, Optional"})," - The integer identifier for the pseudo seed.\nIf omitted, all caches under cache_path_root will be cleared."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cache_path"})," ",(0,t.jsx)(n.em,{children:"str, Optional"})," - The root path for the cache.\nThe complete cache path will be {cache_path_root}/{seed}."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tune",children:"tune"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef tune(cls,\n         data: List[Dict],\n         metric: str,\n         mode: str,\n         eval_func: Callable,\n         log_file_name: Optional[str] = None,\n         inference_budget: Optional[float] = None,\n         optimization_budget: Optional[float] = None,\n         num_samples: Optional[int] = 1,\n         logging_level: Optional[int] = logging.WARNING,\n         **config)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Tune the parameters for the OpenAI API call."}),"\n",(0,t.jsx)(n.p,{children:"TODO: support parallel tuning with ray or spark.\nTODO: support agg_method as in test"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data"})," ",(0,t.jsx)(n.em,{children:"list"})," - The list of data points."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metric"})," ",(0,t.jsx)(n.em,{children:"str"})," - The metric to optimize."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mode"})," ",(0,t.jsx)(n.em,{children:"str"}),' - The optimization mode, "min" or "max.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eval_func"})," ",(0,t.jsx)(n.em,{children:"Callable"})," - The evaluation function for responses.\nThe function should take a list of responses and a data point as input,\nand return a dict of metrics. For example,"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def eval_func(responses, **data):\n    solution = data["solution"]\n    success_list = []\n    n = len(responses)\n    for i in range(n):\n        response = responses[i]\n        succeed = is_equiv_chain_of_thought(response, solution)\n        success_list.append(succeed)\n    return {\n        "expected_success": 1 - pow(1 - sum(success_list) / n, n),\n        "success": any(s for s in success_list),\n    }\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"log_file_name"})," ",(0,t.jsx)(n.em,{children:"str, optional"})," - The log file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"inference_budget"})," ",(0,t.jsx)(n.em,{children:"float, optional"})," - The inference budget, dollar per instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"optimization_budget"})," ",(0,t.jsx)(n.em,{children:"float, optional"})," - The optimization budget, dollar in total."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"num_samples"})," ",(0,t.jsx)(n.em,{children:"int, optional"})," - The number of samples to evaluate.\n-1 means no hard restriction in the number of trials\nand the actual number is decided by optimization_budget. Defaults to 1."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"logging_level"})," ",(0,t.jsx)(n.em,{children:"optional"})," - logging level. Defaults to logging.WARNING."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**config"})," ",(0,t.jsx)(n.em,{children:"dict"})," - The search space to update over the default search.\nFor prompt, please provide a string/Callable or a list of strings/Callables.\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'If prompt is provided for chat models, it will be converted to messages under role "user".'}),"\n",(0,t.jsx)(n.li,{children:"Do not provide both prompt and messages for chat models, but provide either of them."}),"\n",(0,t.jsxs)(n.li,{children:["A string template will be used to generate a prompt for each data instance\nusing ",(0,t.jsx)(n.code,{children:"prompt.format(**data)"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["A callable template will be used to generate a prompt for each data instance\nusing ",(0,t.jsx)(n.code,{children:"prompt(data)"}),'.\nFor stop, please provide a string, a list of strings, or a list of lists of strings.\nFor messages (chat models only), please provide a list of messages (for a single chat prefix)\nor a list of lists of messages (for multiple choices of chat prefix to choose from).\nEach message should be a dict with keys "role" and "content". The value of "content" can be a string/Callable template.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dict"})," - The optimized hyperparameter setting."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tune.ExperimentAnalysis"})," - The tuning results."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create",children:"create"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef create(cls,\n           context: Optional[Dict] = None,\n           use_cache: Optional[bool] = True,\n           config_list: Optional[List[Dict]] = None,\n           filter_func: Optional[Callable[[Dict, Dict], bool]] = None,\n           raise_on_ratelimit_or_timeout: Optional[bool] = True,\n           allow_format_str_template: Optional[bool] = False,\n           **config)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Make a completion for a given context."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"context"})," ",(0,t.jsx)(n.em,{children:"Dict, Optional"})," - The context to instantiate the prompt.\nIt needs to contain keys that are used by the prompt template or the filter function.\nE.g., ",(0,t.jsx)(n.code,{children:'prompt="Complete the following sentence: {prefix}, context={"prefix": "Today I feel"}'}),'.\nThe actual prompt will be:\n"Complete the following sentence: Today I feel".\nMore examples can be found at ',(0,t.jsx)(n.a,{href:"https://autogenhub.github.io/autogen/docs/Use-Cases/enhanced_inference#templating",children:"templating"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"use_cache"})," ",(0,t.jsx)(n.em,{children:"bool, Optional"})," - Whether to use cached responses."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config_list"})," ",(0,t.jsx)(n.em,{children:"List, Optional"})," - List of configurations for the completion to try.\nThe first one that does not raise an error will be used.\nOnly the differences from the default config need to be provided.\nE.g.,"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'response = oai.Completion.create(\n    config_list=[\n        {\n            "model": "gpt-4",\n            "api_key": os.environ.get("AZURE_OPENAI_API_KEY"),\n            "api_type": "azure",\n            "base_url": os.environ.get("AZURE_OPENAI_API_BASE"),\n            "api_version": "2024-02-01",\n        },\n        {\n            "model": "gpt-3.5-turbo",\n            "api_key": os.environ.get("OPENAI_API_KEY"),\n            "api_type": "openai",\n            "base_url": "https://api.openai.com/v1",\n        },\n        {\n            "model": "llama-7B",\n            "base_url": "http://127.0.0.1:8080",\n            "api_type": "openai",\n        }\n    ],\n    prompt="Hi",\n)\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"filter_func"})," ",(0,t.jsx)(n.em,{children:"Callable, Optional"})," - A function that takes in the context and the response and returns a boolean to indicate whether the response is valid. E.g.,"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def yes_or_no_filter(context, config, response):\n    return context.get("yes_or_no_choice", False) is False or any(\n        text in ["Yes.", "No."] for text in oai.Completion.extract_text(response)\n    )\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"raise_on_ratelimit_or_timeout"})," ",(0,t.jsx)(n.em,{children:"bool, Optional"})," - Whether to raise RateLimitError or Timeout when all configs fail.\nWhen set to False, -1 will be returned when all configs fail."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allow_format_str_template"})," ",(0,t.jsx)(n.em,{children:"bool, Optional"})," - Whether to allow format string template in the config."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**config"}),' - Configuration for the openai API call. This is used as parameters for calling openai API.\nThe "prompt" or "messages" parameter can contain a template (str or Callable) which will be instantiated with the context.\nBesides the parameters for the openai API call, it can also contain:\n',(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"max_retry_period"})," (int): the total time (in seconds) allowed for retrying failed requests."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"retry_wait_time"})," (int): the time interval to wait (in seconds) before retrying a failed request."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cache_seed"}),' (int) for the cache. This is useful when implementing "controlled randomness" for the completion.']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Responses from OpenAI API, with additional fields."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cost"}),": the total cost.\nWhen ",(0,t.jsx)(n.code,{children:"config_list"})," is provided, the response will contain a few more fields:"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config_id"}),": the index of the config in the config_list that is used to generate the response."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pass_filter"}),": whether the response passes the filter function. None if no filter is provided."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"test",children:"test"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@classmethod\ndef test(cls,\n         data,\n         eval_func=None,\n         use_cache=True,\n         agg_method="avg",\n         return_responses_and_per_instance_result=False,\n         logging_level=logging.WARNING,\n         **config)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Evaluate the responses created with the config for the OpenAI API call."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data"})," ",(0,t.jsx)(n.em,{children:"list"})," - The list of test data points."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"eval_func"})," ",(0,t.jsx)(n.em,{children:"Callable"})," - The evaluation function for responses per data instance.\nThe function should take a list of responses and a data point as input,\nand return a dict of metrics. You need to either provide a valid callable\neval_func; or do not provide one (set None) but call the test function after\ncalling the tune function in which a eval_func is provided.\nIn the latter case we will use the eval_func provided via tune function.\nDefaults to None."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def eval_func(responses, **data):\n    solution = data["solution"]\n    success_list = []\n    n = len(responses)\n    for i in range(n):\n        response = responses[i]\n        succeed = is_equiv_chain_of_thought(response, solution)\n        success_list.append(succeed)\n    return {\n        "expected_success": 1 - pow(1 - sum(success_list) / n, n),\n        "success": any(s for s in success_list),\n    }\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"use_cache"})," ",(0,t.jsx)(n.em,{children:"bool, Optional"})," - Whether to use cached responses. Defaults to True."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"agg_method"})," ",(0,t.jsx)(n.em,{children:"str, Callable or a dict of Callable"})," - Result aggregation method (across\nmultiple instances) for each of the metrics. Defaults to 'avg'.\nAn example agg_method in str:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"agg_method = 'median'\n"})}),"\n",(0,t.jsx)(n.p,{children:"An example agg_method in a Callable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"agg_method = np.median\n"})}),"\n",(0,t.jsx)(n.p,{children:"An example agg_method in a dict of Callable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"agg_method={'median_success': np.median, 'avg_success': np.mean}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"return_responses_and_per_instance_result"})," ",(0,t.jsx)(n.em,{children:"bool"})," - Whether to also return responses\nand per instance results in addition to the aggregated results."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"logging_level"})," ",(0,t.jsx)(n.em,{children:"optional"})," - logging level. Defaults to logging.WARNING."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**config"})," ",(0,t.jsx)(n.em,{children:"dict"})," - parameters passed to the openai api call ",(0,t.jsx)(n.code,{children:"create()"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.p,{children:["None when no valid eval_func is provided in either test or tune;\nOtherwise, a dict of aggregated results, responses and per instance results if ",(0,t.jsx)(n.code,{children:"return_responses_and_per_instance_result"})," is True;\nOtherwise, a dict of aggregated results (responses and per instance results are not returned)."]}),"\n",(0,t.jsx)(n.h3,{id:"cost",children:"cost"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef cost(cls, response: dict)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Compute the cost of an API call."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"response"})," ",(0,t.jsx)(n.em,{children:"dict"})," - The response from OpenAI API."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"The cost in USD. 0 if the model is not supported."}),"\n",(0,t.jsx)(n.h3,{id:"extract_text",children:"extract_text"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef extract_text(cls, response: dict) -> List[str]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Extract the text from a completion or chat response."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"response"})," ",(0,t.jsx)(n.em,{children:"dict"})," - The response from OpenAI API."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"A list of text in the responses."}),"\n",(0,t.jsx)(n.h3,{id:"extract_text_or_function_call",children:"extract_text_or_function_call"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef extract_text_or_function_call(cls, response: dict) -> List[str]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Extract the text or function calls from a completion or chat response."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"response"})," ",(0,t.jsx)(n.em,{children:"dict"})," - The response from OpenAI API."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"A list of text or function calls in the responses."}),"\n",(0,t.jsx)(n.h3,{id:"logged_history",children:"logged_history"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@classmethod\n@property\ndef logged_history(cls) -> Dict\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return the book keeping dictionary."}),"\n",(0,t.jsx)(n.h3,{id:"print_usage_summary",children:"print_usage_summary"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef print_usage_summary(cls) -> Dict\n"})}),"\n",(0,t.jsx)(n.p,{children:"Return the usage summary."}),"\n",(0,t.jsx)(n.h3,{id:"start_logging",children:"start_logging"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef start_logging(cls,\n                  history_dict: Optional[Dict] = None,\n                  compact: Optional[bool] = True,\n                  reset_counter: Optional[bool] = True)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start book keeping."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"history_dict"})," ",(0,t.jsx)(n.em,{children:"Dict"})," - A dictionary for book keeping.\nIf no provided, a new one will be created."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"compact"})," ",(0,t.jsx)(n.em,{children:"bool"})," - Whether to keep the history dictionary compact.\nCompact history contains one key per conversation, and the value is a dictionary\nlike:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "create_at": [0, 1],\n    "cost": [0.1, 0.2],\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:'where "created_at" is the index of API calls indicating the order of all the calls,\nand "cost" is the cost of each call. This example shows that the conversation is based\non two API calls. The compact format is useful for condensing the history of a conversation.\nIf compact is False, the history dictionary will contain all the API calls: the key\nis the index of the API call, and the value is a dictionary like:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    "request": request_dict,\n    "response": response_dict,\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"where request_dict is the request sent to OpenAI API, and response_dict is the response.\nFor a conversation containing two API calls, the non-compact history dictionary will be like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'{\n    0: {\n        "request": request_dict_0,\n        "response": response_dict_0,\n    },\n    1: {\n        "request": request_dict_1,\n        "response": response_dict_1,\n    },\n'})}),"\n",(0,t.jsx)(n.p,{children:"The first request's messages plus the response is equal to the second request's messages.\nFor a conversation with many turns, the non-compact history dictionary has a quadratic size\nwhile the compact history dict has a linear size."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"reset_counter"})," ",(0,t.jsx)(n.em,{children:"bool"})," - whether to reset the counter of the number of API calls."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"stop_logging",children:"stop_logging"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"@classmethod\ndef stop_logging(cls)\n"})}),"\n",(0,t.jsx)(n.p,{children:"End book keeping."}),"\n",(0,t.jsx)(n.h2,{id:"chatcompletion",children:"ChatCompletion"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class ChatCompletion(Completion)\n"})}),"\n",(0,t.jsx)(n.p,{children:"(openai<1) A class for OpenAI API ChatCompletion. Share the same API as Completion."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(67294);const i={},l=t.createContext(i);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);