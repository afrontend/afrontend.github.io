(this["webpackJsonpmenu-guide"]=this["webpackJsonpmenu-guide"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(3),r=t.n(i),o=(t(9),t(1));t(10);function s(){var e=function(e){if(!e)return{};try{var n,t,a=e.split("?")[1].split("#")[0].split("&"),c={};for(n in a)a.hasOwnProperty(n)&&(c[(t=a[n].split("="))[0]]=t[1]);return c}catch(i){return console.log("Parsing Error",e),{}}}(window.location.search).menus;return e?e.split(",").map((function(e){return{name:decodeURIComponent(e),count:0}})):[{name:"\uc544\uc774\uc2a4 \ub77c\ub5bc",count:0},{name:"\uc544\uc774\uc2a4 \uc544\uba54\ub9ac\uce74\ub178",count:0},{name:"\ud56b \ub77c\ub5bc",count:0},{name:"\ud56b \uc544\uba54\ub9ac\uce74\ub178",count:0}]}var u=function(){var e=Object(a.useState)(s()),n=Object(o.a)(e,2),t=n[0],i=n[1],r=function(e){i(t.map((function(n){return n.name===e&&(n.count=n.count+1),n})))},u=function(e){i(t.map((function(n){return n.name===e&&(n.count=n.count-1),n})).filter((function(e){return-1!==e.count})))};function l(e){var n=e.menu,t=n.menu,i=n.index,o=t.name,s=Object(a.useCallback)((function(){r(o)}),[o]),l=Object(a.useCallback)((function(){u(o)}),[o]);return c.a.createElement("div",{key:i,className:"panel-block"},c.a.createElement("div",{className:"button is-success is-fullwidth",onClick:s},c.a.createElement("span",{className:"title is-6"},t.name)),"\xa0",c.a.createElement("div",{className:"button is-outlined is-1"},c.a.createElement("span",{className:"title is-6"},t.count)),"\xa0",c.a.createElement("div",{className:"button is-danger is-1",onClick:l},c.a.createElement("span",{className:"title is-6"},"X")))}var m=Object(a.useState)(""),p=Object(o.a)(m,2),f=p[0],d=p[1];return c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:"panel"},c.a.createElement("p",{className:"panel-tabs"},c.a.createElement("a",{href:"/",className:"is-active"},"\ucee4\ud53c")),c.a.createElement("div",{className:"panel-block"},c.a.createElement("input",{onChange:function(e){return d(e.target.value)},value:f,className:"input",type:"text"})," \xa0",c.a.createElement("div",{className:"button is-danger is-1",onClick:function(){return d("")}},c.a.createElement("span",{className:"title is-6"},"X"))," \xa0",c.a.createElement("div",{className:"button is-primary is-fullwidth",onClick:function(){f&&(t.push({name:f,count:0}),i(t),d(""))}},c.a.createElement("span",{className:"title is-6"},"\uc774\uac70\uc694"))),t&&t.filter((function(e){return!f||e.name.includes(f)})).map((function(e,n){var t={menu:e,index:n};return c.a.createElement(l,{key:n,menu:t})})),c.a.createElement((function(e){var n=function(e){return"?menus="+e.map((function(e){return e.name})).join(",")}(e.menuList);console.log(n);var t=window.location,a=t.origin+t.pathname+n;return c.a.createElement("a",{href:a},a)}),{menuList:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.333b5953.chunk.js.map