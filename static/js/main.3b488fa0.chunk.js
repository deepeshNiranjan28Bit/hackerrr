(this.webpackJsonphackerrr=this.webpackJsonphackerrr||[]).push([[0],{43:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var c,r=t(0),i=t.n(r),a=t(23),o=t.n(a),s=t(10),j=t(2),d=t(14),l=t(7),h=t(8),b=h.a.div(c||(c=Object(l.a)(["\n  width: 75vw;\n  margin: 0 10vw 0 10vw;\n\n  li:hover {\n    background-color: #d3d3d3;\n  }\n"]))),u=t(1);var x=function(n){var e=n.id,t=n.comment;return Object(u.jsx)(b,{children:t?Object(u.jsx)("ul",{children:Object(u.jsx)("li",{id:e,children:Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})})}):""})};var O,f,p=function(n){var e=n.children;return Object(u.jsxs)("div",{style:{marginTop:"8vh"},children:[Object(u.jsx)("h3",{style:{textAlign:"center"},children:"Comments"}),e?e.map((function(n){return Object(u.jsx)(x,{id:n.id,comment:n.text},n.id)})):""]})},v=t(18),m=t.n(v),g=t(27),y="https://hn.algolia.com/api/v1";function w(n){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(m.a.mark((function n(e){var t;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(y).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var T=h.a.div(O||(O=Object(l.a)(['\n  margin: 0 5vh 0 5vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "STIX Two Text", serif;\n  margin-top: 8vh;\n  h2 {\n    color: #64c9cf;\n    margin-bottom: 1vh;\n  }\n  h3 {\n    color: #64c9cf;\n  }\n']))),C=h.a.div(f||(f=Object(l.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "STIX Two Text", serif;\n  margin-top: 45vh;\n  color: #64c9cf;\n']))),S=t(28),I=t.n(S);var N,D=function(){var n=Object(j.f)().id,e=Object(r.useState)(""),t=Object(d.a)(e,2),c=t[0],i=t[1];Object(r.useEffect)((function(){w("/items/".concat(n)).then((function(n){i(n)}))}),[n]);var a=c.title,o=c.points,s=c.url,l=c.children;return Object(u.jsxs)("div",{children:[c?Object(u.jsxs)(T,{children:[Object(u.jsxs)(I.a,{children:[Object(u.jsx)("h2",{children:Object(u.jsxs)("u",{children:["Title - ",Object(u.jsx)("strong",{children:a||"Not there"})]})}),Object(u.jsxs)("h3",{children:["Points - ",Object(u.jsx)("strong",{children:o||"Not Found"})]}),Object(u.jsx)("a",{href:s,children:s||"Not Found"})]}),Object(u.jsx)(p,{children:l})]}):Object(u.jsx)(C,{children:Object(u.jsx)("h3",{children:'"Loading the data for you."'})}),Object(u.jsx)("div",{className:"bg-balls"})]})},F=h.a.div(N||(N=Object(l.a)(['\n  font-family: "Lato", sans-serif;\n  margin: 0 7vw 0 7vw;\n'])));var L=function(n){var e=n.id;return Object(u.jsx)("div",{children:Object(u.jsx)(s.c,{to:"/page/".concat(e),children:"Read more about this!"})})};var M=function(n){var e=n.title,t=n.author,c=n.id;return Object(u.jsx)(F,{children:Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:[Object(u.jsxs)("h3",{children:[Object(u.jsx)("em",{children:"TITLE - "}),e]}),Object(u.jsxs)("h4",{children:[Object(u.jsx)("em",{children:"AUTHOR - "}),t]}),Object(u.jsx)(L,{id:c})]})})})};var R,E,z,A=function(n){var e=n.data;return Object(u.jsx)("div",{children:e.map((function(n){return Object(u.jsx)(M,{id:n.objectID,title:n.title,author:n.author},n.objectID)}))})},H=h.a.input(R||(R=Object(l.a)(['\n  display: block;\n  font-family: "Roboto", sans-serif;\n  width: 350px;\n  margin: auto;\n  margin-bottom: 8px;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n']))),P=h.a.div(E||(E=Object(l.a)(['\n  text-align: center;\n  margin-top: 20vh;\n  font-size: 1.4rem;\n  color: #64c9cf;\n\n  h1 {\n    font-family: "Montserrat", sans-serif;\n  }\n  h4 {\n    font-family: "Merriweather", serif;\n  }\n  span {\n    color: #b5eaea;\n  }\n']))),B=h.a.div(z||(z=Object(l.a)(["\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 35px;\n\n  button {\n    color: #fff;\n    background-color: #64c9cf;\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]))),J=t(29),K=t.n(J),X=function(n){return n&&0===n.length?Object(u.jsx)("div",{children:"No results found on the basis of your search."}):n&&n.length>0?Object(u.jsx)("div",{children:Object(u.jsx)(A,{data:n})}):null};var _=function(){var n=Object(r.useState)(""),e=Object(d.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)(null),a=Object(d.a)(i,2),o=a[0],s=a[1],j=function(){w("/search?query=".concat(t)).then((function(n){var e=n.hits;s(e)}))},l=Object(r.useCallback)((function(n){c(n.target.value)}),[c]);return Object(u.jsxs)("div",{className:"MainDiv",children:[Object(u.jsxs)(K.a,{children:[Object(u.jsxs)(P,{children:[Object(u.jsxs)("h1",{children:["H A C K ",Object(u.jsx)("span",{children:"E R R R"})]}),Object(u.jsx)("h4",{children:"Wanna know about an hacker! Come let me hack you."})]}),Object(u.jsx)(H,{type:"text",placeholder:"Search for something",onChange:l,onKeyDown:function(n){13===n.keyCode&&j()},value:t}),Object(u.jsx)(B,{children:Object(u.jsx)("button",{type:"button",onClick:j,children:"Search"})})]}),X(o),Object(u.jsx)("div",{className:"footer",children:"Made by Deepesh @2021"}),Object(u.jsx)("div",{className:"bg-balls"})]})};var q=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(s.a,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/page/:id",children:Object(u.jsx)(D,{})}),Object(u.jsx)(j.a,{path:"/",children:Object(u.jsx)(_,{})})]})})})},U=(t(43),function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),c(n),r(n),i(n),a(n)}))});o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(s.b,{children:Object(u.jsx)(q,{})})}),document.getElementById("root")),U()}},[[44,1,2]]]);
//# sourceMappingURL=main.3b488fa0.chunk.js.map