(this["webpackJsonpmenu-guide"]=this["webpackJsonpmenu-guide"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(3),i=t.n(r),o=(t(9),t(1));t(10);function u(){var e=function(e){if(!e)return{};try{var n,t,a=e.split("?")[1].split("#")[0].split("&"),c={};for(n in a)a.hasOwnProperty(n)&&(c[(t=a[n].split("="))[0]]=t[1]);return c}catch(r){return console.log("Parsing Error",e),{}}}(window.location.search).menus;return e?e.split(",").map((function(e){return{name:decodeURIComponent(e),count:0}})):[{name:"\uc544\uc774\uc2a4 \ub77c\ub5bc",count:0},{name:"\uc544\uc774\uc2a4 \uc544\uba54\ub9ac\uce74\ub178",count:0},{name:"\ud56b \ub77c\ub5bc",count:0},{name:"\ud56b \uc544\uba54\ub9ac\uce74\ub178",count:0}]}var s=function(){var e=Object(a.useState)(u()),n=Object(o.a)(e,2),t=n[0],r=n[1];function i(e){var n=e.menu,i=n.menu,o=n.index,u=i.name,s=Object(a.useCallback)((function(){!function(e){r(t.map((function(n){return n.name===e&&(n.count=n.count+1),n})))}(u)}),[u]),l=Object(a.useCallback)((function(){!function(e){r(t.map((function(n){return n.name===e&&(n.count=n.count-1),n})).filter((function(e){return-1!==e.count})))}(u)}),[u]);return c.a.createElement("div",{key:o,className:"panel-block"},c.a.createElement("div",{className:"button is-success is-fullwidth",onClick:s},c.a.createElement("span",{className:"title is-6"},"".concat(i.name," x ").concat(i.count))),"\xa0",c.a.createElement("div",{className:"button is-danger is-1",onClick:l},c.a.createElement("span",{className:"title is-6"},"X")))}var s=Object(a.useState)(""),l=Object(o.a)(s,2),m=l[0],p=l[1];return c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:"panel"},c.a.createElement("p",{className:"panel-tabs"},c.a.createElement("a",{href:"/",className:"is-active"},"\ucee4\ud53c")),c.a.createElement("div",{className:"panel-block"},c.a.createElement("input",{onChange:function(e){return p(e.target.value)},value:m,className:"input",type:"text"})," \xa0",c.a.createElement("div",{className:"button is-danger is-1",onClick:function(){return p("")}},c.a.createElement("span",{className:"title is-6"},"X"))," \xa0",c.a.createElement("div",{className:"button is-primary is-fullwidth",onClick:function(){m&&(t.push({name:m,count:0}),r(t),p(""))}},c.a.createElement("span",{className:"title is-6"},"\uc774\uac70\uc694"))),t&&t.filter((function(e){return!m||e.name.includes(m)})).map((function(e,n){var t={menu:e,index:n};return c.a.createElement(i,{key:n,menu:t})})),c.a.createElement((function(e){var n=function(e){return"?menus="+e.map((function(e){return e.name})).join(",")}(e.menuList);console.log(n);var t=window.location,a=t.origin+t.pathname+n;return c.a.createElement("a",{href:a},a)}),{menuList:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.106bb280.chunk.js.map