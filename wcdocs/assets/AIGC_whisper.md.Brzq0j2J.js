import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.lL4UzoDo.js";const c=JSON.parse('{"title":"whisper 安装准备","description":"","frontmatter":{},"headers":[],"relativePath":"AIGC/whisper.md","filePath":"AIGC/whisper.md","lastUpdated":1728550414000}'),n={name:"AIGC/whisper.md"},e=t(`<p><a href="https://github.com/openai/whisper?tab=readme-ov-file" target="_blank" rel="noreferrer">Whisper 文档地址</a></p><h1 id="whisper-安装准备" tabindex="-1"><code>whisper</code> 安装准备 <a class="header-anchor" href="#whisper-安装准备" aria-label="Permalink to &quot;\`whisper\` 安装准备&quot;">​</a></h1><h2 id="安装-python3-10-以上版本也可以试试" tabindex="-1">安装 Python3.10（以上版本也可以试试） <a class="header-anchor" href="#安装-python3-10-以上版本也可以试试" aria-label="Permalink to &quot;安装 Python3.10（以上版本也可以试试）&quot;">​</a></h2><ul><li>Windows：<code>https://www.python.org/downloads/windows/</code></li><li>MacOS：<code>https://www.python.org/downloads/macos/</code></li></ul><h2 id="安装-rust" tabindex="-1">安装 Rust <a class="header-anchor" href="#安装-rust" aria-label="Permalink to &quot;安装 Rust&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setuptools-rust</span></span></code></pre></div><p>或者下载.exe 文件并运行：<code>https://forge.rust-lang.org/infra/other-installation-methods.html#rustup</code></p><h2 id="安装-ffmpeg" tabindex="-1">安装 ffmpeg， <a class="header-anchor" href="#安装-ffmpeg" aria-label="Permalink to &quot;安装 ffmpeg，&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># on Ubuntu or Debian</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ffmpeg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># on Arch Linux</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ffmpeg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># on MacOS using Homebrew (https://brew.sh/)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ffmpeg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># on Windows using Chocolatey (https://chocolatey.org/)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">choco</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ffmpeg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># on Windows using Scoop (https://scoop.sh/)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scoop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ffmpeg</span></span></code></pre></div><h2 id="安装-whisper-模型" tabindex="-1">安装 Whisper 模型 <a class="header-anchor" href="#安装-whisper-模型" aria-label="Permalink to &quot;安装 Whisper 模型&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -U</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openai-whisper</span></span></code></pre></div><p>Alternatively, the following command will pull and install the latest commit from this repository, along with its Python dependencies:</p><p><code>pip install git+https://github.com/openai/whisper.git</code></p><p>To update the package to the latest version of this repository, please run:</p><p><code>pip install --upgrade --no-deps --force-reinstall git+https://github.com/openai/whisper.git</code></p><h2 id="模型介绍" tabindex="-1">模型介绍 <a class="header-anchor" href="#模型介绍" aria-label="Permalink to &quot;模型介绍&quot;">​</a></h2><p>tiny ,base ,small ,medium ,large ,turbo</p><table tabindex="0"><thead><tr><th style="text-align:center;">Size</th><th style="text-align:center;">Parameters</th><th style="text-align:center;">English-only model</th><th style="text-align:center;">Multilingual model</th><th style="text-align:center;">Required VRAM</th><th style="text-align:center;">Relative speed</th></tr></thead><tbody><tr><td style="text-align:center;">tiny</td><td style="text-align:center;">39 M</td><td style="text-align:center;"><code>tiny.en</code></td><td style="text-align:center;"><code>tiny</code></td><td style="text-align:center;">~1 GB</td><td style="text-align:center;">~10x</td></tr><tr><td style="text-align:center;">base</td><td style="text-align:center;">74 M</td><td style="text-align:center;"><code>base.en</code></td><td style="text-align:center;"><code>base</code></td><td style="text-align:center;">~1 GB</td><td style="text-align:center;">~7x</td></tr><tr><td style="text-align:center;">small</td><td style="text-align:center;">244 M</td><td style="text-align:center;"><code>small.en</code></td><td style="text-align:center;"><code>small</code></td><td style="text-align:center;">~2 GB</td><td style="text-align:center;">~4x</td></tr><tr><td style="text-align:center;">medium</td><td style="text-align:center;">769 M</td><td style="text-align:center;"><code>medium.en</code></td><td style="text-align:center;"><code>medium</code></td><td style="text-align:center;">~5 GB</td><td style="text-align:center;">~2x</td></tr><tr><td style="text-align:center;">large</td><td style="text-align:center;">1550 M</td><td style="text-align:center;">N/A</td><td style="text-align:center;"><code>large</code></td><td style="text-align:center;">~10 GB</td><td style="text-align:center;">1x</td></tr><tr><td style="text-align:center;">turbo</td><td style="text-align:center;">809 M</td><td style="text-align:center;">N/A</td><td style="text-align:center;"><code>turbo</code></td><td style="text-align:center;">~6 GB</td><td style="text-align:center;">~8x</td></tr></tbody></table><p>The <code>.en</code> models for English-only applications tend to perform better, especially for the <code>tiny.en</code> and <code>base.en</code> models. We observed that the difference becomes less significant for the <code>small.en</code> and <code>medium.en</code> models. Additionally, the <code>turbo</code> model is an optimized version of <code>large-v3</code> that offers faster transcription speed with a minimal degradation in accuracy.</p><h2 id="使用命令" tabindex="-1">使用命令 <a class="header-anchor" href="#使用命令" aria-label="Permalink to &quot;使用命令&quot;">​</a></h2><p>安装 whiper 后，如果在 windows 平台，它一般会在：<code>C:\\Users\\Believer\\.cache\\whisper</code>下。 <strong><em>使用的时候，可以在任意新建文件夹下放入准备好的音频文件，在它的文件根目录执行以下命令即可。</em></strong></p><p>1.指定模型：The following command will transcribe speech in audio files, using the turbo model:</p><p><code>whisper audio.flac audio.mp3 audio.wav --model turbo</code></p><p>2.指定音频语种：The default setting (which selects the small model) works well for transcribing English. To transcribe an audio file containing non-English speech, you can specify the language using the --language option:</p><p><code>whisper japanese.wav --language Japanese</code></p><p>3.翻译：Adding --task translate will translate the speech into English:</p><p><code>whisper japanese.wav --language Japanese --task translate</code></p><p>4.帮助：Run the following to view all available options:</p><p><code>whisper --help</code></p><h2 id="补充说明" tabindex="-1">补充说明 <a class="header-anchor" href="#补充说明" aria-label="Permalink to &quot;补充说明&quot;">​</a></h2><ul><li><p>选择 large 模型中文识别率较高；</p></li><li><p>用于纯英语应用程序的 .en 【tiny\\base\\small\\medium】 模型往往性能更好</p></li><li><p>任务执行后会同步生成字幕文件（多种格式）；</p></li></ul><h2 id="字幕翻译脚本" tabindex="-1">字幕翻译脚本 <a class="header-anchor" href="#字幕翻译脚本" aria-label="Permalink to &quot;字幕翻译脚本&quot;">​</a></h2><p><code>whisper</code> 加上 <code> --task translate</code> 参数后，只能把非英文语种翻译为英文语种，无法翻译为其它语种，如果想要得到指定语种的字幕文件，需要自己处理。</p><p>以下是一个简单的<code>.srt</code>字幕翻译 demo：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myTranslateFunc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;my-translate-func&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> targetLang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> inputFilePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;english_speech/speech_9.24.srt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输入的.srt文件路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> outputFilePath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`translated_\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${targetLang}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`_\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${+new </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`.srt\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出的.srt文件路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> translateSRT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">filePath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> srtContent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filePath, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> translatedLines</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lines</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> srtContent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> line </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lines) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (line </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">line.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 忽略时间轴行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNaN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(line.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 检查是否为序号行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        translatedLines.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(line); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 保留序号行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myTranslateFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(line, { to: targetLang }); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 翻译成中文</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          translatedLines.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res.text);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //   translatedLines.push(\`译:\${line}\`);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Translation error for line: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, error);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          translatedLines.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`原:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果翻译失败，保留原文</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      translatedLines.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(line); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 保留时间轴行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> translatedLines.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> translatedSRT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> translateSRT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inputFilePath);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(outputFilePath, translatedSRT);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Translated SRT saved to \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">outputFilePath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(console.error);</span></span></code></pre></div><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><ul><li>生成会议纪要：主要就是用Whisper提取音频中的文本，然后配合GPT生成最终摘要。</li><li>视频字幕：先用剪辑软件提取视频中的音频，然后让Whisper提取音频中的文本，并生成字幕文件（涉及到字幕翻译工作可以用上面的脚本处理）。</li></ul>`,37),l=[e];function h(p,k,r,d,g,o){return a(),i("div",null,l)}const y=s(n,[["render",h]]);export{c as __pageData,y as default};
