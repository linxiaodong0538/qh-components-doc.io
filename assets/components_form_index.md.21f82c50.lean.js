import{d as r,a as n,b as l,o as C,j as D,c as d,e as o,w as F,g as s,f as p,h as A}from"./app.a5b848ca.js";const y=r({__name:"demo",setup(E){const e=n([{prop:"date",label:"\u65E5\u671F",type:"datetime"},{prop:"sex",label:"\u6027\u522B",type:"select",options:[{label:"\u7537",value:1},{label:"\u5973",value:2}]},{prop:"name",label:"\u59D3\u540D",type:"text"}]),t=n({date:void 0,sex:void 0,name:void 0}),a=()=>{console.log(t)};return(g,f)=>{const c=l("qh-form");return C(),D(c,{options:e,form:t,onCallback:a},null,8,["options","form"])}}}),i=s("h1",{id:"form",tabindex:"-1"},[p("Form "),s("a",{class:"header-anchor",href:"#form","aria-hidden":"true"},"#")],-1),B=s("h2",{id:"\u6761\u4EF6\u67E5\u8BE2",tabindex:"-1"},[p("\u6761\u4EF6\u67E5\u8BE2 "),s("a",{class:"header-anchor",href:"#\u6761\u4EF6\u67E5\u8BE2","aria-hidden":"true"},"#")],-1),u=s("p",null,"\u6E32\u67D3\u6548\u679C\u5982\u4E0B",-1),h=A("",8),x=JSON.parse('{"title":"Form","description":"","frontmatter":{"map":{"path":"/components/form/"},"realPath":"src/form/index.md"},"headers":[{"level":2,"title":"\u6761\u4EF6\u67E5\u8BE2","slug":"\u6761\u4EF6\u67E5\u8BE2","link":"#\u6761\u4EF6\u67E5\u8BE2","children":[{"level":3,"title":"<form> Props","slug":"form-props","link":"#form-props","children":[]},{"level":3,"title":"<form> Slots","slug":"form-slots","link":"#form-slots","children":[]},{"level":3,"title":"<options> Props","slug":"options-props","link":"#options-props","children":[]},{"level":3,"title":"<events> Props","slug":"events-props","link":"#events-props","children":[]}]}],"relativePath":"components/form/index.md","lastUpdated":1667225770000}'),m={name:"components/form/index.md"},q=Object.assign(m,{setup(E){return(e,t)=>{const a=l("demo");return C(),d("div",null,[i,B,u,o(a,{code:"%0D%0A%3Ctemplate%3E%0D%0A%20%20%20%20%3Cqh-form%20%3Aoptions%3D%22formOptions%22%20%3Aform%3D%22formData%22%20%40callback%3D%22search%22%3E%3C%2Fqh-form%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20%22vue%22%3B%0D%0Aconst%20formOptions%20%3D%20reactive(%5B%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20prop%3A%20%22date%22%2C%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22%E6%97%A5%E6%9C%9F%22%2C%0D%0A%20%20%20%20%20%20%20%20type%3A%20%22datetime%22%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20prop%3A%20%22sex%22%2C%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22%E6%80%A7%E5%88%AB%22%2C%0D%0A%20%20%20%20%20%20%20%20type%3A%20%22select%22%2C%0D%0A%20%20%20%20%20%20%20%20options%3A%20%5B%7B%20label%3A%20'%E7%94%B7'%2C%20value%3A%201%20%7D%2C%20%7B%20label%3A%20'%E5%A5%B3'%2C%20value%3A%202%20%7D%5D%0D%0A%20%20%20%20%7D%2C%0D%0A%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20prop%3A%20%22name%22%2C%0D%0A%20%20%20%20%20%20%20%20label%3A%20%22%E5%A7%93%E5%90%8D%22%2C%0D%0A%20%20%20%20%20%20%20%20type%3A%20%22text%22%0D%0A%20%20%20%20%7D%2C%0D%0A%5D)%3B%0D%0A%0D%0Aconst%20formData%20%3D%20reactive(%7B%0D%0A%20%20%20%20date%3A%20undefined%2C%0D%0A%20%20%20%20sex%3A%20undefined%2C%0D%0A%20%20%20%20name%3A%20undefined%0D%0A%7D)%3B%0D%0A%0D%0Aconst%20search%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20%20%20console.log(formData)%0D%0A%7D%20%20%0D%0A%3C%2Fscript%3E",highlightedCode:"%3Cpre%20v-pre%20class%3D%22shiki%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Eqh-form%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eoptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3EformOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eform%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3EformData%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Ecallback%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3Esearch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Eqh-form%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%20reactive%2C%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bvue%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EformOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Ereactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bdate%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%E6%97%A5%E6%9C%9F%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bdatetime%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bsex%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%E6%80%A7%E5%88%AB%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bselect%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20options%3A%20%5B%7B%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%E7%94%B7%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7D%2C%20%7B%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26%2339%3B%E5%A5%B3%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7D%5D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Bname%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3B%E5%A7%93%E5%90%8D%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23A5D6FF%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%5D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3EformData%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Ereactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20date%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eundefined%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20sex%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eundefined%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379C0FF%22%3Eundefined%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%7D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Esearch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FF7B72%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%20%20%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D2A8FF%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E(formData)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%7D%20%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%237EE787%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23C9D1D9%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Eqh-form%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eoptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3EformOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eform%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3EformData%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Ecallback%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3Esearch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Eqh-form%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%20reactive%2C%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bvue%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EformOptions%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Ereactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%5B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bdate%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%E6%97%A5%E6%9C%9F%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bdatetime%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bsex%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%E6%80%A7%E5%88%AB%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bselect%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20options%3A%20%5B%7B%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%E7%94%B7%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E1%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%2C%20%7B%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26%2339%3B%E5%A5%B3%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%20value%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3E2%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7D%5D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20prop%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Bname%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20label%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3B%E5%A7%93%E5%90%8D%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%20%20%20%20type%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230A3069%22%3E%26quot%3Btext%26quot%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%5D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3EformData%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Ereactive%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20date%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eundefined%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20sex%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eundefined%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20name%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%230550AE%22%3Eundefined%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%7D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Esearch%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23CF222E%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%20%20%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%238250DF%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E(formData)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%7D%20%20%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23116329%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292F%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",src:"E:/\u9879\u76EE/qh-components-doc/src/form/demo/demo.vue",title:"",desc:""},{default:F(()=>[o(y)]),_:1}),h])}}});export{x as __pageData,q as default};
