!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=r(1),o=n(i);new o["default"]("icon-hammer",{duration:100});var a=new o["default"]("icon-webapp",{duration:100,start:"manual"}),s=new o["default"]("icon-compass",{duration:100,start:"manual"});setTimeout(function(){a.play()},400),setTimeout(function(){s.play()},800)},function(t,e,r){"use strict";var n,i;"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function r(t){if("undefined"==typeof t)throw new Error('Pathformer [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');if(!(t.constructor instanceof window.SVGElement||/^svg$/i.test(t.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');this.el=t,this.scan(t)}function o(t,e,r){a(),this.isReady=!1,this.setElement(t,e),this.setOptions(e),this.setCallback(r),this.isReady&&this.init()}r.prototype.TYPES=["line","ellipse","circle","polygon","polyline","rect"],r.prototype.ATTR_WATCH=["cx","cy","points","r","rx","ry","x","x1","x2","y","y1","y2"],r.prototype.scan=function(t){for(var e,r,n,i,o=t.querySelectorAll(this.TYPES.join(",")),a=0;a<o.length;a++)r=o[a],e=this[r.tagName.toLowerCase()+"ToPath"],n=e(this.parseAttr(r.attributes)),i=this.pathMaker(r,n),r.parentNode.replaceChild(i,r)},r.prototype.lineToPath=function(t){var e={},r=t.x1||0,n=t.y1||0,i=t.x2||0,o=t.y2||0;return e.d="M"+r+","+n+"L"+i+","+o,e},r.prototype.rectToPath=function(t){var e={},r=parseFloat(t.x)||0,n=parseFloat(t.y)||0,i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;return e.d="M"+r+" "+n+" ",e.d+="L"+(r+i)+" "+n+" ",e.d+="L"+(r+i)+" "+(n+o)+" ",e.d+="L"+r+" "+(n+o)+" Z",e},r.prototype.polylineToPath=function(t){var e,r,n={},i=t.points.trim().split(" ");if(t.points.indexOf(",")===-1){var o=[];for(e=0;e<i.length;e+=2)o.push(i[e]+","+i[e+1]);i=o}for(r="M"+i[0],e=1;e<i.length;e++)i[e].indexOf(",")!==-1&&(r+="L"+i[e]);return n.d=r,n},r.prototype.polygonToPath=function(t){var e=r.prototype.polylineToPath(t);return e.d+="Z",e},r.prototype.ellipseToPath=function(t){var e={},r=parseFloat(t.rx)||0,n=parseFloat(t.ry)||0,i=parseFloat(t.cx)||0,o=parseFloat(t.cy)||0,a=i-r,s=o,h=parseFloat(i)+parseFloat(r),u=o;return e.d="M"+a+","+s+"A"+r+","+n+" 0,1,1 "+h+","+u+"A"+r+","+n+" 0,1,1 "+a+","+u,e},r.prototype.circleToPath=function(t){var e={},r=parseFloat(t.r)||0,n=parseFloat(t.cx)||0,i=parseFloat(t.cy)||0,o=n-r,a=i,s=parseFloat(n)+parseFloat(r),h=i;return e.d="M"+o+","+a+"A"+r+","+r+" 0,1,1 "+s+","+h+"A"+r+","+r+" 0,1,1 "+o+","+h,e},r.prototype.pathMaker=function(t,e){var r,n,i=document.createElementNS("http://www.w3.org/2000/svg","path");for(r=0;r<t.attributes.length;r++)n=t.attributes[r],this.ATTR_WATCH.indexOf(n.name)===-1&&i.setAttribute(n.name,n.value);for(r in e)i.setAttribute(r,e[r]);return i},r.prototype.parseAttr=function(t){for(var e,r={},n=0;n<t.length;n++){if(e=t[n],this.ATTR_WATCH.indexOf(e.name)!==-1&&e.value.indexOf("%")!==-1)throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");r[e.name]=e.value}return r};var a,s,h,u;o.LINEAR=function(t){return t},o.EASE=function(t){return-Math.cos(t*Math.PI)/2+.5},o.EASE_OUT=function(t){return 1-Math.pow(1-t,3)},o.EASE_IN=function(t){return Math.pow(t,3)},o.EASE_OUT_BOUNCE=function(t){var e=-Math.cos(t*(.5*Math.PI))+1,r=Math.pow(e,1.5),n=Math.pow(1-t,2),i=-Math.abs(Math.cos(r*(2.5*Math.PI)))+1;return 1-n+i*n},o.prototype.setElement=function(t,e){if("undefined"==typeof t)throw new Error('Vivus [constructor]: "element" parameter is required');if(t.constructor===String&&(t=document.getElementById(t),!t))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');if(this.parentEl=t,e&&e.file){var r=document.createElement("object");r.setAttribute("type","image/svg+xml"),r.setAttribute("data",e.file),r.setAttribute("built-by-vivus","true"),t.appendChild(r),t=r}switch(t.constructor){case window.SVGSVGElement:case window.SVGElement:this.el=t,this.isReady=!0;break;case window.HTMLObjectElement:var n,i;i=this,n=function(e){if(!i.isReady){if(i.el=t.contentDocument&&t.contentDocument.querySelector("svg"),!i.el&&e)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");return i.el?(t.getAttribute("built-by-vivus")&&(i.parentEl.insertBefore(i.el,t),i.parentEl.removeChild(t),i.el.setAttribute("width","100%"),i.el.setAttribute("height","100%")),i.isReady=!0,i.init(),!0):void 0}},n()||t.addEventListener("load",n);break;default:throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')}},o.prototype.setOptions=function(t){var e=["delayed","sync","async","nsync","oneByOne","scenario","scenario-sync"],r=["inViewport","manual","autostart"];if(void 0!==t&&t.constructor!==Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');if(t=t||{},t.type&&e.indexOf(t.type)===-1)throw new Error("Vivus [constructor]: "+t.type+" is not an existing animation `type`");if(this.type=t.type||e[0],t.start&&r.indexOf(t.start)===-1)throw new Error("Vivus [constructor]: "+t.start+" is not an existing `start` option");if(this.start=t.start||r[0],this.isIE=window.navigator.userAgent.indexOf("MSIE")!==-1||window.navigator.userAgent.indexOf("Trident/")!==-1||window.navigator.userAgent.indexOf("Edge/")!==-1,this.duration=u(t.duration,120),this.delay=u(t.delay,null),this.dashGap=u(t.dashGap,1),this.forceRender=t.hasOwnProperty("forceRender")?!!t.forceRender:this.isIE,this.reverseStack=!!t.reverseStack,this.selfDestroy=!!t.selfDestroy,this.onReady=t.onReady,this.map=[],this.frameLength=this.currentFrame=this.delayUnit=this.speed=this.handle=null,this.ignoreInvisible=!!t.hasOwnProperty("ignoreInvisible")&&!!t.ignoreInvisible,this.animTimingFunction=t.animTimingFunction||o.LINEAR,this.pathTimingFunction=t.pathTimingFunction||o.LINEAR,this.delay>=this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")},o.prototype.setCallback=function(t){if(t&&t.constructor!==Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');this.callback=t||function(){}},o.prototype.mapping=function(){var t,e,r,n,i,o,a,s;for(s=o=a=0,e=this.el.querySelectorAll("path"),t=0;t<e.length;t++)r=e[t],this.isInvisible(r)||(i={el:r,length:Math.ceil(r.getTotalLength())},isNaN(i.length)?window.console&&console.warn&&console.warn("Vivus [mapping]: cannot retrieve a path element length",r):(this.map.push(i),r.style.strokeDasharray=i.length+" "+(i.length+2*this.dashGap),r.style.strokeDashoffset=i.length+this.dashGap,i.length+=this.dashGap,o+=i.length,this.renderPath(t)));for(o=0===o?1:o,this.delay=null===this.delay?this.duration/3:this.delay,this.delayUnit=this.delay/(e.length>1?e.length-1:1),this.reverseStack&&this.map.reverse(),t=0;t<this.map.length;t++){switch(i=this.map[t],this.type){case"delayed":i.startAt=this.delayUnit*t,i.duration=this.duration-this.delay;break;case"oneByOne":i.startAt=a/o*this.duration,i.duration=i.length/o*this.duration;break;case"sync":case"async":case"nsync":i.startAt=0,i.duration=this.duration;break;case"scenario-sync":r=i.el,n=this.parseAttr(r),i.startAt=s+(u(n["data-delay"],this.delayUnit)||0),i.duration=u(n["data-duration"],this.duration),s=void 0!==n["data-async"]?i.startAt:i.startAt+i.duration,this.frameLength=Math.max(this.frameLength,i.startAt+i.duration);break;case"scenario":r=i.el,n=this.parseAttr(r),i.startAt=u(n["data-start"],this.delayUnit)||0,i.duration=u(n["data-duration"],this.duration),this.frameLength=Math.max(this.frameLength,i.startAt+i.duration)}a+=i.length,this.frameLength=this.frameLength||this.duration}},o.prototype.drawer=function(){var t=this;if(this.currentFrame+=this.speed,this.currentFrame<=0)this.stop(),this.reset();else{if(!(this.currentFrame>=this.frameLength))return this.trace(),void(this.handle=s(function(){t.drawer()}));this.stop(),this.currentFrame=this.frameLength,this.trace(),this.selfDestroy&&this.destroy()}this.callback(this),this.instanceCallback&&(this.instanceCallback(this),this.instanceCallback=null)},o.prototype.trace=function(){var t,e,r,n;for(n=this.animTimingFunction(this.currentFrame/this.frameLength)*this.frameLength,t=0;t<this.map.length;t++)r=this.map[t],e=(n-r.startAt)/r.duration,e=this.pathTimingFunction(Math.max(0,Math.min(1,e))),r.progress!==e&&(r.progress=e,r.el.style.strokeDashoffset=Math.floor(r.length*(1-e)),this.renderPath(t))},o.prototype.renderPath=function(t){if(this.forceRender&&this.map&&this.map[t]){var e=this.map[t],r=e.el.cloneNode(!0);e.el.parentNode.replaceChild(r,e.el),e.el=r}},o.prototype.init=function(){this.frameLength=0,this.currentFrame=0,this.map=[],new r(this.el),this.mapping(),this.starter(),this.onReady&&this.onReady(this)},o.prototype.starter=function(){switch(this.start){case"manual":return;case"autostart":this.play();break;case"inViewport":var t=this,e=function r(){t.isInViewport(t.parentEl,1)&&(t.play(),window.removeEventListener("scroll",r))};window.addEventListener("scroll",e),e()}},o.prototype.getStatus=function(){return 0===this.currentFrame?"start":this.currentFrame===this.frameLength?"end":"progress"},o.prototype.reset=function(){return this.setFrameProgress(0)},o.prototype.finish=function(){return this.setFrameProgress(1)},o.prototype.setFrameProgress=function(t){return t=Math.min(1,Math.max(0,t)),this.currentFrame=Math.round(this.frameLength*t),this.trace(),this},o.prototype.play=function(t,e){if(this.instanceCallback=null,t&&"function"==typeof t)this.instanceCallback=t,t=null;else if(t&&"number"!=typeof t)throw new Error("Vivus [play]: invalid speed");return e&&"function"==typeof e&&!this.instanceCallback&&(this.instanceCallback=e),this.speed=t||1,this.handle||this.drawer(),this},o.prototype.stop=function(){return this.handle&&(h(this.handle),this.handle=null),this},o.prototype.destroy=function(){this.stop();var t,e;for(t=0;t<this.map.length;t++)e=this.map[t],e.el.style.strokeDashoffset=null,e.el.style.strokeDasharray=null,this.renderPath(t)},o.prototype.isInvisible=function(t){var e,r=t.getAttribute("data-ignore");return null!==r?"false"!==r:!!this.ignoreInvisible&&(e=t.getBoundingClientRect(),!e.width&&!e.height)},o.prototype.parseAttr=function(t){var e,r={};if(t&&t.attributes)for(var n=0;n<t.attributes.length;n++)e=t.attributes[n],r[e.name]=e.value;return r},o.prototype.isInViewport=function(t,e){var r=this.scrollY(),n=r+this.getViewportH(),i=t.getBoundingClientRect(),o=i.height,a=r+i.top,s=a+o;return e=e||0,a+o*e<=n&&s>=r},o.prototype.getViewportH=function(){var t=this.docElem.clientHeight,e=window.innerHeight;return t<e?e:t},o.prototype.scrollY=function(){return window.pageYOffset||this.docElem.scrollTop},a=function(){o.prototype.docElem||(o.prototype.docElem=window.document.documentElement,s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),h=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)}}())},u=function(t,e){var r=parseInt(t,10);return r>=0?r:e},n=[],i=function(){return o}.apply(e,n),!(void 0!==i&&(t.exports=i))}()},function(t,e,r){t.exports=r(0)}]);