(this["webpackJsonpredux-Project"]=this["webpackJsonpredux-Project"]||[]).push([[0],{31:function(e,t,a){e.exports=a(51)},36:function(e,t,a){},37:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=(a(36),a(37),a(8)),s=function(){return c.a.createElement("nav",{className:"navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary"},c.a.createElement("div",{className:"container"},c.a.createElement(o.b,{to:"/",className:"navbar-brand"},"Redux Crud"),c.a.createElement("div",null,c.a.createElement(o.b,{to:"/contacts/add",className:"btn btn-light ml-auto"},"Create User"))))},u=a(6),m=a(4),i=function(e){var t=e.contact,a=e.selectAll,n=Object(m.b)(),r=t.name,l=t.phone,s=t.email,u=t.hobbies,i=t.id;return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{checked:a,type:"checkbox",className:"custom-control-input"}),c.a.createElement("label",{className:"custom-control-label"}))),c.a.createElement("td",null,r),c.a.createElement("td",null,l),c.a.createElement("td",null,s),c.a.createElement("td",null,u),c.a.createElement("td",{className:"actions"},c.a.createElement(o.b,{to:"/contacts/edit/".concat(i)},c.a.createElement("span",{className:"material-icons mr-2"},"edit")),c.a.createElement("span",{className:"material-icons  text-danger",onClick:function(){return n(function(e){return{type:"DELETE_CONTACT",payload:e}}(i))}},"remove_circle")))},d=function(){var e=Object(m.b)(),t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(m.c)((function(e){return e.contact.contacts})),s=Object(m.c)((function(e){return e.contact.selectedContacts}));return Object(n.useEffect)((function(){e(r?{type:"SELECT_CONTACT",payload:o.map((function(e){return e.id}))}:{type:"CLEAR_CONTACT"})}),[r]),c.a.createElement("div",null,s.length>0?c.a.createElement("button",{className:"btn btn-danger mb-3",onClick:function(){return e({type:"DELETE_SELECTED_CONTACT"})}},"delete all"):null,c.a.createElement("table",{className:"table shadow"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,c.a.createElement("div",{className:"custom-control custom-checkbox"},c.a.createElement("input",{id:"selectAll",type:"checkbox",className:"custom-control-input",value:r,onClick:function(){return l(!r)}}),c.a.createElement("label",{htmlFor:"selectAll",className:"custom-control-label"}))),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Phone"),c.a.createElement("th",null,"E-mail"),c.a.createElement("th",null,"Hobbies"),c.a.createElement("th",null,"Actions"))),c.a.createElement("tbody",null,o.map((function(e){return c.a.createElement(i,{contact:e,key:e.id,selectAll:r})})))))},E=a(11),b=a(28),p=a(29),h=a(30),f=a(2),v={contacts:[{id:1,name:"Utkarsh Karaiya",username:"Bret",email:"Test@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}}],contact:null,selectedContacts:[]},O=Object(E.combineReducers)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:[t.payload].concat(Object(h.a)(e.contacts))});case"GET_CONTACT":var a=e.contacts.filter((function(e){return e.id==t.payload}));a=a.values();var n,c=Object(p.a)(a);try{for(c.s();!(n=c.n()).done;){var r=n.value;a=r}}catch(l){c.e(l)}finally{c.f()}return Object(f.a)(Object(f.a)({},e),{},{contact:a});case"UPDATE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id==t.payload.id?t.payload:e}))});case"DELETE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!=t.payload}))});case"DELETE_SELECTED_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:[]});case"SELECT_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{selectedContacts:t.payload});case"CLEAR_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{selectedContacts:[]});default:return e}}}),N=Object(E.createStore)(O,Object(b.composeWithDevTools)()),C=a(10),j=a(20),g=a.n(j),y=function(){var e=Object(C.f)(),t=Object(m.b)(),a=Object(n.useState)(""),r=Object(u.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),d=i[0],E=i[1],b=Object(n.useState)(""),p=Object(u.a)(b,2),h=p[0],f=p[1],v=Object(n.useState)(""),O=Object(u.a)(v,2),N=O[0],j=O[1];return c.a.createElement("div",{className:"card border-0 shadow"},c.a.createElement("div",{className:"card-header"},"Add a User"),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{onSubmit:function(a){return function(a){a.preventDefault();var n={id:g.a.generate(),name:l,phone:h,email:d,hobbies:N};t({type:"CREATE_CONTACT",payload:n}),e.push("/")}(a)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your Name",value:l,onChange:function(e){return o(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your Phone Number",value:h,onChange:function(e){return f(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your E-mail Address",value:d,onChange:function(e){return E(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your Hobbies",value:N,onChange:function(e){return j(e.target.value)}})),c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Create User"))))},T=function(){var e=Object(C.g)().id,t=Object(C.f)(),a=Object(m.b)(),r=Object(m.c)((function(e){return e.contact.contact})),l=Object(n.useState)(""),o=Object(u.a)(l,2),s=o[0],i=o[1],d=Object(n.useState)(""),E=Object(u.a)(d,2),b=E[0],p=E[1],h=Object(n.useState)(""),f=Object(u.a)(h,2),v=f[0],O=f[1],N=Object(n.useState)(""),j=Object(u.a)(N,2),g=j[0],y=j[1];Object(n.useEffect)((function(){null!=r&&(i(r.name),O(r.phone),p(r.email),y("")),a(function(e){return{type:"GET_CONTACT",payload:e}}(e))}),[r]);return c.a.createElement("div",{className:"card border-0 shadow"},c.a.createElement("div",{className:"card-header"},"Add a User"),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var n=Object.assign(r,{name:s,phone:v,email:b,hobbies:g});a(function(e){return{type:"UPDATE_CONTACT",payload:e}}(n)),t.push("/")}(e)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your Name",value:s,onChange:function(e){return i(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your Phone Number",value:v,onChange:function(e){return O(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your E-mail Address",value:b,onChange:function(e){return p(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Your Hobbies",value:g,onChange:function(e){return y(e.target.value)}})),c.a.createElement("button",{className:"btn btn-warning",type:"submit"},"Update Contact"))))};var A=function(){return c.a.createElement(m.a,{store:N},c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"py-3"},c.a.createElement(C.c,null,c.a.createElement(C.a,{exact:!0,path:"/",component:d}),c.a.createElement(C.a,{exact:!0,path:"/contacts/add",component:y}),c.a.createElement(C.a,{exact:!0,path:"/contacts/edit/:id",component:T})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.44470ec9.chunk.js.map