var Demo=function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=4)}([function(t,n,r){"use strict";function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}r.d(n,"a",(function(){return a}));var i=/^(#)?([0-9a-f]+)$/i;function o(t){var n=t.toString(16);return 1===n.length?"0"+n:n}function u(t,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(n-t)*r:r<.5?n:r<2/3?t+(n-t)*(2/3-r)*6:t}var a=function(){function t(n,r,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.r=void 0,this.g=void 0,this.b=void 0,this.r=n,this.g=r,this.b=e}var n,r,a;return n=t,a=[{key:"validate",value:function(n){var r;if("string"!=typeof n||!(r=i.exec(n)))return null;var e=r[2];return 3===e.length?new t(17*parseInt(e[0],16),17*parseInt(e[1],16),17*parseInt(e[2],16)):6===e.length?new t(parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)):null}},{key:"from",value:function(n){var r=t.validate(n);if(!r)throw new Error("Invalid color "+n);return r}},{key:"fromHSL",value:function(n,r,e){var i,o,a;if(r<=0)i=o=a=e;else{var c=e<.5?e*(1+r):e+r-e*r,s=2*e-c;i=u(s,c,n+1/3),o=u(s,c,n),a=u(s,c,n-1/3)}return new t(Math.round(255*i),Math.round(255*o),Math.round(255*a))}}],(r=[{key:"mix",value:function(n,r,e){return e||(e=new t),e.r=this.r+(n.r-this.r)*r|0,e.g=this.g+(n.g-this.g)*r|0,e.b=this.b+(n.b-this.b)*r|0,e}},{key:"multiply",value:function(n,r){return r||(r=new t),r.r=this.r*n,r.g=this.g*n,r.b=this.b*n,r}},{key:"pick",value:function(t,n){this.r=t[n],this.g=t[n+1],this.b=t[n+2]}},{key:"draw",value:function(t,n){t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t[n+3]=255}},{key:"toRGB",value:function(){return"rgb(".concat(this.r,",").concat(this.g,",").concat(this.b,")")}},{key:"toRGBA",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(t,")")}},{key:"toRGBHex",value:function(){return"#"+o(this.r)+o(this.g)+o(this.b)}}])&&e(n.prototype,r),a&&e(n,a),t}()},,,,function(t,n,r){"use strict";r.r(n);var e=r(0).a.fromHSL(0,1,.5);console.log(e.toRGB())}]);
//# sourceMappingURL=bundle-test-a363ec05f08574ad3d10.js.map