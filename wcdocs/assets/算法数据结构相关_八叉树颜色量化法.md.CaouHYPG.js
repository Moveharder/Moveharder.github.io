import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.lL4UzoDo.js";const e="/wcdocs/assets/octtree_album.DBcRwKiu.png",l="/wcdocs/assets/octtree1.CI4vh-nG.png",i="/wcdocs/assets/octtree2.B97XXmhZ.png",f=JSON.parse('{"title":"八叉树量化法提取图片主题色","description":"","frontmatter":{},"headers":[],"relativePath":"算法数据结构相关/八叉树颜色量化法.md","filePath":"算法数据结构相关/八叉树颜色量化法.md","lastUpdated":1671940758000}'),c={name:"算法数据结构相关/八叉树颜色量化法.md"},t=p('<h1 id="八叉树量化法提取图片主题色" tabindex="-1">八叉树量化法提取图片主题色 <a class="header-anchor" href="#八叉树量化法提取图片主题色" aria-label="Permalink to &quot;八叉树量化法提取图片主题色&quot;">​</a></h1><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><p><img src="'+e+`" alt="69816822e12769b2c4f6e52c945acb55.png"></p><ul><li>1.构建八叉树，将 rgb 颜色循环添加到树里（相同的颜色会跑到同一层的同一个叶子结点上，累加 count）；</li><li>2.叶子结点合并（相似的颜色会跑到同一个父节点，与兄弟结点同级，因此可以合并到他们的父节点）；</li><li>3.计算调色盘（递归遍历八叉树，累加所有叶子节点的 r,g,b 颜色值再平均）；</li></ul><h2 id="为什么是八叉树" tabindex="-1">为什么是八叉树？ <a class="header-anchor" href="#为什么是八叉树" aria-label="Permalink to &quot;为什么是八叉树？&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>比如有这么一个颜色 rgb = [31, 31, 30]，给出它的入树过程！</span></span>
<span class="line"><span>//r = 31 =&gt;  00011111</span></span>
<span class="line"><span>//g = 31 =&gt;  00011111</span></span>
<span class="line"><span>//b = 30 =&gt;  00011110</span></span>
<span class="line"><span></span></span>
<span class="line"><span>r,g,b每个颜色位转换成了8位二进制用0,1表示，同时从左到右取r,g,b的每一位组成3位二进制数。</span></span>
<span class="line"><span>比如取第1位，组成列：000，转换成十进制就是 0，进入八叉树中第1层，的第1个结点；</span></span>
<span class="line"><span>比如取第2位，组成列：000，转换成十进制就是 0，进入八叉树中第2层，的第1个结点；</span></span>
<span class="line"><span>比如取第3位，组成列：000，转换成十进制就是 0，进入八叉树中第3层，的第1个结点；</span></span>
<span class="line"><span>比如取第4位，组成列：111，转换成十进制就是 7，进入八叉树中第4层，的第8个结点；</span></span>
<span class="line"><span>比如取第5位，组成列：111，转换成十进制就是 7，进入八叉树中第5层，的第8个结点；</span></span>
<span class="line"><span>比如取第6位，组成列：111，转换成十进制就是 7，进入八叉树中第6层，的第8个结点；</span></span>
<span class="line"><span>比如取第7位，组成列：111，转换成十进制就是 7，进入八叉树中第7层，的第8个结点；</span></span>
<span class="line"><span>比如取第8位，组成列：110，转换成十进制就是 6，进入八叉树中第8层，的第7个结点（叶子结点，累加r,g,b分量，累加pixelCount）；</span></span></code></pre></div><p>按照上述规则，能够将重复出现的颜色累加到第 8 层的某一个叶子结点中! <img src="`+l+`" alt="d9d39a8969c6bf406779edc1a7086902.png"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 比如有这么几个像素颜色信息：</span></span>
<span class="line"><span>let pixels = [</span></span>
<span class="line"><span>    [31, 31, 30],</span></span>
<span class="line"><span>    [31, 31, 31],</span></span>
<span class="line"><span>    [31, 31, 31],</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 最终得到颜色的统计情况会是：</span></span>
<span class="line"><span>let colors = { &#39;31,31,30&#39;: 1, &#39;31,31,31&#39;: 2 }</span></span></code></pre></div><h4 id="构建树结点" tabindex="-1">构建树结点 <a class="header-anchor" href="#构建树结点" aria-label="Permalink to &quot;构建树结点&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class OctTreeNode {</span></span>
<span class="line"><span>  constructor(level) {</span></span>
<span class="line"><span>    this.color = [];</span></span>
<span class="line"><span>    this.level = level;</span></span>
<span class="line"><span>    this.isLeaf = false;</span></span>
<span class="line"><span>    this.pixelCount = 0; //该节点出现次数，当为叶子结点时，代表了某种颜色出现次数</span></span>
<span class="line"><span>    this.r = 0; //red通道累加值</span></span>
<span class="line"><span>    this.g = 0; //green通道累加值</span></span>
<span class="line"><span>    this.b = 0; //blue通道累加值</span></span>
<span class="line"><span>    this.children = [null, null, null, null, null, null, null, null]; //八个子节点</span></span>
<span class="line"><span>    this.next = null; //在 reducible 链表中的下一个节点</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="依次载入像素信息-生成八叉树结构" tabindex="-1">依次载入像素信息，生成八叉树结构 <a class="header-anchor" href="#依次载入像素信息-生成八叉树结构" aria-label="Permalink to &quot;依次载入像素信息，生成八叉树结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function dec2bin(decnum, displayLength) {</span></span>
<span class="line"><span>  let bin = decnum.toString(2);</span></span>
<span class="line"><span>  if (displayLength) {</span></span>
<span class="line"><span>    while (bin.length &lt; displayLength) {</span></span>
<span class="line"><span>      bin = \`0\${bin}\`;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return bin;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>function addColor(parentNode, color, level) {</span></span>
<span class="line"><span>  if (!color) {</span></span>
<span class="line"><span>    throw new Error(&quot;color must be provided，like [255, 0, 0]&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  let [r, g, b] = color;</span></span>
<span class="line"><span>  if (parentNode.isLeaf) {</span></span>
<span class="line"><span>    // console.warn(\`已满八层，是叶子节点，rgb(\${color})\`);</span></span>
<span class="line"><span>    parentNode.pixelCount++;</span></span>
<span class="line"><span>    parentNode.r += r;</span></span>
<span class="line"><span>    parentNode.g += g;</span></span>
<span class="line"><span>    parentNode.b += b;</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let binR = dec2bin(r, 8);</span></span>
<span class="line"><span>  let binG = dec2bin(g, 8);</span></span>
<span class="line"><span>  let binB = dec2bin(b, 8);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 逐列合并bin，共3行8列，需递归执行8次，生成8层树结构</span></span>
<span class="line"><span>  let concatColBin = \`\${binR[level]}\${binG[level]}\${binB[level]}\`;</span></span>
<span class="line"><span>  let index = bin2dec(concatColBin);</span></span>
<span class="line"><span>  if (!parentNode.children[index]) {</span></span>
<span class="line"><span>    parentNode.children[index] = createNode(level);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 递归生成下一层</span></span>
<span class="line"><span>  addColor(parentNode.children[index], color, level + 1);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="为什么需要进行叶子结点合并" tabindex="-1">为什么需要进行叶子结点合并？ <a class="header-anchor" href="#为什么需要进行叶子结点合并" aria-label="Permalink to &quot;为什么需要进行叶子结点合并？&quot;">​</a></h4><p>一个图片中的颜色信息会非常多，经过八叉树量化后，某些像素颜色占比很大，有些很小。很小的原因可能是这种颜色本身就少，也有可能是因为它们是相似的颜色，那么将相似的颜色合并，减少提取的颜色躁点（数量极多却极其相似的颜色）浓缩就是精华！</p><h4 id="为什么能将叶子节点合并" tabindex="-1">为什么能将叶子节点合并？ <a class="header-anchor" href="#为什么能将叶子节点合并" aria-label="Permalink to &quot;为什么能将叶子节点合并？&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let pixel1 = [31, 31, 30]</span></span>
<span class="line"><span>// 00011111</span></span>
<span class="line"><span>// 00011111</span></span>
<span class="line"><span>// 00011110</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let pixel2 = [31, 31, 31]</span></span>
<span class="line"><span>// 00011111</span></span>
<span class="line"><span>// 00011111</span></span>
<span class="line"><span>// 00011111</span></span></code></pre></div><p>对比<code>pixel1</code>和<code>pixel2</code>可以看出： 前七位完全一致，只有第八位（树中的第八层，叶子节点）是不一样的，说明这两个颜色是十分相近的颜色， 因此可以将叶子结点的<code>r,g,b</code>分量和<code>pixelCount</code>合并到他们的父节点去。合并后，叶子结点会被剔除，他们的父节点变成新的叶子结点。</p><h4 id="如何合并叶子结点" tabindex="-1">如何合并叶子结点？ <a class="header-anchor" href="#如何合并叶子结点" aria-label="Permalink to &quot;如何合并叶子结点？&quot;">​</a></h4><blockquote><p>程序中有一个设计技巧，就是每一层的所有节点都用一个链表存储起来，<code>reducible[i]</code>记录了这些链表的头节点，每一次合并操作都是从最底层开始，从下到上依次进行的。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 生成新结点时，顺便记录reducible链表头信息</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function createNode(level) {</span></span>
<span class="line"><span>  let node = new OctTreeNode(level);</span></span>
<span class="line"><span>  if (level == 7) {</span></span>
<span class="line"><span>    node.isLeaf = true;</span></span>
<span class="line"><span>    leafNum++;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // 将其丢到第 level 层的 reducible 链表中（这两行代码不能反，否则会出现循环引用）</span></span>
<span class="line"><span>    node.next = reducible[level]; //此时reducible[level]为上一个颜色对应的</span></span>
<span class="line"><span>    reducible[level] = node;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return node;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 合并叶子结点</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function reduceTree() {</span></span>
<span class="line"><span>  // 找到最深层次的并且有可合并节点的链表</span></span>
<span class="line"><span>  let lv = 6;</span></span>
<span class="line"><span>  while (reducible[lv] == null) lv--;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 取出链表头并将其从链表中移除</span></span>
<span class="line"><span>  let node = reducible[lv];</span></span>
<span class="line"><span>  reducible[lv] = node.next; //OctTreeNode or null</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 合并子节点</span></span>
<span class="line"><span>  let r = 0;</span></span>
<span class="line"><span>  let g = 0;</span></span>
<span class="line"><span>  let b = 0;</span></span>
<span class="line"><span>  let count = 0;</span></span>
<span class="line"><span>  for (let i = 0; i &lt; 8; i++) {</span></span>
<span class="line"><span>    if (null === node.children[i]) continue;</span></span>
<span class="line"><span>    r += node.children[i].r;</span></span>
<span class="line"><span>    g += node.children[i].g;</span></span>
<span class="line"><span>    b += node.children[i].b;</span></span>
<span class="line"><span>    count += node.children[i].pixelCount;</span></span>
<span class="line"><span>    leafNum--; //叶子数量减1（其实在树结构中存在，只是叶子结点的层级移到了上一层）</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 父节点变叶子节点，分量合并</span></span>
<span class="line"><span>  node.isLeaf = true;</span></span>
<span class="line"><span>  node.r = r;</span></span>
<span class="line"><span>  node.g = g;</span></span>
<span class="line"><span>  node.b = b;</span></span>
<span class="line"><span>  node.pixelCount = count;</span></span>
<span class="line"><span>  leafNum++;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+i+`" alt="eb6901ddc4efb5b45bcd12b95f237a40.png"></p><h4 id="统计颜色信息" tabindex="-1">统计颜色信息！ <a class="header-anchor" href="#统计颜色信息" aria-label="Permalink to &quot;统计颜色信息！&quot;">​</a></h4><p>流程比较清晰：获取所有叶子节点<code>r,g,b</code>分量和<code>pixelCount</code>对应的平均值 color，以<code>color</code>为键，出现次数<code>count</code>为值，记录到一个<code>palette</code>对象中，就得到了一个反映各个颜色占比的对象。最后再转换成数组，并按照<code>count</code>进行降序排序。第一项就是主色调，后续项就是调色盘颜色组了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 计算最终的颜色列表</span></span>
<span class="line"><span> * @param {*} node</span></span>
<span class="line"><span> * @param {*} paletteMap</span></span>
<span class="line"><span> * @returns</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function colorsStats(node, paletteMap) {</span></span>
<span class="line"><span>  // 判断是否是叶子节点</span></span>
<span class="line"><span>  if (node.isLeaf) {</span></span>
<span class="line"><span>    // 计算当前颜色的平均</span></span>
<span class="line"><span>    let r = parseInt(node.r / node.pixelCount);</span></span>
<span class="line"><span>    let g = parseInt(node.g / node.pixelCount);</span></span>
<span class="line"><span>    let b = parseInt(node.b / node.pixelCount);</span></span>
<span class="line"><span>    let color = \`\${r},\${g},\${b}\`;</span></span>
<span class="line"><span>    // 统计当前颜色合并累计的次数</span></span>
<span class="line"><span>    if (paletteMap[color]) paletteMap[color] += node.pixelCount;</span></span>
<span class="line"><span>    else paletteMap[color] = node.pixelCount;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // bfs递归处理颜色信息</span></span>
<span class="line"><span>  for (let i = 0; i &lt; 8; i++) {</span></span>
<span class="line"><span>    node.children[i] &amp;&amp; colorsStats(node.children[i], paletteMap);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="最后调用得出指定数量的颜色-🎨" tabindex="-1">最后调用得出指定数量的颜色 🎨 <a class="header-anchor" href="#最后调用得出指定数量的颜色-🎨" aria-label="Permalink to &quot;最后调用得出指定数量的颜色 🎨&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let leafNum = 0; //叶子结点数量</span></span>
<span class="line"><span>let reducible = [null, null, null, null, null, null, null]; //存储每一层链表的表头的数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function colorThief(pixels = [], maxColors = 8) {</span></span>
<span class="line"><span>  leafNum = 0;</span></span>
<span class="line"><span>  let rootNode = new OctTreeNode(0);</span></span>
<span class="line"><span>  pixels.map((item) =&gt; {</span></span>
<span class="line"><span>    addColor(rootNode, item, 0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 边构建，边合并叶子结点！</span></span>
<span class="line"><span>    while (leafNum &gt; maxColors) reduceTree();</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(&quot;合并后的八叉树结构：&quot;, rootNode);</span></span>
<span class="line"><span>  console.log(\`共有\${leafNum}个叶子结点\`);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let paletteMap = {};</span></span>
<span class="line"><span>  colorsStats(rootNode, paletteMap);</span></span>
<span class="line"><span>  console.log(&quot;八叉树法提取的颜色有：&quot;, paletteMap);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let palette = [];</span></span>
<span class="line"><span>  for (let key in paletteMap) {</span></span>
<span class="line"><span>    palette.push({</span></span>
<span class="line"><span>        color: \`\${key}\`,</span></span>
<span class="line"><span>        count: paletteMap[key],</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  palette.sort((a, b) =&gt; {</span></span>
<span class="line"><span>      return b.count - a.count;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return palette;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="参考地址" tabindex="-1">参考地址： <a class="header-anchor" href="#参考地址" aria-label="Permalink to &quot;参考地址：&quot;">​</a></h3><p><a href="https://blog.csdn.net/shanglianlm/article/details/50051269" target="_blank" rel="noreferrer">图像主题色提取法</a></p><p><a href="https://xcoder.in/2014/09/17/theme-color-extract/#%E6%8F%92%E5%85%A5%E9%A2%9C%E8%89%B2" target="_blank" rel="noreferrer">图片主题色提取算法小结</a></p>`,29),o=[t];function r(d,u,h,b,g,m){return a(),s("div",null,o)}const x=n(c,[["render",r]]);export{f as __pageData,x as default};
