(self.webpackChunksyloper_front=self.webpackChunksyloper_front||[]).push([[331],{39483:function(e,t,n){var r=n(17854),a=n(4411),o=n(66330),l=r.TypeError;e.exports=function(e){if(a(e))return e;throw l(o(e)+" is not a constructor")}},70648:function(e,t,n){var r=n(17854),a=n(51694),o=n(60614),l=n(84326),i=n(5112)("toStringTag"),u=r.Object,c="Arguments"==l(function(){return arguments}());e.exports=a?l:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=u(e),i))?n:c?l(t):"Object"==(r=l(t))&&o(t.callee)?"Arguments":r}},4411:function(e,t,n){var r=n(1702),a=n(47293),o=n(60614),l=n(70648),i=n(35005),u=n(42788),c=function(){},s=[],m=i("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),p=!f.exec(c),h=function(e){if(!o(e))return!1;try{return m(c,s,e),!0}catch(t){return!1}},v=function(e){if(!o(e))return!1;switch(l(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(f,u(e))}catch(t){return!0}};v.sham=!0,e.exports=!m||a((function(){var e;return h(h.call)||!h(Object)||!h((function(){e=!0}))||e}))?v:h},13366:function(e,t,n){var r=n(17854);e.exports=r.Promise},78523:function(e,t,n){"use strict";var r=n(19662),a=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new a(e)}},69478:function(e,t,n){var r=n(19670),a=n(70111),o=n(78523);e.exports=function(e,t){if(r(e),a(t)&&t.constructor===e)return t;var n=o.f(e);return(0,n.resolve)(t),n.promise}},36707:function(e,t,n){var r=n(19670),a=n(39483),o=n(5112)("species");e.exports=function(e,t){var n,l=r(e).constructor;return void 0===l||null==(n=r(l)[o])?t:a(n)}},51694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},17727:function(e,t,n){"use strict";var r=n(82109),a=n(31913),o=n(13366),l=n(47293),i=n(35005),u=n(60614),c=n(36707),s=n(69478),m=n(31320);if(r({target:"Promise",proto:!0,real:!0,forced:!!o&&l((function(){o.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=c(this,i("Promise")),n=u(e);return this.then(n?function(n){return s(t,e()).then((function(){return n}))}:e,n?function(n){return s(t,e()).then((function(){throw n}))}:e)}}),!a&&u(o)){var f=i("Promise").prototype.finally;o.prototype.finally!==f&&m(o.prototype,"finally",f,{unsafe:!0})}},20698:function(e,t,n){"use strict";n.d(t,{N:function(){return r}});var r=n(43587).default.div.withConfig({displayName:"styles__SectionTitle",componentId:"sc-5uavjb-0"})(["width:100%;display:flex;align-items:center;margin-bottom:12px;&.task-title{justify-content:space-between;h5{display:inline-block;}button{width:200px;font-size:1.17rem;}}@media only screen and (max-width:768px){justify-content:center;}i{margin-right:5px;}h5{font-size:1.2rem;font-weight:600;}"])},41357:function(e,t,n){"use strict";var r=n(43587).default.table.withConfig({displayName:"styles__TableBody",componentId:"sc-1iqh43b-0"})(["width:100%;background-color:#fff;text-align:center;border-radius:15px;margin-top:20px;overflow-x:scroll;tr{text-align:center;border-bottom:1px solid;border-color:",";&:last-child{border:none;}}th{font-size:1.2rem;font-weight:500;padding:21px 10px;@media only screen and (max-width:1000px){font-size:1.05rem;}}td{text-align:center;width:200px;padding:18px 8px;font-size:1.02rem;img{height:48px;border-radius:24px;}@media only screen and (max-width:1000px){font-size:1rem;}}"],(function(e){return e.theme.color.border}));t.Z=r},52469:function(e,t,n){"use strict";var r=n(75900),a=n.n(r),o=n(67294),l=n(26199),i=n(90584),u=n(28029),c=n(69742);t.Z=function(e){var t=e.title,n=e.message,r=(0,o.useContext)(c.Z),s=r.setModalMessageIsOpen,m=r.modalMessageIsOpen,f=function(){s(!1)};return o.createElement(o.Fragment,null,o.createElement(u.RR,{className:a()({show:m})},o.createElement("i",{onClick:f},o.createElement(l.Lp2,{color:"#000",size:"35px"})),o.createElement("h3",null,t),o.createElement(u.Yr,null,o.createElement("h4",null,n),o.createElement(i.Z,{type:"button",onClick:f},"Close"))),o.createElement(u.An,{className:a()({show:m})}))}},34909:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(67294),a=n(42982),o=n(67244),l=n(23201),i=n(3322),u=n(43587),c=n(1345),s=n(41357),m=u.default.article.withConfig({displayName:"styles__CustomersMain",componentId:"sc-1k32p4f-0"})(["width:100%;height:calc(100% - 100px);overflow-x:hidden;"]),f=n(70686),d=n(20698),p=(n(17727),n(75900)),h=n.n(p),v=n(26199),E=n(90584),g=n(84245),y=n(28029),x=n(69742),C=function(e){var t=e.title,n=e.modalOnSubmit,a=(0,r.useContext)(x.Z),o=a.setmodalCustomerIsOpen,l=a.modalCustomerIsOpen,i=(0,r.useState)(!1),u=i[0],c=i[1],s=(0,r.useState)(""),m=(s[0],s[1]),d=(0,r.useState)({name:"",email:"",phone:""}),p=d[0],C=d[1];function b(){m("")}return r.createElement(r.Fragment,null,r.createElement(y.F0,{className:h()({show:l})},r.createElement("i",{onClick:function(){o(!1)}},r.createElement(v.Lp2,{color:"#000",size:"35px"})),r.createElement("h3",null,t),u?"Sending data":r.createElement(y.Yr,null,r.createElement("div",null,r.createElement("label",null,t+" Name"),r.createElement(g.l_,{value:p.name,onChange:function(e){return function(e){var t={name:e.target.value};C(Object.assign({},p,t)),b()}(e)},placeholder:"Enter "+t+" Name"})),r.createElement("div",null,r.createElement("label",null,"Email"),r.createElement(g.l_,{value:p.email,onChange:function(e){return function(e){var t={email:e.target.value};C(Object.assign({},p,t)),b()}(e)},placeholder:"Enter Email"})),r.createElement("div",null,r.createElement("label",null,"Phone"),r.createElement(g.l_,{type:"text",value:p.phone,onChange:function(e){return function(e){var t={phone:e.target.value};C(Object.assign({},p,t)),b()}(e)},placeholder:"Enter Phone"})),r.createElement(E.Z,{type:"button",onClick:function(e){e.preventDefault(),c(!0);var t={customer_full_name:p.name,customer_email:p.email,customer_phone:p.phone};f.Z.createCustomer(t).then((function(){o(!1),n(t)})).catch((function(e){m(e.message)})).finally((function(){c(!1)}))}},"Create Customer"))),r.createElement(y.An,{className:h()({show:l})}))},b=n(52469),w=function(){var e=(0,u.useTheme)(),t=(0,r.useState)([]),n=t[0],p=t[1],h=(0,r.useContext)(x.Z).setModalCustomerIsOpen,v=(0,r.useState)(""),g=v[0],y=v[1],w=(0,r.useContext)(x.Z).setModalMessageIsOpen;(0,r.useEffect)((function(){f.Z.getCustomers().then((function(e){return p(e)}))}),[]);var Z=function(e,t){var r=Object.assign({},n.find((function(t){return t.id===e})),t);f.Z.updateCustomer(e,r)},_=function(e){var t=e.name,n=e.value;n!==e.previousValue&&Z(t,{customer_full_name:n})},S=function(e){var t=e.name,n=e.value;n!==e.previousValue&&Z(t,{customer_email:n})},k=function(e){var t=e.name,n=e.value;n!==e.previousValue&&Z(t,{customer_phone:n})};return r.createElement(c.Z,{title:"Customers"},r.createElement(d.N,{className:"task-title"},r.createElement("div",null,r.createElement("i",null,r.createElement(o.ybL,null)),r.createElement("h5",null,"People")),r.createElement(E.Z,{onClick:function(){return h(!0)}},"Add Customer")),r.createElement(m,null,r.createElement(s.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Email"),r.createElement("th",null,"Contact Number"),r.createElement("th",null))),r.createElement("tbody",null,n.map((function(t){return r.createElement("tr",null,r.createElement("td",null,r.createElement(i.y,{name:t.id,onChange:p,onSave:_,defaultValue:t.customer_full_name,style:{textAlign:"center",width:"100%",fontWeight:500,fontSize:"1.08rem",lineHeight:1.35,fontFamily:e.font.family}})),r.createElement("td",null,r.createElement(i.y,{name:t.id,onChange:p,onSave:S,defaultValue:t.customer_email,style:{textAlign:"center",width:"100%",fontWeight:500,fontSize:"1.08rem",lineHeight:1.35,fontFamily:e.font.family}})),r.createElement("td",null,r.createElement(i.y,{name:t.id,onChange:p,onSave:k,defaultValue:t.customer_phone,style:{textAlign:"center",width:"100%",fontWeight:500,fontSize:"1.08rem",lineHeight:1.35,fontFamily:e.font.family}})),r.createElement("td",null,r.createElement(l.AMf,{size:25,onClick:function(){return e=t.id,void f.Z.deleteCustomer(e).then((function(e){w(!0),423===e.status?y("Can't remove it. There are projects depending on it."):200===e.status&&y("Successfully removed")}));var e},style:{cursor:"pointer"}})))})))),r.createElement(C,{title:"New Customer",description:"Add task details",section:"Customer",modalOnSubmit:function(e){var t=[];t.push.apply(t,(0,a.Z)(n).concat([e])),p(t)}})),r.createElement(b.Z,{title:"message",message:g}))},Z=function(){return r.createElement(w,null)}},70686:function(e,t,n){"use strict";var r=n(1112);t.Z={getCustomers:function(){return(0,r.Z)("/api/customers").then((function(e){return e.data}))},getCustomerById:function(e){return(0,r.Z)("/api/customers/detail/"+e).then((function(e){return e.data}))},createCustomer:function(e){return(0,r.Z)("/api/customers/create",{method:"POST",data:e}).then((function(e){return e.data}))},updateCustomer:function(e,t){return(0,r.Z)("/api/customers/update/"+e,{data:t,method:"PUT"}).then((function(e){return e.data}))},deleteCustomer:function(e){return(0,r.Z)("/api/customers/delete/"+e,{method:"DELETE"}).then((function(e){return e}))}}}}]);
//# sourceMappingURL=component---src-pages-customers-js-2a020a85e3821549bc2f.js.map