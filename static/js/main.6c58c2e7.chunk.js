(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{11:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),a=t.n(i),c=t(12),o=t.n(c),s=(t(21),t(11),t(2)),u=t(3);function l(){var n=Object(s.a)(["\n  padding: 2rem 0;\n  background-color: #b04a5a;\n"]);return l=function(){return n},n}var f=u.a.div(l()),d=function(){return Object(r.jsx)(f,{})};function p(){var n=Object(s.a)(["\n  padding: 2rem 0;\n  background-color: #b04a5a;\n"]);return p=function(){return n},n}var j=u.a.div(p()),b=function(){return Object(r.jsx)(j,{})},h=t(5),x=t.n(h),m=t(6),g=t(4),O={normal:"#aaaa99",fire:"#ff4422",water:"#3399ff",electric:"#ffcc33",grass:"#77cc55",ice:"#66ccff",fighting:"#bb5544",poison:"#aa5599",ground:" #ddbb55",flying:"#8899ff",psychic:"#ff5599",bug:"#aabb22",rock:"#bbaa66",ghost:"#6666bb",dragon:"#7766ee",dark:"#775544",steel:"#aaaabb",fairy:"#ee99ee"};function v(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n\n  p {\n    color: white;\n    font-weight: 700;\n    font-size: 1.5rem;\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(s.a)(["\n  width: 340px;\n  height: 100px;\n  background-color: ",";\n  border-radius: 1rem;\n  text-transform: capitalize;\n  cursor: pointer;\n  position: relative;\n\n  svg {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    opacity: 50%;\n    z-index: 0;\n  }\n"]);return y=function(){return n},n}var k=u.a.li(y(),(function(n){return n.type?O[n.type]:"lightgray"})),w=u.a.div(v());function E(){return(E=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function S(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var z=i.createElement("g",null,i.createElement("title",null,"Layer 1"),i.createElement("ellipse",{ry:40.5,rx:40.5,id:"svg_2",cy:54.44971,cx:409.55455,strokeWidth:25,stroke:"#ffffff",fill:"none"}),i.createElement("line",{strokeLinecap:"null",strokeLinejoin:"null",id:"svg_4",y2:53.94971,x2:480.60892,y1:53.94971,x1:-.50021,fillOpacity:0,strokeWidth:10,stroke:"#ffffff",fill:"none"}),i.createElement("ellipse",{ry:8.5,rx:8.5,id:"svg_6",cy:53.94971,cx:409.05455,fillOpacity:0,strokeWidth:10,stroke:"#ffffff",fill:"#000000"}));function P(n,e){var t=n.title,r=n.titleId,a=S(n,["title","titleId"]);return i.createElement("svg",E({width:480,height:108,xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),t?i.createElement("title",{id:r},t):null,z)}var L=i.forwardRef(P),M=(t.p,function(n){var e=n.pokemon,t=n.setModal,i=a.a.useState(null),c=Object(g.a)(i,2),o=c[0],s=c[1];return a.a.useEffect((function(){s(e.types[0].type.name)}),[e]),Object(r.jsxs)(k,{onClick:function(){t(e.id)},type:o,children:[Object(r.jsxs)(w,{children:[Object(r.jsx)("p",{children:e.name}),Object(r.jsx)("img",{src:e.sprites.front_default,alt:e.name})]}),Object(r.jsx)(L,{viewBox:"0 0 250 100",style:{width:"148%",height:"71%"}})]})});function _(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  button {\n    background: transparent;\n    border: none;\n\n    &:hover,\n    &:focus {\n      color: ",";\n    }\n  }\n"]);return _=function(){return n},n}function I(){var n=Object(s.a)(["\n  div {\n    display: flex;\n    align-items: center;\n    margin-top: 1rem;\n\n    h4 {\n      margin: 0 1rem 0 0;\n      color: #aaa;\n    }\n\n    p {\n      margin: 0;\n    }\n  }\n"]);return I=function(){return n},n}function B(){var n=Object(s.a)(["\n  margin: 5rem 2rem 0;\n"]);return B=function(){return n},n}function W(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  padding: 1rem;\n  color: white;\n\n  h1 {\n    margin: 2rem 0 0 0;\n  }\n\n  h1,\n  h2 {\n    text-transform: capitalize;\n  }\n\n  div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    div {\n      display: flex;\n      justify-content: space-space-between;\n      width: 50%;\n\n      h2 {\n        background: rgba(255, 255, 255, 0.3);\n        padding: 0.4rem;\n        border-radius: 1rem;\n        font-size: 1.4rem;\n      }\n    }\n  }\n"]);return W=function(){return n},n}function q(){var n=Object(s.a)(["\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background-color: white;\n  position: absolute;\n  justify-self: center;\n  align-self: center;\n  opacity: 0.5;\n  z-index: 1;\n"]);return q=function(){return n},n}function A(){var n=Object(s.a)(["\n  justify-self: center;\n  align-self: center;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 37%;\n\n  img {\n    position: absolute;\n    width: 150px;\n    z-index: 1000;\n  }\n"]);return A=function(){return n},n}function C(){var n=Object(s.a)(["\n  width: 360px;\n  height: 600px;\n  background: white;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 2fr 3.5fr;\n  position: relative;\n"]);return C=function(){return n},n}function F(){var n=Object(s.a)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.4);\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  text-align: justify;\n"]);return F=function(){return n},n}var J=u.a.div(F()),D=u.a.div(C()),N=u.a.div(A()),R=u.a.div(q()),T=u.a.div(W(),(function(n){return n.type?O[n.type]:"#b44"})),V=u.a.div(B()),G=u.a.div(I()),H=u.a.div(_(),(function(n){return n.type?O[n.type]:"#b44"})),K=function(n){var e=n.pokemon,t=n.setModal,i=a.a.useState(null),c=Object(g.a)(i,2),o=c[0],s=c[1],u=a.a.useState(null),l=Object(g.a)(u,2),f=l[0],d=l[1];return a.a.useEffect((function(){function n(){return(n=Object(m.a)(x.a.mark((function n(){var t,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:r=n.sent,s(r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),a.a.useEffect((function(){d(null===o||void 0===o?void 0:o.types[0].type.name)}),[o]),o?Object(r.jsx)(J,{onClick:function(n){n.target===n.currentTarget&&t(null)},children:Object(r.jsxs)(D,{children:[Object(r.jsxs)(T,{type:f,children:[Object(r.jsx)("h1",{children:o.name}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:o.types.map((function(n){return Object(r.jsx)("h2",{children:n.type.name},n.type.name)}))}),Object(r.jsxs)("h2",{children:["#",o.id]})]})]}),Object(r.jsxs)(N,{children:[Object(r.jsx)(R,{}),Object(r.jsx)("img",{src:o.sprites.other["official-artwork"].front_default,alt:o.name})]}),Object(r.jsxs)(V,{children:[Object(r.jsxs)(H,{type:f,children:[Object(r.jsx)("button",{children:"Sobre"}),Object(r.jsx)("button",{children:"Evolu\xe7\xe3o"}),Object(r.jsx)("button",{children:"Status"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Descri\xe7\xe3o"}),Object(r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam enim asperiores magnam placeat animi quibusdam sapiente similique modi rerum?"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Biologia"}),Object(r.jsxs)(G,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Altura"}),Object(r.jsxs)("p",{children:[(.1*o.height).toFixed(2),"m"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Peso"}),Object(r.jsxs)("p",{children:[(.1*o.weight).toFixed(2),"kg"]})]})]})]})]})]})}):null};function Q(){var n=Object(s.a)(["\n  animation: "," 2s infinite;\n"]);return Q=function(){return n},n}function U(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 90vh;\n"]);return U=function(){return n},n}function X(){var n=Object(s.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 0;\n  gap: 2rem;\n\n  @media (min-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n  display: flex;\n"]);return Y=function(){return n},n}function Z(){var n=Object(s.a)(["\n    from {\n      transform: translate(0, 0) rotate(0);\n    }\n    to {\n      transform: translate(0, 0) rotate(360deg);\n    }\n  }\n"]);return Z=function(){return n},n}var $=Object(u.b)(Z()),nn=u.a.div(Y()),en=u.a.ul(X()),tn=u.a.div(U()),rn=u.a.img(Q(),$),an=function(){var n=a.a.useState(null),e=Object(g.a)(n,2),t=e[0],i=e[1],c=a.a.useState([]),o=Object(g.a)(c,2),s=o[0],u=o[1],l=a.a.useState(null),f=Object(g.a)(l,2),d=f[0],p=f[1],j=a.a.useState(!1),b=Object(g.a)(j,2),h=b[0],O=b[1];return a.a.useEffect((function(){function n(){return(n=Object(m.a)(x.a.mark((function n(){var e,t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O(!0),n.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898");case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,i(t.results),O(!1);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),a.a.useEffect((function(){function n(){return(n=Object(m.a)(x.a.mark((function n(){var e;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(O(!0),!t){n.next=7;break}return n.next=4,Promise.all(t.map(function(){var n=Object(m.a)(x.a.mark((function n(e){var t,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e.url);case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 4:e=n.sent,u(e),O(!1);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),h?Object(r.jsx)(tn,{children:Object(r.jsx)(rn,{src:"https://img.icons8.com/color/100/000000/pokeball--v1.png",alt:"Loading Pokeball"})}):s?Object(r.jsxs)(nn,{children:[d&&Object(r.jsx)(K,{pokemon:d,setModal:p}),Object(r.jsx)(en,{children:s.map((function(n){return Object(r.jsx)(M,{pokemon:n,setModal:p},n.id)}))})]}):null};var cn=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(b,{}),Object(r.jsx)("main",{children:Object(r.jsx)(an,{})}),Object(r.jsx)(d,{})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(cn,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.6c58c2e7.chunk.js.map