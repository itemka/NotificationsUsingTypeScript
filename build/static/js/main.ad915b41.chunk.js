(this.webpackJsonpasd=this.webpackJsonpasd||[]).push([[0],{14:function(t,n,e){t.exports={buttonSuccess:"Message_buttonSuccess__3zwF9"}},20:function(t,n,e){t.exports=e(32)},25:function(t,n,e){},26:function(t,n,e){},32:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),c=e(4),a=e.n(c),i=(e(25),e(11)),u=e(12),s=e(18),l=e(13),f=e(19),p=(e(26),function(t){return o.a.createElement("button",{className:t.style,onClick:t.callback},t.nameButton)}),b=e(14),d=e.n(b),y=function(t){return o.a.createElement("div",{className:"".concat(d.a.buttonSuccess," ").concat(t.style)},o.a.createElement("div",null,t.title),o.a.createElement("div",null,t.text))},m=e(5),O=e(9),h=e(16);function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function E(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?v(e,!0).forEach((function(n){Object(h.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var k={notificationArray:[]},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_OBJECT_OF_NOTIFICATION":return E({},t,{notificationArray:[].concat(Object(O.a)(t.notificationArray),[{id:n.id,title:n.title,text:n.text,types:n.types}])});case"FILTER_ARRAY":return E({},t,{notificationArray:Object(O.a)(t.notificationArray.filter((function(t){return t.id!==n.id})))});default:return t}},g=function(t){function n(){var t,e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=Object(s.a)(this,(t=Object(l.a)(n)).call.apply(t,[this].concat(o)))).onClickButtonSuccess=function(){return e.props.AddNotificationThunk("Success","someText","Success")},e.onClickButtonWarning=function(){return e.props.AddNotificationThunk("Warning","someText","Warning")},e.onClickButtonError=function(){return e.props.AddNotificationThunk("Error","someText","Error")},e}return Object(f.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this.props.notificationArray.map((function(t){return o.a.createElement(y,{key:t.id,style:"".concat(t.types),title:"".concat(t.title),text:"".concat(t.text)})}));return o.a.createElement("div",{className:"App"},o.a.createElement(p,{style:"buttonSuccess button",callback:this.onClickButtonSuccess,nameButton:"Success"}),o.a.createElement(p,{style:"buttonWarning button",callback:this.onClickButtonWarning,nameButton:"Warning"}),o.a.createElement(p,{style:"buttonError button",callback:this.onClickButtonError,nameButton:"Error"}),o.a.createElement("div",{className:"NotificationBlock"},t))}}]),n}(r.Component),j=Object(m.b)((function(t){return{notificationArray:t.partStore.notificationArray}}),{AddNotificationThunk:function(t,n,e){return function(r,o){var c,a=function(t,n){var e=t-.5+Math.random()*(n-t+1);return Math.round(e)}(10*Math.random(),99999999999999);r(function(t,n,e,r){return{type:"ADD_OBJECT_OF_NOTIFICATION",id:t,title:n,text:e,types:r}}(a,t,n,e)),r((c=a,function(t){setTimeout((function(){t(function(t){return{type:"FILTER_ARRAY",id:t}}(c))}),2e3)}))}}})(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=e(3),T=e(17),B=Object(w.c)({partStore:A}),N=Object(w.d)(B,Object(w.a)(T.a));a.a.render(o.a.createElement(m.a,{store:N},o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ad915b41.chunk.js.map