(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(n,t,r){n.exports=r(25)},18:function(n,t,r){},25:function(n,t,r){"use strict";r.r(t);var e=r(1),o=r.n(e),i=r(7),l=r.n(i),a=(r(18),r(8)),c=r(9),u=r(11),s=r(10),w=r(12),f=(r(5),r(0)),h=r.n(f),d=r(3),p=r.n(d),v=40,m=40,k=h.a.flattenDepth,g=p.a.chunk(m),E=function(){return{links:null,visited:!1,willVisit:!1,wall:{up:!1,right:!1,down:!1,left:!1}}},b=h.a.flow([function(){return n=m*v,t=E,h.a.range(n).map(function(){return t?h.a.isFunction(t)?t():t:null});var n,t},g,function(n){return n.forEach(function(n,t){return n.forEach(function(n,r){return n.pos={row:t,col:r},n})}),n},function(n){var t=n[0][20];return t.willVisit=!0,t.depth=1,t.mark="S",t.pos={row:0,col:20},t.color=D(t),n}]),V=h.a.flow([b]),y=function(n,t){return n[t.row][t.col]},j=h.a.flow([k,h.a.shuffle,p.a.filter(function(n){return!0===n.willVisit&&null===n.links}),h.a.shuffle,h.a.head]),D=function(n){return!n.visited&&n.willVisit?"green":n.visited&&!n.willVisit?"blue":void 0},O=function n(t){var r=function(n){var t=j(n);return h.a.isEmpty(t)?null:y(n,t.pos)}(t);return r?(r.visited=!0,r.willVisit=!1,r.color=D(r),r.links=function(n,t,r){var e=[],o=h.a.shuffle([{row:t.row-1,col:t.col,direction:"up",rDirection:"down"},{row:t.row,col:t.col+1,direction:"right",rDirection:"left"},{row:t.row+1,col:t.col,direction:"down",rDirection:"up"},{row:t.row,col:t.col-1,direction:"left",rDirection:"right"}]);return h.a.each(o,function(t){var o=n[t.row]&&n[t.row][t.col]?n[t.row][t.col]:void 0;o&&r(o)&&e.push(t)}),h.a.shuffle(e)}(t,r.pos,function(n){return!0!==n.visited&&!0!==n.willVisit}),h.a.each(r.links,function(n){r.wall[n.direction]=!0;var e=y(t,n);e.wall[n.rDirection]=!0,e.willVisit=!0,e.color=D(e),e.depth=r.depth+1}),n(t)):function(n){var t=k(n);return h.a.maxBy(t,function(n){return n.depth}).mark="E",n}(t)},P=function(){return{pathPanel:V()}},B=function(n){return{pathPanel:O(n.pathPanel)}},N=function(n){var t=["block"];return n.wall&&(n.wall.up&&t.push("up"),n.wall.right&&t.push("right"),n.wall.down&&t.push("down"),n.wall.left&&t.push("left")),t.join(" ")},x=function(n){return o.a.createElement("div",{className:N(n.item),style:{backgroundColor:n.color}},n.children)},C=function(n){return n.window.map(function(n,t){return o.a.createElement(x,{item:n,color:n.color,key:t},n.mark?n.mark:" ")})},J=function(n){function t(n){var r;return Object(a.a)(this,t),(r=Object(u.a)(this,Object(s.a)(t).call(this,n))).state=B(P()),r}return Object(w.a)(t,n),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"App"},o.a.createElement(C,{window:(n=this.state,k(n.pathPanel))})));var n}}]),t}(e.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},5:function(n,t,r){}},[[13,2,1]]]);
//# sourceMappingURL=main.67d2c946.chunk.js.map