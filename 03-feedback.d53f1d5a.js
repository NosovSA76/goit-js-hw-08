var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,u,f,c=0,l=!1,p=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-c>=i}function j(){var e=m();if(O(e))return T(e);u=setTimeout(j,function(e){var n=t-(e-f);return p?d(n,i-(e-c)):n}(e))}function T(e){return u=void 0,y&&o?b(e):(o=r=void 0,a)}function h(){var e=m(),n=O(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(p)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=v(t)||0,g(n)&&(l=!!n.leading,i=(p="maxWait"in n)?s(v(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},h.flush=function(){return void 0===u?a:T(m())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("input",t((function(e){const t=document.querySelector("input").value,n=document.querySelector("textarea").value,o={email:t,message:n};localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){if(JSON.parse(localStorage.getItem("feedback-form-state"))){const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(e),document.querySelector("input").value=e.email,document.querySelector("textarea").value=e.message}}();
//# sourceMappingURL=03-feedback.d53f1d5a.js.map