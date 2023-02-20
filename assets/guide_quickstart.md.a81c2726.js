import{_ as s,o as n,c as a,h as p}from"./app.d1e6557c.js";const m=JSON.parse('{"title":"快速开始","description":"","frontmatter":{"realPath":"docs/guide/quickstart.md"},"headers":[{"level":2,"title":"全量引入","slug":"全量引入","link":"#全量引入","children":[]},{"level":2,"title":"按需引入","slug":"按需引入","link":"#按需引入","children":[]}],"relativePath":"guide/quickstart.md","lastUpdated":1663212290000}'),l={name:"guide/quickstart.md"},o=p(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h1><h2 id="全量引入" tabindex="-1">全量引入 <a class="header-anchor" href="#全量引入" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> QhComponents </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;qh-components&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;qh-components/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(QhComponents)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> QhComponents </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;qh-components&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;qh-components/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(QhComponents)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="按需引入" tabindex="-1">按需引入 <a class="header-anchor" href="#按需引入" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> QhForm </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;qh-components/form&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(QhForm)</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> QhForm </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;qh-components/form&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(QhForm)</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,i,E,y,d){return n(),a("div",null,e)}const F=s(l,[["render",t]]);export{m as __pageData,F as default};
