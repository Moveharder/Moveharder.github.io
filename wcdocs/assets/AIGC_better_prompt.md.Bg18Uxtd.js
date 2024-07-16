import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.lL4UzoDo.js";const p="/wcdocs/assets/inject_prompts.T7yZuTie.png",l="/wcdocs/assets/check_conditions.DNB_jyjj.png",t="/wcdocs/assets/few_shots_prompting.Cx8DhtMb.png",e="/wcdocs/assets/timetothink_rush_answer.DUnEqi_K.png",h="/wcdocs/assets/timetothink_rush_answer2.BlBpdZde.png",k="/wcdocs/assets/timetothink_selfcalc_answer.bhoD8F16.png",r="/wcdocs/assets/%E5%B9%BB%E8%A7%89%E5%9B%9E%E7%AD%94.CEUA4eBG.png",F="/wcdocs/assets/%E5%B9%BB%E8%A7%89%E5%9B%9E%E7%AD%942.BB6UTz7W.png",c="/wcdocs/assets/%E8%BF%AD%E4%BB%A3%E6%8F%90%E7%A4%BA%E8%AF%8D.D6HLaOSQ.png",d="/wcdocs/assets/%E6%8E%A8%E7%90%86_%E5%AE%A2%E6%88%B7%E8%AF%84%E4%BB%B71.DicvMO8R.png",E="/wcdocs/assets/%E6%8E%A8%E7%90%86_%E5%AE%A2%E6%88%B7%E8%AF%84%E4%BB%B72.kfGjvIIt.png",o="/wcdocs/assets/%E8%BD%AC%E6%8D%A2_%E9%80%9A%E7%94%A8%E7%BF%BB%E8%AF%91.C2B09XLT.png",g="/wcdocs/assets/%E8%BD%AC%E6%8D%A2_%E9%80%9A%E7%94%A8%E7%BF%BB%E8%AF%912.B7NDxizA.png",y="/wcdocs/assets/%E8%BD%AC%E6%8D%A2_%E6%8B%BC%E5%86%99%E6%A3%80%E6%9F%A5.CzKu-YzV.png",B="/wcdocs/assets/%E8%BD%AC%E6%8D%A2_%E6%8B%BC%E5%86%99%E6%A3%80%E6%9F%A52.BdOJwZ48.png",C="/wcdocs/assets/%E6%89%A9%E5%B1%95%E7%B1%BB_email.Gxh4fHTk.png",u="/wcdocs/assets/pizza_orderbot.Dv9eGdPs.png",m="/wcdocs/assets/activity_orderbot.BiiEPxdS.png",_="/wcdocs/assets/context.CBZ11Ppd.png",b="/wcdocs/assets/system_role.Cj_4NVXm.png",A="/wcdocs/assets/Mermaidjs%E5%85%B3%E7%B3%BB%E5%9B%BE_preview.DgWOFpDl.png",I=JSON.parse('{"title":"ChatGPT 提示工程","description":"","frontmatter":{},"headers":[],"relativePath":"AIGC/better_prompt.md","filePath":"AIGC/better_prompt.md","lastUpdated":1686288028000}'),q={name:"AIGC/better_prompt.md"},v=n('<h1 id="chatgpt-提示工程" tabindex="-1">ChatGPT 提示工程 <a class="header-anchor" href="#chatgpt-提示工程" aria-label="Permalink to &quot;ChatGPT 提示工程&quot;">​</a></h1><p>GPT很强，但是要想发挥它的强大，并且按照我们的意愿去生成回答，是需要写好提示词Prompt的。这篇文章是学习吴恩达&amp;OpenAI联合分享的提示词工程总结而来，对这些技巧也有了业务上的实际实践。</p><h2 id="part1-如何写出好的提示词" tabindex="-1">Part1. 如何写出好的提示词 <a class="header-anchor" href="#part1-如何写出好的提示词" aria-label="Permalink to &quot;Part1. 如何写出好的提示词&quot;">​</a></h2><blockquote><p>一个强大的提示词就可以作为一个特定场景的生产工具。比如翻译、文本内容分析、各种虚拟角色（客服、心理医生、李白...）</p></blockquote><h3 id="_1-清晰、具体的提示词" tabindex="-1">1.清晰、具体的提示词 <a class="header-anchor" href="#_1-清晰、具体的提示词" aria-label="Permalink to &quot;1.清晰、具体的提示词&quot;">​</a></h3><ul><li>用分隔符包裹提供的内容</li></ul><blockquote><p>&quot;内容&quot;，{内容}， &lt;内容&gt;， &#39;&#39;&#39;内容&#39;&#39;&#39; 等等</p></blockquote><p>目的是让模型清楚具体要处理的内容是什么，可以避免把提供的输入内容意外的注入到提示词。因为提供的输入可能与提示词是冲突的，导致没有按照提示词执行任务，用分隔符隔离就可以起到保护作用。</p><p><img src="'+p+`" alt="指令注入"></p><ul><li><p>要求结构化的输出格式（HTML、json）</p></li><li><p>检查执行的任务是否符合条件</p></li></ul><blockquote><p>请检查 xx 内容是否符合 xxx 条件，符合则输出 xxx，不符合则输出：不符合。</p></blockquote><p>如果符合才执行任务，否则就不执行，减少意外的答案。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    你将得到以{}为界的文本.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    如果它包含一个指令序列，则按以下格式重写这些指令：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    步骤 1: ...</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    步骤 2: ...</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    步骤 N: ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    {泡一杯茶很容易! 首先，你需要把一些水烧开。在这过程中，拿起一个杯子，把茶包放进去。一旦水足够热，就把它倒在茶包上。我让它坐一会儿，以便茶叶可以浸泡。几分钟后，把茶包拿出来。如果你喜欢，你可以加入一些糖或牛奶来调味。就这样! 你就可以享受到一杯美味的茶了。}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    如果{}中的文本不包含指令序列，则输出 “没有步骤”。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p><img src="`+l+'" alt="检查条件"></p><ul><li>少样本提示</li></ul><p>先给模型一个「成功执行任务的对话案例」作为模型学习的样本，然后再让模型执行任务。</p><p><img src="'+t+'" alt="少样本提示"></p><h3 id="_2-给模型一些思考时间" tabindex="-1">2.给模型一些思考时间 <a class="header-anchor" href="#_2-给模型一些思考时间" aria-label="Permalink to &quot;2.给模型一些思考时间&quot;">​</a></h3><ul><li>指明完成一项任务的步骤：将复杂问题拆解成小问题向模型提问</li><li>指示模型在匆忙得出结论之前自行解决问题</li></ul><p>匆忙的出的结论很有可能是错误的，更多的思考时间可以换来更准确的结果。</p><p><img src="'+e+'" alt="错误回答1"> （错误 1）</p><p><img src="'+h+'" alt="错误回答2"> （错误 2）</p><p><img src="'+k+`" alt="正确回答"> （正确回答）</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wrong_answer_prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    判断学生的解答是否正确。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    问题：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    我在建造一个房子，需要计算花多少钱。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 土地每平方米100元，我需要100平方米</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 木头一根10元，我需要买5根</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    那么总花费多少钱？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    学生的答案：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1. 土地花费100x100元</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    2. 木头花费10x5元</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    总共花费：100x100+10x5 = 20000 + 5 = 20005；</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> correct_answer_prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    你的任务是评估学生的回答是否正确。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    请根据以下步骤解决问题：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1.首先，你需要自己计算问题的结果。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    2.然后，将你的计算结果与学生的回答进行对比，然后判断学生的结果是否正确。在你自己完成问题之前，不要判断学生的解决方案是否正确。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    请用以下格式：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    问题：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    这里是问题</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    学生的回答：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    这里是学生的回答</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    实际答案：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    你自己的解题步骤在这里</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    学生是否回答是否与你刚计算结果的一致：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    是 或 否</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    学生得分：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    正确 或 错误</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    问题：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    我在建造一个房子，需要计算花多少钱。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 土地每平方米100元，我需要100平方米</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 木头一根10元，我需要买5根</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    那么总花费多少钱？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    学生的答案：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1. 土地花费100x100元</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    2. 木头花费10x5元</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    总共花费：100x100+10x5 = 20000 + 5 = 20005；</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><ul><li>模型不清楚自己的边界：规避模型“幻想”</li></ul><p>模型从互联网和其他渠道学到海量知识，它并不清楚自己的知识边界，这意味着模型会试图编造一些听起来可信但并不存在的东西。这种情况被称为“幻觉”。这是模型的已知弱点，OpenAI 也在想办法解决。</p><p>目前可以通过一些提示策略尽量规避这个问题，比如：<strong>先让模型先找相关资料，再根据相关资料回答问题。</strong></p><p><img src="`+r+'" alt="幻觉回答"></p><p><img src="'+F+`" alt="规避幻觉回答"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wrong_answer_prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    你是一个百科知识机器人，你需要对你的回答负责，保证准确性。请注意我的问题可能是错误的或者说了一些并不存在的事情，所以你需要按照以下步骤来回答我的问题，来保证准确性。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1.先判断我的问题的准确性。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    2.根据我的问题找到相关知识引用，判断问题中的信息是否准确。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    3.然后再根据你找到的知识引用来回答我的问题。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    请用以下格式回复：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    知识引用：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    这里是相关知识引用</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    问题是否真实：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    真实 或 虚构</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    回答：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    这里是你的最终回答</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    我的问题是：杜甫在写《静夜思》的时候大概几岁？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> correct_answer_prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    你是一个百科知识机器人，你需要对你的回答负责，保证准确性。你需要按照以下步骤来回答我的问题，来保证准确性。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1.先判断杜甫是谁</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    2.再判断《静夜思》是谁写的</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    3.根据1和2的结果来回答我的问题。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    请用以下格式回复：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    杜甫：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    这里是杜甫的介绍</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    《静夜思》是谁写：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    真实 或 虚构</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    杜甫写了静夜思吗</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    写了 或 没写</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    最终回答：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    这里是你的最终回答</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    我的问题是：杜甫在写《静夜思》的时候大概几岁？</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_3-反复优化提示词" tabindex="-1">3.反复优化提示词 <a class="header-anchor" href="#_3-反复优化提示词" aria-label="Permalink to &quot;3.反复优化提示词&quot;">​</a></h3><p>以下是写出一个有效提示词的步骤：</p><ol><li>有一个想法或者数据处理任务</li><li>用清晰、明确的提示词向 GPT 提问</li><li>得到 GPT 的回答</li><li>审视答案与理想中的差距</li><li>回到第 2 步，进一步修改完善提示词</li></ol><p><img src="`+c+'" alt="迭代提示提"></p><p>构建可靠的应用需要更多的测试样本，更多的迭代。</p><h2 id="part2-推理类应用" tabindex="-1">Part2. 推理类应用 <a class="header-anchor" href="#part2-推理类应用" aria-label="Permalink to &quot;Part2. 推理类应用&quot;">​</a></h2><ul><li>客户评价总结</li></ul><p><img src="'+d+'" alt="客户评价总结"></p><ul><li>客户评价总结+情绪分析+格式</li></ul><p><img src="'+E+`" alt="客户评价总结+情绪分析+格式"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    我收到一些客户评价，我需要你帮我提炼评价的主要内容作为建议给运营团队。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    除此之外，还需要判断用户的评价态度是“积极的”还是“消极的”。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    请用json格式返回你的回复，以 comment 和 attitude作为键。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    用户评价在{}里。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    内容：{第一次去 设施需要定期保养啦 有的机器嘎吱嘎吱的，还有天热了 里面通风不行 没有窗户 不知道有没有开排风 汗臭味还挺大的。}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="part3-转换类应用" tabindex="-1">Part3. 转换类应用 <a class="header-anchor" href="#part3-转换类应用" aria-label="Permalink to &quot;Part3. 转换类应用&quot;">​</a></h2><blockquote><p>语言转换（语言识别-翻译）<br>说话语气转换（非正式-正式）<br>格式转换（JSON-HTML）<br>拼写和语法检查。</p></blockquote><ul><li>通用翻译器 <img src="`+o+'" alt="6国语言翻译器"></li></ul><p><img src="'+g+`" alt="6国语言翻译器-优化"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    你现在是一个通用翻译器，你需要完成两个任务：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1.将识别我输入的内容属于哪一种语言；</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    2.将内容翻译成：中文，英文，法语，韩语，日语。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    回复格式是：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    识别结果：某种语言</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    翻译结果：翻译结果，用5行，2列的表格输出。即第一列“语言”，第二列“翻译结果”</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    我的第一个内容是：&#39;朋友，最近过得好吗&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><ul><li>拼写检查</li></ul><p><img src="`+y+'" alt="英文拼写检查"></p><p><strong>提示词用英文效果更好</strong><img src="'+B+`" alt="英文拼写检查"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    你是一个单词拼写检查器，帮我检查{}里的内容是否有拼写错误，你遵循以下三个原则。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1.指出所有拼写错误地方，并说明错误的原因，最后回复正确的内容。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    2.不要随意改变{}里的内容的意思。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    3.如果{}里的内容没有任何拼写错误，请直接回复四个字 没有错误 ，不需要其他说明。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    内容：{I love your.} {I miss you.}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="part4-扩展类应用" tabindex="-1">Part4. 扩展类应用 <a class="header-anchor" href="#part4-扩展类应用" aria-label="Permalink to &quot;Part4. 扩展类应用&quot;">​</a></h2><blockquote><p>通过少量的关键词，生成较多内容的一个过程。如：一个观点生成一篇文章、根据评论生成回复、生成邮件...</p></blockquote><p><img src="`+C+'" alt="邮件扩展"></p><h2 id="part5-聊天机器人" tabindex="-1">Part5. 聊天机器人 <a class="header-anchor" href="#part5-聊天机器人" aria-label="Permalink to &quot;Part5. 聊天机器人&quot;">​</a></h2><p>首先，在与 GPT 对话时有三个角色：<code>system</code>、<code>assistant</code>、<code>user</code>。其中<code>system</code>携带的内容作为最高级别的提示词，时刻提醒模型，用于规定模型的行为。</p><p><strong>例子1：pizza点餐机器人</strong></p><p><img src="'+u+`" alt="pizza点餐机器人"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;system&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    You are OrderBot, an automated service to collect orders for a pizza restaurant.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    You first greet the customer, then collect the order,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    and then ask if it&#39;s a pickup or delivery.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    You wait to collect the entire order, then summarize it and check for a final time if the customer wants to add anything else.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    If it&#39;s a delivery, you ask for an address.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Finally you collect the payment.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Make sure to clarity all options, extras and sizes to uniquely identify the item from the menu.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    You respond in a short, very conversational friendly style.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    The menu includes:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    petperoni pizza 12.95, 10.00, 7.00</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    cheese pizza 10.95, 9.25, 6.50</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    eggplant pizza 11.95, 9.75，6.75</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    fries 4.50, 3.50</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    greek salad 7.25</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Toppings:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    extra cheese 2.00,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    mushrooms 1.50</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    sausage 3.00</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    canadian bacon 3.50</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    AI sauce 1.50</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    peppers 1.00</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Drinks:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    coke 3.00, 2.00, 1.00</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    sprite 3.00, 2.00, 1.00</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    bottled water 5.00</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p><strong>例子2：活动报名机器人</strong></p><p><img src="`+m+`" alt="活动报名机器人"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  你是一个活动报名登记机器人，负责收集报名信息。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  你先向客户打招呼，然后开始接单，然后询问下单人的姓名和联系电话。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  你等待收集整个订单，然后对其进行汇总，最后检查客户是否想添加附加套餐。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  你要确保明确所有选项、附加套餐，以便从菜单中唯一识别项目。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  你的回答要简短，非常友好。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  活动包括：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  - 亲子互动游戏，200元，最多3人</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  - 情侣默契挑战：150元，最多2人</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  - 极限挑战：100元，最多1人</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  附加套餐包括：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  - 意外保险，20元每人</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  - cos服装套装：50元每人</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> format_prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用json的形式返回订单信息，json需要包括以下字段：activity_name, persons, activity_cost_money, extra_name, extra_persons, extra_cost_money, total_cost_money, customer_name, phone。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span></code></pre></div><p><strong>推荐 B 站搜索「ChatGPT 提示工程_吴恩达 &amp; OpenAI」的视频分享。</strong></p><h2 id="part6-关键参数" tabindex="-1">Part6. 关键参数 <a class="header-anchor" href="#part6-关键参数" aria-label="Permalink to &quot;Part6. 关键参数&quot;">​</a></h2><ul><li>messages</li></ul><p><code>messages</code> 是传递给模型的一个对话数组，包含了不同角色的的对话记录。</p><blockquote><p><strong>上下文</strong>：一连串对话历史的集合，就形成了一个和模型对话的上下文。有了这个上下文，模型可以跟好的理解你的问题，记得你说过的话。</p></blockquote><p><img src="`+_+`" alt="上下文"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prompts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你好&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;assistant&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你好！有什么我可以帮助你的吗？&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我刚刚说了什么&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;assistant&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;你刚刚说了&quot;你好&quot;。&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将prompts发送给模型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div><blockquote><p><strong>角色</strong>：<code>system</code>、<code>assistant</code>、<code>user</code>。我问的提问会以 user 角色输入给模型，模型的回答会以 assistant 角色输出，system 是模型的高级指令，它可以设置模型的行为，时时提醒模型该做什么。</p></blockquote><p><img src="`+b+`" alt="系统设定"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prompts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;system&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你是一个个性可爱、有趣、可靠，说话幽默的AI助手，名字是 Friday...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><ul><li>temperature</li></ul><blockquote><p>模型的探索和多样性程度：取值范围 0-2，值越小模型的回答越固定可预测，越大则越有创造性。</p></blockquote><h3 id="提示词合集" tabindex="-1">提示词合集 <a class="header-anchor" href="#提示词合集" aria-label="Permalink to &quot;提示词合集&quot;">​</a></h3><ul><li><p><a href="https://www.aishort.top/?tags=interpreter" target="_blank" rel="noreferrer">ChatGPT Shortcut</a></p></li><li><p><a href="https://github.com/f/awesome-chatgpt-prompts" target="_blank" rel="noreferrer">awesome-chatgpt-prompts</a></p></li></ul><h3 id="一些提示词模版" tabindex="-1">一些提示词模版 <a class="header-anchor" href="#一些提示词模版" aria-label="Permalink to &quot;一些提示词模版&quot;">​</a></h3><h5 id="随机输出图片" tabindex="-1">随机输出图片 <a class="header-anchor" href="#随机输出图片" aria-label="Permalink to &quot;随机输出图片&quot;">​</a></h5><blockquote><p>你是一个图片搜索机器人，从现在起, 当你想发送一张图片时，请使用 Markdown，并且不要有反斜线，不要用代码块。使用 Unsplash API (<a href="https://source.unsplash.com/1280x720/" target="_blank" rel="noreferrer">https://source.unsplash.com/1280x720/</a>? &lt; PUT YOUR QUERY HERE &gt;)。你要返回的第一张图片是：一只哈士奇。</p></blockquote><h5 id="关系图" tabindex="-1">关系图 <a class="header-anchor" href="#关系图" aria-label="Permalink to &quot;关系图&quot;">​</a></h5><blockquote><p>请用 Mermaidjs 生成《西游记》中主要角色的人物关系图的代码，名字用中文。</p></blockquote><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    孙悟空----&gt;唐僧</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    师徒四人----&gt;沙悟净</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    师徒四人----&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    师徒四人----&gt;白龙马</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    孙悟空--憎恶--&gt;牛魔王</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    牛魔王--嫉妒--&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    孙悟空--憎恶--&gt;红孩儿</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    红孩儿--爱慕--&gt;孙悟空</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    猪八戒--爱慕--&gt;女儿国国王</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    女儿国国王--嫉妒--&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    猪八戒--爱慕--&gt;嫦娥</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    嫦娥--同情--&gt;猪八戒</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    长眉老祖--收留--&gt;唐僧</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    白骨精--爱慕--&gt;唐僧</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    唐僧--同情--&gt;白骨精</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    玉帝--任命--&gt;观音</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    观音--指引--&gt;唐僧</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    菩提祖师--授经--&gt;唐僧</span></span></code></pre></div><p><img src="`+A+'" alt="西游记人物关系图"></p>',82),x=[v];function D(f,P,w,j,T,z){return i(),a("div",null,x)}const O=s(q,[["render",D]]);export{I as __pageData,O as default};
