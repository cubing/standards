parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VuXv":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"WbnE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setAlgPartTypeMismatchReportingLevel=exports.reportTypeMismatch=void 0;var e="warn",r=10,t=0;function o(o){switch(e){case"error":throw new Error(o);case"warn":return void(++t<r&&t+1===r&&console.warn(o))}}function s(r){e=r}exports.reportTypeMismatch=o,exports.setAlgPartTypeMismatchReportingLevel=s;
},{}],"SLkt":[function(require,module,exports) {
"use strict";function t(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=e(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,u=function(){};return{s:u,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=s();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Comment=exports.NewLine=exports.Pause=exports.Conjugate=exports.Commutator=exports.Group=exports.Sequence=exports.Container=exports.Annotation=exports.Move=exports.Unit=exports.assertIsUnit=exports.isUnit=exports.assertMatchesType=exports.matchesAlgType=exports.AlgPart=void 0;var l=require("../debug"),y=function t(){p(this,t)};function h(t,e){return t.type===e}function v(t,e){return h(t,e)||l.reportTypeMismatch('Expected "type": "'.concat(e,'", saw "type": "').concat(t.type,'".')),t}function m(t){return"type"in t&&!h(t,"sequence")}function b(t){return"type"in t||l.reportTypeMismatch('Expected "unit", saw a value that was not an AlgPart.'),h(t,"sequence")&&l.reportTypeMismatch('Expected unit, saw "sequence".'),t}exports.AlgPart=y,exports.matchesAlgType=h,exports.assertMatchesType=v,exports.isUnit=m,exports.assertIsUnit=b;var x=function(t){o(r,y);var e=i(r);function r(){return p(this,r),e.apply(this,arguments)}return r}();exports.Unit=x;var d=function(t){o(r,x);var e=i(r);function r(){return p(this,r),e.apply(this,arguments)}return r}();exports.Move=d;var g=function(t){o(r,x);var e=i(r);function r(){return p(this,r),e.apply(this,arguments)}return r}();exports.Annotation=g;var j=function(t){o(r,x);var e=i(r);function r(){return p(this,r),e.apply(this,arguments)}return r}();exports.Container=j;var O=function(e){o(n,y);var r=i(n);function n(e){var o;p(this,n),(o=r.call(this)).nestedUnits=e,o.type="sequence";var u,i=t(e);try{for(i.s();!(u=i.n()).done;){b(u.value)}}catch(c){i.e(c)}finally{i.f()}return Object.freeze(o.nestedUnits),Object.freeze(a(o)),o}return n}();exports.Sequence=O;var w=function(t){o(r,j);var e=i(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return p(this,r),(n=e.call(this)).nestedSequence=t,n.amount=o,n.type="group",Object.freeze(a(n)),n}return r}();exports.Group=w;var S=function(t){o(r,j);var e=i(r);function r(t,n){var o,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return p(this,r),(o=e.call(this)).A=t,o.B=n,o.amount=u,o.type="commutator",Object.freeze(a(o)),o}return r}();exports.Commutator=S;var A=function(t){o(r,j);var e=i(r);function r(t,n){var o,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return p(this,r),(o=e.call(this)).A=t,o.B=n,o.amount=u,o.type="conjugate",Object.freeze(a(o)),o}return r}();exports.Conjugate=A;var P=function(t){o(r,d);var e=i(r);function r(){var t;return p(this,r),(t=e.call(this)).type="pause",Object.freeze(a(t)),t}return r}();exports.Pause=P;var C=function(t){o(r,g);var e=i(r);function r(){var t;return p(this,r),(t=e.call(this)).type="newLine",Object.freeze(a(t)),t}return r}();exports.NewLine=C;var T=function(t){o(r,g);var e=i(r);function r(t){var n;return p(this,r),(n=e.call(this)).comment=t,n.type="comment",Object.freeze(a(n)),n}return r}();exports.Comment=T;
},{"../debug":"WbnE"}],"h6hp":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(t){var e=i();return function(){var o,r=f(t);if(e){var n=f(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return c(this,o)}}function c(e,o){return!o||"object"!==t(o)&&"function"!=typeof o?u(e):o}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.RangeBlockMove=exports.LayerBlockMove=exports.BareBlockMove=exports.BlockMove=void 0;var l=require("./alg-part"),a=function(t){o(c,l.Move);var r=n(c);function c(t,o,n){var i,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(e(this,c),(i=r.call(this)).family=n,i.amount=f,i.type="blockMove",o&&(i.innerLayer=o,t&&(i.outerLayer=t)),t&&!o)throw new Error("Attempted to contruct block move with outer layer but no inner layer");return Object.freeze(u(i)),i}return c}();function p(t,e){return new a(void 0,void 0,t,e)}function s(t,e,o){return new a(void 0,t,e,o)}function y(t,e,o,r){return new a(t,e,o,r)}exports.BlockMove=a,exports.BareBlockMove=p,exports.LayerBlockMove=s,exports.RangeBlockMove=y;
},{"./alg-part":"SLkt"}],"VF9e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./alg-part");Object.defineProperty(exports,"AlgPartType",{enumerable:!0,get:function(){return e.AlgPartType}}),Object.defineProperty(exports,"AlgPart",{enumerable:!0,get:function(){return e.AlgPart}}),Object.defineProperty(exports,"Unit",{enumerable:!0,get:function(){return e.Unit}}),Object.defineProperty(exports,"Move",{enumerable:!0,get:function(){return e.Move}}),Object.defineProperty(exports,"Annotation",{enumerable:!0,get:function(){return e.Annotation}}),Object.defineProperty(exports,"Container",{enumerable:!0,get:function(){return e.Container}}),Object.defineProperty(exports,"WithAmount",{enumerable:!0,get:function(){return e.WithAmount}}),Object.defineProperty(exports,"Sequence",{enumerable:!0,get:function(){return e.Sequence}}),Object.defineProperty(exports,"Group",{enumerable:!0,get:function(){return e.Group}}),Object.defineProperty(exports,"Commutator",{enumerable:!0,get:function(){return e.Commutator}}),Object.defineProperty(exports,"Conjugate",{enumerable:!0,get:function(){return e.Conjugate}}),Object.defineProperty(exports,"Pause",{enumerable:!0,get:function(){return e.Pause}}),Object.defineProperty(exports,"NewLine",{enumerable:!0,get:function(){return e.NewLine}}),Object.defineProperty(exports,"Comment",{enumerable:!0,get:function(){return e.Comment}});var t=require("./block-move");Object.defineProperty(exports,"MoveFamily",{enumerable:!0,get:function(){return t.MoveFamily}}),Object.defineProperty(exports,"BlockMove",{enumerable:!0,get:function(){return t.BlockMove}}),Object.defineProperty(exports,"BareBlockMove",{enumerable:!0,get:function(){return t.BareBlockMove}}),Object.defineProperty(exports,"LayerBlockMove",{enumerable:!0,get:function(){return t.LayerBlockMove}}),Object.defineProperty(exports,"RangeBlockMove",{enumerable:!0,get:function(){return t.RangeBlockMove}});
},{"./alg-part":"SLkt","./block-move":"h6hp"}],"PKDD":[function(require,module,exports) {
"use strict";function e(e){return o(e)||t(e)||n(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,r){if(e){if("string"==typeof e)return a(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,r):void 0}}function t(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.experimentalConcatAlgs=exports.experimentalAppendBlockMove=exports.modifiedBlockMove=void 0;var i=require("./algorithm");function u(e,r){return e.family===r.family&&e.innerLayer===r.innerLayer&&e.outerLayer===r.outerLayer}function l(e,r){var n,t,o,a;return new i.BlockMove(null!==(n=r.outerLayer)&&void 0!==n?n:e.outerLayer,null!==(t=r.innerLayer)&&void 0!==t?t:e.innerLayer,null!==(o=r.family)&&void 0!==o?o:e.family,null!==(a=r.amount)&&void 0!==a?a:e.amount)}function c(r,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=r.nestedUnits,c=a[a.length-1];if(t&&c&&u(c,n)){var p=r.nestedUnits.slice(0,a.length-1),s=c.amount+n.amount;return o>1&&2*(s=(s%o+o)%o)>o&&(s-=o),0!==s&&p.push(l(c,{amount:s})),new i.Sequence(p)}return new i.Sequence([].concat(e(a),[n]))}function p(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return new i.Sequence(Array.prototype.concat.apply([],[].concat(r).map(function(e){return e.nestedUnits})))}exports.modifiedBlockMove=l,exports.experimentalAppendBlockMove=c,exports.experimentalConcatAlgs=p;
},{"./algorithm":"VF9e"}],"puc1":[function(require,module,exports) {
"use strict";function e(e,r){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=t(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var a=0,u=function(){};return{s:u,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw o}}}}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=c();return function(){var r,n=v(e);if(t){var a=v(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}function s(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?i(e):t}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.experimentalBlockMoveQuantumName=exports.algPartToStringForTesting=exports.algPartStructureEqualsForTesting=exports.algToString=exports.coalesceBaseMoves=exports.structureEquals=exports.expand=exports.invert=exports.ToString=exports.blockMoveToString=exports.CoalesceBaseMoves=exports.StructureEquals=exports.Expand=exports.Invert=exports.TraversalUp=exports.TraversalDownUp=void 0;var y=require("./algorithm/alg-part"),m=require("./algorithm");function h(e,t,r){switch(t.type){case"sequence":return y.assertMatchesType(t,"sequence"),e.traverseSequence(t,r);case"group":return y.assertMatchesType(t,"group"),e.traverseGroup(t,r);case"blockMove":return y.assertMatchesType(t,"blockMove"),e.traverseBlockMove(t,r);case"commutator":return y.assertMatchesType(t,"commutator"),e.traverseCommutator(t,r);case"conjugate":return y.assertMatchesType(t,"conjugate"),e.traverseConjugate(t,r);case"pause":return y.assertMatchesType(t,"pause"),e.traversePause(t,r);case"newLine":return y.assertMatchesType(t,"newLine"),e.traverseNewLine(t,r);case"comment":return y.assertMatchesType(t,"comment"),e.traverseComment(t,r);default:throw new Error("Unknown AlgPart type: ".concat(t.type))}}var g=function(){function e(){l(this,e)}return p(e,[{key:"traverse",value:function(e,t){return h(this,e,t)}},{key:"traverseIntoUnit",value:function(e,t){return y.assertIsUnit(this.traverse(e,t))}}]),e}();exports.TraversalDownUp=g;var k=function(e){a(r,g);var t=o(r);function r(){return l(this,r),t.apply(this,arguments)}return p(r,[{key:"traverse",value:function(e){return h(this,e,void 0)}},{key:"traverseIntoUnit",value:function(e){return y.assertIsUnit(this.traverse(e))}}]),r}();exports.TraversalUp=k;var d=function(e){a(r,k);var t=o(r);function r(){return l(this,r),t.apply(this,arguments)}return p(r,[{key:"traverseSequence",value:function(e){var t=this;return new m.Sequence(e.nestedUnits.map(function(e){return t.traverseIntoUnit(e)}).reverse())}},{key:"traverseGroup",value:function(e){return new m.Group(this.traverseSequence(e.nestedSequence),e.amount)}},{key:"traverseBlockMove",value:function(e){return new m.BlockMove(e.outerLayer,e.innerLayer,e.family,-e.amount)}},{key:"traverseCommutator",value:function(e){return new m.Commutator(e.B,e.A,e.amount)}},{key:"traverseConjugate",value:function(e){return new m.Conjugate(e.A,this.traverseSequence(e.B),e.amount)}},{key:"traversePause",value:function(e){return e}},{key:"traverseNewLine",value:function(e){return e}},{key:"traverseComment",value:function(e){return e}}]),r}();exports.Invert=d;var S=function(t){a(n,k);var r=o(n);function n(){return l(this,n),r.apply(this,arguments)}return p(n,[{key:"traverseSequence",value:function(e){var t=this;return new m.Sequence(this.flattenSequenceOneLevel(e.nestedUnits.map(function(e){return t.traverse(e)})))}},{key:"traverseGroup",value:function(e){return this.repeat(this.flattenSequenceOneLevel([this.traverse(e.nestedSequence)]),e)}},{key:"traverseBlockMove",value:function(e){return e}},{key:"traverseCommutator",value:function(e){var t=this.traverseSequence(e.A),r=this.traverseSequence(e.B),n=[];return n=n.concat(t,r,exports.invert(t),exports.invert(r)),this.repeat(this.flattenSequenceOneLevel(n),e)}},{key:"traverseConjugate",value:function(e){var t=this.traverseSequence(e.A),r=this.traverseSequence(e.B),n=[];return n=n.concat(t,r,exports.invert(t)),this.repeat(this.flattenSequenceOneLevel(n),e)}},{key:"traversePause",value:function(e){return e}},{key:"traverseNewLine",value:function(e){return e}},{key:"traverseComment",value:function(e){return e}},{key:"flattenSequenceOneLevel",value:function(t){var r,n=[],a=e(t);try{for(a.s();!(r=a.n()).done;){var u=r.value;if(y.matchesAlgType(u,"sequence"))n=n.concat(u.nestedUnits);else{if(!y.isUnit(u))throw new Error("expand() encountered an internal error. Did you pass in a valid Algorithm?");n.push(u)}}}catch(o){a.e(o)}finally{a.f()}return n}},{key:"repeat",value:function(e,t){var r,n=Math.abs(t.amount);r=-1===(t.amount>0?1:-1)?exports.invert(new m.Sequence(e)).nestedUnits:e;for(var a=[],u=0;u<n;u++)a=a.concat(r);return new m.Sequence(a)}}]),n}();exports.Expand=S;var b=function(e){a(r,g);var t=o(r);function r(){return l(this,r),t.apply(this,arguments)}return p(r,[{key:"traverseSequence",value:function(e,t){if(y.isUnit(t))return!1;var r=t;if(e.nestedUnits.length!==r.nestedUnits.length)return!1;for(var n=0;n<e.nestedUnits.length;n++)if(!this.traverse(e.nestedUnits[n],r.nestedUnits[n]))return!1;return!0}},{key:"traverseGroup",value:function(e,t){return y.matchesAlgType(t,"group")&&this.traverse(e.nestedSequence,t.nestedSequence)}},{key:"traverseBlockMove",value:function(e,t){return y.matchesAlgType(t,"blockMove")&&e.outerLayer===t.outerLayer&&e.innerLayer===t.innerLayer&&e.family===t.family&&e.amount===t.amount}},{key:"traverseCommutator",value:function(e,t){return y.matchesAlgType(t,"commutator")&&this.traverse(e.A,t.A)&&this.traverse(e.B,t.B)}},{key:"traverseConjugate",value:function(e,t){return y.matchesAlgType(t,"conjugate")&&this.traverse(e.A,t.A)&&this.traverse(e.B,t.B)}},{key:"traversePause",value:function(e,t){return y.matchesAlgType(t,"pause")}},{key:"traverseNewLine",value:function(e,t){return y.matchesAlgType(t,"newLine")}},{key:"traverseComment",value:function(e,t){return y.matchesAlgType(t,"comment")&&e.comment===t.comment}}]),r}();exports.StructureEquals=b;var w=function(t){a(n,k);var r=o(n);function n(){return l(this,n),r.apply(this,arguments)}return p(n,[{key:"traverseSequence",value:function(t){var r,n=[],a=e(t.nestedUnits);try{for(a.s();!(r=a.n()).done;){var u=r.value;if(y.matchesAlgType(u,"blockMove"))if(n.length>0){var o=n[n.length-1];if(y.matchesAlgType(o,"blockMove")&&this.sameBlock(o,u)){var s=o.amount+u.amount;n.pop(),0!==s&&n.push(new m.BlockMove(u.outerLayer,u.innerLayer,u.family,s))}else n.push(u)}else n.push(u);else n.push(this.traverseIntoUnit(u))}}catch(i){a.e(i)}finally{a.f()}return new m.Sequence(n)}},{key:"traverseGroup",value:function(e){return e}},{key:"traverseBlockMove",value:function(e){return e}},{key:"traverseCommutator",value:function(e){return e}},{key:"traverseConjugate",value:function(e){return e}},{key:"traversePause",value:function(e){return e}},{key:"traverseNewLine",value:function(e){return e}},{key:"traverseComment",value:function(e){return e}},{key:"sameBlock",value:function(e,t){return e.outerLayer===t.outerLayer&&e.innerLayer===t.innerLayer&&e.family===t.family}}]),n}();function x(e){var t=Math.abs(e),r="";return 1!==t&&(r+=String(t)),t!==e&&(r+="'"),r}function T(e){var t=e.family+x(e.amount);return void 0!==e.innerLayer&&(t=String(e.innerLayer)+t,void 0!==e.outerLayer&&(t=String(e.outerLayer)+"-"+t)),t}exports.CoalesceBaseMoves=w,exports.blockMoveToString=T;var q=function(e){a(r,k);var t=o(r);function r(){return l(this,r),t.apply(this,arguments)}return p(r,[{key:"traverseSequence",value:function(e){var t="";if(e.nestedUnits.length>0){t+=this.traverse(e.nestedUnits[0]);for(var r=1;r<e.nestedUnits.length;r++)t+=this.spaceBetween(e.nestedUnits[r-1],e.nestedUnits[r]),t+=this.traverse(e.nestedUnits[r])}return t}},{key:"traverseGroup",value:function(e){return"("+this.traverse(e.nestedSequence)+")"+x(e.amount)}},{key:"traverseBlockMove",value:function(e){return T(e)}},{key:"traverseCommutator",value:function(e){return"["+this.traverse(e.A)+", "+this.traverse(e.B)+"]"+x(e.amount)}},{key:"traverseConjugate",value:function(e){return"["+this.traverse(e.A)+": "+this.traverse(e.B)+"]"+x(e.amount)}},{key:"traversePause",value:function(e){return"."}},{key:"traverseNewLine",value:function(e){return"\n"}},{key:"traverseComment",value:function(e){return"//"+e.comment}},{key:"spaceBetween",value:function(e,t){return y.matchesAlgType(e,"pause")&&y.matchesAlgType(t,"pause")?"":y.matchesAlgType(e,"newLine")||y.matchesAlgType(t,"newLine")?"":y.matchesAlgType(e,"comment")&&!y.matchesAlgType(t,"newLine")?"\n":" "}}]),r}();exports.ToString=q;var L=new d,A=new S,M=new b,U=new w,B=new q;function C(e){return exports.algPartToStringForTesting(new m.BlockMove(e.outerLayer,e.innerLayer,e.family,1))}exports.invert=L.traverseSequence.bind(L),exports.expand=A.traverseSequence.bind(A),exports.structureEquals=M.traverseSequence.bind(M),exports.coalesceBaseMoves=U.traverseSequence.bind(U),exports.algToString=B.traverseSequence.bind(B),exports.algPartStructureEqualsForTesting=B.traverse.bind(B),exports.algPartToStringForTesting=B.traverse.bind(B),exports.experimentalBlockMoveQuantumName=C;
},{"./algorithm/alg-part":"SLkt","./algorithm":"VF9e"}],"urGz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Example=void 0;var e,o=require("./algorithm");!function(e){e.Sune=new o.Sequence([o.BareBlockMove("R",1),o.BareBlockMove("U",1),o.BareBlockMove("R",-1),o.BareBlockMove("U",1),o.BareBlockMove("R",1),o.BareBlockMove("U",-2),o.BareBlockMove("R",-1)]),e.AntiSune=new o.Sequence([o.BareBlockMove("R",1),o.BareBlockMove("U",2),o.BareBlockMove("R",-1),o.BareBlockMove("U",-1),o.BareBlockMove("R",1),o.BareBlockMove("U",-1),o.BareBlockMove("R",-1)]),e.SuneCommutator=new o.Sequence([new o.Commutator(new o.Sequence([o.BareBlockMove("R",1),o.BareBlockMove("U",1),o.BareBlockMove("R",-2)]),new o.Sequence([new o.Conjugate(new o.Sequence([o.BareBlockMove("R",1)]),new o.Sequence([o.BareBlockMove("U",1)]),1)]),1)]),e.Niklas=new o.Sequence([o.BareBlockMove("R",1),o.BareBlockMove("U",-1),o.BareBlockMove("L",-1),o.BareBlockMove("U",1),o.BareBlockMove("R",-1),o.BareBlockMove("U",-1),o.BareBlockMove("L",1),o.BareBlockMove("U",1)]),e.EPerm=new o.Sequence([o.BareBlockMove("x",-1),new o.Commutator(new o.Sequence([new o.Conjugate(new o.Sequence([o.BareBlockMove("R",1)]),new o.Sequence([o.BareBlockMove("U",-1)]))]),new o.Sequence([o.BareBlockMove("D",1)]),1),new o.Commutator(new o.Sequence([new o.Conjugate(new o.Sequence([o.BareBlockMove("R",1)]),new o.Sequence([o.BareBlockMove("U",1)]))]),new o.Sequence([o.BareBlockMove("D",1)]),1),o.BareBlockMove("x",1)]),e.FURURFCompact=new o.Sequence([new o.Conjugate(new o.Sequence([o.BareBlockMove("F",1)]),new o.Sequence([new o.Commutator(new o.Sequence([o.BareBlockMove("U",1)]),new o.Sequence([o.BareBlockMove("R",1)]),1)]),1)]),e.APermCompact=new o.Sequence([new o.Conjugate(new o.Sequence([o.BareBlockMove("R",2)]),new o.Sequence([new o.Commutator(new o.Sequence([o.BareBlockMove("F",2)]),new o.Sequence([o.BareBlockMove("R",-1),o.BareBlockMove("B",-1),o.BareBlockMove("R",1)]),1)]),1)]),e.FURURFMoves=new o.Sequence([o.BareBlockMove("F",1),o.BareBlockMove("U",1),o.BareBlockMove("R",1),o.BareBlockMove("U",-1),o.BareBlockMove("R",-1),o.BareBlockMove("F",-1)]),e.TPerm=new o.Sequence([o.BareBlockMove("R",1),o.BareBlockMove("U",1),o.BareBlockMove("R",-1),o.BareBlockMove("U",-1),o.BareBlockMove("R",-1),o.BareBlockMove("F",1),o.BareBlockMove("R",2),o.BareBlockMove("U",-1),o.BareBlockMove("R",-1),o.BareBlockMove("U",-1),o.BareBlockMove("R",1),o.BareBlockMove("U",1),o.BareBlockMove("R",-1),o.BareBlockMove("F",-1)]),e.HeadlightSwaps=new o.Sequence([new o.Conjugate(new o.Sequence([o.BareBlockMove("F",1)]),new o.Sequence([new o.Commutator(new o.Sequence([o.BareBlockMove("R",1)]),new o.Sequence([o.BareBlockMove("U",1)]),3)]),1)]),e.TriplePause=new o.Sequence([new o.Pause,new o.Pause,new o.Pause]),e.AllAlgParts=[new o.Sequence([o.BareBlockMove("R",1),o.BareBlockMove("U",-1)]),new o.Group(new o.Sequence([o.BareBlockMove("F",1)]),2),o.BareBlockMove("R",2),new o.Commutator(new o.Sequence([o.BareBlockMove("R",2)]),new o.Sequence([o.BareBlockMove("U",2)]),2),new o.Conjugate(new o.Sequence([o.BareBlockMove("L",2)]),new o.Sequence([o.BareBlockMove("D",-1)]),2),new o.Pause,new o.NewLine,new o.Comment("short comment")]}(e=exports.Example||(exports.Example={}));
},{"./algorithm":"VF9e"}],"Xx1D":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fromJSON=void 0;var e=require("./algorithm");function r(r){if("sequence"!==r.type)throw new Error("Expected Sequence while parsing, got: ".concat(r.type));if(!r.nestedUnits)throw new Error("Missing nestedUnits");return new e.Sequence(r.nestedUnits.map(function(e){return n(e)}))}function n(n){switch(n.type){case"sequence":throw new Error("Expected AlgPart while parsing, got `Sequence`.");case"group":if(!n.nestedSequence)throw new Error("Missing nestedSequence");if(!n.amount)throw new Error("Missing amount");return new e.Group(r(n.nestedSequence),n.amount);case"blockMove":if(!n.family)throw new Error("Missing family");if(!n.amount)throw new Error("Missing amount");return new e.BlockMove(n.outerLayer,n.innerLayer,n.family,n.amount);case"commutator":if(!n.A)throw new Error("Missing A");if(!n.B)throw new Error("Missing B");if(!n.amount)throw new Error("Missing amount");return new e.Commutator(r(n.A),r(n.B),n.amount);case"conjugate":if(!n.A)throw new Error("Missing A");if(!n.B)throw new Error("Missing B");if(!n.amount)throw new Error("Missing amount");return new e.Conjugate(r(n.A),r(n.B),n.amount);case"pause":return new e.Pause;case"newLine":return new e.NewLine;case"comment":if(!n.comment&&""!==n.comment)throw new Error("Missing comment");return new e.Comment(n.comment);default:throw new Error("Unknown alg type: ".concat(n.type))}}exports.fromJSON=r;
},{"./algorithm":"VF9e"}],"pJRR":[function(require,module,exports) {
"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){l=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw i}}}}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function l(e){var t=y();return function(){var r,n=d(e);if(t){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){var t="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||!p(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return v(e,arguments,d(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),h(r,e)})(e)}function v(e,t,r){return(v=y()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&h(o,r.prototype),o}).apply(null,arguments)}function y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function p(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateSiGNAlg=exports.validateFlatAlg=exports.validateSiGNMoves=exports.FlatAlgValidator=exports.BlockMoveValidator=exports.ValidatorTraversal=exports.ValidationError=void 0;var m=require("./traversal"),w=function(e){u(r,s(Error));var t=l(r);function r(){return i(this,r),t.apply(this,arguments)}return r}();exports.ValidationError=w;var b=function(e){u(r,m.TraversalUp);var t=l(r);function r(){return i(this,r),t.apply(this,arguments)}return r}();function g(e,t){var n,o=r(t);try{for(o.s();!(n=o.n()).done;){if(!0===n.value[e])return!0}}catch(a){o.e(a)}finally{o.f()}return!1}exports.ValidatorTraversal=b;var S={x:!0,y:!0,z:!0,M:!0,E:!0,S:!0,m:!0,e:!0,s:!0},x={U:!0,L:!0,F:!0,R:!0,B:!0,D:!0},k={u:!0,l:!0,f:!0,r:!0,b:!0,d:!0,Uw:!0,Lw:!0,Fw:!0,Rw:!0,Bw:!0,Dw:!0},A=function(e){u(o,b);var n=l(o);function o(){return i(this,o),n.apply(this,arguments)}return t(o,[{key:"traverseSequence",value:function(e){var t,n=r(e.nestedUnits);try{for(n.s();!(t=n.n()).done;){var o=t.value;this.traverse(o)}}catch(a){n.e(a)}finally{n.f()}}},{key:"traverseGroup",value:function(e){return this.traverse(e.nestedSequence)}},{key:"traverseCommutator",value:function(e){this.traverse(e.A),this.traverse(e.B)}},{key:"traverseConjugate",value:function(e){this.traverse(e.A),this.traverse(e.B)}},{key:"traversePause",value:function(e){}},{key:"traverseNewLine",value:function(e){}},{key:"traverseComment",value:function(e){}}]),o}(),j=function(e){u(n,A);var r=l(n);function n(){return i(this,n),r.apply(this,arguments)}return t(n,[{key:"traverseBlockMove",value:function(e){if(void 0===e.outerLayer)if(void 0===e.innerLayer){if(!g(e.family,[k,x,S]))throw new w("Invalid SiGN plain move family: ".concat(e.family))}else{if(!g(e.family,[k,x]))throw new w("The provided SiGN move family is invalid, or cannot have an inner slice: ".concat(e.family));if(e.innerLayer<=0)throw new w("Cannot have an inner layer of 0 or less.")}else{if(void 0===e.innerLayer)throw new w("A BlockMove with an outer layer must have an inner layer.");if(!g(e.family,[k]))throw new w("The provided SiGN move family is invalid, or cannot have an outer and inner layer: ".concat(e.family));if(e.outerLayer<=0)throw new w("Cannot have an outer layer of 0 or less.");if(e.outerLayer>=e.innerLayer)throw new w("The outer layer must be less than the inner layer.")}}}]),n}();exports.BlockMoveValidator=j;var O=function(e){u(o,b);var n=l(o);function o(){return i(this,o),n.apply(this,arguments)}return t(o,[{key:"traverseSequence",value:function(e){var t,n=r(e.nestedUnits);try{for(n.s();!(t=n.n()).done;){var o=t.value;this.traverse(o)}}catch(a){n.e(a)}finally{n.f()}}},{key:"traverseGroup",value:function(e){throw new w("A flat alg cannot contain a group.")}},{key:"traverseBlockMove",value:function(e){}},{key:"traverseCommutator",value:function(e){throw new w("A flat alg cannot contain a commutator.")}},{key:"traverseConjugate",value:function(e){throw new w("A flat alg cannot contain a conjugate.")}},{key:"traversePause",value:function(e){}},{key:"traverseNewLine",value:function(e){}},{key:"traverseComment",value:function(e){}}]),o}();exports.FlatAlgValidator=O;var M=new j;exports.validateSiGNMoves=M.traverse.bind(M);var L=new O;function C(e){exports.validateSiGNMoves(e),exports.validateFlatAlg(e)}exports.validateFlatAlg=L.traverse.bind(L),exports.validateSiGNAlg=C;
},{"./traversal":"puc1"}],"lDOC":[function(require,module,exports) {
// Generated by PEG.js v0.11.0-master.f69239d, https://pegjs.org/

"use strict";

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  // istanbul ignore next
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    },

    not: function(expectation) {
      return "not " + describeExpectation(expectation.expected);
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};

  var peg$startRuleFunctions = { start: peg$parsestart };
  var peg$startRuleFunction = peg$parsestart;

  var peg$c0 = "'";
  var peg$c1 = "-";
  var peg$c2 = "[";
  var peg$c3 = "]";
  var peg$c4 = "(";
  var peg$c5 = ")";
  var peg$c6 = "//";
  var peg$c7 = ".";

  var peg$r0 = /^[0-9]/;
  var peg$r1 = /^[_A-Za-z]/;
  var peg$r2 = /^[,:]/;
  var peg$r3 = /^[^\n\r]/;
  var peg$r4 = /^[\n\r]/;
  var peg$r5 = /^[ ]/;

  var peg$e0 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e1 = peg$literalExpectation("'", false);
  var peg$e2 = peg$classExpectation(["_", ["A", "Z"], ["a", "z"]], false, false);
  var peg$e3 = peg$literalExpectation("-", false);
  var peg$e4 = peg$literalExpectation("[", false);
  var peg$e5 = peg$classExpectation([",", ":"], false, false);
  var peg$e6 = peg$literalExpectation("]", false);
  var peg$e7 = peg$literalExpectation("(", false);
  var peg$e8 = peg$literalExpectation(")", false);
  var peg$e9 = peg$literalExpectation("//", false);
  var peg$e10 = peg$classExpectation(["\n", "\r"], true, false);
  var peg$e11 = peg$classExpectation(["\n", "\r"], false, false);
  var peg$e12 = peg$literalExpectation(".", false);
  var peg$e13 = peg$classExpectation([" "], false, false);

  var peg$f0 = function(characters) { return parseInt(characters.join(""), 10); };
  var peg$f1 = function(repetition) { return -repetition; };
  var peg$f2 = function() { return -1; };
  var peg$f3 = function(characters) { return characters.join(""); };
  var peg$f4 = function(family) { return {type: "blockMove", family: family}; };
  var peg$f5 = function(innerLayer, family) { return {type: "blockMove", family: family, innerLayer: innerLayer}; };
  var peg$f6 = function(outerLayer, innerLayer, family) { return {type: "blockMove", family: family, outerLayer: outerLayer, innerLayer: innerLayer}; };
  var peg$f7 = function(a, separator, b) { return {"type": separator === "," ? "commutator" : "conjugate", "A": a, "B": b}; };
  var peg$f8 = function(nestedSequence) { return {"type": "group", "nestedSequence": nestedSequence}; };
  var peg$f9 = function(repeatable_unit, amount) { repeatable_unit.amount = amount; return repeatable_unit; };
  var peg$f10 = function(repeatable_unit) { repeatable_unit.amount = 1; return repeatable_unit; };
  var peg$f11 = function(body) { return {type: "comment", comment: body.join("")}; };
  var peg$f12 = function() { return {"type": "newLine"}; };
  var peg$f13 = function() { return {"type": "pause"}; };
  var peg$f14 = function(segment_part, segment) { return [segment_part].concat(segment); };
  var peg$f15 = function(segment_part) { return [segment_part]; };
  var peg$f16 = function(segment, unit_list) { return segment.concat(unit_list); };
  var peg$f17 = function(unit_list) { return {"type": "sequence", "nestedUnits": unit_list}; };
  var peg$f18 = function() { return {"type": "sequence", "nestedUnits": []}; };

  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$expected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return [peg$savedPos, peg$currPos];
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;
  function peg$computeLocation(startPos, endPos) {
    var loc = {};

    if ( peg$VALIDFILENAME ) loc.filename = options.filename;

    var startPosDetails = peg$computePosDetails(startPos);
    loc.start = {
      offset: startPos,
      line: startPosDetails.line,
      column: startPosDetails.column
    };

    var endPosDetails = peg$computePosDetails(endPos);
    loc.end = {
      offset: endPos,
      line: endPosDetails.line,
      column: endPosDetails.column
    };

    return loc;
  }

  function peg$begin() {
    peg$expected.push({ pos: peg$currPos, variants: [] });
  }

  function peg$expect(expected) {
    var top = peg$expected[peg$expected.length - 1];

    if (peg$currPos < top.pos) { return; }

    if (peg$currPos > top.pos) {
      top.pos = peg$currPos;
      top.variants = [];
    }

    top.variants.push(expected);
  }

  function peg$end(invert) {
    var expected = peg$expected.pop();
    var top = peg$expected[peg$expected.length - 1];
    var variants = expected.variants;

    if (top.pos !== expected.pos) { return; }

    if (invert) {
      variants = variants.map(function(e) {
        return e.type === "not" ? e.expected : { type: "not", expected: e };
      });
    }

    Array.prototype.push.apply(top.variants, variants);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$buildError() {
    var expected = peg$expected[0];
    var failPos = expected.pos;

    return peg$buildStructuredError(
      expected.variants,
      failPos < input.length ? input.charAt(failPos) : null,
      failPos < input.length
        ? peg$computeLocation(failPos, failPos + 1)
        : peg$computeLocation(failPos, failPos)
    );
  }

  function peg$parsestart() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$parseSEQUENCE();

    return s0;
  }

  function peg$parseNUMBER() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    rule$expects(peg$e0);
    if (peg$r0.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        rule$expects(peg$e0);
        if (peg$r0.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f0(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseAMOUNT() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseNUMBER();
    if (s1 !== peg$FAILED) {
      rule$expects(peg$e1);
      if (input.charCodeAt(peg$currPos) === 39) {
        s2 = peg$c0;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f1(s1);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseNUMBER();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        rule$expects(peg$e1);
        if (input.charCodeAt(peg$currPos) === 39) {
          s1 = peg$c0;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f2();
        }
        s0 = s1;
      }
    }

    return s0;
  }

  function peg$parseFAMILY() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    rule$expects(peg$e2);
    if (peg$r1.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        rule$expects(peg$e2);
        if (peg$r1.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f3(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseBLOCK_MOVE() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseFAMILY();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f4(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseNUMBER();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseFAMILY();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f5(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseNUMBER();
        if (s1 !== peg$FAILED) {
          rule$expects(peg$e3);
          if (input.charCodeAt(peg$currPos) === 45) {
            s2 = peg$c1;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseNUMBER();
            if (s3 !== peg$FAILED) {
              s4 = peg$parseFAMILY();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f6(s1, s3, s4);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parseREPEATABLE_UNIT() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$parseBLOCK_MOVE();
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      rule$expects(peg$e4);
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c2;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSEQUENCE();
        if (s2 !== peg$FAILED) {
          rule$expects(peg$e5);
          if (peg$r2.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseSEQUENCE();
            if (s4 !== peg$FAILED) {
              rule$expects(peg$e6);
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c3;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f7(s2, s3, s4);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        rule$expects(peg$e7);
        if (input.charCodeAt(peg$currPos) === 40) {
          s1 = peg$c4;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseSEQUENCE();
          if (s2 !== peg$FAILED) {
            rule$expects(peg$e8);
            if (input.charCodeAt(peg$currPos) === 41) {
              s3 = peg$c5;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f8(s2);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
    }

    return s0;
  }

  function peg$parseREPEATED_UNIT() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseREPEATABLE_UNIT();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseAMOUNT();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f9(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseREPEATABLE_UNIT();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f10(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parseCOMMENT() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e9);
    if (input.substr(peg$currPos, 2) === peg$c6) {
      s1 = peg$c6;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      rule$expects(peg$e10);
      if (peg$r3.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        rule$expects(peg$e10);
        if (peg$r3.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f11(s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseANNOTATION() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e11);
    if (peg$r4.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f12();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      rule$expects(peg$e12);
      if (input.charCodeAt(peg$currPos) === 46) {
        s1 = peg$c7;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f13();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$parseCOMMENT();
      }
    }

    return s0;
  }

  function peg$parseSEGMENT_PART() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$parseREPEATED_UNIT();
    if (s0 === peg$FAILED) {
      s0 = peg$parseANNOTATION();
    }

    return s0;
  }

  function peg$parseSEGMENT() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseSEGMENT_PART();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSEGMENT();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f14(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseSEGMENT_PART();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f15(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parseUNIT_LIST() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseSEGMENT();
    if (s1 !== peg$FAILED) {
      s2 = [];
      rule$expects(peg$e13);
      if (peg$r5.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          rule$expects(peg$e13);
          if (peg$r5.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseUNIT_LIST();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f16(s1, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseSEGMENT();
    }

    return s0;
  }

  function peg$parseSEQUENCE() {
    var s0, s1, s2, s3, s4;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    rule$expects(peg$e13);
    if (peg$r5.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      rule$expects(peg$e13);
      if (peg$r5.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
      }
    }
    s2 = peg$parseUNIT_LIST();
    if (s2 !== peg$FAILED) {
      s3 = [];
      rule$expects(peg$e13);
      if (peg$r5.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
      }
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        rule$expects(peg$e13);
        if (peg$r5.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f17(s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      rule$expects(peg$e13);
      if (peg$r5.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        rule$expects(peg$e13);
        if (peg$r5.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s1 = peg$f18();
      s0 = s1;
    }

    return s0;
  }

  peg$begin();
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$expect(peg$endExpectation());
    }

    throw peg$buildError();
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

},{}],"iRGG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parse=void 0;var e=r(require("./parser.pegjs"));function r(e){return e&&e.__esModule?e:{default:e}}var s=e.default.parse;exports.parse=s;
},{"./parser.pegjs":"lDOC"}],"oVNS":[function(require,module,exports) {
"use strict";function r(r,e){var n;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(n=t(r))||e&&r&&"number"==typeof r.length){n&&(r=n);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=r[Symbol.iterator]()},n:function(){var r=n.next();return u=r.done,r},e:function(r){l=!0,i=r},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function t(r,t){if(r){if("string"==typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseSiGN=exports.parse=void 0;var n=require("../json"),o=require("../validation"),a=require("./parser");function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{validators:[]};e.validators=e.validators||[];var o,i=n.fromJSON(a.parse(t)),u=r(e.validators);try{for(u.s();!(o=u.n()).done;){(0,o.value)(i)}}catch(l){u.e(l)}finally{u.f()}return i}function u(r){return i(r,{validators:[o.validateSiGNAlg]})}exports.parse=i,exports.parseSiGN=u;
},{"../json":"Xx1D","../validation":"pJRR","./parser":"iRGG"}],"OiZb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.keyToMove=void 0;var e=require("./algorithm"),o={73:e.BareBlockMove("R"),75:e.BareBlockMove("R",-1),87:e.BareBlockMove("B"),79:e.BareBlockMove("B",-1),83:e.BareBlockMove("D"),76:e.BareBlockMove("D",-1),68:e.BareBlockMove("L"),69:e.BareBlockMove("L",-1),74:e.BareBlockMove("U"),70:e.BareBlockMove("U",-1),72:e.BareBlockMove("F"),71:e.BareBlockMove("F",-1),78:e.BareBlockMove("x",-1),67:e.BareBlockMove("l"),82:e.BareBlockMove("l",-1),85:e.BareBlockMove("r"),77:e.BareBlockMove("r",-1),88:e.BareBlockMove("d",1),188:e.BareBlockMove("d",-1),84:e.BareBlockMove("x"),89:e.BareBlockMove("x"),66:e.BareBlockMove("x",-1),186:e.BareBlockMove("y"),59:e.BareBlockMove("y"),65:e.BareBlockMove("y",-1),80:e.BareBlockMove("z"),81:e.BareBlockMove("z",-1),90:e.BareBlockMove("M",-1),190:e.BareBlockMove("M",-1)};function B(e){return e.altKey||e.ctrlKey?null:o[e.keyCode]||null}exports.keyToMove=B;
},{"./algorithm":"VF9e"}],"eXXl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.algCubingNetLink=exports.getAlgURLParam=exports.deserializeURLParam=exports.serializeURLParam=void 0;var e=require("./parser"),r=require("./traversal");function a(e){var a=r.algToString(e);return a=(a=(a=a.replace(/_/g,"&#95;").replace(/ /g,"_")).replace(/\+/g,"&#2b;")).replace(/-/g,"&#45;").replace(/'/g,"-")}function t(r){var a=r;return a=(a=(a=a.replace(/-/g,"'").replace(/&#45;/g,"-")).replace(/\+/g," ").replace(/&#2b;/g,"+")).replace(/_/g," ").replace(/&#95;/g,"_"),e.parse(a)}function s(e){return t(new URLSearchParams(window.location.search).get(e)||"")}function i(e){var r=new URL("https://alg.cubing.net");if(!e.alg)throw new Error("An alg parameter is required.");if(r.searchParams.set("alg",a(e.alg)),e.setup&&r.searchParams.set("setup",a(e.setup)),e.title&&r.searchParams.set("title",e.title),e.puzzle){if(!["1x1x1","2x2x2","3x3x3","4x4x4","5x5x5","6x6x6","7x7x7","8x8x8","9x9x9","10x10x10","11x11x11","12x12x12","13x13x13","14x14x14","16x16x16","17x17x17"].includes(e.puzzle))throw new Error("Invalid puzzle parameter: ".concat(e.puzzle));r.searchParams.set("puzzle",e.puzzle)}if(e.stage){if(!["full","cross","F2L","LL","OLL","PLL","CLS","ELS","L6E","CMLL","WV","ZBLL","void"].includes(e.stage))throw new Error("Invalid stage parameter: ".concat(e.stage));r.searchParams.set("stage",e.stage)}if(e.view){if(!["editor","playback","fullscreen"].includes(e.view))throw new Error("Invalid view parameter: ".concat(e.view));r.searchParams.set("view",e.view)}if(e.type){if(!["moves","reconstruction","alg","reconstruction-end-with-setup"].includes(e.type))throw new Error("Invalid type parameter: ".concat(e.type));r.searchParams.set("type",e.type)}return r.toString()}exports.serializeURLParam=a,exports.deserializeURLParam=t,exports.getAlgURLParam=s,exports.algCubingNetLink=i;
},{"./parser":"oVNS","./traversal":"puc1"}],"HGIv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("regenerator-runtime/runtime");var e=require("./algorithm");Object.defineProperty(exports,"AlgPart",{enumerable:!0,get:function(){return e.AlgPart}}),Object.defineProperty(exports,"Unit",{enumerable:!0,get:function(){return e.Unit}}),Object.defineProperty(exports,"WithAmount",{enumerable:!0,get:function(){return e.WithAmount}}),Object.defineProperty(exports,"Move",{enumerable:!0,get:function(){return e.Move}}),Object.defineProperty(exports,"Container",{enumerable:!0,get:function(){return e.Container}}),Object.defineProperty(exports,"Annotation",{enumerable:!0,get:function(){return e.Annotation}}),Object.defineProperty(exports,"Sequence",{enumerable:!0,get:function(){return e.Sequence}}),Object.defineProperty(exports,"Group",{enumerable:!0,get:function(){return e.Group}}),Object.defineProperty(exports,"MoveFamily",{enumerable:!0,get:function(){return e.MoveFamily}}),Object.defineProperty(exports,"BlockMove",{enumerable:!0,get:function(){return e.BlockMove}}),Object.defineProperty(exports,"BareBlockMove",{enumerable:!0,get:function(){return e.BareBlockMove}}),Object.defineProperty(exports,"LayerBlockMove",{enumerable:!0,get:function(){return e.LayerBlockMove}}),Object.defineProperty(exports,"RangeBlockMove",{enumerable:!0,get:function(){return e.RangeBlockMove}}),Object.defineProperty(exports,"Commutator",{enumerable:!0,get:function(){return e.Commutator}}),Object.defineProperty(exports,"Conjugate",{enumerable:!0,get:function(){return e.Conjugate}}),Object.defineProperty(exports,"Pause",{enumerable:!0,get:function(){return e.Pause}}),Object.defineProperty(exports,"NewLine",{enumerable:!0,get:function(){return e.NewLine}}),Object.defineProperty(exports,"Comment",{enumerable:!0,get:function(){return e.Comment}});var r=require("./operation");Object.defineProperty(exports,"modifiedBlockMove",{enumerable:!0,get:function(){return r.modifiedBlockMove}}),Object.defineProperty(exports,"experimentalAppendBlockMove",{enumerable:!0,get:function(){return r.experimentalAppendBlockMove}}),Object.defineProperty(exports,"experimentalConcatAlgs",{enumerable:!0,get:function(){return r.experimentalConcatAlgs}});var t=require("./traversal");Object.defineProperty(exports,"TraversalDownUp",{enumerable:!0,get:function(){return t.TraversalDownUp}}),Object.defineProperty(exports,"TraversalUp",{enumerable:!0,get:function(){return t.TraversalUp}}),Object.defineProperty(exports,"invert",{enumerable:!0,get:function(){return t.invert}}),Object.defineProperty(exports,"expand",{enumerable:!0,get:function(){return t.expand}}),Object.defineProperty(exports,"structureEquals",{enumerable:!0,get:function(){return t.structureEquals}}),Object.defineProperty(exports,"coalesceBaseMoves",{enumerable:!0,get:function(){return t.coalesceBaseMoves}}),Object.defineProperty(exports,"algToString",{enumerable:!0,get:function(){return t.algToString}}),Object.defineProperty(exports,"algPartToStringForTesting",{enumerable:!0,get:function(){return t.algPartToStringForTesting}}),Object.defineProperty(exports,"blockMoveToString",{enumerable:!0,get:function(){return t.blockMoveToString}});var n=require("./example");Object.defineProperty(exports,"Example",{enumerable:!0,get:function(){return n.Example}});var o=require("./json");Object.defineProperty(exports,"AlgJSON",{enumerable:!0,get:function(){return o.AlgJSON}}),Object.defineProperty(exports,"fromJSON",{enumerable:!0,get:function(){return o.fromJSON}});var u=require("./parser");Object.defineProperty(exports,"parse",{enumerable:!0,get:function(){return u.parse}});var i=require("./keyboard");Object.defineProperty(exports,"keyToMove",{enumerable:!0,get:function(){return i.keyToMove}});var a=require("./validation");Object.defineProperty(exports,"validateSiGNMoves",{enumerable:!0,get:function(){return a.validateSiGNMoves}}),Object.defineProperty(exports,"validateFlatAlg",{enumerable:!0,get:function(){return a.validateFlatAlg}}),Object.defineProperty(exports,"validateSiGNAlg",{enumerable:!0,get:function(){return a.validateSiGNAlg}}),Object.defineProperty(exports,"ValidationError",{enumerable:!0,get:function(){return a.ValidationError}});var l=require("./url");Object.defineProperty(exports,"serializeURLParam",{enumerable:!0,get:function(){return l.serializeURLParam}}),Object.defineProperty(exports,"deserializeURLParam",{enumerable:!0,get:function(){return l.deserializeURLParam}}),Object.defineProperty(exports,"algCubingNetLink",{enumerable:!0,get:function(){return l.algCubingNetLink}}),Object.defineProperty(exports,"getAlgURLParam",{enumerable:!0,get:function(){return l.getAlgURLParam}});var p=require("./debug");Object.defineProperty(exports,"setAlgPartTypeMismatchReportingLevel",{enumerable:!0,get:function(){return p.setAlgPartTypeMismatchReportingLevel}});
},{"regenerator-runtime/runtime":"VuXv","./algorithm":"VF9e","./operation":"PKDD","./traversal":"puc1","./example":"urGz","./json":"Xx1D","./parser":"oVNS","./keyboard":"OiZb","./validation":"pJRR","./url":"eXXl","./debug":"WbnE"}],"u7KL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
},{}],"JWJo":[function(require,module,exports) {
"use strict";function r(r,t,n){var e={};for(var i in r.orbits){for(var o=r.orbits[i],a=t[i],s=n[i],u=new Array(o.numPieces),f=new Array(o.numPieces),m=0;m<o.numPieces;m++)f[m]=(a.orientation[s.permutation[m]]+s.orientation[m])%o.orientations,u[m]=a.permutation[s.permutation[m]];e[i]={permutation:u,orientation:f}}return e}function t(i,o,a){if(a<0)return t(i,e(i,o),-a);if(0===a)return n(i);if(1===a)return o;var s=t(i,o,Math.floor(a/2)),u=r(i,s,s);return a%2==0?u:r(i,o,u)}function n(r){var t={};for(var n in r.orbits){for(var e=r.orbits[n],i=new Array(e.numPieces),o=new Array(e.numPieces),a=0;a<e.numPieces;a++)i[a]=a,o[a]=0;var s={permutation:i,orientation:o};t[n]=s}return t}function e(r,t){var n={};for(var e in r.orbits){for(var i=r.orbits[e],o=t[e],a=new Array(i.numPieces),s=new Array(i.numPieces),u=0;u<i.numPieces;u++){var f=o.permutation[u];a[f]=u,s[f]=(i.orientations-o.orientation[u]+i.orientations)%i.orientations}n[e]={permutation:a,orientation:s}}return n}function i(r,t){return t?i(t,r%t):r}function o(r,t){var n=1;for(var e in r.orbits)for(var o=r.orbits[e],a=t[e],s=new Array(o.numPieces),u=0;u<o.numPieces;u++)if(!s[u]){for(var f=u,m=0,p=0;s[f]=!0,m+=a.orientation[f],p+=1,(f=a.permutation[f])!==u;);0!==m&&(p=p*o.orientations/i(o.orientations,m)),n=n*p/i(n,p)}return n}function a(r,t,n){for(var e in r.orbits)for(var i=r.orbits[e],o=t[e],a=n[e],s=0;s<i.numPieces;s++){if(o.orientation[s]!==a.orientation[s])return!1;if(o.permutation[s]!==a.permutation[s])return!1}return!0}function s(t,n,e){return a(t,r(t,t.startPieces,n),r(t,t.startPieces,e))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.EquivalentStates=exports.EquivalentTransformations=exports.Order=exports.Invert=exports.IdentityTransformation=exports.Multiply=exports.Combine=void 0,exports.Combine=r,exports.Multiply=t,exports.IdentityTransformation=n,exports.Invert=e,exports.Order=o,exports.EquivalentTransformations=a,exports.EquivalentStates=s;
},{}],"NDbL":[function(require,module,exports) {
"use strict";function e(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw o}}}}function r(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,r,t){return r&&i(e.prototype,r),t&&i(e,t),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.MoveExpander=void 0;var o=require("./transformations"),s=require("../alg"),u=function(){function r(){n(this,r),this.gripStash={},this.moveStash={},this.regrip={}}return a(r,[{key:"setFaceNames",value:function(e){this.facenames=e}},{key:"addGrip",value:function(e,r,t,n){for(var i=[],a=this.gripStash,s=n.moves,u=1;u<=t;u++){var f=1===u&&s[e]||s[""+u+e];if(f||(f=u===t&&s[r]||s[""+(t+1-u)+r])&&(f=o.Invert(n,f)),!f)throw new Error("Could not expand axis "+e+" to "+r+" because we are missing a move for slice "+u);i.push(f)}a[e]=i;var l=i.map(function(e){return o.Invert(n,e)});l.reverse(),a[r]=l}},{key:"expandSlicesByName",value:function(e,r){var t=this.moveStash[e];if(t)return t;try{var n=s.parse(e);if(1!==n.nestedUnits.length)return;var i=n.nestedUnits[0];return this.expandSlices(e,i,r)}catch(a){return}}},{key:"unswizzle",value:function(e){if(this.regrip[e])return this.regrip[e];if(!this.facenames)return e;e.length>1&&e[0]<="Z"&&("w"===e[e.length-1]||"v"===e[e.length-1])&&(e=e.substr(0,e.length-1));var r=this.splitByFaceNames(e,this.facenames);if(r)for(var t=0;t<r.length;t++){for(var n="",i=0;i<r.length;i++)n+=r[(t+i)%r.length];if(this.gripStash[n])return this.regrip[e]=n,n}return e}},{key:"expandSlices",value:function(e,r,t){var n=this.moveStash[e];if(n)return n;var i=this.gripStash,a=r.family,s=a,u=!1,f=!1;/[a-z]/.test(a)&&(u=!0,s=a.toUpperCase()),a.length>1&&a.endsWith("w")&&(u=!0,s=a.substring(0,a.length-1)),a.length>1&&a.endsWith("v")&&(f=!0,s=a.substring(0,a.length-1));var l=i[s];if(!l&&this.facenames&&(l=i[s=this.unswizzle(s)]),l){var h=r.outerLayer,c=r.innerLayer;if(void 0===c){if(void 0!==h)return;h=1,c=u?2:1,f&&(c=i[s].length)}else void 0===h&&(h=u?1:c);if(!(c<h||h>i[s].length)){for(var v=l[h-1],p=h+1;p<=c;p++)v=o.Combine(t,v,l[p-1]);return this.moveStash[e]=v,v}}}},{key:"splitByFaceNames",value:function(r,t){var n=[],i=0;for(r=r.toUpperCase();i<r.length;){var a,o=!1,s=e(t);try{for(s.s();!(a=s.n()).done;){var u=a.value;if(r.substr(i).startsWith(u)){n.push(u),i+=u.length,o=!0;break}}}catch(f){s.e(f)}finally{s.f()}if(!o)return}return n}}]),r}();exports.MoveExpander=u;
},{"./transformations":"JWJo","../alg":"HGIv"}],"bKjo":[function(require,module,exports) {
"use strict";function e(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw a}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.KPuzzle=exports.stateForBlockMove=void 0;var a=require("../alg"),s=require("./move_expander"),u=require("./transformations");function l(e,t){var n=a.blockMoveToString(new a.BlockMove(t.outerLayer,t.innerLayer,t.family,1)),r=e.moves[n];if(r||(r=new f(e).expandSlices(n,t)),!r)throw new Error("Unknown move family: ".concat(t.family));return u.Multiply(e,r,t.amount)}exports.stateForBlockMove=l;var f=function(){function t(e){r(this,t),this.definition=e,this.state=u.IdentityTransformation(e)}return o(t,[{key:"reset",value:function(){this.state=u.IdentityTransformation(this.definition)}},{key:"serialize",value:function(){var e="";for(var t in this.definition.orbits)e+=t+"\n",e+=this.state[t].permutation.join(" ")+"\n",e+=this.state[t].orientation.join(" ")+"\n";return e=e.slice(0,e.length-1)}},{key:"applyBlockMove",value:function(e){this.state=u.Combine(this.definition,this.state,l(this.definition,e))}},{key:"applyAlg",value:function(t){var n,r=e(a.expand(t).nestedUnits);try{for(r.s();!(n=r.n()).done;){var i=n.value;this.applyBlockMove(i)}}catch(o){r.e(o)}finally{r.f()}}},{key:"applyMove",value:function(e){var t=this.definition.moves[e];if(t||(t=this.expandSlicesByName(e)),!t)throw new Error("Unknown move: ".concat(e));return this.state=u.Combine(this.definition,this.state,t),this}},{key:"getMoveExpander",value:function(e){var t=this.definition.moveExpander;return e&&!t&&(t=new s.MoveExpander,this.definition.moveExpander=t),t}},{key:"setFaceNames",value:function(e){var t=this.getMoveExpander(!0);t&&t.setFaceNames(e)}},{key:"addGrip",value:function(e,t,n){var r=this.getMoveExpander(!0);return r?r.addGrip(e,t,n,this.definition):void 0}},{key:"expandSlices",value:function(e,t){var n=this.getMoveExpander(!1);return n?n.expandSlices(e,t,this.definition):void 0}},{key:"expandSlicesByName",value:function(e){var t=this.getMoveExpander(!1);return t?t.expandSlicesByName(e,this.definition):void 0}},{key:"unswizzle",value:function(e){var t=this.getMoveExpander(!0);return t?t.unswizzle(e):e}}]),t}();exports.KPuzzle=f;
},{"../alg":"HGIv","./move_expander":"NDbL","./transformations":"JWJo"}],"ga1Z":[function(require,module,exports) {
"use strict";function e(e){return r(e)||t(e)||s(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function r(e){if(Array.isArray(e))return a(e)}function o(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=s(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw a}}}}function s(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,n,t){return n&&u(e.prototype,n),t&&u(e,t),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.CanonicalSequenceIterator=exports.SearchSequence=exports.Canonicalize=void 0;var h=require("./transformations"),f=require("../alg"),v=function(){function e(n,t){i(this,e),this.base=n,this.twist=t}return c(e,[{key:"getTransformation",value:function(e){return e.transforms[this.base][this.twist]}},{key:"asString",value:function(e){for(var n=e.moveorder[this.base],t=this.twist%n;t+t>n;)t-=n;for(;t+t<=-n;)t+=n;var r=e.movenames[this.base];if(1===t)return r;if(-1===t)return r+"'";if(t>0)return r+t;if(t<0)return r+-t+"'";throw new Error("Stringifying null move?")}}]),e}(),m=function(){function e(n){i(this,e),this.def=n,this.commutes=[],this.moveorder=[],this.movenames=[],this.transforms=[],this.moveindex={};var t=n.moves,r=h.IdentityTransformation(n);for(var o in t)this.moveindex[o]=this.movenames.length,this.movenames.push(o),this.transforms.push([r,t[o]]);this.baseMoveCount=this.movenames.length;for(var s=0;s<this.baseMoveCount;s++){this.commutes.push([]);for(var a=this.transforms[s][1],u=0;u<this.baseMoveCount;u++){var c=this.transforms[u][1],f=h.Combine(n,a,c),v=h.Combine(n,c,a);this.commutes[s][u]=h.EquivalentTransformations(n,f,v)}}for(var m=0;m<this.baseMoveCount;m++){for(var l=this.transforms[m][1],b=l,p=1,d=2;!h.EquivalentTransformations(n,r,b);d++)p++,b=h.Combine(n,b,l),this.transforms[m].push(b);this.moveorder[m]=p}}return c(e,[{key:"blockMoveToInternalMove",value:function(e){var n=f.modifiedBlockMove(e,{amount:1}),t=f.blockMoveToString(n);if(!(t in this.def.moves))throw new Error("! move "+t+" not in def.");var r=this.moveindex[t],o=this.moveorder[r],s=e.amount%o;return s<0&&(s=(s+o)%o),new v(r,s)}},{key:"sequenceToSearchSequence",value:function(e,n){var t,r=new l(this,n),s=o(e.nestedUnits);try{for(s.s();!(t=s.n()).done;){var a=t.value;r.appendOneMove(this.blockMoveToInternalMove(a))}}catch(i){s.e(i)}finally{s.f()}return r}},{key:"mergeSequenceToSearchSequence",value:function(e,n){var t,r=new l(this,n),s=o(e.nestedUnits);try{for(s.s();!(t=s.n()).done;){var a=t.value;r.mergeOneMove(this.blockMoveToInternalMove(a))}}catch(i){s.e(i)}finally{s.f()}return r}}]),e}();exports.Canonicalize=m;var l=function(){function n(e,t){i(this,n),this.canon=e,this.moveseq=[],this.trans=t||h.IdentityTransformation(e.def)}return c(n,[{key:"clone",value:function(){var t=new n(this.canon,this.trans);return t.moveseq=e(this.moveseq),t}},{key:"mergeOneMove",value:function(e){var n=this.onlyMergeOneMove(e);return this.trans=h.Combine(this.canon.def,this.trans,e.getTransformation(this.canon)),n}},{key:"appendOneMove",value:function(e){return this.moveseq.push(e),this.trans=h.Combine(this.canon.def,this.trans,e.getTransformation(this.canon)),1}},{key:"popMove",value:function(){var e=this.moveseq.pop();if(!e)throw new Error("Can't pop an empty sequence");return this.trans=h.Combine(this.canon.def,this.trans,this.canon.transforms[e.base][this.canon.moveorder[e.base]-e.twist]),1}},{key:"oneMoreTwist",value:function(){var e=this.moveseq[this.moveseq.length-1];return this.trans=h.Combine(this.canon.def,this.trans,this.canon.transforms[e.base][1]),this.moveseq[this.moveseq.length-1]=new v(e.base,e.twist+1),0}},{key:"onlyMergeOneMove",value:function(e){for(var n=this.moveseq.length-1;n>=0;){if(e.base===this.moveseq[n].base){var t=this.canon.moveorder[e.base],r=(e.twist+this.moveseq[n].twist)%t;return r<0&&(r=(r+t)%t),0===r?(this.moveseq.splice(n,1),-1):(this.moveseq[n]=new v(e.base,r),0)}if(!this.canon.commutes[e.base][this.moveseq[n].base])break;n--}return this.moveseq.push(e),1}},{key:"mergeSequence",value:function(e){for(var n=this.moveseq.length,t=0;t<e.moveseq.length;t++){var r=e.moveseq[t];n+=this.onlyMergeOneMove(r)}return this.trans=h.Combine(this.canon.def,this.trans,e.trans),n}},{key:"getSequenceAsString",value:function(){var e,n=[],t=o(this.moveseq);try{for(t.s();!(e=t.n()).done;){var r=e.value;n.push(r.asString(this.canon))}}catch(s){t.e(s)}finally{t.f()}return n.join(" ")}}]),n}();exports.SearchSequence=l;var b=function(){function e(n,t){i(this,e),this.canon=n,this.ss=new l(n,t),this.targetLength=0}return c(e,[{key:"nextState",value:function(e,n){var t,r=[],s=o(n);try{for(s.s();!(t=s.n()).done;){var a=t.value;if(a===e)return null;if(this.canon.commutes[a][e]){if(e<a)return null;r.push(a)}else;}}catch(i){s.e(i)}finally{s.f()}return r}},{key:"genSequence",value:regeneratorRuntime.mark(function e(n,t){var r,o,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n){e.next=5;break}return e.next=3,this.ss;case 3:e.next=21;break;case 5:r=0;case 6:if(!(r<this.canon.baseMoveCount)){e.next=21;break}if(!(o=this.nextState(r,t))){e.next=18;break}o.push(r),s=1;case 11:if(!(s<this.canon.moveorder[r])){e.next=18;break}return this.ss.appendOneMove(new v(r,s)),e.delegateYield(this.genSequence(n-1,o),"t0",14);case 14:this.ss.popMove();case 15:s++,e.next=11;break;case 18:r++,e.next=6;break;case 21:return e.abrupt("return",null);case 22:case"end":return e.stop()}},e,this)})},{key:"generator",value:regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:return e.delegateYield(this.genSequence(n,[]),"t0",2);case 2:n++,e.next=1;break;case 5:case"end":return e.stop()}},e,this)})},{key:"genSequenceTree",value:regeneratorRuntime.mark(function e(n){var t,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ss;case 2:if(!(e.sent>0)){e.next=5;break}return e.abrupt("return",null);case 5:t=0;case 6:if(!(t<this.canon.baseMoveCount)){e.next=21;break}if(!(r=this.nextState(t,n))){e.next=18;break}r.push(t),o=1;case 11:if(!(o<this.canon.moveorder[t])){e.next=18;break}return this.ss.appendOneMove(new v(t,o)),e.delegateYield(this.genSequenceTree(r),"t0",14);case 14:this.ss.popMove();case 15:o++,e.next=11;break;case 18:t++,e.next=6;break;case 21:return e.abrupt("return",null);case 22:case"end":return e.stop()}},e,this)})}]),e}();exports.CanonicalSequenceIterator=b;
},{"./transformations":"JWJo","../alg":"HGIv"}],"hVES":[function(require,module,exports) {
module.exports={name:"2x2x2",orbits:{CORNER:{numPieces:8,orientations:3}},startPieces:{CORNER:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{U:{CORNER:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},y:{CORNER:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}},x:{CORNER:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},L:{CORNER:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]}},F:{CORNER:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]}},R:{CORNER:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]}},B:{CORNER:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]}},D:{CORNER:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}},z:{CORNER:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]}}}};
},{}],"kD3R":[function(require,module,exports) {
module.exports='<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"\n       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 370" preserveAspectRatio="xMidYMid meet">\n  <title>2x2x2</title>\n  <defs>\n    <g id="sticker">\n        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />\n    </g>\n  </defs>\n  <g id="puzzle" transform="translate(5, 5) scale(60)">\n    <use id="CORNER-l0-o0" xlink:href="#sticker" transform="translate(3, 1)" style="fill: white"/>\n    <use id="CORNER-l0-o1" xlink:href="#sticker" transform="translate(4, 2)" style="fill: red"/>\n    <use id="CORNER-l0-o2" xlink:href="#sticker" transform="translate(3, 2)" style="fill: limegreen"/>\n\n    <use id="CORNER-l1-o0" xlink:href="#sticker" transform="translate(3, 0)" style="fill: white"/>\n    <use id="CORNER-l1-o1" xlink:href="#sticker" transform="translate(6, 2)" style="fill: blue"/>\n    <use id="CORNER-l1-o2" xlink:href="#sticker" transform="translate(5, 2)" style="fill: red"/>\n\n    <use id="CORNER-l2-o0" xlink:href="#sticker" transform="translate(2, 0)" style="fill: white"/>\n    <use id="CORNER-l2-o1" xlink:href="#sticker" transform="translate(0, 2)" style="fill: orange"/>\n    <use id="CORNER-l2-o2" xlink:href="#sticker" transform="translate(7, 2)" style="fill: blue"/>\n\n    <use id="CORNER-l3-o0" xlink:href="#sticker" transform="translate(2, 1)" style="fill: white"/>\n    <use id="CORNER-l3-o1" xlink:href="#sticker" transform="translate(2, 2)" style="fill: limegreen"/>\n    <use id="CORNER-l3-o2" xlink:href="#sticker" transform="translate(1, 2)" style="fill: orange"/>\n\n    <use id="CORNER-l4-o0" xlink:href="#sticker" transform="translate(3, 4)" style="fill: yellow"/>\n    <use id="CORNER-l4-o1" xlink:href="#sticker" transform="translate(3, 3)" style="fill: limegreen"/>\n    <use id="CORNER-l4-o2" xlink:href="#sticker" transform="translate(4, 3)" style="fill: red"/>\n\n    <use id="CORNER-l5-o0" xlink:href="#sticker" transform="translate(2, 4)" style="fill: yellow"/>\n    <use id="CORNER-l5-o1" xlink:href="#sticker" transform="translate(1, 3)" style="fill: orange"/>\n    <use id="CORNER-l5-o2" xlink:href="#sticker" transform="translate(2, 3)" style="fill: limegreen"/>\n\n    <use id="CORNER-l6-o0" xlink:href="#sticker" transform="translate(2, 5)" style="fill: yellow"/>\n    <use id="CORNER-l6-o1" xlink:href="#sticker" transform="translate(7, 3)" style="fill: blue"/>\n    <use id="CORNER-l6-o2" xlink:href="#sticker" transform="translate(0, 3)"  style="fill: orange"/>\n\n    <use id="CORNER-l7-o0" xlink:href="#sticker" transform="translate(3, 5)" style="fill: yellow"/>\n    <use id="CORNER-l7-o1" xlink:href="#sticker" transform="translate(5, 3)" style="fill: red"/>\n    <use id="CORNER-l7-o2" xlink:href="#sticker" transform="translate(6, 3)" style="fill: blue"/>\n  </g>\n\n</svg>\n';
},{}],"dH9G":[function(require,module,exports) {
module.exports={name:"3x3x3",orbits:{EDGE:{numPieces:12,orientations:2},CORNER:{numPieces:8,orientations:3},CENTER:{numPieces:6,orientations:4}},startPieces:{EDGE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNER:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTER:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},moves:{U:{EDGE:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNER:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTER:{permutation:[0,1,2,3,4,5],orientation:[1,0,0,0,0,0]}},y:{EDGE:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNER:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]},CENTER:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,3]}},x:{EDGE:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNER:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]},CENTER:{permutation:[2,1,5,3,0,4],orientation:[0,3,0,1,2,2]}},L:{EDGE:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNER:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTER:{permutation:[0,1,2,3,4,5],orientation:[0,1,0,0,0,0]}},F:{EDGE:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientation:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNER:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTER:{permutation:[0,1,2,3,4,5],orientation:[0,0,1,0,0,0]}},R:{EDGE:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNER:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTER:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,1,0,0]}},B:{EDGE:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientation:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNER:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTER:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,1,0]}},D:{EDGE:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNER:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTER:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,1]}},z:{EDGE:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNER:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]},CENTER:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,3,1]}},M:{EDGE:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNER:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTER:{permutation:[4,1,0,3,5,2],orientation:[2,0,0,0,2,0]}},E:{EDGE:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNER:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTER:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,0]}},S:{EDGE:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientation:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNER:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTER:{permutation:[1,5,2,0,4,3],orientation:[1,1,0,1,0,1]}},u:{EDGE:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNER:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTER:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,0]}},l:{EDGE:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNER:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTER:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,0,2,0]}},f:{EDGE:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientation:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNER:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTER:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,0,1]}},r:{EDGE:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNER:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTER:{permutation:[2,1,5,3,0,4],orientation:[0,0,0,1,2,2]}},b:{EDGE:{permutation:[8,5,2,1,9,7,6,3,4,0,10,11],orientation:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNER:{permutation:[4,1,2,0,5,3,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTER:{permutation:[3,0,2,5,4,1],orientation:[3,3,3,3,0,3]}},d:{EDGE:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNER:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTER:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,1]}}}};
},{}],"KHIA":[function(require,module,exports) {
module.exports='<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"\n       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 370" preserveAspectRatio="xMidYMid meet">\n  <title>3x3x3</title>\n  <defs>\n    <g id="sticker">\n        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />\n    </g>\n  </defs>\n\n\x3c!--        0 1 2 3 4 5 6 7 8 9 10 11  --\x3e\n\x3c!--        | | | | | | | | | | | |<-  --\x3e\n\x3c!--    0 -       . . .                --\x3e\n\x3c!--    1 -       . . .                --\x3e\n\x3c!--    2 -       . . .                --\x3e\n\x3c!--    3 - . . . . . . . . . . . .    --\x3e\n\x3c!--    4 - . . . . . . . . . . . .    --\x3e\n\x3c!--    5 - . . . . . . . . . . . .    --\x3e\n\x3c!--    6 -       . . .                --\x3e\n\x3c!--    7 -       . . .                --\x3e\n\x3c!--    8 -       . . .                --\x3e\n\n  <g id="puzzle" transform="translate(5, 5) scale(40)">\n    \x3c!-- CORNER --\x3e\n    <use id="CORNER-l0-o0" xlink:href="#sticker" transform="translate(5,  2)" style="fill: white"/>\n    <use id="CORNER-l0-o1" xlink:href="#sticker" transform="translate(6,  3)" style="fill: red"/>\n    <use id="CORNER-l0-o2" xlink:href="#sticker" transform="translate(5,  3)" style="fill: limegreen"/>\n\n    <use id="CORNER-l1-o0" xlink:href="#sticker" transform="translate(5,  0)" style="fill: white"/>\n    <use id="CORNER-l1-o1" xlink:href="#sticker" transform="translate(9,  3)" style="fill: blue"/>\n    <use id="CORNER-l1-o2" xlink:href="#sticker" transform="translate(8,  3)" style="fill: red"/>\n\n    <use id="CORNER-l2-o0" xlink:href="#sticker" transform="translate(3,  0)" style="fill: white"/>\n    <use id="CORNER-l2-o1" xlink:href="#sticker" transform="translate(0,  3)" style="fill: orange"/>\n    <use id="CORNER-l2-o2" xlink:href="#sticker" transform="translate(11, 3)" style="fill: blue"/>\n\n    <use id="CORNER-l3-o0" xlink:href="#sticker" transform="translate(3,  2)" style="fill: white"/>\n    <use id="CORNER-l3-o1" xlink:href="#sticker" transform="translate(3,  3)" style="fill: limegreen"/>\n    <use id="CORNER-l3-o2" xlink:href="#sticker" transform="translate(2,  3)" style="fill: orange"/>\n\n    <use id="CORNER-l4-o0" xlink:href="#sticker" transform="translate(5,  6)" style="fill: yellow"/>\n    <use id="CORNER-l4-o1" xlink:href="#sticker" transform="translate(5,  5)" style="fill: limegreen"/>\n    <use id="CORNER-l4-o2" xlink:href="#sticker" transform="translate(6,  5)" style="fill: red"/>\n\n    <use id="CORNER-l5-o0" xlink:href="#sticker" transform="translate(3,  6)" style="fill: yellow"/>\n    <use id="CORNER-l5-o1" xlink:href="#sticker" transform="translate(2,  5)" style="fill: orange"/>\n    <use id="CORNER-l5-o2" xlink:href="#sticker" transform="translate(3,  5)" style="fill: limegreen"/>\n\n    <use id="CORNER-l6-o0" xlink:href="#sticker" transform="translate(3,  8)" style="fill: yellow"/>\n    <use id="CORNER-l6-o1" xlink:href="#sticker" transform="translate(11, 5)" style="fill: blue"/>\n    <use id="CORNER-l6-o2" xlink:href="#sticker" transform="translate(0, 5)"  style="fill: orange"/>\n\n    <use id="CORNER-l7-o0" xlink:href="#sticker" transform="translate(5,  8)" style="fill: yellow"/>\n    <use id="CORNER-l7-o1" xlink:href="#sticker" transform="translate(8,  5)" style="fill: red"/>\n    <use id="CORNER-l7-o2" xlink:href="#sticker" transform="translate(9,  5)" style="fill: blue"/>\n\n    \x3c!-- EDGE --\x3e\n    <use id="EDGE-l0-o0"  xlink:href="#sticker" transform="translate(4,  2)" style="fill: white"/>\n    <use id="EDGE-l0-o1"  xlink:href="#sticker" transform="translate(4,  3)" style="fill: limegreen"/>\n\n    <use id="EDGE-l1-o0"  xlink:href="#sticker" transform="translate(5,  1)" style="fill: white"/>\n    <use id="EDGE-l1-o1"  xlink:href="#sticker" transform="translate(7,  3)" style="fill: red"/>\n\n    <use id="EDGE-l2-o0"  xlink:href="#sticker" transform="translate(4,  0)" style="fill: white"/>\n    <use id="EDGE-l2-o1"  xlink:href="#sticker" transform="translate(10, 3)" style="fill: blue"/>\n\n    <use id="EDGE-l3-o0"  xlink:href="#sticker" transform="translate(3,  1)" style="fill: white"/>\n    <use id="EDGE-l3-o1"  xlink:href="#sticker" transform="translate(1,  3)" style="fill: orange"/>\n\n    <use id="EDGE-l4-o0"  xlink:href="#sticker" transform="translate(4,  6)" style="fill: yellow"/>\n    <use id="EDGE-l4-o1"  xlink:href="#sticker" transform="translate(4,  5)" style="fill: limegreen"/>\n\n    <use id="EDGE-l5-o0" xlink:href="#sticker" transform="translate(5,  7)" style="fill: yellow"/>\n    <use id="EDGE-l5-o1" xlink:href="#sticker" transform="translate(7,  5)" style="fill: red"/>\n\n    <use id="EDGE-l6-o0" xlink:href="#sticker" transform="translate(4,  8)" style="fill: yellow"/>\n    <use id="EDGE-l6-o1" xlink:href="#sticker" transform="translate(10, 5)" style="fill: blue"/>\n\n    <use id="EDGE-l7-o0"  xlink:href="#sticker" transform="translate(3,  7)" style="fill: yellow"/>\n    <use id="EDGE-l7-o1"  xlink:href="#sticker" transform="translate(1,  5)" style="fill: orange"/>\n\n    <use id="EDGE-l8-o0"  xlink:href="#sticker" transform="translate(5,  4)" style="fill: limegreen"/>\n    <use id="EDGE-l8-o1"  xlink:href="#sticker" transform="translate(6,  4)" style="fill: red"/>\n\n    <use id="EDGE-l9-o0"  xlink:href="#sticker" transform="translate(3,  4)" style="fill: limegreen"/>\n    <use id="EDGE-l9-o1"  xlink:href="#sticker" transform="translate(2,  4)" style="fill: orange"/>\n\n    <use id="EDGE-l10-o0" xlink:href="#sticker" transform="translate(9,  4)" style="fill: blue"/>\n    <use id="EDGE-l10-o1" xlink:href="#sticker" transform="translate(8,  4)" style="fill: red"/>\n\n    <use id="EDGE-l11-o0" xlink:href="#sticker" transform="translate(11, 4)" style="fill: blue"/>\n    <use id="EDGE-l11-o1" xlink:href="#sticker" transform="translate(0,  4)" style="fill: orange"/>\n\n    \x3c!-- CENTER --\x3e\n    \x3c!-- TODO: Allow the same sticker to be reused for multiple orientations --\x3e\n    <use id="CENTER-l0-o0" xlink:href="#sticker" transform="translate(4,  1)" style="fill: white"/>\n    <use id="CENTER-l0-o1" xlink:href="#sticker" transform="translate(4,  1)" style="fill: white"/>\n    <use id="CENTER-l0-o2" xlink:href="#sticker" transform="translate(4,  1)" style="fill: white"/>\n    <use id="CENTER-l0-o3" xlink:href="#sticker" transform="translate(4,  1)" style="fill: white"/>\n\n    <use id="CENTER-l1-o0" xlink:href="#sticker" transform="translate(1,  4)" style="fill: orange"/>\n    <use id="CENTER-l1-o1" xlink:href="#sticker" transform="translate(1,  4)" style="fill: orange"/>\n    <use id="CENTER-l1-o2" xlink:href="#sticker" transform="translate(1,  4)" style="fill: orange"/>\n    <use id="CENTER-l1-o3" xlink:href="#sticker" transform="translate(1,  4)" style="fill: orange"/>\n\n    <use id="CENTER-l2-o0" xlink:href="#sticker" transform="translate(4,  4)" style="fill: limegreen"/>\n    <use id="CENTER-l2-o1" xlink:href="#sticker" transform="translate(4,  4)" style="fill: limegreen"/>\n    <use id="CENTER-l2-o2" xlink:href="#sticker" transform="translate(4,  4)" style="fill: limegreen"/>\n    <use id="CENTER-l2-o3" xlink:href="#sticker" transform="translate(4,  4)" style="fill: limegreen"/>\n\n    <use id="CENTER-l3-o0" xlink:href="#sticker" transform="translate(7,  4)" style="fill: red"/>\n    <use id="CENTER-l3-o1" xlink:href="#sticker" transform="translate(7,  4)" style="fill: red"/>\n    <use id="CENTER-l3-o2" xlink:href="#sticker" transform="translate(7,  4)" style="fill: red"/>\n    <use id="CENTER-l3-o3" xlink:href="#sticker" transform="translate(7,  4)" style="fill: red"/>\n\n    <use id="CENTER-l4-o0" xlink:href="#sticker" transform="translate(10, 4)" style="fill: blue"/>\n    <use id="CENTER-l4-o1" xlink:href="#sticker" transform="translate(10, 4)" style="fill: blue"/>\n    <use id="CENTER-l4-o2" xlink:href="#sticker" transform="translate(10, 4)" style="fill: blue"/>\n    <use id="CENTER-l4-o3" xlink:href="#sticker" transform="translate(10, 4)" style="fill: blue"/>\n\n    <use id="CENTER-l5-o0" xlink:href="#sticker" transform="translate(4,  7)" style="fill: yellow"/>\n    <use id="CENTER-l5-o1" xlink:href="#sticker" transform="translate(4,  7)" style="fill: yellow"/>\n    <use id="CENTER-l5-o2" xlink:href="#sticker" transform="translate(4,  7)" style="fill: yellow"/>\n    <use id="CENTER-l5-o3" xlink:href="#sticker" transform="translate(4,  7)" style="fill: yellow"/>\n  </g>\n\n</svg>\n';
},{}],"Qybl":[function(require,module,exports) {
module.exports={name:"Pyraminx",orbits:{CENTER:{numPieces:4,orientations:3},TIP:{numPieces:4,orientations:3},EDGE:{numPieces:6,orientations:2}},startPieces:{CENTER:{permutation:[0,1,2,3],orientation:[0,0,0,0]},TIP:{permutation:[0,1,2,3],orientation:[0,0,0,0]},EDGE:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},moves:{U:{CENTER:{permutation:[0,1,2,3],orientation:[1,0,0,0]},TIP:{permutation:[0,1,2,3],orientation:[1,0,0,0]},EDGE:{permutation:[1,2,0,3,4,5],orientation:[1,0,1,0,0,0]}},L:{CENTER:{permutation:[0,1,2,3],orientation:[0,1,0,0]},TIP:{permutation:[0,1,2,3],orientation:[0,1,0,0]},EDGE:{permutation:[5,1,2,0,4,3],orientation:[1,0,0,0,0,1]}},R:{CENTER:{permutation:[0,1,2,3],orientation:[0,0,1,0]},TIP:{permutation:[0,1,2,3],orientation:[0,0,1,0]},EDGE:{permutation:[0,3,2,4,1,5],orientation:[0,0,0,1,1,0]}},B:{CENTER:{permutation:[0,1,2,3],orientation:[0,0,0,1]},TIP:{permutation:[0,1,2,3],orientation:[0,0,0,1]},EDGE:{permutation:[0,1,4,3,5,2],orientation:[0,0,0,0,1,1]}},u:{CENTER:{permutation:[0,1,2,3],orientation:[0,0,0,0]},TIP:{permutation:[0,1,2,3],orientation:[1,0,0,0]},EDGE:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},l:{CENTER:{permutation:[0,1,2,3],orientation:[0,0,0,0]},TIP:{permutation:[0,1,2,3],orientation:[0,1,0,0]},EDGE:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},r:{CENTER:{permutation:[0,1,2,3],orientation:[0,0,0,0]},TIP:{permutation:[0,1,2,3],orientation:[0,0,1,0]},EDGE:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},b:{CENTER:{permutation:[0,1,2,3],orientation:[0,0,0,0]},TIP:{permutation:[0,1,2,3],orientation:[0,0,0,1]},EDGE:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}}}};
},{}],"Lrf2":[function(require,module,exports) {
module.exports='<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"\n       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 420.69219392" preserveAspectRatio="xMidYMid meet">\n  <defs>\n  </defs>\n  <title>2x2x2</title>\n  <defs>\n    <g id="stickerA" transform="scale(1, 0.577350269)">\n      <path\n         d="m 0,1.732050808 1,-1.732050808 1,1.732050808 z"\n         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"\n      />\n    </g>\n    <g id="stickerV" transform="scale(1, 0.577350269)">\n      <path\n         d="m 0,0 1,1.732050808 1,-1.732050808 z"\n         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"\n      />\n    </g>\n  </defs>\n\n\x3c!--        0 1 2 3 4 5 6 7 8 9 10   --\x3e\n\x3c!--        | | | | | | | | | | |    --\x3e\n\x3c!--    0 - L L L L L F R R R R R    --\x3e\n\x3c!--    1 -   L L L F F F R R R      --\x3e\n\x3c!--    2 -     L F F F F F R        --\x3e\n\x3c!--    3 -       D D D D D          --\x3e\n\x3c!--    4 -         D D D            --\x3e\n\x3c!--    5 -           D              --\x3e\n\n  <g id="puzzle" transform="translate(5, 5) scale(40, 69.28203232)">\n    \x3c!-- CENTER --\x3e\n    <use id="CENTER-l0-o0" xlink:href="#stickerV" transform="translate(5, 1)" style="fill: limegreen"/>\n    <use id="CENTER-l0-o1" xlink:href="#stickerA" transform="translate(3, 0)" style="fill: red"/>\n    <use id="CENTER-l0-o2" xlink:href="#stickerA" transform="translate(7, 0)" style="fill: blue"/>\n\n    <use id="CENTER-l1-o0" xlink:href="#stickerV" transform="translate(4, 2)" style="fill: limegreen"/>\n    <use id="CENTER-l1-o1" xlink:href="#stickerA" transform="translate(4, 3)" style="fill: yellow"/>\n    <use id="CENTER-l1-o2" xlink:href="#stickerA" transform="translate(2, 1)" style="fill: red"/>\n\n    <use id="CENTER-l2-o0" xlink:href="#stickerV" transform="translate(6, 2)" style="fill: limegreen"/>\n    <use id="CENTER-l2-o1" xlink:href="#stickerA" transform="translate(8, 1)" style="fill: blue"/>\n    <use id="CENTER-l2-o2" xlink:href="#stickerA" transform="translate(6, 3)" style="fill: yellow"/>\n\n    <use id="CENTER-l3-o0" xlink:href="#stickerA" transform="translate(9, 0)" style="fill: blue"/>\n    <use id="CENTER-l3-o1" xlink:href="#stickerA" transform="translate(1, 0)" style="fill: red"/>\n    <use id="CENTER-l3-o2" xlink:href="#stickerA" transform="translate(5, 4)" style="fill: yellow"/>\n\n    \x3c!-- TIP --\x3e\n    <use id="TIP-l0-o0" xlink:href="#stickerA" transform="translate(5, 0)" style="fill: limegreen"/>\n    <use id="TIP-l0-o1" xlink:href="#stickerV" transform="translate(4, 0)" style="fill: red"/>\n    <use id="TIP-l0-o2" xlink:href="#stickerV" transform="translate(6, 0)" style="fill: blue"/>\n\n    <use id="TIP-l1-o0" xlink:href="#stickerA" transform="translate(3, 2)" style="fill: limegreen"/>\n    <use id="TIP-l1-o1" xlink:href="#stickerV" transform="translate(3, 3)" style="fill: yellow"/>\n    <use id="TIP-l1-o2" xlink:href="#stickerV" transform="translate(2, 2)" style="fill: red"/>\n\n    <use id="TIP-l2-o0" xlink:href="#stickerV" transform="translate(8, 2)" style="fill: blue"/>\n    <use id="TIP-l2-o1" xlink:href="#stickerV" transform="translate(7, 3)" style="fill: yellow"/>\n    <use id="TIP-l2-o2" xlink:href="#stickerA" transform="translate(7, 2)" style="fill: limegreen"/>\n\n    <use id="TIP-l3-o0" xlink:href="#stickerV" transform="translate(10,0)" style="fill: blue"/>\n    <use id="TIP-l3-o1" xlink:href="#stickerV" transform="translate(0, 0)" style="fill: red"/>\n    <use id="TIP-l3-o2" xlink:href="#stickerV" transform="translate(5, 5)" style="fill: yellow"/>\n\n    \x3c!-- EDGE --\x3e\n    <use id="EDGE-l0-o0" xlink:href="#stickerA" transform="translate(4, 1)" style="fill: limegreen"/>\n    <use id="EDGE-l0-o1" xlink:href="#stickerV" transform="translate(3, 1)" style="fill: red"/>\n\n    <use id="EDGE-l1-o0" xlink:href="#stickerA" transform="translate(6, 1)" style="fill: limegreen"/>\n    <use id="EDGE-l1-o1" xlink:href="#stickerV" transform="translate(7, 1)" style="fill: blue"/>\n\n    <use id="EDGE-l2-o0" xlink:href="#stickerV" transform="translate(8, 0)" style="fill: blue"/>\n    <use id="EDGE-l2-o1" xlink:href="#stickerV" transform="translate(2, 0)" style="fill: red"/>\n\n    <use id="EDGE-l3-o0" xlink:href="#stickerV" transform="translate(5, 3)" style="fill: yellow"/>\n    <use id="EDGE-l3-o1" xlink:href="#stickerA" transform="translate(5, 2)" style="fill: limegreen"/>\n\n    <use id="EDGE-l4-o0" xlink:href="#stickerV" transform="translate(6, 4)" style="fill: yellow"/>\n    <use id="EDGE-l4-o1" xlink:href="#stickerV" transform="translate(9, 1)" style="fill: blue"/>\n\n    <use id="EDGE-l5-o0" xlink:href="#stickerV" transform="translate(4, 4)" style="fill: yellow"/>\n    <use id="EDGE-l5-o1" xlink:href="#stickerV" transform="translate(1, 1)" style="fill: red"/>\n  </g>\n\n</svg>\n';
},{}],"KByV":[function(require,module,exports) {
module.exports={name:"Square-1",orbits:{WEDGE:{numPieces:24,orientations:9},EQUATOR:{numPieces:2,orientations:6}},startPieces:{WEDGE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},moves:{U:{WEDGE:{permutation:[11,0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},D:{WEDGE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,23,12,13,14,15,16,17,18,19,20,21,22],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},SLICE:{WEDGE:{permutation:[0,1,2,3,4,5,12,13,14,15,16,17,6,7,8,9,10,11,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,3]}}}};
},{}],"kT25":[function(require,module,exports) {
module.exports='<?xml version="1.0" encoding="UTF-8"?>\n<svg width="360px" height="552px" viewBox="0 0 360 552" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \x3c!-- Generator: Sketch 59.1 (86144) - https://sketch.com --\x3e\n    <title>sq1-fancy</title>\n    <desc>Created with Sketch.</desc>\n    \x3c!-- stroke="none" --\x3e\n    <g id="sq1-fancy" stroke="#888" stroke-width="0.25" fill="none" fill-rule="evenodd">\n        <g id="EQUATOR" transform="translate(24.000000, 264.000000)">\n            <rect id="EQUATOR-l1-o3" style="fill: red" x="168" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l1-o4" style="fill: red" x="192" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l1-o5" style="fill: limegreen" x="216" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l1-o2" style="fill: limegreen" x="240" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l1-o1" style="fill: limegreen" x="264" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l1-o0" style="fill: orange" x="288" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l0-o3" style="fill: orange" x="0" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l0-o4" style="fill: orange" x="24" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l0-o5" style="fill: limegreen" x="48" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l0-o2" style="fill: limegreen" x="72" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l0-o1" style="fill: limegreen" x="96" y="0" width="24" height="24"></rect>\n            <rect id="EQUATOR-l0-o0" style="fill: red" x="120" y="0" width="24" height="24"></rect>\n        </g>\n        <g id="BOTTOM" transform="translate(41.000000, 257.000000)" stroke-linejoin="round">\n            <g id="WEDGE-23" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">\n                <polygon id="WEDGE-l23-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l23-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l23-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l23-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l23-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l23-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l23-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l23-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l23-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-22" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">\n                <polygon id="WEDGE-l22-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l22-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l22-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l22-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l22-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l22-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l22-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l22-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l22-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-21" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">\n                <polygon id="WEDGE-l21-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l21-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l21-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l21-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l21-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l21-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l21-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l21-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l21-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-20" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">\n                <polygon id="WEDGE-l20-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l20-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l20-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l20-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l20-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l20-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l20-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l20-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l20-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-19" transform="translate(67.157677, 163.157677)">\n                <polygon id="WEDGE-l19-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l19-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l19-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l19-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l19-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l19-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l19-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l19-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l19-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-18" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">\n                <polygon id="WEDGE-l18-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l18-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l18-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l18-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l18-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l18-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l18-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l18-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l18-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-17" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">\n                <polygon id="WEDGE-l17-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l17-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l17-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l17-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l17-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l17-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l17-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l17-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l17-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-16" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">\n                <polygon id="WEDGE-l16-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l16-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l16-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l16-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l16-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l16-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l16-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l16-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l16-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-15" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">\n                <polygon id="WEDGE-l15-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l15-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l15-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l15-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l15-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l15-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l15-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l15-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l15-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-14" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">\n                <polygon id="WEDGE-l14-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l14-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l14-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l14-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l14-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l14-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l14-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l14-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l14-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-13" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">\n                <polygon id="WEDGE-l13-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l13-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l13-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l13-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l13-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l13-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l13-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l13-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l13-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-12" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">\n                <polygon id="WEDGE-l12-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l12-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l12-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l12-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l12-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l12-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l12-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l12-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l12-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n        </g>\n        <g id="TOP" transform="translate(41.000000, -31.000000)" stroke-linejoin="round">\n            <g id="WEDGE-11" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">\n                <polygon id="WEDGE-l11-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l11-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l11-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l11-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l11-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l11-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l11-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l11-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l11-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-10" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">\n                <polygon id="WEDGE-l10-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l10-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l10-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l10-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l10-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l10-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l10-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l10-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l10-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-9" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">\n                <polygon id="WEDGE-l9-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l9-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l9-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l9-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l9-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l9-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l9-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l9-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l9-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-8" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">\n                <polygon id="WEDGE-l8-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l8-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l8-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l8-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l8-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l8-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l8-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l8-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l8-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-7" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">\n                <polygon id="WEDGE-l7-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l7-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l7-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l7-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l7-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l7-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l7-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l7-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l7-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-6" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">\n                <polygon id="WEDGE-l6-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l6-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l6-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l6-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l6-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l6-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l6-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l6-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l6-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-5" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">\n                <polygon id="WEDGE-l5-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l5-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l5-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l5-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l5-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l5-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l5-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l5-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l5-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-4" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">\n                <polygon id="WEDGE-l4-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l4-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l4-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l4-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l4-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l4-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l4-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l4-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l4-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-3" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">\n                <polygon id="WEDGE-l3-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l3-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l3-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l3-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l3-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l3-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l3-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l3-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l3-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-2" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">\n                <polygon id="WEDGE-l2-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l2-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l2-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l2-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l2-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l2-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l2-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l2-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l2-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-1" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">\n                <polygon id="WEDGE-l1-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l1-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l1-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l1-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l1-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l1-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l1-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l1-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l1-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n            <g id="WEDGE-0" transform="translate(67.157677, 163.157677)">\n                <polygon id="WEDGE-l0-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>\n                <polygon id="WEDGE-l0-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>\n                <polygon id="WEDGE-l0-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>\n                <polygon id="WEDGE-l0-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>\n                <polygon id="WEDGE-l0-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>\n                <polygon id="WEDGE-l0-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>\n                <polygon id="WEDGE-l0-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l0-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>\n                <polygon id="WEDGE-l0-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>\n            </g>\n        </g>\n        <g id="DIAGONALS" transform="translate(168.861561, 1.019238)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">\n            <line x1="0" y1="287.842323" x2="70.2768775" y2="550.119201" id="BOTTOM"></line>\n            <line x1="0.15767665" y1="262.276878" x2="70.4345542" y2="2.27488928e-16" id="TOP"></line>\n        </g>\n    </g>\n</svg>\n';
},{}],"bU3q":[function(require,module,exports) {
module.exports={name:"Clock",orbits:{DIAL:{numPieces:18,orientations:12},FACE:{numPieces:18,orientations:1},FRAME:{numPieces:1,orientations:2}},startPieces:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},moves:{UR:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,0,0,0]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,-1,0,0]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,-1]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UL:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,0,0,0,0,0,-1,0,0,0,0,0,0]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},U:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,0,0,0,-1,0,-1,0,0,0,0,0,0]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},R:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,1,1,-1,0,0,0,0,0,-1,0,0]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},D:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,-1,0,-1]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},L:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,-1]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},ALL:{DIAL:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,1,1,1,-1,0,-1,0,0,0,-1,0,-1]},FACE:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},FLIP:{DIAL:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACE:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[1]}}}};
},{}],"vNhv":[function(require,module,exports) {
module.exports='<?xml version="1.0" encoding="UTF-8"?>\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">\n  <title>clock</title>\n  <defs>\n    <g id="hand" transform="translate(-20, -20)">\n      <path d="M19.9995197,2.22079449 L23.8791657,19.0203611 C23.9580836,19.3338406 24,19.6620253 24,20 C24,22.209139 22.209139,24 20,24 C17.790861,24 16,22.209139 16,20 C16,19.6620253 16.0419164,19.3338406 16.1208343,19.0203611 L19.9995197,2.22079449 Z"></path>\n    </g>\n    <g id="cardinal_hours" style="fill: #FFFFFF">\n      <circle cx="0" cy="24" r="2"></circle>\n      <circle cx="-24" cy="0" r="2"></circle>\n      <circle cx="24" cy="0" r="2"></circle>\n      <circle cx="0" cy="-24" r="2"></circle>\n    </g>\n    <g id="face_hours">\n      <g>\n        <use xlink:href="#cardinal_hours"/>\n      </g>\n      <g transform="rotate(30)">\n        <use xlink:href="#cardinal_hours"/>\n      </g>\n      <g  transform="rotate(60)">\n        <use xlink:href="#cardinal_hours"/>\n      </g>\n    </g>\n    <g id="pegs" stroke="#000000" style="fill: #FFD000">\n      <circle id="PEG4" cx="90" cy="90" r="10"></circle>\n      <circle id="PEG3" cx="30" cy="90" r="10"></circle>\n      <circle id="PEG2" cx="90" cy="30" r="10"></circle>\n      <circle id="PEG1" cx="30" cy="30" r="10"></circle>\n    </g>\n    <g id="frame" transform="translate(-24, -24)">\n      <path stroke="#000000" d="M120,20 C137.495665,20 153.941932,24.4930026 168.247913,32.3881183 C171.855881,30.8514056 175.828512,30 180,30 C196.568542,30 210,43.4314575 210,60 C210,64.1714878 209.148594,68.1441192 207.610077,71.7536009 C215.506997,86.0580678 220,102.504335 220,120 C220,137.495665 215.506997,153.941932 207.611882,168.247913 C209.148594,171.855881 210,175.828512 210,180 C210,196.568542 196.568542,210 180,210 C175.828512,210 171.855881,209.148594 168.246399,207.610077 C153.941932,215.506997 137.495665,220 120,220 C102.504335,220 86.0580678,215.506997 71.7520869,207.611882 C68.1441192,209.148594 64.1714878,210 60,210 C43.4314575,210 30,196.568542 30,180 C30,175.828512 30.8514056,171.855881 32.3899234,168.246399 C24.4930026,153.941932 20,137.495665 20,120 C20,102.504335 24.4930026,86.0580678 32.3881183,71.7520869 C30.8514056,68.1441192 30,64.1714878 30,60 C30,43.4314575 43.4314575,30 60,30 C64.1714878,30 68.1441192,30.8514056 71.7536009,32.3899234 C86.0580678,24.4930026 102.504335,20 120,20 Z"></path>\n    </g>\n  </defs>\n  <g>\n    <g transform="translate(24, 24)">\n      <use xlink:href="#frame" id="FRAME-l0-o0" style="fill: #0C5093"/>\n      <use xlink:href="#pegs" transform="translate(36, 36)"/>\n      <g transform="translate(36, 36)">\n        <circle id="FACE-l0-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l0-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l0-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l0-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l0-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l0-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l0-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l0-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l0-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l0-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l0-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l0-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l0-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(96, 36)">\n        <circle id="FACE-l1-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l1-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l1-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l1-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l1-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l1-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l1-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l1-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l1-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l1-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l1-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l1-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l1-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(156, 36)">\n        <circle id="FACE-l2-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l2-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l2-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l2-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l2-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l2-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l2-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l2-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l2-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l2-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l2-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l2-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l2-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(36, 96)">\n        <circle id="FACE-l3-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l3-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l3-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l3-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l3-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l3-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l3-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l3-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l3-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l3-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l3-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l3-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l3-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(96, 96)">\n        <circle id="FACE-l4-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l4-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l4-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l4-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l4-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l4-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l4-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l4-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l4-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l4-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l4-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l4-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l4-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(156, 96)">\n        <circle id="FACE-l5-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l5-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l5-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l5-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l5-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l5-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l5-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l5-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l5-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l5-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l5-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l5-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l5-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(36, 156)">\n        <circle id="FACE-l6-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l6-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l6-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l6-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l6-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l6-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l6-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l6-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l6-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l6-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l6-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l6-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l6-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(96, 156)">\n        <circle id="FACE-l7-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l7-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l7-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l7-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l7-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l7-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l7-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l7-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l7-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l7-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l7-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l7-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l7-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(156, 156)">\n        <circle id="FACE-l8-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l8-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l8-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l8-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l8-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l8-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l8-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l8-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l8-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l8-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l8-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l8-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l8-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n    </g>\n    <g transform="translate(264, 24)">\n      <use xlink:href="#frame" id="FRAME-l0-o1" style="fill: #90B8DF"/>\n      <use xlink:href="#pegs" transform="translate(36, 36)"/>\n      <g transform="translate(36, 36)">\n        <circle id="FACE-l9-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l9-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l9-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l9-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l9-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l9-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l9-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l9-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l9-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l9-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l9-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l9-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l9-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(96, 36)">\n        <circle id="FACE-l10-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l10-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l10-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l10-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l10-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l10-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l10-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l10-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l10-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l10-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l10-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l10-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l10-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(156, 36)">\n        <circle id="FACE-l11-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l11-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l11-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l11-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l11-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l11-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l11-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l11-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l11-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l11-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l11-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l11-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l11-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(36, 96)">\n        <circle id="FACE-l12-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l12-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l12-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l12-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l12-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l12-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l12-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l12-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l12-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l12-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l12-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l12-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l12-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(96, 96)">\n        <circle id="FACE-l13-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l13-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l13-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l13-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l13-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l13-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l13-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l13-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l13-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l13-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l13-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l13-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l13-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(156, 96)">\n        <circle id="FACE-l14-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l14-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l14-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l14-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l14-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l14-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l14-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l14-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l14-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l14-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l14-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l14-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l14-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(36, 156)">\n        <circle id="FACE-l15-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l15-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l15-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l15-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l15-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l15-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l15-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l15-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l15-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l15-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l15-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l15-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l15-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(96, 156)">\n        <circle id="FACE-l16-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l16-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l16-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l16-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l16-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l16-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l16-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l16-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l16-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l16-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l16-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l16-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l16-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n      <g transform="translate(156, 156)">\n        <circle id="FACE-l17-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>\n        <use xlink:href="#face_hours"/>\n        <g>\n          <use id="DIAL-l17-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>\n          <use id="DIAL-l17-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>\n          <use id="DIAL-l17-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>\n          <use id="DIAL-l17-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>\n          <use id="DIAL-l17-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>\n          <use id="DIAL-l17-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>\n          <use id="DIAL-l17-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>\n          <use id="DIAL-l17-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>\n          <use id="DIAL-l17-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>\n          <use id="DIAL-l17-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>\n          <use id="DIAL-l17-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>\n          <use id="DIAL-l17-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n';
},{}],"CYU2":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Clock=exports.Square1=exports.Pyraminx=exports.Cube333=exports.Cube222=void 0;var r=e(require("./2x2x2.kpuzzle.json"));exports.Cube222=r.default;var u=e(require("./svg/2x2x2.kpuzzle.svg"));exports.Cube222.svg=u.default;var s=e(require("./3x3x3.kpuzzle.json"));exports.Cube333=s.default;var t=e(require("./svg/3x3x3.kpuzzle.svg"));exports.Cube333.svg=t.default;var o=e(require("./pyraminx.kpuzzle.json"));exports.Pyraminx=o.default;var a=e(require("./svg/pyraminx.kpuzzle.svg"));exports.Pyraminx.svg=a.default;var p=e(require("./sq1-hyperorbit.kpuzzle.json"));exports.Square1=p.default;var l=e(require("./svg/sq1-hyperorbit.kpuzzle.svg"));exports.Square1.svg=l.default;var x=e(require("./clock.kpuzzle.json"));exports.Clock=x.default;var v=e(require("./svg/clock.kpuzzle.svg"));exports.Clock.svg=v.default;
},{"./2x2x2.kpuzzle.json":"hVES","./svg/2x2x2.kpuzzle.svg":"kD3R","./3x3x3.kpuzzle.json":"dH9G","./svg/3x3x3.kpuzzle.svg":"KHIA","./pyraminx.kpuzzle.json":"Qybl","./svg/pyraminx.kpuzzle.svg":"Lrf2","./sq1-hyperorbit.kpuzzle.json":"KByV","./svg/sq1-hyperorbit.kpuzzle.svg":"kT25","./clock.kpuzzle.json":"bU3q","./svg/clock.kpuzzle.svg":"vNhv"}],"DGWu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Puzzles=void 0;var e=require("./definitions");exports.Puzzles={"2x2x2":e.Cube222,"3x3x3":e.Cube333,pyraminx:e.Pyraminx,sq1:e.Square1,clock:e.Clock};
},{"./definitions":"CYU2"}],"UetO":[function(require,module,exports) {
// Generated by PEG.js v0.11.0-master.f69239d, https://pegjs.org/

"use strict";

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  // istanbul ignore next
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    },

    not: function(expectation) {
      return "not " + describeExpectation(expectation.expected);
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};

  var peg$startRuleFunctions = { start: peg$parsestart };
  var peg$startRuleFunction = peg$parsestart;

  var peg$c0 = " ";
  var peg$c1 = "Name";
  var peg$c2 = "Set";
  var peg$c3 = "\n";
  var peg$c4 = "Solved";
  var peg$c5 = "End";
  var peg$c6 = "Move";

  var peg$r0 = /^[A-Za-z0-9<>]/;
  var peg$r1 = /^[A-Za-z]/;
  var peg$r2 = /^[A-Za-z0-9]/;
  var peg$r3 = /^[0-9]/;

  var peg$e0 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"], "<", ">"], false, false);
  var peg$e1 = peg$classExpectation([["A", "Z"], ["a", "z"]], false, false);
  var peg$e2 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"]], false, false);
  var peg$e3 = peg$classExpectation([["0", "9"]], false, false);
  var peg$e4 = peg$literalExpectation(" ", false);
  var peg$e5 = peg$literalExpectation("Name", false);
  var peg$e6 = peg$literalExpectation("Set", false);
  var peg$e7 = peg$literalExpectation("\n", false);
  var peg$e8 = peg$literalExpectation("Solved", false);
  var peg$e9 = peg$literalExpectation("End", false);
  var peg$e10 = peg$literalExpectation("Move", false);

  var peg$f0 = function(def) { return fixMoves(def); };
  var peg$f1 = function(characters) { return characters.join(""); };
  var peg$f2 = function(first, rest) { return [first].concat(rest).join(""); };
  var peg$f3 = function(characters) { return parseInt(characters.join(""), 10); };
  var peg$f4 = function(identifier) { return identifier; };
  var peg$f5 = function(set_identifier, num_pieces, num_orientations) {
          return [set_identifier, {numPieces: num_pieces, orientations: num_orientations}];
         };
  var peg$f6 = function(orbit, orbits) { orbits[orbit[0]] = orbit[1]; return orbits; };
  var peg$f7 = function(orbit) { const orbits = {}; orbits[orbit[0]] = orbit[1]; return orbits;  };
  var peg$f8 = function(num, nums) { return [num].concat(nums); };
  var peg$f9 = function(num) { return [num]; };
  var peg$f10 = function(nums) { return fixPermutation(nums) };
  var peg$f11 = function(set_identifier, permutation, nums) {
                  return [set_identifier, {permutation: permutation, orientation: nums}];
                };
  var peg$f12 = function(set_identifier, permutation) {
                  return [set_identifier, {permutation: permutation, orientation: new Array(permutation.length).fill(0)}];
                };
  var peg$f13 = function(definition, definitions) { definitions[definition[0]] = definition[1]; return definitions; };
  var peg$f14 = function(definition) { const definitions = {}; definitions[definition[0]] = definition[1]; return definitions; };
  var peg$f15 = function(definitions) { return definitions; };
  var peg$f16 = function(identifier, definitions) { return [identifier, definitions]; };
  var peg$f17 = function(move, moves) { moves[move[0]] = move[1]; return moves; };
  var peg$f18 = function(move) { const moves = {}; moves[move[0]] = move[1]; return moves; };
  var peg$f19 = function(name, orbits, start_pieces, moves) {
                      return {name: name, orbits: orbits, moves: moves, startPieces: start_pieces};
                    };

  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$expected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return [peg$savedPos, peg$currPos];
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;
  function peg$computeLocation(startPos, endPos) {
    var loc = {};

    if ( peg$VALIDFILENAME ) loc.filename = options.filename;

    var startPosDetails = peg$computePosDetails(startPos);
    loc.start = {
      offset: startPos,
      line: startPosDetails.line,
      column: startPosDetails.column
    };

    var endPosDetails = peg$computePosDetails(endPos);
    loc.end = {
      offset: endPos,
      line: endPosDetails.line,
      column: endPosDetails.column
    };

    return loc;
  }

  function peg$begin() {
    peg$expected.push({ pos: peg$currPos, variants: [] });
  }

  function peg$expect(expected) {
    var top = peg$expected[peg$expected.length - 1];

    if (peg$currPos < top.pos) { return; }

    if (peg$currPos > top.pos) {
      top.pos = peg$currPos;
      top.variants = [];
    }

    top.variants.push(expected);
  }

  function peg$end(invert) {
    var expected = peg$expected.pop();
    var top = peg$expected[peg$expected.length - 1];
    var variants = expected.variants;

    if (top.pos !== expected.pos) { return; }

    if (invert) {
      variants = variants.map(function(e) {
        return e.type === "not" ? e.expected : { type: "not", expected: e };
      });
    }

    Array.prototype.push.apply(top.variants, variants);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$buildError() {
    var expected = peg$expected[0];
    var failPos = expected.pos;

    return peg$buildStructuredError(
      expected.variants,
      failPos < input.length ? input.charAt(failPos) : null,
      failPos < input.length
        ? peg$computeLocation(failPos, failPos + 1)
        : peg$computeLocation(failPos, failPos)
    );
  }

  function peg$parsestart() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseDEFINITION_FILE();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f0(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseIDENTIFIER() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    rule$expects(peg$e0);
    if (peg$r0.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        rule$expects(peg$e0);
        if (peg$r0.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f1(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseSET_IDENTIFIER() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e1);
    if (peg$r1.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      rule$expects(peg$e2);
      if (peg$r2.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        rule$expects(peg$e2);
        if (peg$r2.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }
      }
      peg$savedPos = s0;
      s0 = peg$f2(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNUMBER() {
    var s0, s1, s2;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = [];
    rule$expects(peg$e3);
    if (peg$r3.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        rule$expects(peg$e3);
        if (peg$r3.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f3(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseSPACE() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e4);
    if (input.charCodeAt(peg$currPos) === 32) {
      s0 = peg$c0;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNAME() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e5);
    if (input.substr(peg$currPos, 4) === peg$c1) {
      s1 = peg$c1;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSPACE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseIDENTIFIER();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f4(s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseORBIT() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e6);
    if (input.substr(peg$currPos, 3) === peg$c2) {
      s1 = peg$c2;
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSPACE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseSET_IDENTIFIER();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseSPACE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseNUMBER();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseSPACE();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseNUMBER();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f5(s3, s5, s7);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseORBITS() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseORBIT();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNEWLINE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseORBITS();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f6(s1, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseORBIT();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f7(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parseNEWLINE() {
    var s0;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    rule$expects(peg$e7);
    if (input.charCodeAt(peg$currPos) === 10) {
      s0 = peg$c3;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseNEWLINES() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = [];
    rule$expects(peg$e7);
    if (input.charCodeAt(peg$currPos) === 10) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        rule$expects(peg$e7);
        if (input.charCodeAt(peg$currPos) === 10) {
          s1 = peg$c3;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseOPTIONAL_NEWLINES() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = [];
    rule$expects(peg$e7);
    if (input.charCodeAt(peg$currPos) === 10) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      rule$expects(peg$e7);
      if (input.charCodeAt(peg$currPos) === 10) {
        s1 = peg$c3;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseNUMBERS() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseNUMBER();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSPACE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseNUMBERS();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f8(s1, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseNUMBER();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f9(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parsePERMUTATION() {
    var s0, s1;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseNUMBERS();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f10(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseDEFINITION() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseSET_IDENTIFIER();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNEWLINE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parsePERMUTATION();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseNEWLINE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseNUMBERS();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f11(s1, s3, s5);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseSET_IDENTIFIER();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNEWLINE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsePERMUTATION();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f12(s1, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseDEFINITIONS() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseDEFINITION();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNEWLINE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseDEFINITIONS();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f13(s1, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseDEFINITION();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f14(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parseSTART_PIECES() {
    var s0, s1, s2, s3, s4, s5;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e8);
    if (input.substr(peg$currPos, 6) === peg$c4) {
      s1 = peg$c4;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNEWLINE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseDEFINITIONS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseNEWLINE();
          if (s4 !== peg$FAILED) {
            rule$expects(peg$e9);
            if (input.substr(peg$currPos, 3) === peg$c5) {
              s5 = peg$c5;
              peg$currPos += 3;
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f15(s3);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseMOVE() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    rule$expects(peg$e10);
    if (input.substr(peg$currPos, 4) === peg$c6) {
      s1 = peg$c6;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSPACE();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseIDENTIFIER();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseNEWLINE();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseDEFINITIONS();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseNEWLINE();
              if (s6 !== peg$FAILED) {
                rule$expects(peg$e9);
                if (input.substr(peg$currPos, 3) === peg$c5) {
                  s7 = peg$c5;
                  peg$currPos += 3;
                } else {
                  s7 = peg$FAILED;
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s0 = peg$f16(s3, s5);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseMOVES() {
    var s0, s1, s2, s3;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseMOVE();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNEWLINES();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseMOVES();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f17(s1, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseMOVE();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f18(s1);
      }
      s0 = s1;
    }

    return s0;
  }

  function peg$parseDEFINITION_FILE() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    var rule$expects = function (expected) {
      if (peg$silentFails === 0) peg$expect(expected);
    }

    s0 = peg$currPos;
    s1 = peg$parseNAME();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseNEWLINES();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseORBITS();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseNEWLINES();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseSTART_PIECES();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseNEWLINES();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseMOVES();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseOPTIONAL_NEWLINES();
                  peg$savedPos = s0;
                  s0 = peg$f19(s1, s3, s5, s7);
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }


    function fixPermutation(permutation) {
      return permutation.map(x => x - 1);
    }

    function fixMoves(def) {
      for (const moveName in def.moves) {
        const move = def.moves[moveName] ;
        for (const orbitName in def.orbits) {
          const moveOrbit = move[orbitName] ;
          const oldOrientation = moveOrbit.orientation ;
          const perm = moveOrbit.permutation ;
          const newOrientation = new Array(oldOrientation.length) ;
          for (let i = 0; i < perm.length; i++) {
            newOrientation[i] = oldOrientation[perm[i]] ;
          }
          moveOrbit.orientation = newOrientation ;
        }
      }
      return def;
    }


  peg$begin();
  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$expect(peg$endExpectation());
    }

    throw peg$buildError();
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

},{}],"zhU2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parse=void 0;var e=r(require("./parser.pegjs"));function r(e){return e&&e.__esModule?e:{default:e}}var s=e.default.parse;exports.parse=s;
},{"./parser.pegjs":"UetO"}],"sPmM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parse=void 0;var e=require("./parser-shim"),r=e.parse;exports.parse=r;
},{"./parser-shim":"zhU2"}],"JUDY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./parser");Object.defineProperty(exports,"parse",{enumerable:!0,get:function(){return e.parse}});
},{"./parser":"sPmM"}],"KVz1":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.SVG=void 0;var r="http://www.w3.org/2000/svg",o=0;function n(){return"svg"+(o+=1).toString()}var s=function(){function e(i){if(t(this,e),this.kPuzzleDefinition=i,this.originalColors={},this.gradients={},!i.svg)throw new Error("No SVG definition for puzzle type: ".concat(i.name));this.svgID=n(),this.element=document.createElement("div"),this.element.classList.add("svg-wrapper"),this.element.innerHTML=i.svg;var o=this.element.querySelector("svg");if(!o)throw new Error("Could not get SVG element");if(r!==o.namespaceURI)throw new Error("Unexpected XML namespace");for(var s in o.style.maxWidth="100%",o.style.maxHeight="100%",this.gradientDefs=document.createElementNS(r,"defs"),o.insertBefore(this.gradientDefs,o.firstChild),i.orbits)for(var a=i.orbits[s],l=0;l<a.numPieces;l++)for(var c=0;c<a.orientations;c++){var f=this.elementID(s,l,c),h=this.elementByID(f),d=h.style.fill;this.originalColors[f]=d,this.gradients[f]=this.newGradient(f,d),this.gradientDefs.appendChild(this.gradients[f]),h.setAttribute("style","fill: url(#grad-".concat(this.svgID,"-").concat(f,")"))}}return i(e,[{key:"drawKPuzzle",value:function(t,e,i){this.draw(t.definition,t.state,e,i)}},{key:"draw",value:function(t,e,i,r){for(var o in t.orbits)for(var n=t.orbits[o],s=e[o],a=i?i[o]:null,l=0;l<n.numPieces;l++)for(var c=0;c<n.orientations;c++){var f=this.elementID(o,l,c),h=this.elementID(o,s.permutation[l],(n.orientations-s.orientation[l]+c)%n.orientations),d=!1;if(a){var u=this.elementID(o,a.permutation[l],(n.orientations-a.orientation[l]+c)%n.orientations);h===u&&(d=!0);var g=100*(1-(r=r||0)*r*(2-r*r));this.gradients[f].children[0].setAttribute("stop-color",this.originalColors[h]),this.gradients[f].children[1].setAttribute("stop-color",this.originalColors[h]),this.gradients[f].children[1].setAttribute("offset","".concat(Math.max(g-5,0),"%")),this.gradients[f].children[2].setAttribute("offset","".concat(Math.max(g-5,0),"%")),this.gradients[f].children[3].setAttribute("offset","".concat(g,"%")),this.gradients[f].children[4].setAttribute("offset","".concat(g,"%")),this.gradients[f].children[4].setAttribute("stop-color",this.originalColors[u]),this.gradients[f].children[5].setAttribute("stop-color",this.originalColors[u])}else d=!0;d&&(this.gradients[f].children[0].setAttribute("stop-color",this.originalColors[h]),this.gradients[f].children[1].setAttribute("stop-color",this.originalColors[h]),this.gradients[f].children[1].setAttribute("offset","100%"),this.gradients[f].children[2].setAttribute("offset","100%"),this.gradients[f].children[3].setAttribute("offset","100%"),this.gradients[f].children[4].setAttribute("offset","100%"))}}},{key:"newGradient",value:function(t,e){var i=document.createElementNS(r,"radialGradient");i.setAttribute("id","grad-".concat(this.svgID,"-").concat(t)),i.setAttribute("r","70.7107%");for(var o=0,n=[{offset:0,color:e},{offset:0,color:e},{offset:0,color:"black"},{offset:0,color:"black"},{offset:0,color:e},{offset:100,color:e}];o<n.length;o++){var s=n[o],a=document.createElementNS(r,"stop");a.setAttribute("offset","".concat(s.offset,"%")),a.setAttribute("stop-color",s.color),a.setAttribute("stop-opacity","1"),i.appendChild(a)}return i}},{key:"elementID",value:function(t,e,i){return t+"-l"+e+"-o"+i}},{key:"elementByID",value:function(t){return this.element.querySelector("#"+t)}}]),e}();exports.SVG=s;
},{}],"GqBq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("regenerator-runtime/runtime");var e=require("./definition_types");Object.defineProperty(exports,"KPuzzleDefinition",{enumerable:!0,get:function(){return e.KPuzzleDefinition}}),Object.defineProperty(exports,"OrbitTransformation",{enumerable:!0,get:function(){return e.OrbitTransformation}}),Object.defineProperty(exports,"Transformation",{enumerable:!0,get:function(){return e.Transformation}});var r=require("./kpuzzle");Object.defineProperty(exports,"KPuzzle",{enumerable:!0,get:function(){return r.KPuzzle}}),Object.defineProperty(exports,"stateForBlockMove",{enumerable:!0,get:function(){return r.stateForBlockMove}});var t=require("./canonicalize");Object.defineProperty(exports,"Canonicalize",{enumerable:!0,get:function(){return t.Canonicalize}}),Object.defineProperty(exports,"SearchSequence",{enumerable:!0,get:function(){return t.SearchSequence}}),Object.defineProperty(exports,"CanonicalSequenceIterator",{enumerable:!0,get:function(){return t.CanonicalSequenceIterator}});var n=require("./transformations");Object.defineProperty(exports,"Combine",{enumerable:!0,get:function(){return n.Combine}}),Object.defineProperty(exports,"Multiply",{enumerable:!0,get:function(){return n.Multiply}}),Object.defineProperty(exports,"IdentityTransformation",{enumerable:!0,get:function(){return n.IdentityTransformation}}),Object.defineProperty(exports,"Invert",{enumerable:!0,get:function(){return n.Invert}}),Object.defineProperty(exports,"EquivalentTransformations",{enumerable:!0,get:function(){return n.EquivalentTransformations}}),Object.defineProperty(exports,"EquivalentStates",{enumerable:!0,get:function(){return n.EquivalentStates}}),Object.defineProperty(exports,"Order",{enumerable:!0,get:function(){return n.Order}});var o=require("./puzzle_definitions");Object.defineProperty(exports,"Puzzles",{enumerable:!0,get:function(){return o.Puzzles}});var i=require("./parser");Object.defineProperty(exports,"parse",{enumerable:!0,get:function(){return i.parse}});var u=require("./svg");Object.defineProperty(exports,"SVG",{enumerable:!0,get:function(){return u.SVG}});
},{"regenerator-runtime/runtime":"VuXv","./definition_types":"u7KL","./kpuzzle":"bKjo","./canonicalize":"ga1Z","./transformations":"JWJo","./puzzle_definitions":"DGWu","./parser":"JUDY","./svg":"KVz1"}],"pJu6":[function(require,module,exports) {
"use strict";function r(r,e){var n;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(n=t(r))||e&&r&&"number"==typeof r.length){n&&(r=n);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,f=!1;return{s:function(){n=r[Symbol.iterator]()},n:function(){var r=n.next();return u=r.done,r},e:function(r){f=!0,i=r},f:function(){try{u||null==n.return||n.return()}finally{if(f)throw i}}}}function t(r,t){if(r){if("string"==typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function n(r){for(var t=new Array(r),e=0;e<r;e++)t[e]=e;return t}function o(t,e){var n,o=0,a=r(e);try{for(a.s();!(n=a.n()).done;){var i=n.value;o*=t,o+=i}}catch(u){a.e(u)}finally{a.f()}return o}function a(r,t,e){for(var n=[];e>0;)n.push(e%r),e=Math.floor(e/r);return new Array(t-n.length).fill(0).concat(n.reverse())}function i(r){for(var t=r.length,e=0,n=0;n<t-1;n++){e*=t-n;for(var o=n+1;o<t;o++)r[n]>r[o]&&(e+=1)}return e}function u(r,t){var e=new Array(r);e[r-1]=0;for(var n=r-2;n>=0;n--){e[n]=t%(r-n),t=Math.floor(t/(r-n));for(var o=n+1;o<r;o++)e[o]>=e[n]&&(e[o]=e[o]+1)}return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.lexToPermutation=exports.permutationToLex=exports.maskToOrientations=exports.orientationsToMask=exports.identityPermutation=void 0,exports.identityPermutation=n,exports.orientationsToMask=o,exports.maskToOrientations=a,exports.permutationToLex=i,exports.lexToPermutation=u;
},{}],"KDQ2":[function(require,module,exports) {
"use strict";function o(o,e){return n(o)||t(o,e)||a(o,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(o,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o)){var t=[],n=!0,e=!1,a=void 0;try{for(var i,u=o[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(p){e=!0,a=p}finally{try{n||null==u.return||u.return()}finally{if(e)throw a}}return t}}function n(o){if(Array.isArray(o))return o}function e(o,r){var t;if("undefined"==typeof Symbol||null==o[Symbol.iterator]){if(Array.isArray(o)||(t=a(o))||r&&o&&"number"==typeof o.length){t&&(o=t);var n=0,e=function(){};return{s:e,n:function(){return n>=o.length?{done:!0}:{done:!1,value:o[n++]}},e:function(o){throw o},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,p=!1;return{s:function(){t=o[Symbol.iterator]()},n:function(){var o=t.next();return u=o.done,o},e:function(o){p=!0,i=o},f:function(){try{u||null==t.return||t.return()}finally{if(p)throw i}}}}function a(o,r){if(o){if("string"==typeof o)return i(o,r);var t=Object.prototype.toString.call(o).slice(8,-1);return"Object"===t&&o.constructor&&(t=o.constructor.name),"Map"===t||"Set"===t?Array.from(o):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(o,r):void 0}}function i(o,r){(null==r||r>o.length)&&(r=o.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=o[t];return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.twizzleBinaryToReid3x3x3=exports.binaryComponentsToReid3x3x3=exports.twizzleBinaryToBinaryComponents=exports.reid3x3x3ToTwizzleBinary=exports.binaryComponentsToTwizzleBinary=exports.reid3x3x3ToBinaryComponents=void 0;var u=require("../../alg"),p=require("../../kpuzzle"),s=require("./orbit-indexing"),c=[16,13,3,29,2,1,12,12];function x(o){var r,t=0,n=e(o);try{for(n.s();!(r=n.n()).done;){t+=r.value}}catch(a){n.e(a)}finally{n.f()}return t}function l(o,r){var t,n=new Uint8Array(r),a=0,i=0,u=0,p=[],s=e(o);try{for(s.s();!(t=s.n()).done;){for(var c=t.value;i<c;)u=u<<8|n[a++],i+=8;p.push(u>>i-c&(1<<c)-1),i-=c}}catch(x){s.e(x)}finally{s.f()}return p}function f(o,r){for(var t=new Uint8Array(Math.ceil(x(o)/8)),n=0,e=0,a=0,i=0;i<o.length;i++)for(a=a<<o[i]|r[i],e+=o[i];e>=8;)t[n++]=a>>e-8,e-=8;return e>0&&(t[n++]=a<<8-e),t}function m(o){var r=o.CENTER.permutation[0],t=o.CENTER.permutation[5],n=o.CENTER.permutation[1],e=n;return r<n&&e--,t<n&&e--,[r,e]}var y,d=new Array(6).fill(0).map(function(){return new Array(6)}),v=new p.KPuzzle(p.Puzzles["3x3x3"]),h=["","z","x","z'","x'","x2"].map(function(o){return u.parse(o)}),T=u.parse("y"),z=e(h);try{for(z.s();!(y=z.n()).done;){var k=y.value;v.reset(),v.applyAlg(k);for(var M=0;M<4;M++){v.applyAlg(T);var b=m(v.state),L=o(b,2),w=L[0],I=L[1];d[w][I]=p.Invert(p.Puzzles["3x3x3"],v.state)}}}catch(N){z.e(N)}finally{z.f()}function E(r){var t=o(m(r),2),n=t[0],e=t[1],a=d[n][e];return p.Combine(p.Puzzles["3x3x3"],r,a)}function g(o,r,t){var n=p.Invert(p.Puzzles["3x3x3"],d[r][t]);return p.Combine(p.Puzzles["3x3x3"],o,n)}function C(o){return 7!==o.poIdxU}function S(r){var t=E(r),n=s.permutationToLex(t.EDGE.permutation),e=o(m(r),2),a=e[0],i=e[1],u=s.orientationsToMask(3,t.CORNER.orientation);return{cpLex:s.permutationToLex(t.CORNER.permutation),coMask:u,poIdxU:a,epLex:n,poIdxL:i,moSupport:1,eoMask:s.orientationsToMask(2,t.EDGE.orientation),moMask:s.orientationsToMask(4,t.CENTER.orientation)}}function R(o){var r=o.cpLex,t=o.coMask,n=o.poIdxU,e=o.epLex,a=o.poIdxL,i=o.moSupport,u=o.eoMask,p=o.moMask;return f(c,[r,t,n,e,a,i,u,p])}function A(o){return R(S(o))}function B(r){var t=o(l(c,r),8);return{cpLex:t[0],coMask:t[1],poIdxU:t[2],epLex:t[3],poIdxL:t[4],moSupport:t[5],eoMask:t[6],moMask:t[7]}}function U(o){if(1!==o.moSupport)throw new Error("Must support center orientation.");var r={EDGE:{permutation:s.lexToPermutation(12,o.epLex),orientation:s.maskToOrientations(2,12,o.eoMask)},CORNER:{permutation:s.lexToPermutation(8,o.cpLex),orientation:s.maskToOrientations(3,8,o.coMask)},CENTER:{permutation:s.identityPermutation(6),orientation:s.maskToOrientations(4,6,o.moMask)}};return C(o)?g(r,o.poIdxU,o.poIdxL):r}function O(o){var r=[];return(o.epLex<0||o.epLex>=479001600)&&r.push("epLex (".concat(o.epLex,") out of range")),(o.cpLex<0||o.cpLex>=40320)&&r.push("cpLex (".concat(o.cpLex,") out of range")),(o.coMask<0||o.coMask>=6561)&&r.push("coMask (".concat(o.coMask,") out of range")),(o.poIdxU<0||o.poIdxU>=6)&&C(o)&&r.push("poIdxU (".concat(o.poIdxU,") out of range")),(o.eoMask<0||o.eoMask>=4096)&&r.push("eoMask (".concat(o.eoMask,") out of range")),(o.moMask<0||o.moMask>=4096)&&r.push("moMask (".concat(o.moMask,") out of range")),(o.poIdxL<0||o.poIdxL>=4)&&r.push("poIdxL (".concat(o.poIdxL,") out of range")),(o.moSupport<0||o.moSupport>=2)&&r.push("moSupport (".concat(o.moSupport,") out of range")),r}function P(o){var r=B(o),t=O(r);if(0!==t.length)throw new Error("Invalid binary state components: ".concat(t.join(", ")));return U(r)}exports.reid3x3x3ToBinaryComponents=S,exports.binaryComponentsToTwizzleBinary=R,exports.reid3x3x3ToTwizzleBinary=A,exports.twizzleBinaryToBinaryComponents=B,exports.binaryComponentsToReid3x3x3=U,exports.twizzleBinaryToReid3x3x3=P;
},{"../../alg":"HGIv","../../kpuzzle":"GqBq","./orbit-indexing":"pJu6"}],"r6J1":[function(require,module,exports) {
"use strict";function r(r,e){var n;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(n=t(r))||e&&r&&"number"==typeof r.length){n&&(r=n);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,l=!1;return{s:function(){n=r[Symbol.iterator]()},n:function(){var r=n.next();return a=r.done,r},e:function(r){l=!0,u=r},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw u}}}}function t(r,t){if(r){if("string"==typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.reidStringToKPuzzle=exports.stickersToKPuzzle=exports.kpuzzleToStickers=exports.stickersToReidString=exports.reidStringToStickers=exports.kpuzzleToReidString=exports.kpuzzleToString=void 0;var n=require("../../src/kpuzzle");function o(r){return JSON.stringify(r,null,"  ").replace(/\n +(\d+),/g,"$1, ").replace(/\n +(\d+)\n +/g,"$1")}exports.kpuzzleToString=o;var i=n.Puzzles["3x3x3"],u={EDGE:"UF UR UB UL DF DR DB DL FR FL BR BL".split(" "),CORNER:"UFR URB UBL ULF DRF DFL DLB DBR".split(" "),CENTER:"ULFRBD".split("")};function a(r,t){return r.slice(t)+r.slice(0,t)}for(var l={},s=Object.keys(i.orbits),c=function(){var r=f[p];u[r].forEach(function(t,e){for(var n="CENTER"===r?1:i.orbits[r].orientations,o=0;o<n;o++){var u=a(t,o);if(l[u]={piece:e,orientation:o},3===n){var s=u[0]+u[2]+u[1];l[s]={piece:e,orientation:o}}}})},p=0,f=s;p<f.length;p++)c();function v(t){var e,n=[],o=function(r){for(var e=0;e<t[r].permutation.length;e++)n.push(a(u[r][t[r].permutation[e]],t[r].orientation[e]))},i=r(s);try{for(i.s();!(e=i.n()).done;){o(e.value)}}catch(l){i.e(l)}finally{i.f()}return n.join(" ")}exports.kpuzzleToReidString=v;var y=Array.prototype.concat.apply(Array.prototype,[[44,6,40,9,68,3,48,0,36],[46,10,49,34,70,28,61,22,58],[50,1,37,27,72,24,57,13,54],[38,4,41,25,74,31,53,16,66],[42,7,45,30,76,33,65,19,62],[56,12,52,21,78,15,60,18,64]]);function d(r){for(var t=[],e=0;e<y.length;e++){var n=r[y[e]],o=u.CENTER.indexOf(n);t.push(o)}return t}function g(r){for(var t=new Array(79).fill(" "),e=0;e<y.length;e++){var n=r[e];t[y[e]]=u.CENTER[n]}return t.join("")}function z(r){return d(v(r))}function R(r){return S(g(r))}function S(t){var e=t.split(" "),n=function(t){var e,n={permutation:[],orientation:[]},o=r(t);try{for(o.s();!(e=o.n()).done;){var i=e.value;n.permutation.push(l[i].piece),n.orientation.push(l[i].orientation)}}catch(u){o.e(u)}finally{o.f()}return n};return{EDGE:n(e.slice(0,12)),CORNER:n(e.slice(12,20)),CENTER:n(e.slice(20,26))}}exports.reidStringToStickers=d,exports.stickersToReidString=g,exports.kpuzzleToStickers=z,exports.stickersToKPuzzle=R,exports.reidStringToKPuzzle=S;
},{"../../src/kpuzzle":"GqBq"}],"QCba":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.spacedHexToBuffer=exports.bufferToSpacedHex=void 0;var n=require("../../src/alg"),i=require("../../src/kpuzzle"),a=require("../../src/protocol/binary/binary3x3x3"),s=require("./convert");function u(e){return Array.prototype.map.call(new Uint8Array(e),function(e){return("00"+e.toString(16)).slice(-2)}).join(" ")}function o(e){return new Uint8Array(e.split(" ").map(function(e){return parseInt(e,16)}))}exports.bufferToSpacedHex=u,exports.spacedHexToBuffer=o;var c=i.Puzzles["3x3x3"],l=function(){function t(){var r,n=this;e(this,t),this.kpuzzle=new i.KPuzzle(c),this.svg=new i.SVG(c),this.algTextarea=document.querySelector("#alg"),this.kpuzzleTextarea=document.querySelector("#kpuzzle"),this.reidStringTextarea=document.querySelector("#reid-string"),this.stickersTextarea=document.querySelector("#stickers"),this.componentsTextarea=document.querySelector("#components"),this.binaryTextarea=document.querySelector("#binary"),document.querySelector("#viewer").appendChild(this.svg.element),document.querySelector("#reset").addEventListener("click",function(){n.reset()}),document.querySelector("#apply-alg").addEventListener("click",function(){n.applyAlg(n.algTextarea.value)}),null===(r=document.querySelector("#set-reid-string"))||void 0===r||r.addEventListener("click",function(){n.setReidString(n.reidStringTextarea.value)}),document.querySelector("#set-stickers").addEventListener("click",function(){n.setStickers(n.stickersTextarea.value)}),document.querySelector("#set-components").addEventListener("click",function(){n.setComponents(n.componentsTextarea.value)}),document.querySelector("#set-kpuzzle").addEventListener("click",function(){n.setKPuzzle(n.kpuzzleTextarea.value)}),document.querySelector("#set-binary").addEventListener("click",function(){n.setBinary(n.binaryTextarea.value)}),this.setState(this.kpuzzle.state)}return r(t,[{key:"reset",value:function(){this.kpuzzle.reset(),this.setState(this.kpuzzle.state)}},{key:"applyAlg",value:function(e){this.kpuzzle.applyAlg(n.parse(e)),this.setState(this.kpuzzle.state)}},{key:"setKPuzzle",value:function(e){this.setState(JSON.parse(e))}},{key:"setReidString",value:function(e){this.setState(s.reidStringToKPuzzle(e))}},{key:"setStickers",value:function(e){this.setState(s.stickersToKPuzzle(JSON.parse(e)))}},{key:"setComponents",value:function(e){this.setState(a.binaryComponentsToReid3x3x3(JSON.parse(e)))}},{key:"setBinary",value:function(e){this.setState(a.twizzleBinaryToReid3x3x3(o(e)))}},{key:"setState",value:function(e){this.kpuzzle.state=e,this.svg.draw(c,e),this.kpuzzleTextarea.value=s.kpuzzleToString(e),this.reidStringTextarea.value=s.kpuzzleToReidString(e),this.stickersTextarea.value=JSON.stringify(s.kpuzzleToStickers(e)),this.componentsTextarea.value=JSON.stringify(a.reid3x3x3ToBinaryComponents(e),null,"  "),this.binaryTextarea.value=u(a.reid3x3x3ToTwizzleBinary(e))}}]),t}(),p=new l;window.app=p;
},{"../../src/alg":"HGIv","../../src/kpuzzle":"GqBq","../../src/protocol/binary/binary3x3x3":"KDQ2","./convert":"r6J1"}]},{},["QCba"], null)
//# sourceMappingURL=3x3x3-formats.4a9a7ff0.js.map