(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4487)}])},4487:function(t,e,r){"use strict";function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){s(t,e,r[e])}))}return t}r.r(e),r.d(e,{default:function(){return c}});var o=r(5893),i=(r(906),r(1481));function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}var l={feature:function(t){var e=t.blok;return(0,o.jsx)("div",a(n({className:"column feature"},(0,i.LF)(e)),{children:e.name}))},grid:function(t){var e=t.blok;return(0,o.jsx)("div",a(n({className:"grid grid-cols-3"},(0,i.LF)(e)),{children:e.columns.map((function(t){return(0,o.jsx)(i.Xj,{blok:t},t._uid)}))}))},teaser:function(t){var e=t.blok;return(0,o.jsx)("h2",a(n({className:"text-2xl mb-10"},(0,i.LF)(e)),{children:e.headline}))},page:function(t){var e=t.blok;return(0,o.jsx)("main",a(n({className:"text-center mt-4"},(0,i.LF)(e)),{children:e.body.map((function(t){return(0,o.jsx)(i.Xj,{blok:t},t._uid)}))}))}};(0,i.$d)({accessToken:"Hm9iCy1Q3FTCnbXzzWR3XQtt",use:[i.M$],components:l,apiOptions:{region:""}});var c=function(t){var e=t.Component,r=t.pageProps;return(0,o.jsx)(e,n({},r))}},906:function(){},1481:function(t,e,r){"use strict";r.d(e,{Xj:function(){return O},M$:function(){return $},LF:function(){return _},$d:function(){return A},P4:function(){return M}});var s=r(7294);let n=!1;const o=[],i=t=>new Promise(((e,r)=>{if(typeof window>"u"||(window.storyblokRegisterEvent=t=>{window.location!==window.parent.location?n?t():o.push(t):console.warn("You are not in Draft Mode or in the Visual Editor.")},document.getElementById("storyblok-javascript-bridge")))return;const s=document.createElement("script");s.async=!0,s.src=t,s.id="storyblok-javascript-bridge",s.onerror=t=>r(t),s.onload=t=>{o.forEach((t=>t())),n=!0,e(t)},document.getElementsByTagName("head")[0].appendChild(s)}));var a=Object.defineProperty,l=(t,e,r)=>(((t,e,r)=>{e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r})(t,"symbol"!=typeof e?e+"":e,r),r);function c(t){return!(t!==t||t===1/0||t===-1/0)}class h{constructor(){l(this,"isCDNUrl",((t="")=>t.indexOf("/cdn/")>-1)),l(this,"getOptionsPage",((t,e=25,r=1)=>({...t,per_page:e,page:r}))),l(this,"delay",(t=>new Promise((e=>setTimeout(e,t))))),l(this,"arrayFrom",((t=0,e)=>[...Array(t)].map(e))),l(this,"range",((t=0,e=t)=>{const r=Math.abs(e-t)||0,s=t<e?1:-1;return this.arrayFrom(r,((e,r)=>r*s+t))})),l(this,"asyncMap",(async(t,e)=>Promise.all(t.map(e)))),l(this,"flatMap",((t=[],e)=>t.map(e).reduce(((t,e)=>[...t,...e]),[]))),l(this,"escapeHTML",(function(t){const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},r=/[&<>"']/g,s=RegExp(r.source);return t&&s.test(t)?t.replace(r,(t=>e[t])):t}))}stringify(t,e,r){const s=[];for(const n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;const o=t[n],i=r?"":encodeURIComponent(n);let a;a="object"==typeof o?this.stringify(o,e?e+encodeURIComponent("["+i+"]"):i,Array.isArray(o)):(e?e+encodeURIComponent("["+i+"]"):i)+"="+encodeURIComponent(o),s.push(a)}return s.join("&")}getRegionURL(t){switch(t){case"us":return"api-us.storyblok.com";case"cn":return"app.storyblokchina.cn";default:return"api.storyblok.com"}}}const u=function(t,e){const r={};for(const s in t){const n=t[s];e.indexOf(s)>-1&&null!==n&&(r[s]=n)}return r},p={nodes:{horizontal_rule:()=>({singleTag:"hr"}),blockquote:()=>({tag:"blockquote"}),bullet_list:()=>({tag:"ul"}),code_block:t=>({tag:["pre",{tag:"code",attrs:t.attrs}]}),hard_break:()=>({singleTag:"br"}),heading:t=>({tag:`h${t.attrs.level}`}),image:t=>({singleTag:[{tag:"img",attrs:u(t.attrs,["src","alt","title"])}]}),list_item:()=>({tag:"li"}),ordered_list:()=>({tag:"ol"}),paragraph:()=>({tag:"p"}),emoji:t=>({tag:[{tag:"span",attrs:{"data-type":"emoji","data-name":t.attrs.name,emoji:t.attrs.emoji}}]})},marks:{bold:()=>({tag:"b"}),strike:()=>({tag:"strike"}),underline:()=>({tag:"u"}),strong:()=>({tag:"strong"}),code:()=>({tag:"code"}),italic:()=>({tag:"i"}),link:t=>{const e=(new h).escapeHTML,r={...t.attrs},{linktype:s="url"}=t.attrs;if(r.href&&(r.href=e(t.attrs.href||"")),(t=>"email"===t)(s)&&(r.href=`mailto:${r.href}`),r.anchor&&(r.href=`${r.href}#${r.anchor}`,delete r.anchor),r.custom){for(const t in r.custom)r[t]=r.custom[t];delete r.custom}return{tag:[{tag:"a",attrs:r}]}},styled:t=>({tag:[{tag:"span",attrs:t.attrs}]}),subscript:()=>({tag:"sub"}),superscript:()=>({tag:"sup"}),anchor:t=>({tag:[{tag:"span",attrs:t.attrs}]}),highlight:t=>{var e;return null!=(e=t.attrs)&&e.color?{tag:[{tag:"span",attrs:{style:`background-color:${t.attrs.color};`}}]}:{tag:""}},textStyle:t=>{var e;return null!=(e=t.attrs)&&e.color?{tag:[{tag:"span",attrs:{style:`color:${t.attrs.color}`}}]}:{tag:""}}}};class d{constructor(t){l(this,"marks"),l(this,"nodes"),t||(t=p),this.marks=t.marks||[],this.nodes=t.nodes||[]}addNode(t,e){this.nodes[t]=e}addMark(t,e){this.marks[t]=e}render(t,e={optimizeImages:!1}){if(t&&t.content&&Array.isArray(t.content)){let r="";return t.content.forEach((t=>{r+=this.renderNode(t)})),e.optimizeImages?this.optimizeImages(r,e.optimizeImages):r}return console.warn("The render method must receive an Object with a \"content\" field.\n\t\t\tThe \"content\" field must be an array of nodes as the type ISbRichtext.\n\t\t\tISbRichtext:\n\t\t\t\tcontent?: ISbRichtext[]\n\t\t\t\tmarks?: ISbRichtext[]\n\t\t\t\tattrs?: any\n\t\t\t\ttext?: string\n\t\t\t\ttype: string\n\t\t\t\t\n\t\t\t\tExample:\n\t\t\t\t{\n\t\t\t\t\tcontent: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tcontent: [\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\ttext: 'Hello World',\n\t\t\t\t\t\t\t\t\ttype: 'text'\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\ttype: 'paragraph'\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\ttype: 'doc'\n\t\t\t\t}"),""}optimizeImages(t,e){let r=0,s=0,n="",o="";"boolean"!=typeof e&&("number"==typeof e.width&&e.width>0&&(n+=`width="${e.width}" `,r=e.width),"number"==typeof e.height&&e.height>0&&(n+=`height="${e.height}" `,s=e.height),("lazy"===e.loading||"eager"===e.loading)&&(n+=`loading="${e.loading}" `),"string"==typeof e.class&&e.class.length>0&&(n+=`class="${e.class}" `),e.filters&&("number"==typeof e.filters.blur&&e.filters.blur>=0&&e.filters.blur<=100&&(o+=`:blur(${e.filters.blur})`),"number"==typeof e.filters.brightness&&e.filters.brightness>=-100&&e.filters.brightness<=100&&(o+=`:brightness(${e.filters.brightness})`),e.filters.fill&&(e.filters.fill.match(/[0-9A-Fa-f]{6}/g)||"transparent"===e.filters.fill)&&(o+=`:fill(${e.filters.fill})`),e.filters.format&&["webp","png","jpeg"].includes(e.filters.format)&&(o+=`:format(${e.filters.format})`),"boolean"==typeof e.filters.grayscale&&e.filters.grayscale&&(o+=":grayscale()"),"number"==typeof e.filters.quality&&e.filters.quality>=0&&e.filters.quality<=100&&(o+=`:quality(${e.filters.quality})`),e.filters.rotate&&[90,180,270].includes(e.filters.rotate)&&(o+=`:rotate(${e.filters.rotate})`),o.length>0&&(o="/filters"+o))),n.length>0&&(t=t.replace(/<img/g,`<img ${n.trim()}`));const i=r>0||s>0||o.length>0?`${r}x${s}${o}`:"";return t=t.replace(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g,`a.storyblok.com/f/$1/$2.$3/m/${i}`),"boolean"!=typeof e&&(e.sizes||e.srcset)&&(t=t.replace(/<img.*?src=["|'](.*?)["|']/g,(t=>{var r,s;const n=t.match(/a.storyblok.com\/f\/(\d+)\/([^.]+)\.(gif|jpg|jpeg|png|tif|tiff|bmp)/g);if(n&&n.length>0){const i={srcset:null==(r=e.srcset)?void 0:r.map((t=>{if("number"==typeof t)return`//${n}/m/${t}x0${o} ${t}w`;if("object"==typeof t&&2===t.length){let e=0,r=0;return"number"==typeof t[0]&&(e=t[0]),"number"==typeof t[1]&&(r=t[1]),`//${n}/m/${e}x${r}${o} ${e}w`}})).join(", "),sizes:null==(s=e.sizes)?void 0:s.map((t=>t)).join(", ")};let a="";return i.srcset&&(a+=`srcset="${i.srcset}" `),i.sizes&&(a+=`sizes="${i.sizes}" `),t.replace(/<img/g,`<img ${a.trim()}`)}return t}))),t}renderNode(t){const e=[];t.marks&&t.marks.forEach((t=>{const r=this.getMatchingMark(t);r&&""!==r.tag&&e.push(this.renderOpeningTag(r.tag))}));const r=this.getMatchingNode(t);return r&&r.tag&&e.push(this.renderOpeningTag(r.tag)),t.content?t.content.forEach((t=>{e.push(this.renderNode(t))})):t.text?e.push(function(t){const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},r=/[&<>"']/g,s=RegExp(r.source);return t&&s.test(t)?t.replace(r,(t=>e[t])):t}(t.text)):r&&r.singleTag?e.push(this.renderTag(r.singleTag," /")):r&&r.html?e.push(r.html):"emoji"===t.type&&e.push(this.renderEmoji(t)),r&&r.tag&&e.push(this.renderClosingTag(r.tag)),t.marks&&t.marks.slice(0).reverse().forEach((t=>{const r=this.getMatchingMark(t);r&&""!==r.tag&&e.push(this.renderClosingTag(r.tag))})),e.join("")}renderTag(t,e){return t.constructor===String?`<${t}${e}>`:t.map((t=>{if(t.constructor===String)return`<${t}${e}>`;{let r=`<${t.tag}`;if(t.attrs)for(const e in t.attrs){const s=t.attrs[e];null!==s&&(r+=` ${e}="${s}"`)}return`${r}${e}>`}})).join("")}renderOpeningTag(t){return this.renderTag(t,"")}renderClosingTag(t){return t.constructor===String?`</${t}>`:t.slice(0).reverse().map((t=>t.constructor===String?`</${t}>`:`</${t.tag}>`)).join("")}getMatchingNode(t){const e=this.nodes[t.type];if("function"==typeof e)return e(t)}getMatchingMark(t){const e=this.marks[t.type];if("function"==typeof e)return e(t)}renderEmoji(t){if(t.attrs.emoji)return t.attrs.emoji;const e=[{tag:"img",attrs:{src:t.attrs.fallbackImage,draggable:"false",loading:"lazy",align:"absmiddle"}}];return this.renderTag(e," /")}}class g{constructor(t){l(this,"baseURL"),l(this,"timeout"),l(this,"headers"),l(this,"responseInterceptor"),l(this,"fetch"),l(this,"ejectInterceptor"),l(this,"url"),l(this,"parameters"),this.baseURL=t.baseURL,this.headers=t.headers||new Headers,this.timeout=null!=t&&t.timeout?1e3*t.timeout:0,this.responseInterceptor=t.responseInterceptor,this.fetch=(...e)=>t.fetch?t.fetch(...e):fetch(...e),this.ejectInterceptor=!1,this.url="",this.parameters={}}get(t,e){return this.url=t,this.parameters=e,this._methodHandler("get")}post(t,e){return this.url=t,this.parameters=e,this._methodHandler("post")}put(t,e){return this.url=t,this.parameters=e,this._methodHandler("put")}delete(t,e){return this.url=t,this.parameters=e,this._methodHandler("delete")}async _responseHandler(t){const e=[],r={data:{},headers:{},status:0,statusText:""};204!==t.status&&await t.json().then((t=>{r.data=t}));for(const s of t.headers.entries())e[s[0]]=s[1];return r.headers={...e},r.status=t.status,r.statusText=t.statusText,r}async _methodHandler(t){let e=`${this.baseURL}${this.url}`,r=null;if("get"===t){const t=new h;e=`${this.baseURL}${this.url}?${t.stringify(this.parameters)}`}else r=JSON.stringify(this.parameters);const s=new URL(e),n=new AbortController,{signal:o}=n;let i;this.timeout&&(i=setTimeout((()=>n.abort()),this.timeout));try{const e=await this.fetch(`${s}`,{method:t,headers:this.headers,body:r,signal:o});this.timeout&&clearTimeout(i);const n=await this._responseHandler(e);return this.responseInterceptor&&!this.ejectInterceptor?this._statusHandler(this.responseInterceptor(n)):this._statusHandler(n)}catch(a){return{message:a}}}eject(){this.ejectInterceptor=!0}_statusHandler(t){const e=/20[0-6]/g;return new Promise((r=>{if(e.test(`${t.status}`))return r(t);const s={message:t.statusText,status:t.status,response:Array.isArray(t.data)?t.data[0]:t.data.error||t.data.slug};throw new Error(JSON.stringify(s))}))}}const f="SB-Agent",m="SB-JS-CLIENT",y="SB-Agent-Version",b="5.14.2";let v={};const k={};class w{constructor(t,e){l(this,"client"),l(this,"maxRetries"),l(this,"throttle"),l(this,"accessToken"),l(this,"cache"),l(this,"helpers"),l(this,"resolveCounter"),l(this,"relations"),l(this,"links"),l(this,"richTextResolver"),l(this,"resolveNestedRelations");let r=t.endpoint||e;if(!r){const e=(new h).getRegionURL,s=!1===t.https?"http":"https";r=t.oauthToken?`${s}://${e(t.region)}/v1`:`${s}://${e(t.region)}/v2`}const s=new Headers;if(s.set("Content-Type","application/json"),s.set("Accept","application/json"),t.headers)for(const o in t.headers)s.set(o,t.headers[o]);s.has(f)||(s.set(f,m),s.set(y,b));let n=5;t.oauthToken&&(s.set("Authorization",t.oauthToken),n=3),t.rateLimit&&(n=t.rateLimit),t.richTextSchema?this.richTextResolver=new d(t.richTextSchema):this.richTextResolver=new d,t.componentResolver&&this.setComponentResolver(t.componentResolver),this.maxRetries=t.maxRetries||5,this.throttle=function(t,e,r){if(!c(e))throw new TypeError("Expected `limit` to be a finite number");if(!c(r))throw new TypeError("Expected `interval` to be a finite number");const s=[];let n=[],o=0;const i=function(){o++;const e=setTimeout((function(){o--,s.length>0&&i(),n=n.filter((function(t){return t!==e}))}),r);n.indexOf(e)<0&&n.push(e);const a=s.shift();a.resolve(t.apply(a.self,a.args))},a=function(...t){const r=this;return new Promise((function(n,a){s.push({resolve:n,reject:a,args:t,self:r}),o<e&&i()}))};return a.abort=function(){n.forEach(clearTimeout),n=[],s.forEach((function(t){t.reject((function(){Error.call(this,"Throttled function aborted"),this.name="AbortError"}))})),s.length=0},a}(this.throttledRequest,n,1e3),this.accessToken=t.accessToken||"",this.relations={},this.links={},this.cache=t.cache||{clear:"manual"},this.helpers=new h,this.resolveCounter=0,this.resolveNestedRelations=t.resolveNestedRelations||!0,this.client=new g({baseURL:r,timeout:t.timeout||0,headers:s,responseInterceptor:t.responseInterceptor,fetch:t.fetch})}setComponentResolver(t){this.richTextResolver.addNode("blok",(e=>{let r="";return e.attrs.body&&e.attrs.body.forEach((e=>{r+=t(e.component,e)})),{html:r}}))}parseParams(t){return t.version||(t.version="published"),t.token||(t.token=this.getToken()),t.cv||(t.cv=k[t.token]),Array.isArray(t.resolve_relations)&&(t.resolve_relations=t.resolve_relations.join(",")),t}factoryParamOptions(t,e){return this.helpers.isCDNUrl(t)?this.parseParams(e):e}makeRequest(t,e,r,s){const n=this.factoryParamOptions(t,this.helpers.getOptionsPage(e,r,s));return this.cacheResponse(t,n)}get(t,e){e||(e={});const r=`/${t}`,s=this.factoryParamOptions(r,e);return this.cacheResponse(r,s)}async getAll(t,e,r){const s=(null==e?void 0:e.per_page)||25,n=`/${t}`,o=n.split("/"),i=r||o[o.length-1],a=await this.makeRequest(n,e,s,1),l=a.total?Math.ceil(a.total/s):1,c=await this.helpers.asyncMap(this.helpers.range(1,l),(t=>this.makeRequest(n,e,s,t+1)));return this.helpers.flatMap([a,...c],(t=>Object.values(t.data[i])))}post(t,e){const r=`/${t}`;return Promise.resolve(this.throttle("post",r,e))}put(t,e){const r=`/${t}`;return Promise.resolve(this.throttle("put",r,e))}delete(t,e){const r=`/${t}`;return Promise.resolve(this.throttle("delete",r,e))}getStories(t){return this.get("cdn/stories",t)}getStory(t,e){return this.get(`cdn/stories/${t}`,e)}getToken(){return this.accessToken}ejectInterceptor(){this.client.eject()}_cleanCopy(t){return JSON.parse(JSON.stringify(t))}_insertLinks(t,e,r){const s=t[e];s&&"multilink"==s.fieldtype&&"story"==s.linktype&&"string"==typeof s.id&&this.links[r][s.id]?s.story=this._cleanCopy(this.links[r][s.id]):s&&"story"===s.linktype&&"string"==typeof s.uuid&&this.links[r][s.uuid]&&(s.story=this._cleanCopy(this.links[r][s.uuid]))}_insertRelations(t,e,r,s){if(r.indexOf(`${t.component}.${e}`)>-1)if("string"==typeof t[e])this.relations[s][t[e]]&&(t[e]=this._cleanCopy(this.relations[s][t[e]]));else if(t[e]&&t[e].constructor===Array){const r=[];t[e].forEach((t=>{this.relations[s][t]&&r.push(this._cleanCopy(this.relations[s][t]))})),t[e]=r}}iterateTree(t,e,r){const s=t=>{if(null!=t)if(t.constructor===Array)for(let e=0;e<t.length;e++)s(t[e]);else if(t.constructor===Object){if(t._stopResolving)return;for(const n in t)(t.component&&t._uid||"link"===t.type)&&(this._insertRelations(t,n,e,r),this._insertLinks(t,n,r)),s(t[n])}};s(t.content)}async resolveLinks(t,e,r){let s=[];if(t.link_uuids){const r=t.link_uuids.length,n=[],o=50;for(let e=0;e<r;e+=o){const s=Math.min(r,e+o);n.push(t.link_uuids.slice(e,s))}for(let t=0;t<n.length;t++)(await this.getStories({per_page:o,language:e.language,version:e.version,by_uuids:n[t].join(",")})).data.stories.forEach((t=>{s.push(t)}))}else s=t.links;s.forEach((t=>{this.links[r][t.uuid]={...t,_stopResolving:!0}}))}async resolveRelations(t,e,r){let s=[];if(t.rel_uuids){const r=t.rel_uuids.length,n=[],o=50;for(let e=0;e<r;e+=o){const s=Math.min(r,e+o);n.push(t.rel_uuids.slice(e,s))}for(let t=0;t<n.length;t++)(await this.getStories({per_page:o,language:e.language,version:e.version,by_uuids:n[t].join(",")})).data.stories.forEach((t=>{s.push(t)}))}else s=t.rels;s&&s.length>0&&s.forEach((t=>{this.relations[r][t.uuid]={...t,_stopResolving:!0}}))}async resolveStories(t,e,r){var s,n;let o=[];if(this.links[r]={},this.relations[r]={},typeof e.resolve_relations<"u"&&e.resolve_relations.length>0&&("string"==typeof e.resolve_relations&&(o=e.resolve_relations.split(",")),await this.resolveRelations(t,e,r)),e.resolve_links&&["1","story","url","link"].indexOf(e.resolve_links)>-1&&(null!=(s=t.links)&&s.length||null!=(n=t.link_uuids)&&n.length)&&await this.resolveLinks(t,e,r),this.resolveNestedRelations)for(const i in this.relations[r])this.iterateTree(this.relations[r][i],o,r);t.story?this.iterateTree(t.story,o,r):t.stories.forEach((t=>{this.iterateTree(t,o,r)})),delete this.links[r],delete this.relations[r]}async cacheResponse(t,e,r){(typeof r>"u"||!r)&&(r=0);const s=this.helpers.stringify({url:t,params:e}),n=this.cacheProvider();if("auto"===this.cache.clear&&"draft"===e.version&&await this.flushCache(),"published"===e.version&&"/cdn/spaces/me"!=t){const t=await n.get(s);if(t)return Promise.resolve(t)}return new Promise((async(o,i)=>{var a;try{const r=await this.throttle("get",t,e);if(200!==r.status)return i(r);let l={data:r.data,headers:r.headers};if(null!=(a=r.headers)&&a["per-page"]&&(l=Object.assign({},l,{perPage:r.headers["per-page"]?parseInt(r.headers["per-page"]):0,total:r.headers["per-page"]?parseInt(r.headers.total):0})),l.data.story||l.data.stories){const t=this.resolveCounter=++this.resolveCounter%1e3;await this.resolveStories(l.data,e,`${t}`)}return"published"===e.version&&"/cdn/spaces/me"!=t&&await n.set(s,l),l.data.cv&&e.token&&("draft"==e.version&&k[e.token]!=l.data.cv&&await this.flushCache(),k[e.token]=l.data.cv),o(l)}catch(S){if(S.response&&429===S.response.status&&(r=r?r+1:0)<this.maxRetries)return console.log(`Hit rate limit. Retrying in ${r} seconds.`),await this.helpers.delay(1e3*r),this.cacheResponse(t,e,r).then(o).catch(i);i(S.message)}}))}throttledRequest(t,e,r){return this.client[t](e,r)}cacheVersions(){return k}cacheVersion(){return k[this.accessToken]}setCacheVersion(t){this.accessToken&&(k[this.accessToken]=t)}cacheProvider(){switch(this.cache.type){case"memory":return{get:t=>Promise.resolve(v[t]),getAll:()=>Promise.resolve(v),set:(t,e)=>(v[t]=e,Promise.resolve(void 0)),flush:()=>(v={},Promise.resolve(void 0))};case"custom":if(this.cache.custom)return this.cache.custom;default:return{get:()=>Promise.resolve(void 0),getAll:()=>Promise.resolve(void 0),set:()=>Promise.resolve(void 0),flush:()=>Promise.resolve(void 0)}}}async flushCache(){return await this.cacheProvider().flush(),this}}const $=(t={})=>{const{apiOptions:e}=t;if(e.accessToken)return{storyblokApi:new w(e)};console.error("You need to provide an access token to interact with Storyblok API. Read https://www.storyblok.com/docs/api/content-delivery#topics/authentication")},_=t=>{if("object"!=typeof t||typeof t._editable>"u")return{};const e=JSON.parse(t._editable.replace(/^<!--#storyblok#/,"").replace(/-->$/,""));return e?{"data-blok-c":JSON.stringify(e),"data-blok-uid":e.id+"-"+e.uid}:{}};let j,T="https://app.storyblok.com/f/storyblok-v2-latest.js";const R=(t,e)=>{t.addNode("blok",(t=>{let r="";return t.attrs.body.forEach((t=>{r+=e(t.component,t)})),{html:r}}))},O=(0,s.forwardRef)((({blok:t,...e},r)=>{if(!t)return console.error("Please provide a 'blok' property to the StoryblokComponent"),s.createElement("div",null,"Please provide a blok property to the StoryblokComponent");const n=I(t.component);if(n)return s.createElement(n,{ref:r,blok:t,...e});if(N()){const r=L();return r?s.createElement(r,{blok:t,...e}):s.createElement(s.Fragment,null,s.createElement("p",null,"Component could not be found for blok"," ",s.createElement("strong",null,t.component),"! Is it configured correctly?"))}return s.createElement("div",null)}));O.displayName="StoryblokComponent";let P=null,E={},x=!1,S=null;const C=()=>(P||console.error("You can't use getStoryblokApi if you're not loading apiPlugin."),P),I=t=>E[t]?E[t]:(console.error(`Component ${t} doesn't exist.`),!1),N=()=>x,L=()=>S,A=(t={})=>{const{storyblokApi:e}=((t={})=>{var e,r;const{bridge:s,accessToken:n,use:o=[],apiOptions:a={},richText:l={},bridgeUrl:c}=t;a.accessToken=a.accessToken||n;const h={bridge:s,apiOptions:a};let u={};o.forEach((t=>{u={...u,...t(h)}})),c&&(T=c);const p=!(typeof window>"u")&&(null==(r=null==(e=window.location)?void 0:e.search)?void 0:r.includes("_storyblok_tk"));return!1!==s&&p&&i(T),j=new d(l.schema),l.resolver&&R(j,l.resolver),u})(t);P=e,E=t.components,x=t.enableFallbackComponent,S=t.customFallbackComponent},M=(t,e={},r={})=>{const n=C();if(!n)return console.error("You can't use useStoryblok if you're not loading apiPlugin."),null;let[o,i]=(0,s.useState)({});r.resolveRelations=r.resolveRelations??e.resolve_relations,r.resolveLinks=r.resolveLinks??e.resolve_links;const a=typeof window<"u"&&typeof window.storyblokRegisterEvent<"u";return(0,s.useEffect)((()=>{!async function(){const{data:s}=await n.get(`cdn/stories/${t}`,e);i(s.story),a&&s.story.id&&((t,e,r={})=>{var s;const n=!(typeof window>"u")&&typeof window.storyblokRegisterEvent<"u",o=+new URL(null==(s=window.location)?void 0:s.href).searchParams.get("_storyblok")===t;if(n&&o){if(!t)return void console.warn("Story ID is not defined. Please provide a valid ID.");window.storyblokRegisterEvent((()=>{new window.StoryblokBridge(r).on(["input","published","change"],(r=>{"input"===r.action&&r.story.id===t?e(r.story):("change"===r.action||"published"===r.action)&&r.storyId===t&&window.location.reload()}))}))}})(s.story.id,(t=>i(t)),r)}()}),[t,JSON.stringify(e)]),o}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(1118),e(387)}));var r=t.O();_N_E=r}]);