import{_ as s,o as n,c as a,h as p}from"./app.a5b848ca.js";const h=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{"realPath":"docs/guide/quickstart.md"},"headers":[{"level":2,"title":"\u5168\u91CF\u5F15\u5165","slug":"\u5168\u91CF\u5F15\u5165","link":"#\u5168\u91CF\u5F15\u5165","children":[]},{"level":2,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165","link":"#\u6309\u9700\u5F15\u5165","children":[]}],"relativePath":"guide/quickstart.md","lastUpdated":1663212290000}'),l={name:"guide/quickstart.md"},o=p(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><h2 id="\u5168\u91CF\u5F15\u5165" tabindex="-1">\u5168\u91CF\u5F15\u5165 <a class="header-anchor" href="#\u5168\u91CF\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { createApp } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> QhComponents </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;qh-components&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;qh-components/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">app</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">createApp</span><span style="color:#C9D1D9;">(App)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">app.</span><span style="color:#D2A8FF;">use</span><span style="color:#C9D1D9;">(QhComponents)</span></span>
<span class="line"><span style="color:#C9D1D9;">app.</span><span style="color:#D2A8FF;">mount</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;#app&#39;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { createApp } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> QhComponents </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;qh-components&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;qh-components/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">app</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">createApp</span><span style="color:#24292F;">(App)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(QhComponents)</span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">mount</span><span style="color:#24292F;">(</span><span style="color:#0A3069;">&#39;#app&#39;</span><span style="color:#24292F;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> QhForm </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;qh-components/form&#39;</span><span style="color:#C9D1D9;"> </span></span>
<span class="line"><span style="color:#C9D1D9;">app.</span><span style="color:#D2A8FF;">use</span><span style="color:#C9D1D9;">(QhForm)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> QhForm </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;qh-components/form&#39;</span><span style="color:#24292F;"> </span></span>
<span class="line"><span style="color:#24292F;">app.</span><span style="color:#8250DF;">use</span><span style="color:#24292F;">(QhForm)</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function c(t,r,i,y,F,d){return n(),a("div",null,e)}const m=s(l,[["render",c]]);export{h as __pageData,m as default};
