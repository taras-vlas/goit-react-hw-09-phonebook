(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[6],{113:function(e,t,a){e.exports={container:"Title_container__3a8vc",title:"Title_title__1c_In",appear:"Title_appear__1afcg",appearActive:"Title_appearActive__3bA1v"}},114:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a(149),c=a(113),i=a.n(c),o=a(1);function s(e){var t=e.children,a=Object(n.createRef)(null);return Object(o.jsx)(r.a,{in:!0,appear:!0,timeout:500,classNames:i.a,nodeRef:a,children:Object(o.jsx)("div",{className:i.a.container,children:Object(o.jsx)("h1",{className:i.a.title,ref:a,children:t})})})}s.defaultProps={children:[]}},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(39);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(s){r=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},128:function(e,t,a){e.exports={form:"RegisterForm_form__ZNJCC",label:"RegisterForm_label__NtYws",text:"RegisterForm_text__2t5lJ",input:"RegisterForm_input__2AitA",container:"RegisterForm_container__TlsUM",button:"RegisterForm_button__uSKgb"}},150:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(0),r=a(9),c=a(10),i=a(114),o=a(2),s=a(20),l=a(115),u=a(128),b=a.n(u),m=a(1),d={name:"",email:"",password:""};function p(){var e=Object(n.useState)(d),t=Object(l.a)(e,2),a=t[0],i=t[1],u=a.name,p=a.email,j=a.password,f=Object(r.c)(c.c.getLoading),h=Object(r.b)(),O=Object(n.useCallback)((function(e){h(c.a.register(e))}),[h]),_=function(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(o.a)({},a,n))}))},x=function(){i(d)};return Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),O(a),x()},children:[Object(m.jsxs)("label",{className:b.a.label,children:[Object(m.jsx)("span",{className:b.a.text,children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Enter name","aria-label":"Input your name",className:b.a.input,value:u,onChange:_,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"username",required:!0})]}),Object(m.jsxs)("label",{className:b.a.label,children:[Object(m.jsx)("span",{className:b.a.text,children:"Email"}),Object(m.jsx)("input",{type:"email",name:"email",value:p,onChange:_,className:b.a.input,placeholder:"Enter e-mail","aria-label":"Input your Email",disabled:f,autoComplete:"email",required:!0})]}),Object(m.jsxs)("label",{className:b.a.label,children:[Object(m.jsx)("span",{className:b.a.text,children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",value:j,onChange:_,className:b.a.input,placeholder:"Enter more 7 characters","aria-label":"Input your password",disabled:f,autoComplete:"new-password",required:!0})]}),Object(m.jsx)("div",{className:b.a.container,children:Object(m.jsx)("button",{type:"submit",className:b.a.button,disabled:f,children:"Registration"})})]})}var j=a(32);function f(){var e=Object(r.c)(c.c.getLoading);return Object(n.useEffect)((function(){document.title="Register contact | Phonebook"}),[]),Object(m.jsxs)("main",{children:[Object(m.jsx)(i.a,{children:"Register contact in Phonebook"}),Object(m.jsx)(p,{}),e&&Object(m.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=register-page.60a795c2.chunk.js.map