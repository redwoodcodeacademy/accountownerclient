(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[6],{220:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(24),c=function(){return{type:r.a}},o=function(e,t){return 404===e.response.status?function(e){return{type:r.e,props:e}}(t):500===e.response.status?function(e){return{type:r.f,props:e}}(t):function(e){return{type:r.g,error:e}}(e)}},221:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l}));var r=n(24),c=n(223),o=n.n(c).a.create({baseURL:"https://brokerage.herokuapp.com",headers:{headerType:"example header type"}}),a=n(220),i=function(e,t){return function(n){o.get(e).then((function(e){var t;n((t=e.data,{type:r.d,data:t}))})).catch((function(e){n(a.b(e,t))}))}},u=function(e,t,n){return function(c){o.post(e,t).then((function(e){c(function(e){return{type:r.h,response:e}}(e))})).catch((function(e){c(a.b(e,n))}))}},s=function(e,t,n){return function(c){o.put(e,t).then((function(e){c(function(e){return{type:r.i,response:e}}(e))})).catch((function(e){c(a.b(e,n))}))}},d=function(e,t){return function(n){o.delete(e).then((function(e){n(function(e){return{type:r.c,response:e}}(e))})).catch((function(e){n(a.b(e,t))}))}},l=function(e,t){return{type:r.b,props:t,url:e}}},222:function(e,t,n){},225:function(e,t,n){"use strict";var r=n(8),c=(n(1),n(15));n(222);t.a=function(e){return Object(r.jsxs)(c.h,{show:e.show,backdrop:"static",children:[Object(r.jsx)(c.h.Header,{children:e.modalHeaderText}),Object(r.jsx)(c.h.Body,{children:Object(r.jsx)("p",{children:e.modalBodyText})}),Object(r.jsx)(c.h.Footer,{children:Object(r.jsx)(c.a,{bsStyle:"success",onClick:e.successClick,children:e.okButtonText})})]})}},226:function(e,t,n){"use strict";var r=n(8),c=(n(1),n(15));n(222);t.a=function(e){return Object(r.jsxs)(c.h,{show:e.show,backdrop:"static",children:[Object(r.jsx)(c.h.Header,{children:e.modalHeaderText}),Object(r.jsx)(c.h.Body,{children:Object(r.jsx)("p",{children:e.modalBodyText})}),Object(r.jsx)(c.h.Footer,{children:Object(r.jsx)(c.a,{bsStyle:"danger",onClick:e.closeModal,children:e.okButtonText})})]})}},228:function(e,t,n){"use strict";var r=n(8),c=(n(1),n(15)),o=n(241);n(240),n(229);t.a=function(e){var t=null,n=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n=Object(r.jsx)("em",{children:e.errorMessage})),e.elementType){case"input":t=Object(r.jsxs)(c.f,{controlId:e.id,children:[Object(r.jsx)(c.b,{componentClass:c.c,sm:2,children:e.label}),Object(r.jsx)(c.b,{sm:6,children:Object(r.jsx)(c.e,{type:e.type,value:e.value,onChange:e.changed,onBlur:e.blur})}),Object(r.jsx)(c.b,{children:Object(r.jsx)("em",{children:n})})]});break;case"datePicker":t=Object(r.jsxs)(c.f,{controlId:e.id,children:[Object(r.jsx)(c.b,{componentClass:c.c,sm:2,children:e.label}),Object(r.jsx)(c.b,{sm:6,children:Object(r.jsx)(o.a,{selected:e.value,dateFormat:"MM/DD/YYYY",readOnly:!0,onChange:e.changed,className:"datePickerControl",showYearDropdown:!0,dropdownMode:"select"})}),Object(r.jsx)(c.b,{children:Object(r.jsx)("em",{children:n})})]});break;default:t=null}return Object(r.jsx)(r.Fragment,{children:t})}},229:function(e,t,n){},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(224),c=n.n(r),o=function(){return{name:{element:"input",type:"text",value:"",validation:{required:!0,maxLength:60},valid:!1,touched:!1,errorMessage:"",label:"Name:"},address:{element:"input",type:"text",value:"",validation:{required:!0,maxLength:100},valid:!1,touched:!1,errorMessage:"",label:"Address:"},dateOfBirth:{element:"datePicker",type:"text",value:c()(),valid:!0,touched:!1,errorMessage:"",label:"Date of birth:"}}}},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(14),c=function(e){var t=[];for(var n in e)t.push({id:n,config:e[n]});return t},o=function(e,t,n){var c=Object(r.a)({},t[n]);c.value="dateOfBirth"===n?e:e.target.value,c.touched=!0;var o=function(e,t){var n={isValid:!0,errorMessage:""};return t?(t.required&&(n.isValid=""!==e.trim(),n.errorMessage=n.isValid?"":"Field is required"),n.isValid&&t.maxLength&&(n.isValid=e.length<=t.maxLength,n.errorMessage=n.isValid?"":"Not allowed more than ".concat(t.maxLength," characters")),n):n}(c.value,c.validation);return c.valid=o.isValid,c.errorMessage=o.errorMessage,c},a=function(e){var t=0;for(var n in e)if(!e[n].valid){t+=1;break}return t}},264:function(e,t,n){"use strict";n.r(t);var r=n(14);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){c=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n(8),i=n(1),u=n(228),s=n(15),d=n(230),l=n(231),f=n(94),h=n(221),b=n(220),j=n(225),p=n(226);t.default=function(e){var t=o(Object(i.useState)({}),2),n=t[0],c=t[1],O=o(Object(i.useState)(!1),2),m=O[0],v=O[1],x=Object(f.d)((function(e){return e.repository.showSuccessModal})),y=Object(f.d)((function(e){return e.errorHandler.showErrorModal})),g=Object(f.d)((function(e){return e.errorHandler.errorMessage})),w=Object(f.c)();Object(i.useEffect)((function(){c(Object(d.a)())}),[]);var k=l.a(Object(r.a)({},n)),M=function(e,t){var o=Object(r.a)({},n);o[t]=l.c(e,o,t);var a=l.b(o);c(o),v(0===a)};return Object(a.jsxs)(s.n,{children:[Object(a.jsxs)(s.d,{horizontal:!0,onSubmit:function(t){t.preventDefault();var c={name:n.name.value,address:n.address.value,dateOfBirth:n.dateOfBirth.value};w(h.d("/api/owner",c,Object(r.a)({},e)))},children:[k.map((function(e){return Object(a.jsx)(u.a,{elementType:e.config.element,id:e.id,label:e.config.label,type:e.config.type,value:e.config.value,changed:function(t){return M(t,e.id)},errorMessage:e.config.errorMessage,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,blur:function(t){return M(t,e.id)}},e.id)})),Object(a.jsx)("br",{}),Object(a.jsxs)(s.f,{children:[Object(a.jsx)(s.b,{mdOffset:6,md:1,children:Object(a.jsx)(s.a,{type:"submit",bsStyle:"info",disabled:!m,children:"Create"})}),Object(a.jsx)(s.b,{md:1,children:Object(a.jsx)(s.a,{bsStyle:"danger",onClick:function(){e.history.push("/owner-List")},children:"Cancel"})})]})]}),Object(a.jsx)(j.a,{show:x,modalHeaderText:"Success message",modalBodyText:"Action completed successfully",okButtonText:"OK",successClick:function(){return w(h.a("/owner-List",Object(r.a)({},e)))}}),Object(a.jsx)(p.a,{show:y,modalHeaderText:"Error message",modalBodyText:g,okButtonText:"OK",closeModal:function(){return w(b.a())}})]})}}}]);
//# sourceMappingURL=6.187560d6.chunk.js.map