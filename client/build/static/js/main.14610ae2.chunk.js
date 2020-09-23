(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){},43:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),l=a(20),o=a(3),i=a(15),u=a(2),d=a(11),m=a(9),p=a.n(m),f=a(13),v=a(37),b=a.n(v),k=a(12),h=a(38),E=a(40),g={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},O=a(42),j={tasks:[]},S=Object(k.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return Object(u.a)(Object(u.a)(Object(u.a)({},e),n),{},{isAuthenticated:!0,loading:!1});case"LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_TASKS":return Object(u.a)(Object(u.a)({},e),{},{tasks:n});case"ADD_TASK":return Object(u.a)(Object(u.a)({},e),{},{tasks:[n].concat(Object(O.a)(e.tasks))});case"UPDATE_TASK":return Object(u.a)(Object(u.a)({},e),{},{tasks:e.tasks.map((function(e){return e._id===n._id?Object(u.a)(Object(u.a)({},e),{},{completed:!0}):e}))});default:return e}}}),y=function(e){e?(A.defaults.headers.common["x-auth-token"]=e,localStorage.setItem("token",e)):(delete A.defaults.headers.common["x-auth-token"],localStorage.removeItem("token"))},N=[E.a],T=Object(k.createStore)(S,{},Object(h.composeWithDevTools)(k.applyMiddleware.apply(void 0,N))),w=T.getState();T.subscribe((function(){var e=w;if(w=T.getState(),e.auth.token!==w.auth.token){var t=w.auth.token;y(t)}}));var C=T,x=b.a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});x.interceptors.response.use((function(e){return e}),(function(e){return"Token is not valid"===e.response.data.msg&&C.dispatch({type:"LOGOUT"}),Promise.reject(e)}));var A=x,_=a(8),D=(a(23),Object(_.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(f.a)(p.a.mark((function a(n){var r,c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={email:e,password:t},a.prev=1,a.next=4,A.post("/users/login",r);case 4:c=a.sent,localStorage.setItem("token",c.token),n({type:"LOGIN_SUCCESS",payload:c.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}()},register:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.post("/users",e);case 3:n=t.sent,a({type:"REGISTER_SUCCESS",payload:n.data}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),r=t.t0.response.data.errors,console.log(r);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,a=e.login,c=e.register,s=Object(n.useState)(!1),l=Object(d.a)(s,2),m=l[0],p=l[1],f=Object(n.useState)({name:"",email:"",password:"",password2:""}),v=Object(d.a)(f,2),b=v[0],k=v[1],h=b.name,E=b.email,g=b.password,O=b.password2;if(t)return r.a.createElement(o.a,{to:"/dashboard"});var j=function(e){return k(Object(u.a)(Object(u.a)({},b),{},Object(i.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-left"},r.a.createElement("button",{className:"btn",onClick:function(){return p(!m)}},m?"Login":"Sign Up")),r.a.createElement("div",{className:"login-right"},m?r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:h,onChange:j,required:!0}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:E,onChange:j,required:!0}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:g,onChange:j,required:!0}),r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2",value:O,onChange:j,required:!0})):r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",value:E,onChange:j,required:!0}),r.a.createElement("input",{type:"text",placeholder:"Password",name:"password",value:g,onChange:j,required:!0})),r.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault(),m?c(b):a(E,g)}},m?"Sign up":"Login"))),r.a.createElement("div",{className:"divider"},"Task",r.a.createElement("span",null,"Aid")))})));var I=function(e){var t=e.task,a=e.triggerTaskDone;return r.a.createElement("div",{className:"task"},r.a.createElement("div",{className:"task-main"},r.a.createElement("h3",{className:"task-title"},t.title),r.a.createElement("div",{className:"task-date"},t.createdAt)),r.a.createElement("div",{className:"task-sub"},r.a.createElement("p",{className:"task-desc"},t.description),!0===t.completed?null:r.a.createElement("button",{onClick:a},"Done")))};var U=Object(_.b)((function(e){return{tasks:e.tasks.tasks}}),{fetchTasks:function(){return function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("token"),n={headers:{Authorization:a}},e.next=4,A.get("/tasks",n);case 4:r=e.sent,t({type:"SET_TASKS",payload:r.data});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateTask:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r,c,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("token"),r={headers:{Authorization:n}},c={completed:!0},t.next=5,A.patch("tasks/".concat(e),c,r);case 5:s=t.sent,a({type:"UPDATE_TASK",payload:s.data});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.fetchTasks,a=e.updateTask,c=e.tasks,s=e.filterProp;Object(n.useEffect)((function(){t()}),[t]);var l=c.filter((function(e){return!0===e.completed})).map((function(e){return r.a.createElement(I,{key:e._id,task:e})})),o=c.filter((function(e){return!1===e.completed})).map((function(e){return r.a.createElement(I,{key:e._id,task:e,triggerTaskDone:function(){a(e._id)}})}));return r.a.createElement(n.Fragment,null,s?o:l)}));var P=Object(_.b)(null,{addTask:function(e){return function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r,c,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=localStorage.getItem("token"),r={headers:{Authorization:n}},c=e,t.next=5,A.post("/tasks",c,r);case 5:s=t.sent,console.log(e),console.log("in addtask action"),a({type:"ADD_TASK",payload:s.data});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTask,a=e.passToggler,c=Object(n.useState)({title:"",description:""}),s=Object(d.a)(c,2),l=s[0],o=s[1],m=l.title,p=l.description,f=function(e){return o(Object(u.a)(Object(u.a)({},l),{},Object(i.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:"add-task-form",onSubmit:function(e){e.preventDefault(),l.title&&""!==l.description&&(o({title:"",description:""}),a(),t(l))}},r.a.createElement("input",{type:"text",placeholder:"Title",name:"title",value:m,onChange:f,required:!0}),r.a.createElement("textarea",{name:"description",cols:"30",rows:"5",placeholder:"Description",value:p,onChange:f}),r.a.createElement("input",{type:"submit"}))}));var q=Object(_.b)((function(e){return{user:e.auth.user}}))((function(e){var t=e.user,a=Object(n.useState)(!0),c=Object(d.a)(a,2),s=c[0],l=c[1],o=Object(n.useState)(!1),i=Object(d.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)({display:"none"}),f=Object(d.a)(p,2),v=f[0],b=f[1],k=Object(n.useState)("add-task"),h=Object(d.a)(k,2),E=h[0],g=h[1],O=Object(n.useState)("add-task-btn"),j=Object(d.a)(O,2),S=j[0],y=j[1],N=function(e){u?(b({display:"none"}),y("add-task-btn"),g("add-task")):(b({display:"block"}),y("add-task-btn active"),g("add-task active")),m(!u)},T=r.a.createElement("div",{className:"task-filter"},r.a.createElement("p",{className:s?"":"inactive"},"Todo"),r.a.createElement("p",{className:s?"inactive":"",onClick:function(){l(!s)}},"Complete")),w=r.a.createElement("div",{className:"task-filter"},r.a.createElement("p",{className:s?"":"inactive",onClick:function(){l(!s)}},"Todo"),r.a.createElement("p",{className:s?"inactive":""},"Complete"));return r.a.createElement("div",{className:"task-container"},r.a.createElement("div",{id:"overlay",className:"overlay",style:v},r.a.createElement(P,{passToggler:N})),r.a.createElement("div",{className:"task-filter"},s?T:w),r.a.createElement("b",{className:"grid-fill"},r.a.createElement("div",{className:E},r.a.createElement("div",{className:S,onClick:N},r.a.createElement("div",{className:"plus-l"}),r.a.createElement("div",{className:"plus-r"})))),r.a.createElement("div",{className:"greeting"},r.a.createElement("h2",null,r.a.createElement("span",null,"Hi")," ",t.name)),r.a.createElement("div",{className:"tasks"},r.a.createElement(U,{filterProp:s})))})),L=a(41),G=Object(_.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth.isAuthenticated,n=Object(L.a)(e,["component","auth"]);return r.a.createElement(o.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(o.a,{to:"/"})}}))}));var K=function(){return r.a.createElement(_.a,{store:C},r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:D}),r.a.createElement(G,{exact:!0,path:"/dashboard",component:q})," "))))};s.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.14610ae2.chunk.js.map