(this["webpackJsonpreact-base"]=this["webpackJsonpreact-base"]||[]).push([[1],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return o}));var c="ADD_CLIMATE_FAILURE",a="ADD_CLIMATE_STARTED",r="ADD_CLIMATE_SUCCESS",i="DELETE_CLIMATE",o="CLEAR_CLIMATE"},16:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var c,a,r=n(6),i=n(18),o=n(26),s=n(17),u=n(27),l=n.n(u),b=n(28),d={key:"root",storage:l.a,whitelist:["climateReducer"]},j=Object(i.a)(d,b.a),O="production"===(null===(c=e)||void 0===c||null===(a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}))||void 0===a?void 0:a.NODE_ENV),p=Object(r.createStore)(j,O?Object(r.applyMiddleware)(s.a):Object(o.composeWithDevTools)(Object(r.applyMiddleware)(s.a))),f=Object(i.b)(p)}).call(this,n(29))},28:function(e,t,n){"use strict";var c=n(6),a=n(19),r=n(5),i=n(11),o={climates:[]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case i.c:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:null,climates:[].concat(Object(a.a)(e.climates),[null===t||void 0===t?void 0:t.payload])});case i.a:return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:t.payload.error});case i.e:return Object(r.a)(Object(r.a)({},e),{},{climates:e.climates.filter((function(e,n){return n!==t.payload.index}))});case i.d:return Object(r.a)(Object(r.a)({},e),{},{climates:[]});default:return e}},u={climateReducer:s},l=Object(c.combineReducers)(u);t.a=l},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(9),r=n.n(a),i=n(24),o=n(21),s=n(14),u=n(23),l=(n(38),n(1)),b=[{to:"/",path:"/",Component:Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(0)]).then(n.bind(null,254))})),name:"Home - DashBoard"}],d=n(2);var j=function(){return Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"*",element:Object(d.jsx)(l.a,{to:"/"})}),Object(d.jsx)(l.b,{exact:!0,path:"/",children:b.map((function(e,t){var n=e.path,c=e.Component;return Object(d.jsx)(l.b,{exact:!0,path:n,element:Object(d.jsx)(c,{})},t)}))})]})})},O=n(16);n(40);var p=function(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)(o.a,{store:O.a,children:[Object(d.jsx)(i.a,{loading:Object(d.jsx)(d.Fragment,{}),persistor:O.b,children:Object(d.jsx)(j,{})}),Object(d.jsx)(u.a,{})]})})},f=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,253)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};r.a.render(Object(d.jsx)(c.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[41,2,4]]]);
//# sourceMappingURL=main.575ede9b.chunk.js.map