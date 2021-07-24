(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{480:function(e,r,t){var n=t(481);e.exports=function(e){if("function"!=typeof e&&!n(e))throw new Error("Argument must be a function or Promise");return n(e)?e.then((function(e){return[null,e]}),(function(e){return[e]})):function(e){try{return[null,e()]}catch(e){return[e]}}(e)}},481:function(e,r){function t(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}e.exports=t,e.exports.default=t},662:function(e,r,t){"use strict";t.r(r);t(9),t(5),t(6),t(10),t(8),t(11);var n=t(16),o=t(7),c=t(1),l=(t(61),t(31),t(480)),d=t.n(l),f=t(72),m=t(200),w=t(483),v=t(482);function h(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(r){Object(c.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var y=Object(m.c)({middleware:["guest"],setup:function(){return{v$:Object(v.a)()}},data:function(){return{name:"",email:"",password:"",confirmPassword:""}},validations:function(){return{name:{required:w.b.withMessage("Обязательное поле",w.f),minLength:w.b.withMessage("Максимальная длина 64 символа",Object(w.d)(64))},email:{required:w.b.withMessage("Обязательное поле",w.f),minLength:w.b.withMessage("Минимальная длина 4 символа",Object(w.e)(4)),email:w.b.withMessage("E-mail введён в неверном формате",w.a)},password:{required:w.b.withMessage("Обязательное поле",w.f),minLength:w.b.withMessage("Минимальная длина ".concat(8," символов"),Object(w.e)(8)),sameAs:w.b.withMessage("Пароли не совпадают",Object(w.g)(this.confirmPassword))},confirmPassword:{required:w.b.withMessage("Обязательное поле",w.f),minLength:w.b.withMessage("Минимальная длина ".concat(8," символов"),Object(w.e)(8)),sameAs:w.b.withMessage("Пароли не совпадают",Object(w.g)(this.password))}}},methods:O(O({},Object(f.b)("user",["signUp"])),{},{onSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var t,o,c,l,f,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.v$.$validate();case 2:if(r.sent){r.next=5;break}return r.abrupt("return");case 5:return e.v$.$reset(),t=e.name,o=e.email,c=e.password,r.next=9,d()(e.signUp({name:t,email:o,password:c}));case 9:l=r.sent,f=Object(n.a)(l,2),m=f[0],f[1],m?e.$toast.error(m.serverError,"Ошибка регистрации"):e.$router.push("/");case 14:case"end":return r.stop()}}),r)})))()}})}),x=t(60),j=t(91),V=t.n(j),M=t(212),P=t(491),_=t(478),k=t(655),$=t(540),component=Object(x.a)(y,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("VCard",{staticClass:"sign-in-form mx-auto",attrs:{"max-width":"340px"}},[t("VCardTitle",[e._v("\n    Регистрация\n  ")]),e._v(" "),t("VForm",{on:{submit:function(r){return r.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("VCardText",[t("VuelidateWrapper",{attrs:{validator:e.v$.email},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errorMessages;return[t("VTextField",{attrs:{label:"Email",errorMessages:n,type:"text",required:"",placeholder:"name@example.com"},model:{value:e.email,callback:function(r){e.email=r},expression:"email"}})]}}])}),e._v(" "),t("VuelidateWrapper",{attrs:{validator:e.v$.name},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errorMessages;return[t("VTextField",{attrs:{label:"Имя",errorMessages:n,type:"text",required:"",placeholder:"Иванов Иван"},model:{value:e.name,callback:function(r){e.name=r},expression:"name"}})]}}])}),e._v(" "),t("VuelidateWrapper",{attrs:{validator:e.v$.password},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errorMessages;return[t("VTextField",{attrs:{label:"Пароль",errorMessages:n,type:"password",required:"",placeholder:"********"},model:{value:e.password,callback:function(r){e.password=r},expression:"password"}})]}}])}),e._v(" "),t("VuelidateWrapper",{attrs:{validator:e.v$.confirmPassword},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errorMessages;return[t("VTextField",{attrs:{label:"Повторите пароль",errorMessages:n,type:"password",required:"",placeholder:"********"},model:{value:e.confirmPassword,callback:function(r){e.confirmPassword=r},expression:"confirmPassword"}})]}}])})],1),e._v(" "),t("VCardActions",[t("VBtn",{attrs:{color:"primary",type:"submit",text:"",outlined:""}},[e._v("\n        Зарегистрироваться\n      ")]),e._v(" "),t("VBtn",{attrs:{color:"secondary",to:"/signIn",text:""}},[e._v("\n        Вход\n      ")])],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;V()(component,{VBtn:M.a,VCard:P.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VForm:k.a,VTextField:$.a})}}]);