!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(t){var n=this;i(this,e),this.worker=t,this.listeners=[],this.nextId=0,this.worker.addEventListener("message",function(e){var t=e.data.id,r=e.data.error,i=e.data.result;n.listeners[t](r,i),delete n.listeners[t]})}return o(e,[{key:"render",value:function(e,t){var n=this;return new Promise(function(r,i){var o=n.nextId++;n.listeners[o]=function(e,t){e?i(new Error(e.message,e.fileName,e.lineNumber)):r(t)},n.worker.postMessage({id:o,src:e,options:t})})}}]),e}(),u=function e(t,n){i(this,e);var r=t();this.render=function(e,t){return new Promise(function(i,o){try{i(n(r,e,t))}catch(e){o(e)}})}};function c(){return"devicePixelRatio"in window&&window.devicePixelRatio>1?window.devicePixelRatio:1}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.scale,r=void 0===n?c():n,i=t.mimeType,o=void 0===i?"image/png":i,a=t.quality,d=void 0===a?1:a;return new Promise(function(t,n){var i=new Image;i.onload=function(){var e=document.createElement("canvas");e.width=i.width*r,e.height=i.height*r,e.getContext("2d").drawImage(i,0,0,e.width,e.height),e.toBlob(function(e){var n=new Image;n.src=URL.createObjectURL(e),n.width=i.width,n.height=i.height,t(n)},o,d)},i.onerror=function(e){var t;t="error"in e?e.error:new Error("Error loading SVG"),n(t)},i.src="data:image/svg+xml;base64,"+btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode("0x"+t)}))})}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.workerURL,r=t.worker,o=t.Module,a=t.render;if(i(this,e),void 0!==n)this.wrapper=new d(new Worker(n));else if(void 0!==r)this.wrapper=new d(r);else if(void 0!==o&&void 0!==a)this.wrapper=new u(o,a);else{if(void 0===e.Module||void 0===e.render)throw new Error("Must specify workerURL or worker option, Module and render options, or include one of full.render.js or lite.render.js after viz.js.");this.wrapper=new u(e.Module,e.render)}}return o(e,[{key:"renderString",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.format,r=void 0===n?"svg":n,i=t.engine,o=void 0===i?"dot":i,a=t.files,d=void 0===a?[]:a,u=t.images,c=void 0===u?[]:u,s=t.yInvert,l=void 0!==s&&s,f=t.nop,v=void 0===f?0:f,h=0;h<c.length;h++)d.push({path:c[h].path,data:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="'+c[h].width+'" height="'+c[h].height+'"></svg>'});return this.wrapper.render(e,{format:r,engine:o,files:d,images:c,yInvert:l,nop:v})}},{key:"renderSVGElement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.renderString(e,a({},t,{format:"svg"})).then(function(e){return(new DOMParser).parseFromString(e,"image/svg+xml").documentElement})}},{key:"renderImageElement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.scale,i=t.mimeType,o=t.quality;return this.renderString(e,a({},t,{format:"svg"})).then(function(e){return"object"===("undefined"==typeof fabric?"undefined":r(fabric))&&fabric.loadSVGFromString?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.scale,r=void 0===n?c():n,i=t.mimeType,o=void 0===i?"image/png":i,a=t.quality,d=void 0===a?1:a,u=r,s=void 0;return"image/jpeg"==o?s="jpeg":"image/png"==o&&(s="png"),new Promise(function(t,n){fabric.loadSVGFromString(e,function(e,r){0==e.length&&n(new Error("Error loading SVG with Fabric"));var i=document.createElement("canvas");i.width=r.width,i.height=r.height;var o=new fabric.Canvas(i,{enableRetinaScaling:!1}),a=fabric.util.groupSVGElements(e,r);o.add(a).renderAll();var c=new Image;c.src=o.toDataURL({format:s,multiplier:u,quality:d}),c.width=r.width,c.height=r.height,t(c)})})}(e,{scale:n,mimeType:i,quality:o}):s(e,{scale:n,mimeType:i,quality:o})})}},{key:"renderJSONObject",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.format;return"json"===n&&"json0"===n||(n="json"),this.renderString(e,a({},t,{format:n})).then(function(e){return JSON.parse(e)})}}]),e}();t.a=(e=>{const t=document.currentScript,n="d"+Math.random();document.write(`<div id="${n}"></div>`);const r=document.getElementById(n);r.removeAttribute("id");for(let e=0;e<t.attributes.length;++e){const n=t.attributes[e];n.specified&&"src"!==n.name&&r.setAttribute(n.name,n.value)}const i=new URL(t.src,window.location.href).href,o=new URL(e,i).href;fetch(o).then(e=>{e.text().then(e=>{const n=URL.createObjectURL(new Blob([e])),i=new l({workerURL:n}),o=t.getAttribute("data-graph"),a=t.getAttribute("data-options"),d=a?JSON.parse(a):void 0;if(!o)throw r.textContent='inviz: data-graph attribute not found on script element, e.g. data-graph="digraph { a -> b }"',new Error(r.textContent);i.renderSVGElement(o,d).then(e=>{r.appendChild(e);const t=new Event("graphload");t.div=r,t.svg=e,r.dispatchEvent(t)}).catch(e=>{throw r.textContent=`inviz: ${e&&e.message||e}`,e})})})})},function(e,t,n){e.exports=n.p+"cdce967732699f93caff0060b8f1d95b.js"},,function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(0);Object(o.a)(i.a)}]);