(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{484:function(r,n,e){var t=e(485);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[r.i,t,""]]);var a={insert:"head",singleton:!1};e(72)(t,a);t.locals&&(r.exports=t.locals)},485:function(r,n,e){(n=e(71)(!1)).push([r.i,".app-bar {\r\n  display: flex;\r\n  min-height: 64px;\r\n  padding: 0 16px;\r\n  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar__block {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar__title-block {\r\n  margin-left: 32px;\r\n}\r\n\r\n@keyframes color-loop {\r\n  0% {\r\n    color: #ffcdd2;\r\n  }\r\n  10% {\r\n    color: #f8bbd0;\r\n  }\r\n  20% {\r\n    color: #e1bee7;\r\n  }\r\n  30% {\r\n    color: #d1c4e9;\r\n  }\r\n  40% {\r\n    color: #c5cae9;\r\n  }\r\n  50% {\r\n    color: #bbdefb;\r\n  }\r\n  60% {\r\n    color: #b3e5fc;\r\n  }\r\n  70% {\r\n    color: #b2ebf2;\r\n  }\r\n  80% {\r\n    color: #b2dfdb;\r\n  }\r\n  90% {\r\n    color: #c8e6c9;\r\n  }\r\n  100% {\r\n    color: #dcedc8;\r\n  }\r\n}\r\n\r\n.app-bar__brand-link {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100%;\r\n  font-size: 1.5rem;\r\n  text-decoration: none;\r\n  animation: 6s linear 0s infinite alternate color-loop;\r\n}\r\n\r\n.app-bar__page-title {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .app-bar {\r\n    min-height: 48px;\r\n  }\r\n\r\n  .app-bar__title-block {\r\n    margin-left: 24px;\r\n  }\r\n}\r\n",""]),r.exports=n},486:function(r,n,e){"use strict";var t=e(478),a=e.n(t),o=e(477),i=e.n(o),c=e(1),l=e.n(c),s=e(0),p=e.n(s),u=e(110),d=function(r){return/^#[0-9A-F]{6}$/i.test(r)||/^#([0-9A-F]{3}){1,2}$/i.test(r)};function m(r){if(r=r.trim(),!d(r))throw new Error("Invalid HEX color.");3===(r=r.replace("#","")).length&&(r=r.split("").map((function(r){return r+r})).join(""));var n=parseInt(r.substr(0,2),16),e=parseInt(r.substr(2,2),16),t=parseInt(r.substr(4,2),16);return Math.round((299*parseInt(n)+587*parseInt(e)+114*parseInt(t))/1e3)>=128?"#000":"#fff"}e(484);var b=function(r){return getComputedStyle(document.documentElement).getPropertyValue("--color-".concat(r))},g=b("primary"),f=b("secondary"),x=function(r){switch(r){case"primary":return g;case"secondary":return f;default:return r}};function h(r){var n=r.title,e=r.color,t=void 0===e?"#616161":e,o=r.className,c=void 0===o?"":o,s=i()(r,["title","color","className"]),p=x(t);return l.a.createElement("header",a()({className:["app-bar",c].join(" "),style:{backgroundColor:p,color:m(p)}},s),l.a.createElement("div",{className:"app-bar__block"},l.a.createElement(u.b,{to:"/",className:"app-bar__brand-link"},"IKBO-02-16-Coursework-JS")),n&&l.a.createElement("div",{className:"app-bar__block app-bar__title-block"},l.a.createElement("h1",{className:"app-bar__page-title"},n)))}h.propTypes={title:p.a.string,color:p.a.string,className:p.a.string};var v=l.a.memo(h);e.d(n,"a",(function(){return v}))},487:function(r,n,e){var t=e(488);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[r.i,t,""]]);var a={insert:"head",singleton:!1};e(72)(t,a);t.locals&&(r.exports=t.locals)},488:function(r,n,e){(n=e(71)(!1)).push([r.i,'.button {\r\n  display: inline-block;\r\n  padding: 0 16px;\r\n  line-height: 2em;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  user-select: none;\r\n  font-family: "Roboto", "Helvetica", "Arial", sans-serif;\r\n  color: black;\r\n  outline: none;\r\n  font-size: 0.875rem;\r\n  border: 1px solid rgba(0, 0, 0, .4);\r\n  border-top-color: rgba(0, 0, 0, .3);\r\n  border-radius: 2px;\r\n  background: white;\r\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0) inset,\r\n  0 1px 1px 1px rgba(255, 255, 255, .2),\r\n  0 -1px 1px 1px rgba(0, 0, 0, 0);\r\n  transition: .2s ease-in-out;\r\n}\r\n\r\n.button:hover:not(:active) {\r\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0) inset,\r\n  0 1px 1px 1px rgba(0, 255, 255, .5),\r\n  0 -1px 1px 1px rgba(0, 255, 255, .5);\r\n}\r\n\r\n.button:active {\r\n  opacity: 90%;\r\n  box-shadow: 0 0 3px rgba(0, 0, 0, .5) inset,\r\n  0 1px 1px 1px rgba(255, 255, 255, .4),\r\n  0 -1px 1px 1px rgba(0, 0, 0, .1);\r\n}\r\n\r\n.button-primary {\r\n  background: var(--color-primary);\r\n  color: white;\r\n}',""]),r.exports=n},489:function(r,n,e){"use strict";var t=e(478),a=e.n(t),o=e(477),i=e.n(o),c=e(1),l=e.n(c),s=e(0),p=e.n(s);e(487);function u(r){var n=r.component,e=void 0===n?"button":n,t=r.primary,o=void 0!==t&&t,c=r.className,s=void 0===c?"":c,p=i()(r,["component","primary","className"]),u=e;return l.a.createElement(u,a()({className:"button ".concat(o?"button-primary ":"").concat(s)},p))}u.propTypes={component:p.a.string,text:p.a.string,color:p.a.string,primary:p.a.bool,className:p.a.string};var d=u;e.d(n,"a",(function(){return d}))},496:function(r,n,e){var t=e(497);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[r.i,t,""]]);var a={insert:"head",singleton:!1};e(72)(t,a);t.locals&&(r.exports=t.locals)},497:function(r,n,e){(n=e(71)(!1)).push([r.i,".rugged-container {\r\n  margin: auto;\r\n  min-height: 250px;\r\n  height: calc(100vh - 64px - 32px - 32px - 64px);\r\n  max-width: 1500px;\r\n}\r\n\r\n.rugged-buttons-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.rugged-map {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 32px 0;\r\n}\r\n\r\n.rugged-button {\r\n    margin: 32px 0;\r\n    cursor: pointer;\r\n}",""]),r.exports=n},517:function(r,n,e){"use strict";e.r(n);var t=e(479),a=e.n(t),o=e(1),i=e.n(o),c=e(481),l=e(486),s=e(489);e(496);var p=function(){var r={center:[55.669705,37.481081],zoom:15,controls:[]},n=i.a.useState(!0),e=a()(n,2),t=e[0],o=e[1],p=i.a.useMemo((function(){return{trafficShown:t}}),[t]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:"Шумилов",color:"primary"}),i.a.createElement("div",{className:"rugged-container"},i.a.createElement(c.e,null,i.a.createElement(c.b,{defaultState:r,className:"rugged-map"},i.a.createElement(c.d,{state:p,onChange:function(r){o(r.originalEvent.target.state._data.trafficShown)}}),i.a.createElement(c.f,null),i.a.createElement(c.a,null),i.a.createElement(c.c,{modules:["geoObject.addon.balloon"],defaultGeometry:r.center,properties:{balloonContentBody:"РТУ-МИРЭА"}})))),i.a.createElement("div",{className:"rugged-buttons-container"},i.a.createElement(s.a,{className:"rugged-button",primary:!0,onClick:function(){o(!p.trafficShown)}},"Переключить отображение пробок")))};e.d(n,"default",(function(){return p}))}}]);