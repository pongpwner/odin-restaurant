(()=>{"use strict";var e,n,t,r,o,a,i,c,s,l,d,u,p,f,m={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(344),t.b),d=i()(o()),u=s()(l);d.push([e.id,"* {\n  box-sizing: border-box;\n  list-style-type: none;\n}\nbody {\n  margin: 0;\n}\n.container {\n  background-image: url("+u+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-position: 25% 75%;\n}\n\n/*header*/\n.header {\n  width: 100vw;\n  height: 200px;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.logo {\n  color: red;\n  font-size: 6rem;\n  opacity: 1;\n  display: flex;\n  justify-content: center;\n}\n.navbar {\n  display: flex;\n  color: red;\n  justify-content: center;\n}\n.navbar ul {\n  display: flex;\n}\n.navbar ul li {\n  font-size: 1.5rem;\n  padding: 10 20px;\n  margin: 10px;\n}\n/*content*/\n.content {\n  border-radius: 15px;\n  padding: 5% 10%;\n  color: white;\n  width: 50%;\n  background-color: rgba(0, 0, 0, 0.7);\n  margin: 30px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.3rem;\n}\n",""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},344:(e,n,t)=>{e.exports=t.p+"8f2706f4b16969078cbf.jpeg"}},h={};function v(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return m[e](t,t.exports,v),t.exports}v.m=m,v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var n=v.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,v.nc=void 0,e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),l=v.n(s),d=v(589),u=v.n(d),p=v(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,function(){let e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("container");let t=document.createElement("header");t.classList.add("header");let r=document.createElement("div");r.classList.add("logo"),r.textContent="Wanmin Restaurant";let o=document.createElement("nav");o.classList.add("navbar");let a=document.createElement("ul"),i=document.createElement("li");i.textContent="Home";let c=document.createElement("li");c.textContent="Menu",e.appendChild(n),n.appendChild(t),a.appendChild(i),a.appendChild(c),o.appendChild(a),t.appendChild(r),t.appendChild(o);let s=document.createElement("div");s.classList.add("content"),n.appendChild(s);let l=document.createElement("p");l.textContent="Best Restaurant in Teyvat!";let d=document.createElement("p");d.textContent="Home of the Master Chef Xiangling!";let u=document.createElement("p");u.textContent="We have a large menu that holds many different genres of food. We have many traditional dishes, but also many unique dishes exclusive only to us!";let p=document.createElement("p");p.textContent="Looking to try something new? Try the daily special! (something new everytime)";let f=document.createElement("p");f.textContent=" Dine in, carry out, or even have your food delivered by the Traveler!",s.appendChild(l),s.appendChild(d),s.appendChild(u),s.appendChild(p),s.appendChild(f)}()})();