(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(n,e,a){n.exports=a(27)},19:function(n,e,a){},25:function(n,e,a){},27:function(n,e,a){"use strict";a.r(e);var o=a(1),t=a.n(o),r=a(6),l=a.n(r),c=(a(19),a(7)),u=a(8),i=a(12),s=a(9),f=a(13),p=a(11),k=a(0),m=a.n(k),w=a(2),d=a.n(w),P=a(10),y=(a(25),{rows:15,columns:15,color:"grey",tickTime:300,appleColor:"red",snakeColor:"orange"}),h=function(n,e,a){var o=m.a.cloneDeep(n);return e.forEach(function(n,e){var t=m.a.assign(m.a.cloneDeep(n),{index:e,color:a});o[n.row][n.column]=t}),o},v=function(n,e){return m.a.range(n).map(function(){return e?m.a.isFunction(e)?e():e:null})},b=m.a.flattenDepth,g=d.a.chunk(y.columns),E=function(n,e){return n===e?1:0},C=function(n){return!(!n||n.color!==y.color)},j=function(n){return n.color!==y.color},x=function(n,e){return!(!j(n)||!j(e))},D=function(){return{color:y.color}},O=function(){return v(y.columns,D)},B=function(){return v(y.rows,O)},W=function(n,e){return{row:n.row-E(e,38)+E(e,40),column:n.column-E(e,37)+E(e,39)}},N=function(n){var e=m.a.cloneDeep(n),a=m.a.cloneDeep(m.a.head(e));return[m.a.assign(a,W(a,a.key))].concat(Object(p.a)(e))},T=m.a.initial,z=function(n){return n.map(function(n,e){return n.index=e,n})},I=function(n){return h(B(),n,y.snakeColor)},J=m.a.flow([b,d.a.filter(j),d.a.sortBy("index"),N,z,T,I]),S=m.a.flow([b,d.a.filter(j),d.a.sortBy("index"),N,z,I]),q=function(n){var e=n.applePanel,a=n.snakePanel,o=H(a,U(a).key)?a:J(a),t=function(n,e){return m.a.some(m.a.zipWith(b(n),b(e),x),d.a.isEqual(!0))}(e,o);return{applePanel:t?X():e,snakePanel:t?S(a):o}},A=function(n,e){return C(e)?n:e},F=m.a.flow([function(n){var e=n.applePanel,a=n.snakePanel;return g(m.a.zipWith(b(e),b(a),A))},b]),U=m.a.flow([m.a.cloneDeep,b,d.a.filter(j),d.a.sortBy("index"),m.a.head]),$=function(n,e){var a=U(n),o=W(a,e),t=o.row,r=o.column;return n&&n[t]&&n[t][r]?n[t][r]:void 0},G=m.a.flow([$,C]),H=m.a.flow([$,m.a.isUndefined]),K=function(n){var e=n.applePanel,a=n.snakePanel,o=n.key,t=U(a),r=a[t.row][t.column].key;return a[t.row][t.column].key=G(a,o)?o:r,{applePanel:e,snakePanel:a}},L=[{key:37,fn:K},{key:38,fn:K},{key:39,fn:K},{key:40,fn:K},{key:0,fn:function(n){return n}}],M=function(n){return m.a.some(L,function(e){return e.key===n})},Q=m.a.flow([function(n){var e=n.applePanel,a=n.snakePanel,o=n.key;return{applePanel:e,snakePanel:a,key:M(o)?o:0}},function(n){var e=n.applePanel,a=n.snakePanel,o=n.key;return m.a.find(L,function(n){return n.key===o}).fn({applePanel:e,snakePanel:a,key:o})}]),R=function(n){return t.a.createElement("div",{className:"block",style:{backgroundColor:n.color}})},V=function(n){return n.window.map(function(n,e){return t.a.createElement(R,{color:n.color,row:n.row,column:n.column,key:e})})},X=m.a.flow([B,function(n){return h(n,[{row:m.a.random(0,y.rows-1),column:m.a.random(0,y.columns-1)}],y.appleColor)}]),Y=m.a.flow([B,function(n){return h(n,[{row:m.a.random(0,y.rows-1),column:m.a.random(0,y.columns-1),key:0}],y.snakeColor)}]),Z=function(n){function e(n){var a;return Object(c.a)(this,e),(a=Object(i.a)(this,Object(s.a)(e).call(this,n))).state={applePanel:X(),snakePanel:Y()},a.state.timer=setInterval(function(){a.setState(function(n){return q({applePanel:n.applePanel,snakePanel:n.snakePanel})})},y.tickTime),P.a(function(n){setTimeout(function(){a.setState(function(e){return Q({applePanel:e.applePanel,snakePanel:e.snakePanel,key:n.which})})})}),a}return Object(f.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return t.a.createElement("div",{className:"container"},t.a.createElement("div",{className:"App"},t.a.createElement(V,{window:F({applePanel:this.state.applePanel,snakePanel:this.state.snakePanel})})))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(t.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.39e7a503.chunk.js.map