(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(n,t,e){n.exports=e(25)},18:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var r,o=e(1),i=e.n(o),l=e(7),a=e.n(l),c=(e(18),e(8)),u=e(9),s=e(11),w=e(10),f=e(12),d=e(0),h=e.n(d),p=(e(6),e(3)),v=e.n(p),m=40,k=40,g=h.a.flattenDepth,b=v.a.chunk(k),E=function(){return{links:null,visited:!1,willVisit:!1,wall:{up:!1,right:!1,down:!1,left:!1}}},V=h.a.flow([function(){return function(n){var t=n[0][0];return t.willVisit=!0,t.depth=1,t.pos={row:0,col:0},t.color=D(t),n}(((n=b((t=k*m,e=E,h.a.range(t).map(function(){return e?h.a.isFunction(e)?e():e:null})))).forEach(function(n,t){return n.forEach(function(n,e){return n.pos={row:t,col:e},n})}),n));var n,t,e}]),y=function(n,t){return n[t.row][t.col]},j=h.a.flow([g,h.a.shuffle,v.a.filter(function(n){return!0===n.willVisit&&null===n.links}),h.a.shuffle,h.a.head]),D=function(n){return!n.visited&&n.willVisit?"green":n.visited&&!n.willVisit?"blue":void 0},O=function(n){var t=function(n){var t=j(n);return h.a.isEmpty(t)?null:y(n,t.pos)}(n);return t?(t.visited=!0,t.willVisit=!1,t.color=D(t),t.links=function(n,t,e){var r=[],o=h.a.shuffle([{row:t.row-1,col:t.col,direction:"up",rDirection:"down"},{row:t.row,col:t.col+1,direction:"right",rDirection:"left"},{row:t.row+1,col:t.col,direction:"down",rDirection:"up"},{row:t.row,col:t.col-1,direction:"left",rDirection:"right"}]);return h.a.each(o,function(t){var o=n[t.row]&&n[t.row][t.col]?n[t.row][t.col]:void 0;o&&e(o)&&r.push(t)}),r}(n,t.pos,function(n){return!0!==n.visited&&!0!==n.willVisit}),h.a.each(t.links,function(e){t.wall[e.direction]=!0;var r=y(n,e);r.wall[e.rDirection]=!0,r.willVisit=!0,r.color=D(r),r.depth=t.depth+1}),n):function(n){var t=g(n);return h.a.maxBy(t,function(n){return n.depth}).color="red",n}(n)},P=function(){return{pathPanel:V()}},B=function(n){var t=["block"];return n.wall&&(n.wall.up&&t.push("up"),n.wall.right&&t.push("right"),n.wall.down&&t.push("down"),n.wall.left&&t.push("left")),t.join(" ")},N=function(n){return i.a.createElement("div",{className:B(n.item),style:{backgroundColor:n.color}},n.children)},x=function(n){return n.window.map(function(n,t){return i.a.createElement(N,{item:n,color:n.color,key:t}," ")})},C=(r=function(n){return{pathPanel:O(n.pathPanel)}},h.a.flow([r,r,r,r,r,r,r,r,r])),I=function(n){function t(n){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(w.a)(t).call(this,n))).state=P(),e.state.timer=setInterval(function(){e.setState(function(n){return C(n)})}),e}return Object(f.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"App"},i.a.createElement(x,{window:(n=this.state,g(n.pathPanel))})));var n}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},6:function(n,t,e){}},[[13,2,1]]]);
//# sourceMappingURL=main.21ec5caf.chunk.js.map