!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function o(){var t=n(3).default;i=(0,r.render)((0,r.h)(t,null),document.body,i)}var r=n(1);n(7);var i=void 0;o()},function(t,e,n){!function(t,n){n(e)}(this,function(t){function e(t,e,n){this.nodeName=t,this.attributes=e,this.children=n,this.key=e&&e.key}function n(t,n){var o,r,i,u,a=[];for(u=arguments.length;u-- >2;)I.push(arguments[u]);for(n&&n.children&&(I.length||I.push(n.children),delete n.children);I.length;)if((r=I.pop())instanceof Array)for(u=r.length;u--;)I.push(r[u]);else null!=r&&r!==!1&&("number"!=typeof r&&r!==!0||(r=String(r)),i="string"==typeof r,i&&o?a[a.length-1]+=r:(a.push(r),o=i));var l=new e(t,n||void 0,a);return B.vnode&&B.vnode(l),l}function o(t,e){if(e)for(var n in e)t[n]=e[n];return t}function r(t){return o({},t)}function i(t,e){for(var n=e.split("."),o=0;o<n.length&&t;o++)t=t[n[o]];return t}function u(t){return"function"==typeof t}function a(t){return"string"==typeof t}function l(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function c(t,e){return n(t.nodeName,o(r(t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function f(t,e,n){var o=e.split(".");return function(e){for(var r=e&&e.target||this,u={},l=u,c=a(n)?i(e,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:e,f=0;f<o.length-1;f++)l=l[o[f]]||(l[o[f]]=!f&&t.state[o[f]]||{});l[o[f]]=c,t.setState(u)}}function s(t){!t._dirty&&(t._dirty=!0)&&1==Y.push(t)&&(B.debounceRendering||$)(p)}function p(){var t,e=Y;for(Y=[];t=e.pop();)t._dirty&&R(t)}function h(t){var e=t&&t.nodeName;return e&&u(e)&&!(e.prototype&&e.prototype.render)}function d(t,e){return t.nodeName(y(t),e||K)}function m(t,e){return a(e)?t instanceof Text:a(e.nodeName)?v(t,e.nodeName):u(e.nodeName)?t._componentConstructor===e.nodeName||h(e):void 0}function v(t,e){return t.normalizedNodeName===e||z(t.nodeName)===z(e)}function y(t){var e=r(t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function b(t){var e=t.parentNode;e&&e.removeChild(t)}function _(t,e,n,o,r){if("className"===e&&(e="class"),"class"===e&&o&&"object"==typeof o&&(o=l(o)),"key"===e);else if("class"!==e||r)if("style"===e){if((!o||a(o)||a(n))&&(t.style.cssText=o||""),o&&"object"==typeof o){if(!a(n))for(var i in n)i in o||(t.style[i]="");for(var i in o)t.style[i]="number"!=typeof o[i]||F[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html);else if("o"==e[0]&&"n"==e[1]){var c=t._listeners||(t._listeners={});e=z(e.substring(2)),o?c[e]||t.addEventListener(e,w,!!J[e]):c[e]&&t.removeEventListener(e,w,!!J[e]),c[e]=o}else if("list"!==e&&"type"!==e&&!r&&e in t)g(t,e,null==o?"":o),null!=o&&o!==!1||t.removeAttribute(e);else{var f=r&&e.match(/^xlink\:?(.+)/);null==o||o===!1?f?t.removeAttributeNS("http://www.w3.org/1999/xlink",z(f[1])):t.removeAttribute(e):"object"==typeof o||u(o)||(f?t.setAttributeNS("http://www.w3.org/1999/xlink",z(f[1]),o):t.setAttribute(e,o))}else t.className=o||""}function g(t,e,n){try{t[e]=n}catch(t){}}function w(t){return this._listeners[t.type](B.event&&B.event(t)||t)}function C(t){if(b(t),t instanceof Element){t._component=t._componentConstructor=null;var e=t.normalizedNodeName||z(t.nodeName);(q[e]||(q[e]=[])).push(t)}}function x(t,e){var n=z(t),o=q[n]&&q[n].pop()||(e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t));return o.normalizedNodeName=n,o}function N(){for(var t;t=Q.pop();)B.afterMount&&B.afterMount(t),t.componentDidMount&&t.componentDidMount()}function O(t,e,n,o,r,i){X++||(Z=r instanceof SVGElement);var u=k(t,e,n,o);return r&&u.parentNode!==r&&r.appendChild(u),--X||i||N(),u}function k(t,e,n,o){for(var r=e&&e.attributes;h(e);)e=d(e,n);if(null==e&&(e=""),a(e)){if(t){if(t instanceof Text&&t.parentNode)return t.nodeValue!=e&&(t.nodeValue=e),t;j(t)}return document.createTextNode(e)}if(u(e.nodeName))return L(t,e,n,o);var i=t,l=e.nodeName,c=Z,f=e.children;if(a(l)||(l=String(l)),Z="svg"===l||"foreignObject"!==l&&Z,t){if(!v(t,l)){for(i=x(l,Z);t.firstChild;)i.appendChild(t.firstChild);j(t)}}else i=x(l,Z);f&&1===f.length&&"string"==typeof f[0]&&1===i.childNodes.length&&i.firstChild instanceof Text?i.firstChild.nodeValue!=f[0]&&(i.firstChild.nodeValue=f[0]):(f&&f.length||i.firstChild)&&S(i,f,n,o);var s=i[G];if(!s){i[G]=s={};for(var p=i.attributes,m=p.length;m--;)s[p[m].name]=p[m].value}return P(i,e.attributes,s),r&&"function"==typeof r.ref&&(s.ref=r.ref)(i),Z=c,i}function S(t,e,n,o){var r,i,a,l,c=t.childNodes,f=[],s={},p=0,h=0,d=c.length,v=0,y=e&&e.length;if(d)for(var b=0;b<d;b++){var _=c[b],g=y?(i=_._component)?i.__key:(i=_[G])?i.key:null:null;g||0===g?(p++,s[g]=_):f[v++]=_}if(y)for(var b=0;b<y;b++){a=e[b],l=null;var g=a.key;if(null!=g)p&&g in s&&(l=s[g],s[g]=void 0,p--);else if(!l&&h<v){for(r=h;r<v;r++)if(i=f[r],i&&m(i,a)){l=i,f[r]=void 0,r===v-1&&v--,r===h&&h++;break}!l&&h<v&&u(a.nodeName)&&o&&(l=f[h],f[h++]=void 0)}l=k(l,a,n,o),l&&l!==t&&l!==c[b]&&t.insertBefore(l,c[b]||null)}if(p)for(var b in s)s[b]&&j(s[b]);h<v&&U(f)}function U(t,e){for(var n=t.length;n--;)t[n]&&j(t[n],e)}function j(t,e){var n=t._component;n?W(n,!e):(t[G]&&t[G].ref&&t[G].ref(null),e||C(t),t.childNodes&&t.childNodes.length&&U(t.childNodes,e))}function P(t,e,n){for(var o in n)e&&o in e||null==n[o]||_(t,o,n[o],n[o]=void 0,Z);if(e)for(var r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||_(t,r,n[r],n[r]=e[r],Z)}function T(t){var e=t.constructor.name,n=tt[e];n?n.push(t):tt[e]=[t]}function E(t,e,n){var o=new t(e,n),r=tt[t.name];if(A.call(o,e,n),r)for(var i=r.length;i--;)if(r[i].constructor===t){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function M(t,e,n,o,r){t._disable||(t._disable=!0,(t.__ref=e.ref)&&delete e.ref,(t.__key=e.key)&&delete e.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o),o&&o!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=o),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&B.syncComponentUpdates===!1&&t.base?s(t):R(t,1,r)),t.__ref&&t.__ref(t))}function R(t,e,n,i){if(!t._disable){var a,l,c,f,s=t.props,p=t.state,m=t.context,v=t.prevProps||s,b=t.prevState||p,_=t.prevContext||m,g=t.base,w=t.nextBase,C=g||w,x=t._component;if(g&&(t.props=v,t.state=b,t.context=_,2!==e&&t.shouldComponentUpdate&&t.shouldComponentUpdate(s,p,m)===!1?a=!0:t.componentWillUpdate&&t.componentWillUpdate(s,p,m),t.props=s,t.state=p,t.context=m),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!a){for(t.render&&(l=t.render(s,p,m)),t.getChildContext&&(m=o(r(m),t.getChildContext()));h(l);)l=d(l,m);var k,S,U=l&&l.nodeName;if(u(U)){c=x;var P=y(l);c&&c.constructor===U?M(c,P,1,m):(k=c,c=E(U,P,m),c.nextBase=c.nextBase||w,c._parentComponent=t,t._component=c,M(c,P,0,m),R(c,1,n,!0)),S=c.base}else f=C,k=x,k&&(f=t._component=null),(C||1===e)&&(f&&(f._component=null),S=O(f,l,m,n||!g,C&&C.parentNode,!0));if(C&&S!==C&&c!==x){var T=C.parentNode;T&&S!==T&&(T.replaceChild(S,C),k||(C._component=null,j(C)))}if(k&&W(k,S!==C),t.base=S,S&&!i){for(var L=t,A=t;A=A._parentComponent;)(L=A).base=S;S._component=L,S._componentConstructor=L.constructor}}!g||n?Q.unshift(t):a||(t.componentDidUpdate&&t.componentDidUpdate(v,b,_),B.afterUpdate&&B.afterUpdate(t));var D,I=t._renderCallbacks;if(I)for(;D=I.pop();)D.call(t);X||i||N()}}function L(t,e,n,o){for(var r=t&&t._component,i=t,u=r&&t._componentConstructor===e.nodeName,a=u,l=y(e);r&&!a&&(r=r._parentComponent);)a=r.constructor===e.nodeName;return r&&a&&(!o||r._component)?(M(r,l,3,n,o),t=r.base):(r&&!u&&(W(r,!0),t=i=null),r=E(e.nodeName,l,n),t&&!r.nextBase&&(r.nextBase=t,i=null),M(r,l,1,n,o),t=r.base,i&&t!==i&&(i._component=null,j(i))),t}function W(t,e){B.beforeUnmount&&B.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?W(o,e):n&&(n[G]&&n[G].ref&&n[G].ref(null),t.nextBase=n,e&&(b(n),T(t)),U(n.childNodes,!e)),t.__ref&&t.__ref(null),t.componentDidUnmount&&t.componentDidUnmount()}function A(t,e){this._dirty=!0,this.context=e,this.props=t,this.state||(this.state={})}function D(t,e,n){return O(n,t,{},!1,e)}var B={},I=[],H={},z=function(t){return H[t]||(H[t]=t.toLowerCase())},V="undefined"!=typeof Promise&&Promise.resolve(),$=V?function(t){V.then(t)}:setTimeout,K={},G="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",F={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},J={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Y=[],q={},Q=[],X=0,Z=!1,tt={};o(A.prototype,{linkState:function(t,e){var n=this._linkedStates||(this._linkedStates={});return n[t+e]||(n[t+e]=f(this,t,e))},setState:function(t,e){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,u(t)?t(n,this.props):t),e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),s(this)},forceUpdate:function(){R(this,2)},render:function(){}}),t.h=n,t.cloneElement=c,t.Component=A,t.render=D,t.rerender=p,t.options=B})},function(t,e,n){!function(e,o){t.exports=o(n(1))}(this,function(t){"use strict";function e(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),u={},a=void 0;if(i&&i[1])for(var l=i[1].split("&"),c=0;c<l.length;c++){var f=l[c].split("=");u[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=o(t.replace(r,"")),e=o(e||"");for(var s=Math.max(t.length,e.length),p=0;p<s;p++)if(e[p]&&":"===e[p].charAt(0)){var h=e[p].replace(/(^\:|[+*?]+$)/g,""),d=(e[p].match(/[+*?]+$/)||_)[0]||"",m=~d.indexOf("+"),v=~d.indexOf("*"),y=t[p]||"";if(!y&&!v&&(d.indexOf("?")<0||m)){a=!1;break}if(u[h]=decodeURIComponent(y),m||v){u[h]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){a=!1;break}return(n.default===!0||a!==!1)&&u}function n(t,e){var n=t.attributes||_,o=e.attributes||_;if(n.default)return 1;if(o.default)return-1;var i=r(n.path)-r(o.path);return i||n.path.length-o.path.length}function o(t){return i(t).split("/")}function r(t){return(i(t).match(/\/+/g)||"").length}function i(t){return t.replace(/(^\/+|\/+$)/g,"")}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t){return N in t}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"push";w&&w[e]?w[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function s(){var t=void 0;return t=w&&w.location?w.location:w&&w.getCurrentLocation?w.getCurrentLocation():"undefined"!=typeof location?location:x,""+(t.pathname||"")+(t.search||"")}function p(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),h(t)&&f(t,e?"replace":"push"),d(t)}function h(t){for(var e=C.length;e--;)if(C[e].canRoute(t))return!0;return!1}function d(t){for(var e=!1,n=0;n<C.length;n++)C[n].routeTo(t)===!0&&(e=!0);return e}function m(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return p(e)}}function v(t){if(0===t.button)return m(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function b(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey)){var e=t.target;do if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&c(e)){if(0!==t.button)return;if(m(e))return y(t)}while(e=e.parentNode)}}var _={},g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},w=null,C=[],x={},N="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_";"function"==typeof addEventListener&&(addEventListener("popstate",function(){return d(s())}),addEventListener("click",b));var O=function(e){return t.h("a",g({},e,{onClick:v}))},k=function(t){function o(e){u(this,o);var n=a(this,t.call(this,e));return e.history&&(w=e.history),n.state={url:n.props.url||s()},n}return l(o,t),o.prototype.shouldComponentUpdate=function(t){return t.static!==!0||(t.url!==this.props.url||t.onChange!==this.props.onChange)},o.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},o.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},o.prototype.componentWillMount=function(){C.push(this),this.updating=!0},o.prototype.componentDidMount=function(){this.updating=!1},o.prototype.componentWillUnmount=function(){C.splice(C.indexOf(this),1)},o.prototype.componentWillUpdate=function(){this.updating=!0},o.prototype.componentDidUpdate=function(){this.updating=!1},o.prototype.getMatchingChildren=function(t,o,r){return t.slice().sort(n).filter(function(t){var n=t.attributes,i=n.path,u=e(o,i,n);if(u){if(r!==!1){n.url=o,n.matches=u;for(var a in u)u.hasOwnProperty(a)&&(n[a]=u[a])}return!0}})},o.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(n,r,!0),u=i[0]||null;this._didRoute=!!u;var a=this.previousUrl;return r!==a&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:a,active:i,current:u})),u},o}(t.Component),S=function(e){var n=e.component,o=e.url,r=e.matches;return t.h(n,{url:o,matches:r})};return k.route=p,k.Router=k,k.Route=S,k.Link=O,k})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var a=n(1),l=n(2),c=n(4),f=o(c),s=n(5),p=o(s),h=n(6),d=o(h);n(11).install();var m=function(t){function e(){var n,o,u;r(this,e);for(var a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];return n=o=i(this,t.call.apply(t,[this].concat(l))),o.handleRoute=function(t){o.currentUrl=t.url},u=n,i(o,u)}return u(e,t),e.prototype.render=function(){return(0,a.h)("div",{id:"app"},(0,a.h)(f.default,null),(0,a.h)(l.Router,{onChange:this.handleRoute},(0,a.h)(p.default,{path:"/"}),(0,a.h)(d.default,{path:"/profile/",user:"me"}),(0,a.h)(d.default,{path:"/profile/:user"})))},e}(a.Component);e.default=m},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var a=n(1),l=n(2),c=n(8),f=o(c),s=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return u(e,t),e.prototype.render=function(){return(0,a.h)("header",{class:f.default.header},(0,a.h)("h1",null,"Preact Boilerplate"),(0,a.h)("nav",null,(0,a.h)(l.Link,{href:"/"},"Home"),(0,a.h)(l.Link,{href:"/profile"},"Me"),(0,a.h)(l.Link,{href:"/profile/john"},"John")))},e}(a.Component);e.default=s},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var a=n(1),l=n(9),c=o(l),f=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return u(e,t),e.prototype.render=function(){return(0,a.h)("div",{class:c.default.home},(0,a.h)("h1",null,"Home"),(0,a.h)("p",null,"This is the Home component."))},e}(a.Component);e.default=f},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var a=n(1),l=n(10),c=o(l),f=function(t){function e(){var n,o,u;r(this,e);for(var a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];return n=o=i(this,t.call.apply(t,[this].concat(l))),o.state={count:0},u=n,i(o,u)}return u(e,t),e.prototype.componentDidMount=function(){this.timer=setInterval(this.updateTime.bind(this),1e3),this.updateTime(),this.setState({count:this.state.count+1})},e.prototype.componentWillUnmount=function(){clearInterval(this.timer)},e.prototype.updateTime=function(){var t=(new Date).toLocaleString();this.setState({time:t})},e.prototype.render=function(t,e){var n=t.user,o=e.time,r=e.count;return(0,a.h)("div",{class:c.default.profile},(0,a.h)("h1",null,"Profile: ",n),(0,a.h)("p",null,"This is the user profile for a user named ",n,"."),(0,a.h)("div",null,"Current time: ",o),(0,a.h)("div",null,"Profile route mounted ",r," times."))},e}(a.Component);e.default=f},function(t,e){},function(t,e){t.exports={header:"header_3fP58"}},function(t,e){t.exports={home:"home_2xyY2"}},function(t,e){t.exports={profile:"profile_JmD9R"}},function(t,e){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function o(t){if(t||(t={}),n()){navigator.serviceWorker.register("/sw.js")}else;}function r(t,e){}e.install=o,e.applyUpdate=r}]);
//# sourceMappingURL=bundle.js.map