(function(t){function e(e){for(var i,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(i=!1)}i&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},r={app:0},a={app:0},o=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f0d76b87"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"25466259"}[t]+".css",a=l.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===i||u===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var i=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[t],h.parentNode.removeChild(h),n(o)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,n){i=a[t]=[e,n]}));e.push(i[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,n[1](d)}a[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2647:function(t,e,n){"use strict";n("89ba")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/compare"}},[t._v("Compare")])],1),n("router-view")],1)},a=[],o=(n("5c0b"),n("2877")),s={},l=Object(o["a"])(s,r,a,!1,null,null,null),c=l.exports,u=n("5c96"),d=n.n(u);n("c69f");i["default"].use(d.a);n("d3b7");var h=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"border",attrs:{id:"home"}},[n("el-row",[n("el-col",{attrs:{span:16}},[n("div",{staticStyle:{display:"flex"}},[n("div",{staticStyle:{"flex-grow":"1"}},[n("el-input",{model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("div",[n("el-button-group",[n("el-button",{attrs:{type:"primary"},on:{click:t.parseText}},[t._v("Analyze")]),n("el-button",{attrs:{type:"primary"},on:{click:t.WriteFile}},[t._v("Save")])],1)],1)])]),n("el-col",{attrs:{span:8}},[n("el-upload",{staticClass:"upload-demo",attrs:{drag:"",multiple:"",action:"https://jsonplaceholder.typicode.com/posts/","before-upload":t.uploadFile}},[n("div",{staticClass:"el-upload__text"},[t._v("Drag the file here, or"),n("em",[t._v(" click upload")])])])],1),n("el-col",{staticStyle:{position:"relative"},attrs:{span:16}},[n("div",{staticStyle:{height:"800px",overflow:"auto",border:"1px solid",display:"block"}},[n("div",{staticStyle:{"padding-top":"10px",display:"flex"}},[n("div",[n("tree-node",{attrs:{data:t.showTree}})],1)]),n("el-button",{staticStyle:{position:"absolute",left:"15px",bottom:"25px"},attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:t.clearTree}})],1)]),n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{height:"800px",display:"flex","flex-direction":"column"}},[n("div",{staticStyle:{height:"50%",width:"100%",overflow:"auto",border:"1px solid"}},[n("div",{staticClass:"box"},[t._l(t.treeNode,(function(e,i){return[e.isLeaf?t._e():[n("div",{key:i,staticClass:"item",on:{mousedown:function(n){return t.highLight(e)}}},[n("el-tag",{attrs:{type:"info",closable:"",effect:e.isFocus?"dark":"light"},on:{close:function(n){return t.handleClose(e)}}},[t._v(" ("+t._s(e.property)+","+t._s(e.start)+","+t._s(e.end)+") ")])],1)]]})),n("div",{staticClass:"addItem"},[t.inputVisible?n("div",{staticStyle:{display:"flex"}},[n("el-input",{ref:"saveTagInput",staticStyle:{"max-width":"150px"},attrs:{size:"small"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),n("el-button-group",[n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-circle-check"},on:{click:t.handleInputConfirm}}),n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-circle-close"},on:{click:t.cancelAdd}})],1)],1):n("el-button",{attrs:{size:"small",type:"info"},on:{click:t.showInput}},[t._v("+ New Tag ")])],1)],2)]),n("div",{staticStyle:{height:"10%",width:"100%",border:"1px solid"}},[n("div",{staticStyle:{height:"100%",display:"flex","align-items":"center","margin-left":"5px","margin-right":"5px"}},[n("el-button-group",{staticStyle:{"margin-right":"5px"}},[n("el-button",{attrs:{type:"primary",disabled:t.stack.length<1},on:{click:t.undo}},[t._v("Undo")]),n("el-button",{attrs:{type:"primary",disabled:t.stack.length<1},on:{click:t.undoAll}},[t._v("Undo all")])],1),n("el-tag",{staticStyle:{"flex-grow":"1"}},[t._v("F1: "+t._s(t.score["f1"].toFixed(4)))]),n("el-tag",{staticStyle:{"flex-grow":"1"}},[t._v("LR: "+t._s(t.score["LR"].toFixed(4)))]),n("el-tag",{staticStyle:{"flex-grow":"1"}},[t._v("LP: "+t._s(t.score["LP"].toFixed(4)))])],1)]),n("div",{staticStyle:{height:"50%",width:"100%",overflow:"auto",border:"1px solid"}},[n("div",{staticClass:"box"},[t._l(t.treeProperty,(function(e,i){return[e.isLeaf?[n("div",{key:i,staticClass:"item"},[n("el-input",{on:{blur:t.propertyChange},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.propertyChange(e)}},model:{value:e.property,callback:function(n){t.$set(e,"property",n)},expression:"item.property"}},[n("template",{slot:"prepend"},[t._v(t._s(e.text))])],2)],1)]:t._e()]}))],2)])])])],1)],1)},f=[],v=(n("b0c0"),n("ac1f"),n("25f0"),n("466d"),n("1276"),n("dede")),g=n("6fd4"),y=n("21a6"),x=n.n(y),m={name:"home",components:{treeNode:g["a"]},data:function(){return{text:"",tree:new v["a"],oriTree:new v["a"],filename:"",treeNode:[],treeProperty:[],inputVisible:!1,inputValue:"(,,)",stack:[],isHidden:!1}},computed:{showTree:function(){return this.isHidden?new v["a"]:this.tree},score:function(){return this.tree.score(this.oriTree)}},methods:{updateTree:function(){this.treeNode=this.tree.getAllNodeBySpan(),this.treeProperty=this.tree.getAllNodeByDepth(),this.text=this.tree.toString()},parseText:function(){try{this.tree=v["a"].parse(this.text),this.oriTree=v["a"].parse(this.text),this.stack=[],this.updateTree()}catch(t){alert(t.message)}},undo:function(){this.text=this.stack.pop(),this.tree=v["a"].parse(this.text),this.updateTree()},undoAll:function(){this.text=this.stack[0],this.tree=v["a"].parse(this.text),this.stack=[],this.updateTree()},clearTree:function(){this.isHidden=!this.isHidden},WriteFile:function(){var t=new Blob([this.tree.toString()],{type:"text/plain;charset=utf-8"});x()(t,this.filename+"_patch")},handleInputConfirm:function(){if(null!==this.inputValue.match(/\(\w+,\d+,\d+\)/g)){var t=this.inputValue.replaceAll(/[\s\\)(]/g,"").split(",");try{var e=this.tree.toString();this.tree.addNode(t[0],parseInt(t[1],10),parseInt(t[2],10)),this.stack.push(e)}catch(n){alert(n.message)}this.updateTree()}else alert("格式错误！");this.inputVisible=!1,this.inputValue="(,,)"},cancelAdd:function(){this.inputVisible=!1,this.inputValue="(,,)"},propertyChange:function(){this.tree.toString()!==this.text&&this.stack.push(this.text),this.updateTree()},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(){t.$refs.saveTagInput.$refs.input.focus()}))},handleClose:function(t){var e=this.tree.toString();this.tree.delNode(t),this.stack.push(e),this.updateTree()},uploadFile:function(t){var e=this,n=new FileReader;return n.onload=function(){e.text=n.result,e.filename=t.name,e.parseText()},n.readAsText(t),!1},highLight:function(t){this.tree.unFocusAll(),t.isFocus=!0}}},b=m,_=(n("cccb"),Object(o["a"])(b,p,f,!1,null,null,null)),k=_.exports;i["default"].use(h["a"]);var w=[{path:"/",name:"Home",component:k},{path:"/compare",name:"Compare",component:function(){return n.e("about").then(n.bind(null,"1405"))}}],S=new h["a"]({routes:w}),L=S;i["default"].config.productionTip=!1,new i["default"]({router:L,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5ced":function(t,e,n){},"6fd4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node",style:"background:"+(t.data.isFocus?"Khaki":"cornsilk"),on:{mousedown:function(e){return t.isHighLight(e,t.data)}}},[t._v(" "+t._s(t.data.text)+" "),n("div",{staticClass:"property"},[t._v(t._s(t.data.property))]),t.data.isLeaf?t._e():[n("div",{staticStyle:{display:"flex"}},[t._l(t.data.child,(function(t,e){return[n("div",{key:e,style:"flex-grow:"+t.textLen},[n("tree-node",{attrs:{data:t}})],1)]}))],2)]],2)},r=[],a=n("dede"),o={name:"treeNode",props:{data:{type:a["a"]}},methods:{isHighLight:function(t,e){t.stopPropagation(),e.unFocusAll(),e.isFocus=!0}}},s=o,l=(n("2647"),n("2877")),c=Object(l["a"])(s,i,r,!1,null,"55cfce3b",null);e["a"]=c.exports},"89ba":function(t,e,n){},"9c0c":function(t,e,n){},c69f:function(t,e,n){},cccb:function(t,e,n){"use strict";n("5ced")},dede:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n("99af"),n("4de4"),n("7db0"),n("4160"),n("c975"),n("d81d"),n("13d5"),n("fb6a"),n("a434"),n("d3b7"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var i=n("2909"),r=n("d4ec"),a=n("bee2");function o(t){return t.replace(/(^\s*)|(\s*$)/g,"")}function s(t){return-1===t.indexOf("(")&&-1===t.indexOf(")")}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(s(t))return t;var n=e;if("("!==t[e])throw new Error("parse Error!");for(var i=1,r=n+1;r<t.length;r++)if(")"===t[r]?i--:"("===t[r]&&i++,0===i)return t.substring(n,r+1)}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",n=[],i=0;for(i=0;i<t.length;i++)if(-1!==e.indexOf(t[i])){n.push(t.substring(1,i));break}for(var r=i+1;r<t.length;r++)if(-1===e.indexOf(t[r])){n.push(t.substring(r,t.length-1));break}return n}var u=0,d=function(){function t(){Object(r["a"])(this,t),this.property="",this.second="",this.isLeaf=!1,this.text="",this.textLen=0,this.start=-1,this.end=-1,this.child=[],this.father=null,this.isFocus=!1}return Object(a["a"])(t,[{key:"_initText",value:function(){return""===this.text&&(this.text=o(this.child.map((function(t){return t._initText()})).reduce((function(t,e){return t+" "+e})))),this.isLeaf&&(this.text+="("+this.start+")"),this.text}},{key:"_initIndex",value:function(){if(!this.isLeaf){this.start=this.child[0]._initIndex()[0],this.end=this.child[this.child.length-1]._initIndex()[1],this.textLen=this.end-this.start+1;for(var t=1;t<this.child.length-1;t++)this.child[t]._initIndex()}return[this.start,this.end]}},{key:"getAllNodeByDepth",value:function(){var t=[this];return this.isLeaf||this.child.map((function(t){return t.getAllNodeByDepth()})).forEach((function(e){t=t.concat(e)})),t}},{key:"getAllNodeBySpan",value:function(){for(var t=[this],e=0;e<t.length;e++)this.isLeaf||(t=t.concat(t[e].child));return t}},{key:"delNode",value:function(t){var e,n=t.father;(e=n.child).splice.apply(e,[n.child.indexOf(t),1].concat(Object(i["a"])(t.child))),t.child.forEach((function(t){return t.father=n}))}},{key:"addNode",value:function(e,n,i){var r=new t;if(r.property=e,r.start=n,r.end=i,n>i)throw new Error("不能在这里添加节点");r.isLeaf=!1;var a=-1,s=-1,l=this.getAllNodeBySpan().find((function(t){for(var e=!1,r=!1,o=0;o<t.child.length;o++)if(t.child[o].start===n&&(e=!0,a=o),t.child[o].end===i&&(r=!0,s=o),e&&r)return!0;return e&&r}));if(!(l instanceof t))throw new Error("不能在这里添加节点");var c=l.child.slice(a,s+1);l.child.splice(a,s-a+1,r),r.father=c[0].father,r.child=c,r.child.forEach((function(t){t.father=r,r.text+=t.text+" ",r.textLen=r.end-r.start+1,r.second+=t.second+" "})),r.text=o(r.text),r.second=o(r.second)}},{key:"_unFocusAll",value:function(){this.getAllNodeBySpan().forEach((function(t){t.isFocus=!1}))}},{key:"unFocusAll",value:function(){var t=this;while(null!==t.father)t=t.father;t._unFocusAll()}},{key:"toString",value:function(){var t="("+this.property+" ";if(this.isLeaf)t+=this.second;else for(var e=0;e<this.child.length;e++)t+=this.child[e].toString()+" ";return t=o(t),t+=")",t}},{key:"getSpanList",value:function(){var t=this.getAllNodeByDepth();return t.filter((function(t){return!(null==t.father||t.isLeaf)})).map((function(t){return"("+t.property+","+t.start+","+t.end+")"}))}},{key:"score",value:function(t){var e=this.getSpanList(),n=t.getSpanList(),i=e.filter((function(t){return new Set(n).has(t)})),r=i.length,a=e.length,o=n.length,s=a>0?r/a:0,l=o>0?r/o:0,c=s+l>0?2*s*l/(s+l):0;return{LP:s,LR:l,f1:c}}}],[{key:"_parse",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";e=l(o(e));var i=c(e,n),r=new t;if(r.property=i[0],r.second=i[1],r.isLeaf=s(r.second),s(r.second))r.text=r.second,r.start=u,r.end=u,r.textLen=1,u++;else{var a=0;while(a!==r.second.length){var d=l(r.second,a);r.child.push(t._parse(d,n)),a+=d.length;while(-1!==n.indexOf(r.second[a]))a++}r.child.forEach((function(t){return t.father=r}))}return r}},{key:"parse",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";u=0;var i=t._parse(e,n);return i._initText(),i._initIndex(),i}}]),t}()}});
//# sourceMappingURL=app.77b161f3.js.map