(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{11:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),a=e.n(i),c=e(12),o=e.n(c),s=(e(22),e(11),e(2)),u=e(3);function l(){var n=Object(s.a)(["\n  padding: 2rem 0;\n  background-color: #b04a5a;\n"]);return l=function(){return n},n}var f=u.a.div(l()),d=function(){return Object(r.jsx)(f,{})};function p(){var n=Object(s.a)(["\n  padding: 2rem 0;\n  background-color: #b04a5a;\n"]);return p=function(){return n},n}var j=u.a.div(p()),b=function(){return Object(r.jsx)(j,{})},h=e(5),x=e.n(h),m=e(6),g=e(4),O={normal:"#aaaa99",fire:"#ff4422",water:"#3399ff",electric:"#ffcc33",grass:"#77cc55",ice:"#66ccff",fighting:"#bb5544",poison:"#aa5599",ground:" #ddbb55",flying:"#8899ff",psychic:"#ff5599",bug:"#aabb22",rock:"#bbaa66",ghost:"#6666bb",dragon:"#7766ee",dark:"#775544",steel:"#aaaabb",fairy:"#ee99ee"};function v(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n  gap: 4rem;\n\n  p {\n    color: white;\n    font-weight: 700;\n    font-size: 1.5rem;\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(s.a)(["\n  width: 340px;\n  height: 100px;\n  background-color: ",";\n  border-radius: 1rem;\n  text-transform: capitalize;\n  cursor: pointer;\n  position: relative;\n\n  svg {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    opacity: 50%;\n    z-index: 0;\n  }\n"]);return y=function(){return n},n}var k=u.a.li(y(),(function(n){return n.type?O[n.type]:"lightgray"})),w=u.a.div(v());function E(){return(E=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function S(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var z=i.createElement("g",null,i.createElement("title",null,"Layer 1"),i.createElement("ellipse",{ry:40.5,rx:40.5,id:"svg_2",cy:54.44971,cx:409.55455,strokeWidth:25,stroke:"#ffffff",fill:"none"}),i.createElement("line",{strokeLinecap:"null",strokeLinejoin:"null",id:"svg_4",y2:53.94971,x2:480.60892,y1:53.94971,x1:-.50021,fillOpacity:0,strokeWidth:10,stroke:"#ffffff",fill:"none"}),i.createElement("ellipse",{ry:8.5,rx:8.5,id:"svg_6",cy:53.94971,cx:409.05455,fillOpacity:0,strokeWidth:10,stroke:"#ffffff",fill:"#000000"}));function _(n,t){var e=n.title,r=n.titleId,a=S(n,["title","titleId"]);return i.createElement("svg",E({width:480,height:108,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),e?i.createElement("title",{id:r},e):null,z)}var P=i.forwardRef(_),C=(e.p,function(n){var t=n.pokemon,e=n.setModal,i=a.a.useState(null),c=Object(g.a)(i,2),o=c[0],s=c[1];return a.a.useEffect((function(){s(t.types[0].type.name)}),[t]),Object(r.jsxs)(k,{onClick:function(){e(t.id)},type:o,children:[Object(r.jsxs)(w,{children:[Object(r.jsx)("p",{children:t.name}),Object(r.jsx)("img",{src:t.sprites.front_default,alt:t.name})]}),Object(r.jsx)(P,{viewBox:"0 0 250 100",style:{width:"148%",height:"71%"}})]})});function F(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 600px;\n"]);return F=function(){return n},n}function I(){var n=Object(s.a)(["\n  animation: "," 2s infinite;\n"]);return I=function(){return n},n}function L(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  button {\n    background: transparent;\n    border: none;\n\n    &:hover,\n    &:focus {\n      color: ",";\n      outline: none;\n    }\n  }\n"]);return L=function(){return n},n}function M(){var n=Object(s.a)(["\n  div {\n    display: flex;\n    align-items: center;\n    margin-top: 1rem;\n\n    h4 {\n      margin: 0 1rem 0 0;\n      color: #aaa;\n    }\n\n    p {\n      margin: 0;\n    }\n  }\n"]);return M=function(){return n},n}function W(){var n=Object(s.a)(["\n  margin: 5rem 2rem 0;\n"]);return W=function(){return n},n}function B(){var n=Object(s.a)(["\n  display: flex;\n  width: 60%;\n\n  h2 {\n    background: rgba(255, 255, 255, 0.3);\n    padding: 0.5rem;\n    border-radius: 1rem;\n    font-size: 1.4rem;\n    margin-right: 1rem;\n  }\n"]);return B=function(){return n},n}function A(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  h2 {\n    margin: 1rem 1rem 0 0;\n  }\n"]);return A=function(){return n},n}function J(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  padding: 1rem;\n  color: white;\n\n  h1 {\n    margin: 1rem 0 0 0;\n  }\n\n  h1,\n  h2 {\n    text-transform: capitalize;\n  }\n"]);return J=function(){return n},n}function D(){var n=Object(s.a)(["\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  background-color: white;\n  position: absolute;\n  justify-self: center;\n  align-self: center;\n  opacity: 0.5;\n  z-index: 1;\n"]);return D=function(){return n},n}function H(){var n=Object(s.a)(["\n  justify-self: center;\n  align-self: center;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 37%;\n\n  img {\n    position: absolute;\n    width: 150px;\n    z-index: 1000;\n  }\n"]);return H=function(){return n},n}function N(){var n=Object(s.a)(["\n  width: 360px;\n  height: 600px;\n  background: white;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: 2fr 3.5fr;\n  position: relative;\n"]);return N=function(){return n},n}function R(){var n=Object(s.a)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.4);\n  top: 0px;\n  left: 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  text-align: justify;\n"]);return R=function(){return n},n}function T(){var n=Object(s.a)(["\n    from {\n      transform: translate(0, 0) rotate(0);\n    }\n    to {\n      transform: translate(0, 0) rotate(360deg);\n    }\n  }\n"]);return T=function(){return n},n}var q=Object(u.b)(T()),G=u.a.div(R()),K=u.a.div(N()),Q=u.a.div(H()),U=u.a.div(D()),V=u.a.div(J(),(function(n){return n.type?O[n.type]:"#b44"})),X=u.a.div(A()),Y=u.a.div(B()),Z=u.a.div(W()),$=u.a.div(M()),nn=u.a.div(L(),(function(n){return n.type?O[n.type]:"#b44"})),tn=u.a.img(I(),q),en=u.a.div(F()),rn=e(16),an=function(n){var t=n.pokemon,e=n.setModal,i=a.a.useState(null),c=Object(g.a)(i,2),o=c[0],s=c[1],u=a.a.useState(null),l=Object(g.a)(u,2),f=l[0],d=l[1],p=a.a.useState(null),j=Object(g.a)(p,2),b=j[0],h=j[1],O=a.a.useState(0),v=Object(g.a)(O,2),y=v[0],k=v[1],w=a.a.useState(!1),E=Object(g.a)(w,2),S=E[0],z=E[1];return a.a.useEffect((function(){function n(){return(n=Object(m.a)(x.a.mark((function n(){var e,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:r=n.sent,s(r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function e(){return(e=Object(m.a)(x.a.mark((function n(){var e,r,i;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:r=n.sent,i=r.flavor_text_entries.map((function(n){return n.language.name})).findIndex((function(n){return"en"===n})),d(r.flavor_text_entries[i].flavor_text);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}z(!0),Promise.all([function(){return n.apply(this,arguments)}(),function(){return e.apply(this,arguments)}()]).then((function(n){z(!1)}))}),[t]),a.a.useEffect((function(){h(null===o||void 0===o?void 0:o.types[0].type.name)}),[o]),console.log(S),o?Object(r.jsx)(G,{onClick:function(n){n.target===n.currentTarget&&e(null)},children:Object(r.jsx)(K,{children:S?Object(r.jsx)(en,{children:Object(r.jsx)(tn,{src:"https://img.icons8.com/color/100/000000/pokeball--v1.png",alt:"Loading Pokeball"})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(V,{type:b,children:[Object(r.jsx)(rn.a,{style:{width:"24px",height:"24px",cursor:"pointer"},onClick:function(){return e(null)}}),Object(r.jsxs)(X,{children:[Object(r.jsx)("h1",{children:o.name}),Object(r.jsxs)("h2",{children:["#",o.id<10?"00".concat(o.id):o.id<100?"0".concat(o.id):o.id]})]}),Object(r.jsx)(Y,{children:o.types.map((function(n){return Object(r.jsx)("h2",{children:n.type.name},n.type.name)}))})]}),Object(r.jsxs)(Q,{children:[Object(r.jsx)(U,{}),Object(r.jsx)("img",{src:o.sprites.other["official-artwork"].front_default,alt:o.name})]}),Object(r.jsxs)(Z,{children:[Object(r.jsxs)(nn,{type:b,children:[Object(r.jsx)("button",{onClick:function(){return k(0)},autoFocus:!0,children:"About"}),Object(r.jsx)("button",{onClick:function(){return k(1)},children:"Evolution"}),Object(r.jsx)("button",{onClick:function(){return k(2)},children:"Status"})]}),2===y?Object(r.jsx)("div",{children:"2"}):1===y?Object(r.jsx)("div",{children:"1"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Description"}),Object(r.jsx)("p",{children:f})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Biology"}),Object(r.jsxs)($,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Height"}),Object(r.jsxs)("p",{children:[(.1*o.height).toFixed(2),"m"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Weight"}),Object(r.jsxs)("p",{children:[(.1*o.weight).toFixed(2),"kg"]})]})]})]})]})]})]})})}):null};function cn(){var n=Object(s.a)(["\n  animation: "," 2s infinite;\n"]);return cn=function(){return n},n}function on(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 90vh;\n"]);return on=function(){return n},n}function sn(){var n=Object(s.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 2rem 0;\n  gap: 2rem;\n\n  @media (min-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (min-width: 1200px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"]);return sn=function(){return n},n}function un(){var n=Object(s.a)(["\n  display: flex;\n"]);return un=function(){return n},n}function ln(){var n=Object(s.a)(["\n    from {\n      transform: translate(0, 0) rotate(0);\n    }\n    to {\n      transform: translate(0, 0) rotate(360deg);\n    }\n  }\n"]);return ln=function(){return n},n}var fn=Object(u.b)(ln()),dn=u.a.div(un()),pn=u.a.ul(sn()),jn=u.a.div(on()),bn=u.a.img(cn(),fn),hn=function(){var n=a.a.useState(null),t=Object(g.a)(n,2),e=t[0],i=t[1],c=a.a.useState([]),o=Object(g.a)(c,2),s=o[0],u=o[1],l=a.a.useState(null),f=Object(g.a)(l,2),d=f[0],p=f[1],j=a.a.useState(!1),b=Object(g.a)(j,2),h=b[0],O=b[1];return a.a.useEffect((function(){function n(){return(n=Object(m.a)(x.a.mark((function n(){var t,e;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O(!0),n.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898");case 3:return t=n.sent,n.next=6,t.json();case 6:e=n.sent,i(e.results),O(!1);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),a.a.useEffect((function(){function n(){return(n=Object(m.a)(x.a.mark((function n(){var t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(O(!0),!e){n.next=7;break}return n.next=4,Promise.all(e.map(function(){var n=Object(m.a)(x.a.mark((function n(t){var e,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t.url);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()));case 4:t=n.sent,u(t),O(!1);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),h?Object(r.jsx)(jn,{children:Object(r.jsx)(bn,{src:"https://img.icons8.com/color/100/000000/pokeball--v1.png",alt:"Loading Pokeball"})}):s?Object(r.jsxs)(dn,{children:[d&&Object(r.jsx)(an,{pokemon:d,setModal:p}),Object(r.jsx)(pn,{children:s.map((function(n){return Object(r.jsx)(C,{pokemon:n,setModal:p},n.id)}))})]}):null};var xn=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(b,{}),Object(r.jsx)("main",{children:Object(r.jsx)(hn,{})}),Object(r.jsx)(d,{})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(xn,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6b0ff075.chunk.js.map