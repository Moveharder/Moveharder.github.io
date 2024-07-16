import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.lL4UzoDo.js";const t="/wcdocs/assets/calctoken.CrHvRkf-.png",p="/wcdocs/assets/text2vec.C-hl33vf.PNG",h="/wcdocs/assets/textembedding.DAHa-jk0.png",l="/wcdocs/assets/askgpt_by_textembedding.DUrA4EmO.png",u=JSON.parse('{"title":"ChatGPT Token 计算与优化","description":"","frontmatter":{},"headers":[],"relativePath":"AIGC/savetoken.md","filePath":"AIGC/savetoken.md","lastUpdated":1686295231000}'),e={name:"AIGC/savetoken.md"},k=n('<h1 id="chatgpt-token-计算与优化" tabindex="-1">ChatGPT Token 计算与优化 <a class="header-anchor" href="#chatgpt-token-计算与优化" aria-label="Permalink to &quot;ChatGPT Token 计算与优化&quot;">​</a></h1><p>众所周知，OpenAI的GPT模型是按照Token收费的，并且每次问答都有最大Token长度限制。所以节约Token和突破Token限制就变得尤为重要了。这篇文章主要记录下我在实际应用中的一些不成熟的见解，欢迎探讨，找到更加省、更加简单上手的策略！</p><h2 id="计算-token" tabindex="-1">计算 Token <a class="header-anchor" href="#计算-token" aria-label="Permalink to &quot;计算 Token&quot;">​</a></h2><p>通过计算能够发现，中文是非常吃亏的，甚至是讲一个中文字拆分然后算 token 的（偏旁部首...），所以尽量用中文向 LLM 提问。</p><h4 id="在线体验" tabindex="-1">在线体验 <a class="header-anchor" href="#在线体验" aria-label="Permalink to &quot;在线体验&quot;">​</a></h4><p><a href="https://platform.openai.com/tokenizer" target="_blank" rel="noreferrer">https://platform.openai.com/tokenizer</a></p><p><img src="'+t+`" alt="计算token"></p><h4 id="代码里使用" tabindex="-1">代码里使用 <a class="header-anchor" href="#代码里使用" aria-label="Permalink to &quot;代码里使用&quot;">​</a></h4><p>NodeJS：<a href="https://www.npmjs.com/package/gpt-3-encoder" target="_blank" rel="noreferrer">gpt-3-encoder</a></p><p>Python：<a href="https://github.com/openai/tiktoken" target="_blank" rel="noreferrer">tiktoken</a></p><h4 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h4><ol><li><p><a href="https://www.npmjs.com/package/gpt-3-encoder" target="_blank" rel="noreferrer">https://www.npmjs.com/package/gpt-3-encoder</a></p></li><li><p><a href="https://community.openai.com/t/gpt-3-encoder-now-available-in-pure-dart/201014" target="_blank" rel="noreferrer">https://community.openai.com/t/gpt-3-encoder-now-available-in-pure-dart/201014</a></p></li></ol><h2 id="优化-token" tabindex="-1">优化 Token <a class="header-anchor" href="#优化-token" aria-label="Permalink to &quot;优化 Token&quot;">​</a></h2><ul><li>1.优化提示词</li><li>2.总结上下文</li><li>3.text-embedding</li></ul><h4 id="优化提示词" tabindex="-1">优化提示词 <a class="header-anchor" href="#优化提示词" aria-label="Permalink to &quot;优化提示词&quot;">​</a></h4><ul><li>用英文提问，英文回答。将回答翻译成需要展示的语言。</li><li>精简提示词，去掉无必要符号。</li><li>...</li></ul><p>这个就要根据经验并结合提示词技巧来做提示词优化了，但是效果比较一般，不适合长对话场景。</p><h4 id="处理上下文" tabindex="-1">处理上下文 <a class="header-anchor" href="#处理上下文" aria-label="Permalink to &quot;处理上下文&quot;">​</a></h4><p>对于长对话聊天来说，随着问答轮数越来越多，每次携带的上下文内容也就越多，很容易达到单次模型提问时的 token 上限。我一般采用两种操作：</p><p>1.最近上下文：当记录超过 N 条后，只取第一条和最后 M 条作为对话上下文；</p><p>2.压缩上下文：当记录超过 N 条后，向 LLM 发起一个「总结聊天内容」的对话，它的回答也就是对话历史的总结 摘录一段 LangChain 的总结上下文提示词：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Progressively summarize the lines of conversation provided, adding onto the previous</span></span>
<span class="line"><span>summary recrning a new summary.</span></span>
<span class="line"><span>EXAMPLE</span></span>
<span class="line"><span>Current summary:</span></span>
<span class="line"><span>The human asks what the AI thinks of artificial intelligence. The AI thinks artificial intelligence is a force for good.</span></span>
<span class="line"><span>New lines of conversation:</span></span>
<span class="line"><span>Human: Why do you think artificial intelligence is a force for good?</span></span>
<span class="line"><span>AI: Because artificial intelligence will help humans reach their full potential.</span></span>
<span class="line"><span>New summary:</span></span>
<span class="line"><span>The human asks what the AI thinks of artificial intelligence. The AI thinks artificial intelligence is a force for good because it will help humans reach their full potential.</span></span>
<span class="line"><span>END OF EXAMPLE</span></span>
<span class="line"><span>Current summary:</span></span>
<span class="line"><span>(summary}</span></span>
<span class="line"><span>New lines of conversation:</span></span>
<span class="line"><span>(new_lines}</span></span>
<span class="line"><span>New summary:</span></span></code></pre></div><h4 id="text-embedding" tabindex="-1">text-embedding <a class="header-anchor" href="#text-embedding" aria-label="Permalink to &quot;text-embedding&quot;">​</a></h4><blockquote><p>这种方式适用于针对特定文档或已有文本资料进行提问，比如企业内部文档、各种说明文档等。可以通过 openai 官方的 textembedding 接口处理，也可以使用 llama-index（都是需要 openai key 的）。</p></blockquote><p>主要流程就是：</p><p>1.text-to-vec：使用 embedding 技术，把目标文档或知识库转换成向量，可以存在本地磁盘，也可以存储在专业的向量数据库（如：Qdrant）</p><p>2.prompt-to-vec：依然是用 text-embedding 技术，把用户发送的提示词转成向量，记作“VP”。拿 VP 在本地磁盘或者专业向量数据库中检索，用一种叫做“余弦相似度”的技术，把相关内容匹配出来（相似度 0 ～ 1，可以定义相似度的值进行结果过滤）。</p><p>3.newprompt-to-gpt：第 2 步中匹配的内容是一条条按照相似度降序排列的记录，每条记录里都包含了「原始文本-向量」的映射。我们只需要取每条记录的「原始文本」，把它注入到新的 Prompt 中，作为最终向 LLM 模型提问的提示词。这样就实现了「针对有效内容的自然语言提问」，节约了 token。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">newPromptLike </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`We have the opportunity to refine the above answer </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(only if needed) with some more context below.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">------------</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{similar_context_msg}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">------------</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Given the new context, refine the original answer to better </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">answer the question. </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">If the context isn&#39;t useful, output the original answer again.\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>在 text-embedding 过程中有一些细活儿需要注意，比如：为了控制每次 embedding 的 token 数量，以及匹配出来文本量的大小，要给文档内容分段，分段的策略也会影响匹配结果的质量。</p><p>下面找了一张网上的图，流程很清晰。 <img src="`+p+`" alt="textembedding"></p><h2 id="一个-qa-文档-embedding-处理示例" tabindex="-1">一个 QA 文档 embedding 处理示例 <a class="header-anchor" href="#一个-qa-文档-embedding-处理示例" aria-label="Permalink to &quot;一个 QA 文档 embedding 处理示例&quot;">​</a></h2><p>以下是我通过 <code>openai</code> 官方 <code>python</code> 包 实现的 <code>text-embedding</code> 过程，整体分为两部份「Build」和「Query」。参考：<a href="https://github.com/openai/openai-cookbook/blob/main/examples/Obtain_dataset.ipynb" target="_blank" rel="noreferrer">https://github.com/openai/openai-cookbook/blob/main/examples/Obtain_dataset.ipynb</a></p><h3 id="_1-build-将文档向量化处理" tabindex="-1">1.build：将文档向量化处理 <a class="header-anchor" href="#_1-build-将文档向量化处理" aria-label="Permalink to &quot;1.build：将文档向量化处理&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pandas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tiktoken</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openai.embeddings_utils </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_embedding</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># embedding model parameters</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">embedding_model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;text-embedding-ada-002&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">embedding_encoding </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cl100k_base&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # this the encoding for text-embedding-ada-002</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">max_tokens </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8000</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # the maximum for text-embedding-ada-002 is 8191</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">readfilename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;qawiki&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 原文档名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">savefilename </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;qawiki_with_embeddings&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># embedding后的文档存储名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># load &amp; inspect dataset</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># to save space, we provide a pre-filtered dataset</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">input_datapath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;data/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">readfilename</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.csv&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 读取csv内容，并将第一列作为索引列</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.read_csv(input_datapath, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index_col</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从 DataFrame 中选择的列的列表</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df[[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Question&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Answer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df.dropna()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;combined&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;问: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df.Question.str.strip() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;答: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df.Answer.str.strip())</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(df[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;combined&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df.head(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># subsample to 1k most recent reviews and remove samples that are too long</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">top_n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">encoding </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tiktoken.get_encoding(embedding_encoding)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 省略太长而无法嵌入的评论</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;n_tokens&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df.combined.apply(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(encoding.encode(x)))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df[df.n_tokens </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> max_tokens].tail(top_n)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(df)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ensure you have your API key set in your environment per the README: https://github.com/openai/openai-python#usage</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This may take a few minutes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;embedding&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df.combined.apply(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x: get_embedding(x, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">engine</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">embedding_model))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df.to_csv(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;data/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">savefilename</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.csv&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="_2-query-搜索向量" tabindex="-1">2.query：搜索向量 <a class="header-anchor" href="#_2-query-搜索向量" aria-label="Permalink to &quot;2.query：搜索向量&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openai.embeddings_utils </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_embedding</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sklearn.metrics.pairwise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cosine_similarity</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pandas </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ast</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> np</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">input_datapath </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;data/qawiki_with_embeddings.csv&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pd.read_csv(input_datapath)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 embedding 列中的字符串转换为浮点数数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">df.embedding </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df.embedding.apply(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x: np.array(ast.literal_eval(x)))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> search_reviews</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(df, product_description, n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, pprint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 获取问题的embedding</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    embedding </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_embedding(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        product_description, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">engine</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text-embedding-ada-002&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 计算embedding cosin相似度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    df[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;similarities&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cosine_similarity(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        np.array(df.embedding.tolist()), np.array(embedding).reshape(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> df.sort_values(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;similarities&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ascending</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).head(n)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;有什么需要帮助的吗？</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输入「exit」退出程序</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;exit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 获取查询结果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> search_reviews(df, msg, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 我需要把符合相似度条件的记录中的combined字段拼接起来，存储在relativecontent中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    relativecontent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.itertuples():</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # print(&#39;similarities: &#39; + str(row.similarities))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row.similarities </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            relativecontent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row.combined </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;drop a row of low similarities: &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(row.similarities))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # print(relativecontent)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    newprompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你是公司的AI客服，请结合&#39;&#39;&#39;里的内容回答我的问题，不需要解释。如果&#39;&#39;&#39;里的内容没有用处，请输入原始回答。</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">内容：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">relativecontent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请问，</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">msg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;新的提示词</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newprompt)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TODO</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # answer = callGPT(newprompt)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 等待继续输入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">还有什么问题？&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+h+'" alt="text-embedding"></p><p><img src="'+l+'" alt="askgpt-by-textembedding"></p>',39),r=[k];function d(E,g,o,y,c,F){return a(),i("div",null,r)}const C=s(e,[["render",d]]);export{u as __pageData,C as default};