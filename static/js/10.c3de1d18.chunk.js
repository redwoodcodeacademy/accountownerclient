(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[10],{220:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(24),c=function(){return{type:r.a}},i=function(e,t){return 404===e.response.status?function(e){return{type:r.e,props:e}}(t):500===e.response.status?function(e){return{type:r.f,props:e}}(t):function(e){return{type:r.g,error:e}}(e)}},221:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return j}));var r=n(24),c=n(223),i=n.n(c).a.create({baseURL:"https://brokerage.herokuapp.com",headers:{headerType:"example header type"}}),s=n(220),u=function(e,t){return function(n){i.get(e).then((function(e){var t;n((t=e.data,{type:r.d,data:t}))})).catch((function(e){n(s.b(e,t))}))}},o=function(e,t,n){return function(c){i.post(e,t).then((function(e){c(function(e){return{type:r.h,response:e}}(e))})).catch((function(e){c(s.b(e,n))}))}},d=function(e,t,n){return function(c){i.put(e,t).then((function(e){c(function(e){return{type:r.i,response:e}}(e))})).catch((function(e){c(s.b(e,n))}))}},a=function(e,t){return function(n){i.delete(e).then((function(e){n(function(e){return{type:r.c,response:e}}(e))})).catch((function(e){n(s.b(e,t))}))}},j=function(e,t){return{type:r.b,props:t,url:e}}},265:function(e,t,n){"use strict";n.r(t);var r=n(14),c=n(8),i=n(1),s=n(15),u=n(45),o=n(94),d=n(221),a=n(227),j=n.n(a),h=function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.owner.name}),Object(c.jsx)("td",{children:Object(c.jsx)(j.a,{format:"MM/DD/YYYY",children:e.owner.dateOfBirth})}),Object(c.jsx)("td",{children:e.owner.address}),Object(c.jsx)("td",{children:Object(c.jsx)(s.a,{onClick:function(){return t=e.owner.id,void e.history.push("/ownerDetails/"+t);var t},children:"Details"})}),Object(c.jsx)("td",{children:Object(c.jsx)(s.a,{bsStyle:"success",onClick:function(){return t=e.owner.id,void e.history.push("/updateOwner/"+t);var t},children:"Update"})}),Object(c.jsx)("td",{children:Object(c.jsx)(s.a,{bsStyle:"danger",onClick:function(){return t=e.owner.id,void e.history.push("/deleteOwner/"+t);var t},children:"Delete"})})]})};t.default=function(e){var t=Object(o.d)((function(e){return e.repository.data})),n=Object(o.c)();Object(i.useEffect)((function(){n(d.c("/api/owner",Object(r.a)({},e)))}),[n,e]);var a=[];return t&&t.length>0&&(a=t.map((function(t){return Object(c.jsx)(h,Object(r.a)({owner:t},e),t.id)}))),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s.l,{children:Object(c.jsx)(s.b,{mdOffset:10,md:2,children:Object(c.jsx)(u.Link,{to:"/createOwner",children:"Create Owner"})})}),Object(c.jsx)("br",{}),Object(c.jsx)(s.l,{children:Object(c.jsx)(s.b,{md:12,children:Object(c.jsxs)(s.m,{responsive:!0,striped:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Date of birth"}),Object(c.jsx)("th",{children:"Address"}),Object(c.jsx)("th",{children:"Details"}),Object(c.jsx)("th",{children:"Update"}),Object(c.jsx)("th",{children:"Delete"})]})}),Object(c.jsx)("tbody",{children:a})]})})})]})}}}]);
//# sourceMappingURL=10.c3de1d18.chunk.js.map