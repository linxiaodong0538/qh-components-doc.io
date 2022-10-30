import{d as r,a as n,b as l,o as C,j as D,c as d,e as o,w as F,g as s,f as p,h as A}from"./app.f7d94ba1.js";const y=r({__name:"demo",setup(E){const e=n([{prop:"date",label:"\u65E5\u671F",type:"datetime"},{prop:"sex",label:"\u6027\u522B",type:"select",options:[{label:"\u7537",value:1},{label:"\u5973",value:2}]},{prop:"name",label:"\u59D3\u540D",type:"text"}]),t=n({date:void 0,sex:void 0,name:void 0}),a=()=>{console.log(t)};return(g,f)=>{const c=l("qh-form");return C(),D(c,{options:e,form:t,onCallback:a},null,8,["options","form"])}}}),i=s("h1",{id:"form",tabindex:"-1"},[p("Form "),s("a",{class:"header-anchor",href:"#form","aria-hidden":"true"},"#")],-1),B=s("h2",{id:"\u6761\u4EF6\u67E5\u8BE2",tabindex:"-1"},[p("\u6761\u4EF6\u67E5\u8BE2 "),s("a",{class:"header-anchor",href:"#\u6761\u4EF6\u67E5\u8BE2","aria-hidden":"true"},"#")],-1),u=s("p",null,"\u6E32\u67D3\u6548\u679C\u5982\u4E0B",-1),h=A('<h3 id="form-props" tabindex="-1"><code>&lt;form&gt;</code> Props <a class="header-anchor" href="#form-props" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>options <strong>(\u5FC5\u586B)</strong></td><td>json\u914D\u7F6E</td><td><code>Array</code></td><td style="text-align:center;"><code>() =&gt; []</code></td></tr><tr><td>form <strong>(\u5FC5\u586B)</strong></td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td><code>Object</code></td><td style="text-align:center;"><code>() =&gt; ({})</code></td></tr><tr><td>inline</td><td>\u884C\u5185\u8868\u5355\u6A21\u5F0F</td><td><code>boolean</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td>show-status-icon</td><td>\u662F\u5426\u5728\u8F93\u5165\u6846\u4E2D\u663E\u793A\u6821\u9A8C\u7ED3\u679C\u53CD\u9988\u56FE\u6807</td><td><code>boolean</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td>size</td><td>\u7528\u4E8E\u63A7\u5236\u8BE5\u8868\u5355\u5185\u7EC4\u4EF6\u7684\u5C3A\u5BF8:&#39;large&#39; | &#39;default&#39; | &#39;small&#39;</td><td><code>string</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td><code>Object</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>label-width</td><td>\u6807\u7B7E\u7684\u957F\u5EA6\uFF0C\u4F8B\u5982 &#39;50px&#39;\u3002 \u4F5C\u4E3A Form \u76F4\u63A5\u5B50\u5143\u7D20\u7684 form-item \u4F1A\u7EE7\u627F\u8BE5\u503C\u3002 \u53EF\u4EE5\u4F7F\u7528 auto</td><td><code>union</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>has-search</td><td>\u662F\u5426\u663E\u793A\u641C\u7D22</td><td><code>boolean</code></td><td style="text-align:center;"><code>true</code></td></tr><tr><td>has-reset</td><td>\u662F\u5426\u663E\u793A\u91CD\u7F6E</td><td><code>boolean</code></td><td style="text-align:center;"><code>true</code></td></tr></tbody></table><h3 id="form-slots" tabindex="-1"><code>&lt;form&gt;</code> Slots <a class="header-anchor" href="#form-slots" aria-hidden="true">#</a></h3><table><thead><tr><th>\u63D2\u69FD\u540D</th><th style="text-align:center;">\u63CF\u8FF0</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>default</td><td style="text-align:center;"></td><td>-</td></tr></tbody></table><h3 id="options-props" tabindex="-1"><code>&lt;options&gt;</code> Props <a class="header-anchor" href="#options-props" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label <strong>(\u5FC5\u586B)</strong></td><td>\u540D\u79F0</td><td><code>string</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>prop <strong>(\u5FC5\u586B)</strong></td><td>\u7ED1\u5B9A\u5B57\u6BB5</td><td><code>string</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>type <strong>(\u5FC5\u586B)</strong></td><td>&#39;select&#39; | &#39;cascader&#39;| &#39;date&#39; | &#39;year&#39; | &#39;month&#39; | &#39;week&#39; | &#39;dates&#39; | &#39;daterange&#39; | &#39;monthrange&#39; | &#39;yearrange&#39; | &#39;datetime&#39; <br>| &#39;datetimerange&#39; | &#39;number&#39; | &#39;textarea&#39;| &#39;text&#39; | &#39;timerange&#39;</td><td><code>string</code></td><td style="text-align:center;"><code>&#39;text&#39;</code></td></tr><tr><td>clearable</td><td>\u662F\u5426\u53EF\u6E05\u9664</td><td><code>boolean</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td>default-props</td><td>\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u5C5E\u6027</td><td><code>{ label: string, value: string }</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>options</td><td>\u9009\u9879\u6570\u636E\uFF0Coptions?: {<br> label: string<br> value: string | number | boolean<br> children?: object[]<br> }[]</td><td><code>Array</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>placeholder</td><td>\u5360\u4F4D\u7B26</td><td><code>string</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>shortcuts</td><td>\u8BBE\u7F6E\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61\uFF0CArray&lt;{ text: string; value: Date | Function }&gt;</td><td><code>Array</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>range-shortcuts</td><td>\u65E5\u671F\u8303\u56F4\u5FEB\u6377\u9009\u9879\uFF0C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u5BF9\u8C61\uFF0CArray&lt;{ text: string; value: Date | Function }&gt;</td><td><code>Array</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>format</td><td>\u663E\u793A\u5728\u8F93\u5165\u6846\u4E2D\u7684\u683C\u5F0F\u548C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\uFF0C\u8BF7\u67E5\u9605 date.js formats</td><td><code>string</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td><code>boolean</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td>filterable</td><td>Select \u7EC4\u4EF6\u662F\u5426\u53EF\u7B5B\u9009</td><td><code>boolean</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td><code>boolean</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td>remote</td><td>\u5176\u4E2D\u7684\u9009\u9879\u662F\u5426\u4ECE\u670D\u52A1\u5668\u8FDC\u7A0B\u52A0\u8F7D</td><td><code>boolean</code></td><td style="text-align:center;"><code>false</code></td></tr><tr><td>remote-method</td><td>\u81EA\u5B9A\u4E49\u8FDC\u7A0B\u641C\u7D22\u65B9\u6CD5</td><td><code>TSFunctionType</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>props</td><td>Cascader \u7EA7\u8054\u9009\u62E9\u5668\u914D\u7F6E\u9009\u9879\uFF0C\u8BE6\u89C1elementplus\u6587\u6863</td><td><code>Object</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>width</td><td>\u5BBD\u5EA6, number | string</td><td><code>union</code></td><td style="text-align:center;"><code>&#39;240px&#39;</code></td></tr></tbody></table><h3 id="events-props" tabindex="-1"><code>&lt;events&gt;</code> Props <a class="header-anchor" href="#events-props" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>search-help-change</td><td>\u641C\u7D22\u5E2E\u52A9\u4E0B\u62C9\u6846\u9009\u62E9\uFF1A(data)</td><td><code>Function</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>search-help-choose-row</td><td>\u641C\u7D22\u5E2E\u52A9\u8868\u683C\u9009\u62E9\uFF1A(row)</td><td><code>Function</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>change</td><td>input\u6846\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1\u65F6\uFF1A(category,value)</td><td><code>Function</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>callback</td><td>\u70B9\u51FB\u641C\u7D22</td><td><code>Function</code></td><td style="text-align:center;"><code>-</code></td></tr><tr><td>reset</td><td>\u70B9\u51FB\u91CD\u7F6E</td><td><code>Function</code></td><td style="text-align:center;"><code>-</code></td></tr></tbody></table>',8),x=JSON.parse('{"title":"Form","description":"","frontmatter":{"map":{"path":"/components/form/"},"realPath":"src/form/index.md"},"headers":[{"level":2,"title":"\u6761\u4EF6\u67E5\u8BE2","slug":"\u6761\u4EF6\u67E5\u8BE2","link":"#\u6761\u4EF6\u67E5\u8BE2","children":[{"level":3,"title":"<form> Props","slug":"form-props","link":"#form-props","children":[]},{"level":3,"title":"<form> Slots","slug":"form-slots","link":"#form-slots","children":[]},{"level":3,"title":"<options> Props","slug":"options-props","link":"#options-props","children":[]},{"level":3,"title":"<events> Props","slug":"events-props","link":"#events-props","children":[]}]}],"relativePath":"components/form/index.md","lastUpdated":1663212290000}'),m={name:"components/form/index.md"},q=Object.assign(m,{setup(E){return(e,t)=>{const a=l("demo");return C(),d("div",null,[i,B,u,o(a,{code:"%0D%0A%3Ctemplate%3E%0D%0A%20%20%20%20%3Cqh-form%20%3Aoptions%3D%22formOptions%22%20%3Aform%3D%22formData%22%20%40callback%3D%22search%22%3E%3C%2Fqh-form%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aconst%20formOptions%20%3D%20reactive(%5B%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20prop%3A%20%22date%22%2C%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22%E6%97%A5%E6%9C%9F%22%2C%0D%0A%20%20%20%20%20%20%20%20type%3A%20%22datetime%22%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20prop%3A%20%22sex%22%2C%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22%E6%80%A7%E5%88%AB%22%2C%0D%0A%20%20%20%20%20%20%20%20type%3A%20%22select%22%2C%0D%0A%20%20%20%20%20%20%20%20options%3A%20%5B%7B%20label%3A%20'%E7%94%B7'%2C%20value%3A%201%20%7D%2C%20%7B%20label%3A%20'%E5%A5%B3'%2C%20value%3A%202%20%7D%5D%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20prop%3A%20%22name%22%2C%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22%E5%A7%93%E5%90%8D%22%2C%0D%0A%20%20%20%20%20%20%20%20type%3A%20%22text%22%0D%0A%20%20%20%20%7D%2C%0D%0A%5D)%3B%0D%0A%0D%0Aconst%20formData%20%3D%20reactive(%7B%0D%0A%20%20%20%20date%3A%20undefined%2C%0D%0A%20%20%20%20sex%3A%20undefined%2C%0D%0A%20%20%20%20name%3A%20undefined%0D%0A%7D)%3B%0D%0A%0D%0Aconst%20search%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20console.log(formData)%0D%0A%7D%20%20%0D%0A%3C%2Fscript%3E",highlightedCode:"%3Cpre%20v-pre%20class%3D%22vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Eqh-form%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eoptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3EformOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eform%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3EformData%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Ecallback%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3Esearch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Eqh-form%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20reactive%2C%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bvue%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EformOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Ereactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bdate%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%E6%97%A5%E6%9C%9F%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bdatetime%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bsex%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%E6%80%A7%E5%88%AB%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bselect%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20options%3A%20%5B%7B%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%E7%94%B7%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7D%2C%20%7B%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%E5%A5%B3%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7D%5D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bname%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%E5%A7%93%E5%90%8D%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%5D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EformData%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Ereactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20date%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eundefined%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20sex%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eundefined%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eundefined%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%7D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Esearch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(formData)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%7D%20%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Eqh-form%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eoptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3EformOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eform%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3EformData%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Ecallback%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Esearch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Eqh-form%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20reactive%2C%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bvue%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EformOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Ereactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bdate%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%E6%97%A5%E6%9C%9F%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bdatetime%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bsex%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%E6%80%A7%E5%88%AB%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bselect%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20options%3A%20%5B%7B%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%E7%94%B7%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%2C%20%7B%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%E5%A5%B3%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%5D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bname%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%E5%A7%93%E5%90%8D%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%5D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EformData%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Ereactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20date%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eundefined%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20sex%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eundefined%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eundefined%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%7D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Esearch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(formData)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%7D%20%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"E:/\u9879\u76EE/qh-components-doc/src/form/demo/demo.vue",title:"",desc:""},{default:F(()=>[o(y)]),_:1}),h])}}});export{x as __pageData,q as default};
