(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(29)},18:function(e,t,n){},19:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),r=n.n(c),i=(n(18),n(7)),l=n(8),u=n(11),s=n(9),k=n(12),m=n(10),b=n(2),y=n.n(b),f=(n(19),n(1)),h=function(e){return a.a.createElement("div",{className:"block",style:{backgroundColor:e.color}},e.children)},w=function(e){return e.window.map(function(e,t){return a.a.createElement(h,{color:e.color,key:t},e.count)})},d=[{keyValue:32,keySymbol:"space"},{keyValue:37,keySymbol:"left"},{keyValue:38,keySymbol:"up"},{keyValue:39,keySymbol:"right"},{keyValue:40,keySymbol:"down"}],v=function(e){var t=y.a.find(d,function(t){return t.keyValue===e});return t?t.keySymbol:null},p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state=Object(f.initBlockTable)(40,30),n.state.timer=setInterval(function(){n.setState(function(e){return Object(f.moveBlockTable)(e)})},150),n.launchMissile=y.a.throttle(function(e){n.setState(function(t){var n=v(e.which);return n?Object(f.keyBlockTable)(n,t):t})},500),m.a(function(e){38===e.which?n.launchMissile(e):setTimeout(function(){n.setState(function(t){var n=v(e.which);return n?Object(f.keyBlockTable)(n,t):t})})}),n}return Object(k.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"App"},a.a.createElement(w,{window:y.a.flatten(Object(f.joinBlockTable)(this.state))})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.349e339d.chunk.js.map