(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[1],{134:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),r=t(6),i=t.n(r),a=t(19),s=t(71),u=t(72),d=(t(88),t(31)),l=t(33),f=[{path:"/login",label:"Login",component:Object(o.lazy)((function(){return t.e(0).then(t.bind(null,167))})),isProtected:!1,isNotLoggedOn:!0},{path:"/register",label:"Register",component:Object(o.lazy)((function(){return t.e(2).then(t.bind(null,168))})),isProtected:!1,isNotLoggedOn:!0}],g=t(29),b=t(165),h=t(41),p=t(162),j=t(164),m=t(58),O=Object(m.a)({menu:{},container:{display:"flex",justifyContent:"space-between",padding:"10px",marginTop:"0px",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"},button:{display:"inline-flex",alignItems:"center",justifyContent:"center",color:"#000",backgroundColor:"#c0d4f5",border:"0",outline:"0",width:"120px",padding:"2px 8px",borderRadius:"4px",cursor:"pointer",boxShadow:"0px 2px 1px 1px rgba(0, 0, 0, 0.05)",font:"inherit",textTransform:"none",userSelect:"none",transition:"background-color 200ms ease-in-out","&:hover":{boxShadow:"0px 2px 1px 1px rgba(0, 0, 0, 0.15)",backgroundColor:"rgba(0, 0, 255, 0.87)"}},active:{color:"rgb(59, 138, 255)"}}),x=t(4),L=function(){var e=O(),n=Object(a.b)(),t=Object(a.c)((function(e){return e.user.isLoggedOn})),o=c.a.useState(null),r=Object(l.a)(o,2),i=r[0],s=r[1],u=function(){s(null)};return Object(x.jsxs)("div",{className:e.container,children:[Object(x.jsx)(b.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},children:"Open Menu"}),Object(x.jsx)(p.a,{className:e.menu,id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:u,children:f.map((function(n){var o=n.path,c=n.exact,r=n.label,i=n.isProtected,a=n.isNotLoggedOn;return function(e,n,t){return(!e||e&&n)&&(!t||t&&!n)}(i,t,a)?Object(x.jsx)(j.a,{onClick:u,children:Object(x.jsx)(g.b,{activeClassName:e.active,exact:c,to:o,children:r},o)}):null}))}),Object(x.jsx)(b.a,{className:e.button,onClick:function(){return n(Object(h.c)())},variant:"contained",color:"primary",children:"Logout"})]})},k=t(10),y=t(30),v=function(e){return Object(a.c)((function(e){return e.user.isLoggedOn}))?Object(x.jsx)(k.b,Object(y.a)({},e)):Object(x.jsx)(k.a,{to:"/login"})},S=function(e){var n=Object(a.c)((function(e){return e.user.isLoggedOn})),t=e.isNotLoggedOn;return!t||t&&!n?Object(x.jsx)(k.b,Object(y.a)({},e)):null},R=t(42),N=t.n(R),w=function(){return Object(x.jsx)("div",{className:"content",children:Object(x.jsx)(o.Suspense,{fallback:Object(x.jsx)(N.a,{type:"TailSpin",color:"#00BFFF",height:40,width:40,className:"Spinner",timeout:3e3}),children:Object(x.jsx)(k.d,{children:f.map((function(e){var n=e.path,t=e.exact,o=e.isProtected,c=e.component,r=e.isNotLoggedOn;return o?Object(x.jsx)(v,{path:n,exact:t,component:c},n):Object(x.jsx)(S,{path:n,exact:t,component:c,isNotLoggedOn:r},n)}))})})})},C=function(){var e=Object(a.b)(),n=Object(a.c)((function(e){return e.user.is\u0421heckIn}));return Object(o.useEffect)((function(){e(Object(h.a)())}),[e]),Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)(N.a,{type:"TailSpin",color:"#00BFFF",height:40,width:40,className:"Spinner",timeout:3e3}):Object(x.jsxs)("div",{className:"body",children:[Object(x.jsx)(L,{}),Object(x.jsx)(w,{}),Object(x.jsx)(d.a,{})]})})},E=t(74),U=t(23),q=t(40),I=t(25),F=t(15),T=t(75),z=t.n(T),B=t(14),P={key:"token",storage:z.a},A=Object(I.g)(P,B.a),J=Object(F.b)({user:A}),M=t(76),D=t.n(M),G=[].concat(Object(U.a)(Object(q.c)({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}})),[D.a]),H=Object(q.a)({reducer:J,middleware:G,devTools:!1}),K=Object(I.h)(H);i.a.render(Object(x.jsx)(s.a,{template:u.a,children:Object(x.jsx)(a.a,{store:H,children:Object(x.jsx)(E.a,{loading:null,persistor:K,children:Object(x.jsx)(g.a,{children:Object(x.jsx)(C,{})})})})}),document.getElementById("root"))},14:function(e,n,t){"use strict";t.d(n,"i",(function(){return a})),t.d(n,"j",(function(){return s})),t.d(n,"h",(function(){return u})),t.d(n,"c",(function(){return d})),t.d(n,"d",(function(){return l})),t.d(n,"b",(function(){return f})),t.d(n,"f",(function(){return g})),t.d(n,"g",(function(){return b})),t.d(n,"e",(function(){return h})),t.d(n,"m",(function(){return p})),t.d(n,"n",(function(){return j})),t.d(n,"l",(function(){return m})),t.d(n,"k",(function(){return O}));var o=t(40),c=Object(o.b)({name:"user",initialState:{email:"",name:"",token:"",isLoggedOn:!1,isLoading:!0,"is\u0421heckIn":!0,error:""},reducers:{fetchRegisterRequest:function(e){e.isLoading=!0},fetchRegisterSuccess:function(e,n){e.name=n.payload.user.name,e.email=n.payload.user.email,e.token=n.payload.token,e.isLoggedOn=!1,e.isLoading=!1},fetchRegisterError:function(e,n){e.error=n.payload.message,e.isLoading=!1},fetchLoginRequest:function(e){e.isLoading=!0},fetchLoginSuccess:function(e,n){e.name=n.payload.user.name,e.email=n.payload.user.email,e.token=n.payload.token,e.isLoggedOn=!1,e.isLoading=!1},fetchLoginError:function(e,n){e.error=n.payload.message,e.isLoading=!1},fetchLogoutRequest:function(e){e.isLoading=!0},fetchLogoutSuccess:function(e,n){e.token="",e.name="",e.email="",e.isLoggedOn=!1,e.isLoading=!1},fetchLogoutError:function(e,n){e.error=n.payload,e.isLoading=!1},fetchUserRequest:function(e){e.is\u0421heckIn=!0},fetchUserSuccess:function(e,n){e.name=n.payload.name,e.email=n.payload.email,e.isLoggedOn=!0,e.is\u0421heckIn=!1},fetchUserError:function(e){e.is\u0421heckIn=!1,e.isLoggedOn=!1,e.token=""},fetchUserCancel:function(e){e.is\u0421heckIn=!1}}}),r=c.actions,i=c.reducer,a=r.fetchRegisterRequest,s=r.fetchRegisterSuccess,u=r.fetchRegisterError,d=r.fetchLoginRequest,l=r.fetchLoginSuccess,f=r.fetchLoginError,g=r.fetchLogoutRequest,b=r.fetchLogoutSuccess,h=r.fetchLogoutError,p=r.fetchUserRequest,j=r.fetchUserSuccess,m=r.fetchUserError,O=r.fetchUserCancel;n.a=i},41:function(e,n,t){"use strict";t.d(n,"d",(function(){return s})),t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return l}));var o=t(32),c=t.n(o),r=t(31),i=t(14);c.a.defaults.baseURL="https://connections-api.herokuapp.com/users";var a=function(e){c.a.defaults.headers.common.Authorization=e},s=function(e){return function(n){n(i.i()),c.a.post("/signup",e).then((function(e){var t=e.data;a(t.token),n(i.j(t))})).catch((function(e){r.b.error(e.message),n(i.h(e.message))}))}},u=function(e){return function(n){n(i.c()),c.a.post("/login",e).then((function(e){var t=e.data;a(t.token),n(i.d(t))})).catch((function(e){r.b.error(e.message),n(i.b(e.message))}))}},d=function(){return function(e){e(i.f()),c.a.post("/logout").then((function(){return e(i.g())})).catch((function(n){r.b.error(n.message),e(i.e(n.message))}))}},l=function(){return function(e,n){var t=n().user.token;t?(e(i.m()),a(t),c.a.get("/current").then((function(n){var t=n.data;return e(i.n(t))})).catch((function(n){r.b.error(n.message),a(""),e(i.l(n.message))}))):e(i.k())}}},88:function(e,n,t){}},[[134,3,4]]]);
//# sourceMappingURL=main.7df0aa21.chunk.js.map