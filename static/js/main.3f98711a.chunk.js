(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[3],{127:function(e,n,t){},128:function(e,n,t){},129:function(e,n,t){},210:function(e,n,t){},211:function(e,n,t){},214:function(e,n,t){},218:function(e,n,t){"use strict";t.r(n);var c=t(8),r=t(1),o=t.n(r),s=t(11),i=t.n(s),a=(t(127),t(45)),u=t(13),j=(t(128),function(e){return Object(c.jsx)("p",{className:"internalServer",children:"500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!"})}),l=(t(129),function(){return Object(c.jsxs)("div",{class:"mainbox",children:[Object(c.jsx)("div",{class:"err",children:"4"}),Object(c.jsx)("i",{class:"far fa-question-circle fa-spin"}),Object(c.jsx)("div",{class:"err2",children:"4"}),Object(c.jsxs)("div",{class:"msg",children:["Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",Object(c.jsxs)("p",{children:["Let's go ",Object(c.jsx)("a",{href:"/",children:"home"})," and try from there."]})]})]})}),d=t(15),O=(t(210),function(){return Object(c.jsx)(d.l,{children:Object(c.jsx)(d.b,{md:12,children:Object(c.jsx)("div",{className:"homeText",children:'"WELCOME TO ACCOUNT-OWNER APPLICATION"'})})})}),h=(t(211),t(90)),b=function(){return Object(c.jsx)(d.b,{md:12,children:Object(c.jsxs)(d.k,{inverse:!0,collapseOnSelect:!0,children:[Object(c.jsxs)(d.k.Header,{children:[Object(c.jsx)(d.k.Brand,{children:Object(c.jsx)(a.NavLink,{to:"/",exact:!0,children:"Account-Owner"})}),Object(c.jsx)(d.k.Toggle,{})]}),Object(c.jsx)(d.k.Collapse,{children:Object(c.jsxs)(d.i,{children:[Object(c.jsx)(h.LinkContainer,{to:"/owner-list",exact:!0,children:Object(c.jsx)(d.j,{eventKey:1,children:"Owner Actions"})}),Object(c.jsx)(h.LinkContainer,{to:"/account-list",children:Object(c.jsx)(d.j,{eventKey:2,children:"Account Actions"})})]})})]})})},f=function(e){return Object(c.jsxs)(d.g,{children:[Object(c.jsx)(d.l,{children:Object(c.jsx)(b,{})}),Object(c.jsx)("main",{children:e.children})]})},p=t(14),x=t(114),S=t(115),m=t(117),E=t(116),v=function(e){return function(n){Object(m.a)(r,n);var t=Object(E.a)(r);function r(){var e;Object(x.a)(this,r);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={component:null},e}return Object(S.a)(r,[{key:"componentDidMount",value:function(){var n=this;e().then((function(e){n.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(c.jsx)(e,Object(p.a)({},this.props)):null}}]),r}(r.Component)},T=(t(214),v((function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,265))}))),w=v((function(){return Promise.all([t.e(0),t.e(1),t.e(9)]).then(t.bind(null,266))})),C=v((function(){return Promise.all([t.e(0),t.e(2),t.e(6)]).then(t.bind(null,264))})),g=v((function(){return Promise.all([t.e(0),t.e(2),t.e(7)]).then(t.bind(null,261))})),_=v((function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,262))}));var R=function(){return Object(c.jsx)(a.BrowserRouter,{children:Object(c.jsx)(f,{children:Object(c.jsxs)(u.g,{children:[Object(c.jsx)(u.d,{path:"/",exact:!0,component:O}),Object(c.jsx)(u.d,{path:"/owner-list",component:T}),Object(c.jsx)(u.d,{path:"/ownerDetails/:id",component:w}),Object(c.jsx)(u.d,{path:"/createOwner",component:C}),Object(c.jsx)(u.d,{path:"/updateOwner/:id",component:g}),Object(c.jsx)(u.d,{path:"/deleteOwner/:id",component:_}),Object(c.jsx)(u.d,{path:"/500",component:j}),Object(c.jsx)(u.d,{path:"*",component:l})]})})})},A=function(e){e&&e instanceof Function&&t.e(11).then(t.bind(null,263)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),o(e),s(e)}))},M=(t(215),t(216),t(40)),y=t(24),P={data:null,showSuccessModal:!1},L=function(e,n){return Object(p.a)(Object(p.a)({},e),{},{data:n.data})},D=function(e,n){return Object(p.a)(Object(p.a)({},e),{},{showSuccessModal:!0})},k=function(e,n){return Object(p.a)(Object(p.a)({},e),{},{showSuccessModal:!0})},N=function(e,n){return Object(p.a)(Object(p.a)({},e),{},{showSuccessModal:!0})},I=function(e,n){return n.props.history.push(n.url),Object(p.a)(Object(p.a)({},e),{},{showSuccessModal:!1})},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case y.d:return L(e,n);case y.h:return D(e);case y.i:return k(e);case y.c:return N(e);case y.b:return I(e,n);default:return e}},H={showErrorModal:!1,errorMessage:""},B=function(e,n){return n.props.history.push("/404"),Object(p.a)({},e)},F=function(e,n){return n.props.history.push("/500"),Object(p.a)({},e)},q=function(e,n){return Object(p.a)(Object(p.a)({},e),{},{showErrorModal:!0,errorMessage:n.error.response.data})},G=function(e,n){return Object(p.a)(Object(p.a)({},e),{},{showErrorModal:!1,errorMessage:""})},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case y.e:return B(e,n);case y.f:return F(e,n);case y.g:return q(e,n);case y.a:return G(e);default:return e}},K=t(120),V=t(94),W=Object(M.c)({repository:U,errorHandler:J}),X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.d,z=Object(M.e)(W,X(Object(M.a)(K.a)));i.a.render(Object(c.jsx)(V.a,{store:z,children:Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(R,{})})}),document.getElementById("root")),A(console.log)},24:function(e,n,t){"use strict";t.d(n,"d",(function(){return c})),t.d(n,"h",(function(){return r})),t.d(n,"i",(function(){return o})),t.d(n,"c",(function(){return s})),t.d(n,"e",(function(){return i})),t.d(n,"f",(function(){return a})),t.d(n,"g",(function(){return u})),t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return l}));var c="GET_DATA_SUCCESS",r="POST_DATA_SUCCESS",o="PUT_DATA_SUCCESS",s="DELETE_DATA_SUCCESS",i="HTTP_404_ERROR",a="HTTP_500_ERROR",u="HTTP_OTHER_ERROR",j="CLOSE_ERROR_MODAL",l="CLOSE_SUCCESS_MODAL"}},[[218,4,5]]]);
//# sourceMappingURL=main.3f98711a.chunk.js.map