(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(n,e,a){n.exports=a(27)},19:function(n,e,a){},25:function(n,e,a){},27:function(n,e,a){"use strict";a.r(e);var o=a(1),t=a.n(o),r=a(6),l=a.n(r),c=(a(19),a(7)),u=a(8),i=a(12),s=a(9),f=a(13),p=a(11),k=a(0),m=a.n(k),w=a(2),P=a.n(w),d=a(10),y=(a(25),{rows:15,columns:15,color:"grey",tickTime:300,appleColor:"red",snakeColor:"orange"}),h=function(n,e,a){var o=m.a.cloneDeep(n);return e.forEach(function(n,e){var t=m.a.assign(m.a.cloneDeep(n),{index:e,color:a});o[n.row][n.column]=t}),o},v=function(n,e){return m.a.range(n).map(function(){return e?m.a.isFunction(e)?e():e:null})},g=m.a.flattenDepth,b=P.a.chunk(y.columns),E=function(n,e){return n===e?1:0},C=function(n){return!(!n||n.color!==y.color)},j=function(n){return n.color!==y.color},x=function(n,e){return!(!j(n)||!j(e))},D=function(){return{color:y.color}},O=function(){return v(y.columns,D)},B=function(){return v(y.rows,O)},W=function(n,e){return{row:n.row-E(e,38)+E(e,40),column:n.column-E(e,37)+E(e,39)}},N=function(n){var e=m.a.cloneDeep(n),a=m.a.cloneDeep(m.a.head(e));return[m.a.assign(a,W(a,a.key))].concat(Object(p.a)(e))},T=m.a.initial,z=function(n){return n.map(function(n,e){return n.index=e,n})},I=function(n){return h(B(),n,y.snakeColor)},J=m.a.flow([g,P.a.filter(j),P.a.sortBy("index"),N,z,T,I]),S=m.a.flow([g,P.a.filter(j),P.a.sortBy("index"),N,z,I]),q=m.a.flow([g,P.a.filter(j)]),A=function(n){var e=n.applePanel,a=n.snakePanel,o=K(a,$(a).key)?a:J(a),t=function(n,e){return m.a.some(m.a.zipWith(g(n),g(e),x),P.a.isEqual(!0))}(e,o);return function(n){var e=n.applePanel,a=n.snakePanel;return m.a.last(m.a.last(e)).count=q(a).length,{applePanel:e,snakePanel:a}}({applePanel:t?Y():e,snakePanel:t?S(a):o})},F=function(n,e){return C(e)?n:e},U=m.a.flow([function(n){var e=n.applePanel,a=n.snakePanel;return b(m.a.zipWith(g(e),g(a),F))},g]),$=m.a.flow([m.a.cloneDeep,g,P.a.filter(j),P.a.sortBy("index"),m.a.head]),G=function(n,e){var a=$(n),o=W(a,e),t=o.row,r=o.column;return n&&n[t]&&n[t][r]?n[t][r]:void 0},H=m.a.flow([G,C]),K=m.a.flow([G,m.a.isUndefined]),L=function(n){var e=n.applePanel,a=n.snakePanel,o=n.key,t=$(a),r=a[t.row][t.column].key;return a[t.row][t.column].key=H(a,o)?o:r,{applePanel:e,snakePanel:a}},M=[{key:37,fn:L},{key:38,fn:L},{key:39,fn:L},{key:40,fn:L},{key:0,fn:function(n){return n}}],Q=function(n){return m.a.some(M,function(e){return e.key===n})},R=m.a.flow([function(n){var e=n.applePanel,a=n.snakePanel,o=n.key;return{applePanel:e,snakePanel:a,key:Q(o)?o:0}},function(n){var e=n.applePanel,a=n.snakePanel,o=n.key;return m.a.find(M,function(n){return n.key===o}).fn({applePanel:e,snakePanel:a,key:o})}]),V=function(n){return t.a.createElement("div",{className:"block",style:{backgroundColor:n.color}},n.children)},X=function(n){return n.window.map(function(n,e){return t.a.createElement(V,{color:n.color,row:n.row,column:n.column,key:e},n.count)})},Y=m.a.flow([B,function(n){return h(n,[{row:m.a.random(0,y.rows-1),column:m.a.random(0,y.columns-1)}],y.appleColor)}]),Z=m.a.flow([B,function(n){return h(n,[{row:m.a.random(0,y.rows-1),column:m.a.random(0,y.columns-1),key:0}],y.snakeColor)}]),_=function(n){function e(n){var a;return Object(c.a)(this,e),(a=Object(i.a)(this,Object(s.a)(e).call(this,n))).state={applePanel:Y(),snakePanel:Z()},a.state.timer=setInterval(function(){a.setState(function(n){return A({applePanel:n.applePanel,snakePanel:n.snakePanel})})},y.tickTime),d.a(function(n){setTimeout(function(){a.setState(function(e){return R({applePanel:e.applePanel,snakePanel:e.snakePanel,key:n.which})})})}),a}return Object(f.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return t.a.createElement("div",{className:"container"},t.a.createElement("div",{className:"App"},t.a.createElement(X,{window:U({applePanel:this.state.applePanel,snakePanel:this.state.snakePanel})})))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(t.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.09c374bf.chunk.js.map