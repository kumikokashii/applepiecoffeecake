(this["webpackJsonpapplepiecoffeecake-app"]=this["webpackJsonpapplepiecoffeecake-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(4),a=n.n(s),c=n(5),r=n(3),o=(n(10),{0:["This is ___.","Coffee ___ is awesome.","___ is lalala..."],1:["This question 1 is so ___.","Everyone ___ about that.",'She said, "Tell me ___"'],2:["this is question 2 line 1","this is question 2 line 2","this is question 2 line 3"]}),l=n(0);var u=function(e){var t=e.questionNum,n=o[t],s=n.map((function(e){var t=e.indexOf("___");return[t,t+2]})),a={};n.forEach((function(e,t){a[t]=""}));var u=Object(i.useState)(a),_=Object(r.a)(u,2),j=_[0],p=_[1],b=Object(i.useState)(!1),h=Object(r.a)(b,2),f=h[0],d=h[1],m=n.map((function(e,t){return-1===s[t][0]?Object(l.jsxs)(i.Fragment,{children:[e,Object(l.jsx)("br",{})]}):Object(l.jsxs)(i.Fragment,{children:[e.substring(0,s[t][0]),Object(l.jsx)("input",{value:j[t],onChange:function(e){return function(e,t){var n=Object(c.a)({},j);n[t]=e.target.value,p(n)}(e,t)},className:"line-input",placeholder:"______",size:j[t].length||5},t),e.substring(s[t][1]+1,e.length),Object(l.jsx)("br",{})]})})),O=Object(l.jsx)("span",{className:"button"+(f?" buttonClicked":""),onClick:function(){d(!0),setTimeout((function(){return d(!1)}),1e3);var e=n.map((function(e,t){return e.replace("___",j[t]||"___")})).join("\n");navigator.clipboard.writeText(e)},children:f?"copied":"copy my lines"}),v=(new Date).getFullYear();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"fillin",children:"Fill in the blank."}),Object(l.jsx)("div",{className:"lines",children:m}),O,Object(l.jsxs)("div",{className:"footer",children:["\xa9 ",v," Testing"]})]})};a.a.render(Object(l.jsx)(u,{questionNum:Math.floor(3*Math.random())}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.97171965.chunk.js.map