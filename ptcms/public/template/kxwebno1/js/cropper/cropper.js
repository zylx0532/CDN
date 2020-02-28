/** PTNovelSearch-v4.1.2 LPPL License By http://www.ptcms.com/ */
 ;!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):t.Cropper=i()}(this,function(){"use strict";function t(i){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(i)}function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function e(t,i){for(var e=0;e<i.length;e++){var a=i[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}function n(t){return o(t)||h(t)||r()}function o(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return"number"==typeof t&&!zt(t)}function c(t){return"undefined"==typeof t}function d(i){return"object"===t(i)&&null!==i}function l(t){if(!d(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&Yt.call(e,"isPrototypeOf")}catch(a){return!1}}function p(t){return"function"==typeof t}function m(t,i){if(t&&p(i))if(Array.isArray(t)||s(t.length)){var e,a=t.length;for(e=0;e<a&&i.call(t,t[e],e,t)!==!1;e+=1);}else d(t)&&Object.keys(t).forEach(function(e){i.call(t,t[e],e,t)});return t}function u(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return Rt.test(t)?Math.round(t*i)/i:t}function g(t,i){var e=t.style;m(i,function(t,i){St.test(i)&&s(t)&&(t+="px"),e[i]=t})}function f(t,i){return t.classList?t.classList.contains(i):t.className.indexOf(i)>-1}function v(t,i){if(i){if(s(t.length))return void m(t,function(t){v(t,i)});if(t.classList)return void t.classList.add(i);var e=t.className.trim();e?e.indexOf(i)<0&&(t.className="".concat(e," ").concat(i)):t.className=i}}function w(t,i){if(i)return s(t.length)?void m(t,function(t){w(t,i)}):t.classList?void t.classList.remove(i):void(t.className.indexOf(i)>=0&&(t.className=t.className.replace(i,"")))}function b(t,i,e){if(i)return s(t.length)?void m(t,function(t){b(t,i,e)}):void(e?v(t,i):w(t,i))}function x(t){return t.replace(At,"$1-$2").toLowerCase()}function y(t,i){return d(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(x(i)))}function M(t,i,e){d(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(x(i)),e)}function C(t,i){if(d(t[i]))try{delete t[i]}catch(e){t[i]=void 0}else if(t.dataset)try{delete t.dataset[i]}catch(e){t.dataset[i]=void 0}else t.removeAttribute("data-".concat(x(i)))}function D(t,i,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=e;i.trim().split(It).forEach(function(i){if(!jt){var o=t.listeners;o&&o[i]&&o[i][e]&&(n=o[i][e],delete o[i][e],0===Object.keys(o[i]).length&&delete o[i],0===Object.keys(o).length&&delete t.listeners)}t.removeEventListener(i,n,a)})}function B(t,i,e){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=e;i.trim().split(It).forEach(function(i){if(a.once&&!jt){var o=t.listeners,h=void 0===o?{}:o;n=function(){delete h[i][e],t.removeEventListener(i,n,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];e.apply(t,r)},h[i]||(h[i]={}),h[i][e]&&t.removeEventListener(i,h[i][e],a),h[i][e]=n,t.listeners=h}t.addEventListener(i,n,a)})}function k(t,i,e){var a;return p(Event)&&p(CustomEvent)?a=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent"),a.initCustomEvent(i,!0,!0,e)),t.dispatchEvent(a)}function T(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}function E(t){var i=t.match(Pt);return i&&(i[1]!==Ut.protocol||i[2]!==Ut.hostname||i[3]!==Ut.port)}function W(t){var i="timestamp=".concat((new Date).getTime());return t+(t.indexOf("?")===-1?"?":"&")+i}function N(t){var i=t.rotate,e=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,h=[];s(n)&&0!==n&&h.push("translateX(".concat(n,"px)")),s(o)&&0!==o&&h.push("translateY(".concat(o,"px)")),s(i)&&0!==i&&h.push("rotate(".concat(i,"deg)")),s(e)&&1!==e&&h.push("scaleX(".concat(e,")")),s(a)&&1!==a&&h.push("scaleY(".concat(a,")"));var r=h.length?h.join(" "):"none";return{WebkitTransform:r,msTransform:r,transform:r}}function H(t){var i=Xt({},t),e=[];return m(t,function(t,a){delete i[a],m(i,function(i){var a=Math.abs(t.startX-i.startX),n=Math.abs(t.startY-i.startY),o=Math.abs(t.endX-i.endX),h=Math.abs(t.endY-i.endY),r=Math.sqrt(a*a+n*n),s=Math.sqrt(o*o+h*h),c=(s-r)/r;e.push(c)})}),e.sort(function(t,i){return Math.abs(t)<Math.abs(i)}),e[0]}function L(t,i){var e=t.pageX,a=t.pageY,n={endX:e,endY:a};return i?n:Xt({startX:e,startY:a},n)}function O(t){var i=0,e=0,a=0;return m(t,function(t){var n=t.startX,o=t.startY;i+=n,e+=o,a+=1}),i/=a,e/=a,{pageX:i,pageY:e}}function z(t){var i=t.aspectRatio,e=t.height,a=t.width,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contain",o=function(t){return qt(t)&&t>0};if(o(a)&&o(e)){var h=e*i;"contain"===n&&h>a||"cover"===n&&h<a?e=a/i:a=e*i}else o(a)?e=a/i:o(e)&&(a=e*i);return{width:a,height:e}}function Y(t){var i=t.width,e=t.height,a=t.degree;if(a=Math.abs(a)%180,90===a)return{width:e,height:i};var n=a%90*Math.PI/180,o=Math.sin(n),h=Math.cos(n),r=i*h+e*o,s=i*o+e*h;return a>90?{width:s,height:r}:{width:r,height:s}}function X(t,i,e,a){var o=i.aspectRatio,h=i.naturalWidth,r=i.naturalHeight,s=i.rotate,c=void 0===s?0:s,d=i.scaleX,l=void 0===d?1:d,p=i.scaleY,m=void 0===p?1:p,g=e.aspectRatio,f=e.naturalWidth,v=e.naturalHeight,w=a.fillColor,b=void 0===w?"transparent":w,x=a.imageSmoothingEnabled,y=void 0===x||x,M=a.imageSmoothingQuality,C=void 0===M?"low":M,D=a.maxWidth,B=void 0===D?1/0:D,k=a.maxHeight,T=void 0===k?1/0:k,E=a.minWidth,W=void 0===E?0:E,N=a.minHeight,H=void 0===N?0:N,L=document.createElement("canvas"),O=L.getContext("2d"),Y=z({aspectRatio:g,width:B,height:T}),X=z({aspectRatio:g,width:W,height:H},"cover"),R=Math.min(Y.width,Math.max(X.width,f)),S=Math.min(Y.height,Math.max(X.height,v)),A=z({aspectRatio:o,width:B,height:T}),I=z({aspectRatio:o,width:W,height:H},"cover"),j=Math.min(A.width,Math.max(I.width,h)),U=Math.min(A.height,Math.max(I.height,r)),P=[-j/2,-U/2,j,U];return L.width=u(R),L.height=u(S),O.fillStyle=b,O.fillRect(0,0,R,S),O.save(),O.translate(R/2,S/2),O.rotate(c*Math.PI/180),O.scale(l,m),O.imageSmoothingEnabled=y,O.imageSmoothingQuality=C,O.drawImage.apply(O,[t].concat(n(P.map(function(t){return Math.floor(u(t))})))),O.restore(),L}function R(t,i,e){var a,n="";for(e+=i,a=i;a<e;a+=1)n+=$t(t.getUint8(a));return n}function S(t){var i=t.replace(Qt,""),e=atob(i),a=new ArrayBuffer(e.length),n=new Uint8Array(a);return m(n,function(t,i){n[i]=e.charCodeAt(i)}),a}function A(t,i){for(var e=[],a=8192,o=new Uint8Array(t);o.length>0;)e.push($t.apply(void 0,n(o.subarray(0,a)))),o=o.subarray(a);return"data:".concat(i,";base64,").concat(btoa(e.join("")))}function I(t){var i,e=new DataView(t);try{var a,n,o;if(255===e.getUint8(0)&&216===e.getUint8(1))for(var h=e.byteLength,r=2;r+1<h;){if(255===e.getUint8(r)&&225===e.getUint8(r+1)){n=r;break}r+=1}if(n){var s=n+4,c=n+10;if("Exif"===R(e,s,4)){var d=e.getUint16(c);if(a=18761===d,(a||19789===d)&&42===e.getUint16(c+2,a)){var l=e.getUint32(c+4,a);l>=8&&(o=c+l)}}}if(o){var p,m,u=e.getUint16(o,a);for(m=0;m<u;m+=1)if(p=o+12*m+2,274===e.getUint16(p,a)){p+=8,i=e.getUint16(p,a),e.setUint16(p,1,a);break}}}catch(g){i=1}return i}function j(t){var i=0,e=1,a=1;switch(t){case 2:e=-1;break;case 3:i=-180;break;case 4:a=-1;break;case 5:i=90,a=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90}return{rotate:i,scaleX:e,scaleY:a}}var U="undefined"!=typeof window,P=U?window:{},q="cropper",$="all",Q="crop",Z="move",F="zoom",K="e",G="w",V="s",J="n",_="ne",tt="nw",it="se",et="sw",at="".concat(q,"-crop"),nt="".concat(q,"-disabled"),ot="".concat(q,"-hidden"),ht="".concat(q,"-hide"),rt="".concat(q,"-invisible"),st="".concat(q,"-modal"),ct="".concat(q,"-move"),dt="".concat(q,"Action"),lt="".concat(q,"Preview"),pt="crop",mt="move",ut="none",gt="crop",ft="cropend",vt="cropmove",wt="cropstart",bt="dblclick",xt=P.PointerEvent?"pointerdown":"touchstart mousedown",yt=P.PointerEvent?"pointermove":"touchmove mousemove",Mt=P.PointerEvent?"pointerup pointercancel":"touchend touchcancel mouseup",Ct="ready",Dt="resize",Bt="wheel mousewheel DOMMouseScroll",kt="zoom",Tt="image/jpeg",Et=/^(?:e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,Wt=/^data:/,Nt=/^data:image\/jpeg;base64,/,Ht=/^(?:img|canvas)$/i,Lt={viewMode:0,dragMode:pt,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},Ot='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',zt=Number.isNaN||P.isNaN,Yt=Object.prototype.hasOwnProperty,Xt=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),a=1;a<i;a++)e[a-1]=arguments[a];return d(t)&&e.length>0&&e.forEach(function(i){d(i)&&Object.keys(i).forEach(function(e){t[e]=i[e]})}),t},Rt=/\.\d*(?:0|9){12}\d*$/,St=/^(?:width|height|left|top|marginLeft|marginTop)$/,At=/([a-z\d])([A-Z])/g,It=/\s\s*/,jt=function(){var t=!1;if(U){var i=!1,e=function(){},a=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(t){i=t}});P.addEventListener("test",e,a),P.removeEventListener("test",e,a)}return t}(),Ut=P.location,Pt=/^(https?:)\/\/([^:\/?#]+):?(\d*)/i,qt=Number.isFinite||P.isFinite,$t=String.fromCharCode,Qt=/^data:.*,/,Zt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,a=this.cropper;v(a,ot),w(t,ot);var n={width:Math.max(e.offsetWidth,Number(i.minContainerWidth)||200),height:Math.max(e.offsetHeight,Number(i.minContainerHeight)||100)};this.containerData=n,g(a,{width:n.width,height:n.height}),v(t,ot),w(a,ot)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,a=Math.abs(i.rotate)%180===90,n=a?i.naturalHeight:i.naturalWidth,o=a?i.naturalWidth:i.naturalHeight,h=n/o,r=t.width,s=t.height;t.height*h>t.width?3===e?r=t.height*h:s=t.width/h:3===e?s=t.width/h:r=t.height*h;var c={aspectRatio:h,naturalWidth:n,naturalHeight:o,width:r,height:s};c.left=(t.width-r)/2,c.top=(t.height-s)/2,c.oldLeft=c.left,c.oldTop=c.top,this.canvasData=c,this.limited=1===e||2===e,this.limitCanvas(!0,!0),this.initialImageData=Xt({},i),this.initialCanvasData=Xt({},c)},limitCanvas:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=e.viewMode,r=n.aspectRatio,s=this.cropped&&o;if(t){var c=Number(e.minCanvasWidth)||0,d=Number(e.minCanvasHeight)||0;h>1?(c=Math.max(c,a.width),d=Math.max(d,a.height),3===h&&(d*r>c?c=d*r:d=c/r)):h>0&&(c?c=Math.max(c,s?o.width:0):d?d=Math.max(d,s?o.height:0):s&&(c=o.width,d=o.height,d*r>c?c=d*r:d=c/r));var l=z({aspectRatio:r,width:c,height:d});c=l.width,d=l.height,n.minWidth=c,n.minHeight=d,n.maxWidth=1/0,n.maxHeight=1/0}if(i)if(h>(s?0:1)){var p=a.width-n.width,m=a.height-n.height;n.minLeft=Math.min(0,p),n.minTop=Math.min(0,m),n.maxLeft=Math.max(0,p),n.maxTop=Math.max(0,m),s&&this.limited&&(n.minLeft=Math.min(o.left,o.left+(o.width-n.width)),n.minTop=Math.min(o.top,o.top+(o.height-n.height)),n.maxLeft=o.left,n.maxTop=o.top,2===h&&(n.width>=a.width&&(n.minLeft=Math.min(0,p),n.maxLeft=Math.max(0,p)),n.height>=a.height&&(n.minTop=Math.min(0,m),n.maxTop=Math.max(0,m))))}else n.minLeft=-n.width,n.minTop=-n.height,n.maxLeft=a.width,n.maxTop=a.height},renderCanvas:function(t,i){var e=this.canvasData,a=this.imageData;if(i){var n=Y({width:a.naturalWidth*Math.abs(a.scaleX||1),height:a.naturalHeight*Math.abs(a.scaleY||1),degree:a.rotate||0}),o=n.width,h=n.height,r=e.width*(o/e.naturalWidth),s=e.height*(h/e.naturalHeight);e.left-=(r-e.width)/2,e.top-=(s-e.height)/2,e.width=r,e.height=s,e.aspectRatio=o/h,e.naturalWidth=o,e.naturalHeight=h,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,g(this.canvas,Xt({width:e.width,height:e.height},N({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,a=e.naturalWidth*(i.width/i.naturalWidth),n=e.naturalHeight*(i.height/i.naturalHeight);Xt(e,{width:a,height:n,left:(i.width-a)/2,top:(i.height-n)/2}),g(this.image,Xt({width:e.width,height:e.height},N(Xt({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,n={width:i.width,height:i.height};e&&(i.height*e>i.width?n.height=n.width/e:n.width=n.height*e),this.cropBoxData=n,this.limitCropBox(!0,!0),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),n.width=Math.max(n.minWidth,n.width*a),n.height=Math.max(n.minHeight,n.height*a),n.left=i.left+(i.width-n.width)/2,n.top=i.top+(i.height-n.height)/2,n.oldLeft=n.left,n.oldTop=n.top,this.initialCropBoxData=Xt({},n)},limitCropBox:function(t,i){var e=this.options,a=this.containerData,n=this.canvasData,o=this.cropBoxData,h=this.limited,r=e.aspectRatio;if(t){var s=Number(e.minCropBoxWidth)||0,c=Number(e.minCropBoxHeight)||0,d=h?Math.min(a.width,n.width,n.width+n.left,a.width-n.left):a.width,l=h?Math.min(a.height,n.height,n.height+n.top,a.height-n.top):a.height;s=Math.min(s,a.width),c=Math.min(c,a.height),r&&(s&&c?c*r>s?c=s/r:s=c*r:s?c=s/r:c&&(s=c*r),l*r>d?l=d/r:d=l*r),o.minWidth=Math.min(s,d),o.minHeight=Math.min(c,l),o.maxWidth=d,o.maxHeight=l}i&&(h?(o.minLeft=Math.max(0,n.left),o.minTop=Math.max(0,n.top),o.maxLeft=Math.min(a.width,n.left+n.width)-o.width,o.maxTop=Math.min(a.height,n.top+n.height)-o.height):(o.minLeft=0,o.minTop=0,o.maxLeft=a.width-o.width,o.maxTop=a.height-o.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&M(this.face,dt,e.width>=i.width&&e.height>=i.height?Z:$),g(this.cropBox,Xt({width:e.width,height:e.height},N({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),k(this.element,gt,this.getData())}},Ft={initPreview:function(){var t=this.crossOrigin,i=this.options.preview,e=t?this.crossOriginUrl:this.url,a=document.createElement("img");if(t&&(a.crossOrigin=t),a.src=e,this.viewBox.appendChild(a),this.viewBoxImage=a,i){var n=i;"string"==typeof i?n=this.element.ownerDocument.querySelectorAll(i):i.querySelector&&(n=[i]),this.previews=n,m(n,function(i){var a=document.createElement("img");M(i,lt,{width:i.offsetWidth,height:i.offsetHeight,html:i.innerHTML}),t&&(a.crossOrigin=t),a.src=e,a.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',i.innerHTML="",i.appendChild(a)})}},resetPreview:function(){m(this.previews,function(t){var i=y(t,lt);g(t,{width:i.width,height:i.height}),t.innerHTML=i.html,C(t,lt)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,a=e.width,n=e.height,o=t.width,h=t.height,r=e.left-i.left-t.left,s=e.top-i.top-t.top;this.cropped&&!this.disabled&&(g(this.viewBoxImage,Xt({width:o,height:h},N(Xt({translateX:-r,translateY:-s},t)))),m(this.previews,function(i){var e=y(i,lt),c=e.width,d=e.height,l=c,p=d,m=1;a&&(m=c/a,p=n*m),n&&p>d&&(m=d/n,l=a*m,p=d),g(i,{width:l,height:p}),g(i.getElementsByTagName("img")[0],Xt({width:o*m,height:h*m},N(Xt({translateX:-r*m,translateY:-s*m},t))))}))}},Kt={bind:function(){var t=this.element,i=this.options,e=this.cropper;p(i.cropstart)&&B(t,wt,i.cropstart),p(i.cropmove)&&B(t,vt,i.cropmove),p(i.cropend)&&B(t,ft,i.cropend),p(i.crop)&&B(t,gt,i.crop),p(i.zoom)&&B(t,kt,i.zoom),B(e,xt,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&B(e,Bt,this.onWheel=this.wheel.bind(this)),i.toggleDragModeOnDblclick&&B(e,bt,this.onDblclick=this.dblclick.bind(this)),B(t.ownerDocument,yt,this.onCropMove=this.cropMove.bind(this)),B(t.ownerDocument,Mt,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&B(window,Dt,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;p(i.cropstart)&&D(t,wt,i.cropstart),p(i.cropmove)&&D(t,vt,i.cropmove),p(i.cropend)&&D(t,ft,i.cropend),p(i.crop)&&D(t,gt,i.crop),p(i.zoom)&&D(t,kt,i.zoom),D(e,xt,this.onCropStart),i.zoomable&&i.zoomOnWheel&&D(e,Bt,this.onWheel),i.toggleDragModeOnDblclick&&D(e,bt,this.onDblclick),D(t.ownerDocument,yt,this.onCropMove),D(t.ownerDocument,Mt,this.onCropEnd),i.responsive&&D(window,Dt,this.onResize)}},Gt={resize:function(){var t=this.options,i=this.container,e=this.containerData,a=Number(t.minContainerWidth)||200,n=Number(t.minContainerHeight)||100;if(!(this.disabled||e.width<=a||e.height<=n)){var o=i.offsetWidth/e.width;if(1!==o||i.offsetHeight!==e.height){var h,r;t.restore&&(h=this.getCanvasData(),r=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(m(h,function(t,i){h[i]=t*o})),this.setCropBoxData(m(r,function(t,i){r[i]=t*o})))}}},dblclick:function(){this.disabled||this.options.dragMode===ut||this.setDragMode(f(this.dragBox,at)?mt:pt)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*e,t)))},cropStart:function(t){if(!this.disabled){var i,e=this.options,a=this.pointers;t.changedTouches?m(t.changedTouches,function(t){a[t.identifier]=L(t)}):a[t.pointerId||0]=L(t),i=Object.keys(a).length>1&&e.zoomable&&e.zoomOnTouch?F:y(t.target,dt),Et.test(i)&&k(this.element,wt,{originalEvent:t,action:i})!==!1&&(t.preventDefault(),this.action=i,this.cropping=!1,i===Q&&(this.cropping=!0,v(this.dragBox,st)))}},cropMove:function(t){var i=this.action;if(!this.disabled&&i){var e=this.pointers;t.preventDefault(),k(this.element,vt,{originalEvent:t,action:i})!==!1&&(t.changedTouches?m(t.changedTouches,function(t){Xt(e[t.identifier]||{},L(t,!0))}):Xt(e[t.pointerId||0]||{},L(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?m(t.changedTouches,function(t){delete e[t.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,b(this.dragBox,st,this.cropped&&this.options.modal)),k(this.element,ft,{originalEvent:t,action:i}))}}},Vt={change:function(t){var i,e=this.options,a=this.canvasData,n=this.containerData,o=this.cropBoxData,h=this.pointers,r=this.action,s=e.aspectRatio,c=o.left,d=o.top,l=o.width,p=o.height,u=c+l,g=d+p,f=0,v=0,b=n.width,x=n.height,y=!0;!s&&t.shiftKey&&(s=l&&p?l/p:1),this.limited&&(f=o.minLeft,v=o.minTop,b=f+Math.min(n.width,a.width,a.left+a.width),x=v+Math.min(n.height,a.height,a.top+a.height));var M=h[Object.keys(h)[0]],C={x:M.endX-M.startX,y:M.endY-M.startY},D=function(t){switch(t){case K:u+C.x>b&&(C.x=b-u);break;case G:c+C.x<f&&(C.x=f-c);break;case J:d+C.y<v&&(C.y=v-d);break;case V:g+C.y>x&&(C.y=x-g)}};switch(r){case $:c+=C.x,d+=C.y;break;case K:if(C.x>=0&&(u>=b||s&&(d<=v||g>=x))){y=!1;break}D(K),l+=C.x,l<0&&(r=G,l=-l,c-=l),s&&(p=l/s,d+=(o.height-p)/2);break;case J:if(C.y<=0&&(d<=v||s&&(c<=f||u>=b))){y=!1;break}D(J),p-=C.y,d+=C.y,p<0&&(r=V,p=-p,d-=p),s&&(l=p*s,c+=(o.width-l)/2);break;case G:if(C.x<=0&&(c<=f||s&&(d<=v||g>=x))){y=!1;break}D(G),l-=C.x,c+=C.x,l<0&&(r=K,l=-l,c-=l),s&&(p=l/s,d+=(o.height-p)/2);break;case V:if(C.y>=0&&(g>=x||s&&(c<=f||u>=b))){y=!1;break}D(V),p+=C.y,p<0&&(r=J,p=-p,d-=p),s&&(l=p*s,c+=(o.width-l)/2);break;case _:if(s){if(C.y<=0&&(d<=v||u>=b)){y=!1;break}D(J),p-=C.y,d+=C.y,l=p*s}else D(J),D(K),C.x>=0?u<b?l+=C.x:C.y<=0&&d<=v&&(y=!1):l+=C.x,C.y<=0?d>v&&(p-=C.y,d+=C.y):(p-=C.y,d+=C.y);l<0&&p<0?(r=et,p=-p,l=-l,d-=p,c-=l):l<0?(r=tt,l=-l,c-=l):p<0&&(r=it,p=-p,d-=p);break;case tt:if(s){if(C.y<=0&&(d<=v||c<=f)){y=!1;break}D(J),p-=C.y,d+=C.y,l=p*s,c+=o.width-l}else D(J),D(G),C.x<=0?c>f?(l-=C.x,c+=C.x):C.y<=0&&d<=v&&(y=!1):(l-=C.x,c+=C.x),C.y<=0?d>v&&(p-=C.y,d+=C.y):(p-=C.y,d+=C.y);l<0&&p<0?(r=it,p=-p,l=-l,d-=p,c-=l):l<0?(r=_,l=-l,c-=l):p<0&&(r=et,p=-p,d-=p);break;case et:if(s){if(C.x<=0&&(c<=f||g>=x)){y=!1;break}D(G),l-=C.x,c+=C.x,p=l/s}else D(V),D(G),C.x<=0?c>f?(l-=C.x,c+=C.x):C.y>=0&&g>=x&&(y=!1):(l-=C.x,c+=C.x),C.y>=0?g<x&&(p+=C.y):p+=C.y;l<0&&p<0?(r=_,p=-p,l=-l,d-=p,c-=l):l<0?(r=it,l=-l,c-=l):p<0&&(r=tt,p=-p,d-=p);break;case it:if(s){if(C.x>=0&&(u>=b||g>=x)){y=!1;break}D(K),l+=C.x,p=l/s}else D(V),D(K),C.x>=0?u<b?l+=C.x:C.y>=0&&g>=x&&(y=!1):l+=C.x,C.y>=0?g<x&&(p+=C.y):p+=C.y;l<0&&p<0?(r=tt,p=-p,l=-l,d-=p,c-=l):l<0?(r=et,l=-l,c-=l):p<0&&(r=_,p=-p,d-=p);break;case Z:this.move(C.x,C.y),y=!1;break;case F:this.zoom(H(h),t),y=!1;break;case Q:if(!C.x||!C.y){y=!1;break}i=T(this.cropper),c=M.startX-i.left,d=M.startY-i.top,l=o.minWidth,p=o.minHeight,C.x>0?r=C.y>0?it:_:C.x<0&&(c-=l,r=C.y>0?et:tt),C.y<0&&(d-=p),this.cropped||(w(this.cropBox,ot),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}y&&(o.width=l,o.height=p,o.left=c,o.top=d,this.action=r,this.renderCropBox()),m(h,function(t){t.startX=t.endX,t.startY=t.endY})}},Jt={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&v(this.dragBox,st),w(this.cropBox,ot),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=Xt({},this.initialImageData),this.canvasData=Xt({},this.initialCanvasData),this.cropBoxData=Xt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(Xt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),w(this.dragBox,st),v(this.cropBox,ot)),this},replace:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),i?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,m(this.previews,function(i){i.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,w(this.cropper,nt)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,v(this.cropper,nt)),this},destroy:function(){var t=this.element;return t[q]?(t[q]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.canvasData,a=e.left,n=e.top;return this.moveTo(c(t)?t:a+Number(t),c(i)?i:n+Number(i))},moveTo:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.canvasData,a=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(s(t)&&(e.left=t,a=!0),s(i)&&(e.top=i,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=Number(t),t=t<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var a=this.options,n=this.canvasData,o=n.width,h=n.height,r=n.naturalWidth,c=n.naturalHeight;if(t=Number(t),t>=0&&this.ready&&!this.disabled&&a.zoomable){var d=r*t,p=c*t;if(k(this.element,kt,{ratio:t,oldRatio:o/r,originalEvent:e})===!1)return this;if(e){var m=this.pointers,u=T(this.cropper),g=m&&Object.keys(m).length?O(m):{pageX:e.pageX,pageY:e.pageY};n.left-=(d-o)*((g.pageX-u.left-n.left)/o),n.top-=(p-h)*((g.pageY-u.top-n.top)/h)}else l(i)&&s(i.x)&&s(i.y)?(n.left-=(d-o)*((i.x-n.left)/o),n.top-=(p-h)*((i.y-n.top)/h)):(n.left-=(d-o)/2,n.top-=(p-h)/2);n.width=d,n.height=p,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return t=Number(t),s(t)&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,s(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(s(i)?i:1,t)},scale:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData,a=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(s(t)&&(e.scaleX=t,a=!0),s(i)&&(e.scaleY=i,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var t,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.options,a=this.imageData,n=this.canvasData,o=this.cropBoxData;if(this.ready&&this.cropped){t={x:o.left-n.left,y:o.top-n.top,width:o.width,height:o.height};var h=a.width/a.naturalWidth;if(m(t,function(i,e){t[e]=i/h}),i){var r=Math.round(t.y+t.height),s=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=s-t.x,t.height=r-t.y}}else t={x:0,y:0,width:0,height:0};return e.rotatable&&(t.rotate=a.rotate||0),e.scalable&&(t.scaleX=a.scaleX||1,t.scaleY=a.scaleY||1),t},setData:function(t){var i=this.options,e=this.imageData,a=this.canvasData,n={};if(this.ready&&!this.disabled&&l(t)){var o=!1;i.rotatable&&s(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,o=!0),i.scalable&&(s(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,o=!0),s(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,o=!0)),o&&this.renderCanvas(!0,!0);var h=e.width/e.naturalWidth;s(t.x)&&(n.left=t.x*h+a.left),s(t.y)&&(n.top=t.y*h+a.top),s(t.width)&&(n.width=t.width*h),s(t.height)&&(n.height=t.height*h),this.setCropBoxData(n)}return this},getContainerData:function(){return this.ready?Xt({},this.containerData):{}},getImageData:function(){return this.sized?Xt({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&m(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&l(t)&&(s(t.left)&&(i.left=t.left),s(t.top)&&(i.top=t.top),s(t.width)?(i.width=t.width,i.height=t.width/e):s(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,i=this.cropBoxData;return this.ready&&this.cropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(t){var i,e,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&l(t)&&(s(t.left)&&(a.left=t.left),s(t.top)&&(a.top=t.top),s(t.width)&&t.width!==a.width&&(i=!0,a.width=t.width),s(t.height)&&t.height!==a.height&&(e=!0,a.height=t.height),n&&(i?a.height=a.width/n:e&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,e=X(this.image,this.imageData,i,t);if(!this.cropped)return e;var a=this.getData(),o=a.x,h=a.y,r=a.width,s=a.height,c=e.width/Math.floor(i.naturalWidth);1!==c&&(o*=c,h*=c,r*=c,s*=c);var d=r/s,l=z({aspectRatio:d,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=z({aspectRatio:d,width:t.minWidth||0,height:t.minHeight||0},"cover"),m=z({aspectRatio:d,width:t.width||(1!==c?e.width:r),height:t.height||(1!==c?e.height:s)}),g=m.width,f=m.height;g=Math.min(l.width,Math.max(p.width,g)),f=Math.min(l.height,Math.max(p.height,f));var v=document.createElement("canvas"),w=v.getContext("2d");v.width=u(g),v.height=u(f),w.fillStyle=t.fillColor||"transparent",w.fillRect(0,0,g,f);var b=t.imageSmoothingEnabled,x=void 0===b||b,y=t.imageSmoothingQuality;w.imageSmoothingEnabled=x,y&&(w.imageSmoothingQuality=y);var M,C,D,B,k,T,E=e.width,W=e.height,N=o,H=h;N<=-r||N>E?(N=0,M=0,D=0,k=0):N<=0?(D=-N,N=0,M=Math.min(E,r+N),k=M):N<=E&&(D=0,M=Math.min(r,E-N),k=M),M<=0||H<=-s||H>W?(H=0,C=0,B=0,T=0):H<=0?(B=-H,H=0,C=Math.min(W,s+H),T=C):H<=W&&(B=0,C=Math.min(s,W-H),T=C);var L=[N,H,M,C];if(k>0&&T>0){var O=g/r;L.push(D*O,B*O,k*O,T*O)}return w.drawImage.apply(w,[e].concat(n(L.map(function(t){return Math.floor(u(t))})))),v},setAspectRatio:function(t){var i=this.options;return this.disabled||c(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,a=this.face;if(this.ready&&!this.disabled){var n=t===pt,o=i.movable&&t===mt;t=n||o?t:ut,i.dragMode=t,M(e,dt,t),b(e,at,n),b(e,ct,o),i.cropBoxMovable||(M(a,dt,t),b(a,at,n),b(a,ct,o))}return this}},_t=P.Cropper,ti=function(){function t(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,t),!e||!Ht.test(e.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=e,this.options=Xt({},Lt,l(a)&&a),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return a(t,[{key:"init",value:function(){var t,i=this.element,e=i.tagName.toLowerCase();if(!i[q]){if(i[q]=this,"img"===e){if(this.isImg=!0,t=i.getAttribute("src")||"",this.originalUrl=t,!t)return;t=i.src}else"canvas"===e&&window.HTMLCanvasElement&&(t=i.toDataURL());this.load(t)}}},{key:"load",value:function(t){var i=this;if(t){this.url=t,
this.imageData={};var e=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),!a.checkOrientation||!window.ArrayBuffer)return void this.clone();if(Wt.test(t))return void(Nt.test(t)?this.read(S(t)):this.clone());var n=new XMLHttpRequest,o=this.clone.bind(this);this.reloading=!0,this.xhr=n,n.ontimeout=o,n.onabort=o,n.onerror=o,n.onprogress=function(){n.getResponseHeader("content-type")!==Tt&&n.abort()},n.onload=function(){i.read(n.response)},n.onloadend=function(){i.reloading=!1,i.xhr=null},a.checkCrossOrigin&&E(t)&&e.crossOrigin&&(t=W(t)),n.open("GET",t),n.responseType="arraybuffer",n.withCredentials="use-credentials"===e.crossOrigin,n.send()}}},{key:"read",value:function(t){var i=this.options,e=this.imageData,a=I(t),n=0,o=1,h=1;if(a>1){this.url=A(t,Tt);var r=j(a);n=r.rotate,o=r.scaleX,h=r.scaleY}i.rotatable&&(e.rotate=n),i.scalable&&(e.scaleX=o,e.scaleY=h),this.clone()}},{key:"clone",value:function(){var t,i,e=this.element,a=this.url;this.options.checkCrossOrigin&&E(a)&&(t=e.crossOrigin,t?i=a:(t="anonymous",i=W(a))),this.crossOrigin=t,this.crossOriginUrl=i;var n=document.createElement("img");t&&(n.crossOrigin=t),n.src=i||a,this.image=n,n.onload=this.start.bind(this),n.onerror=this.stop.bind(this),v(n,ht),e.parentNode.insertBefore(n,e.nextSibling)}},{key:"start",value:function(){var t=this,i=this.isImg?this.element:this.image;i.onload=null,i.onerror=null,this.sizing=!0;var e=P.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(P.navigator.userAgent),a=function(i,e){Xt(t.imageData,{naturalWidth:i,naturalHeight:e,aspectRatio:i/e}),t.sizing=!1,t.sized=!0,t.build()};if(i.naturalWidth&&!e)return void a(i.naturalWidth,i.naturalHeight);var n=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=n,n.onload=function(){a(n.width,n.height),e||o.removeChild(n)},n.src=i.src,e||(n.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(n))}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var t=this.element,i=this.options,e=this.image,a=t.parentNode,n=document.createElement("div");n.innerHTML=Ot;var o=n.querySelector(".".concat(q,"-container")),h=o.querySelector(".".concat(q,"-canvas")),r=o.querySelector(".".concat(q,"-drag-box")),s=o.querySelector(".".concat(q,"-crop-box")),c=s.querySelector(".".concat(q,"-face"));this.container=a,this.cropper=o,this.canvas=h,this.dragBox=r,this.cropBox=s,this.viewBox=o.querySelector(".".concat(q,"-view-box")),this.face=c,h.appendChild(e),v(t,ot),a.insertBefore(o,t.nextSibling),this.isImg||w(e,ht),this.initPreview(),this.bind(),i.initialAspectRatio=Math.max(0,i.initialAspectRatio)||NaN,i.aspectRatio=Math.max(0,i.aspectRatio)||NaN,i.viewMode=Math.max(0,Math.min(3,Math.round(i.viewMode)))||0,v(s,ot),i.guides||v(s.getElementsByClassName("".concat(q,"-dashed")),ot),i.center||v(s.getElementsByClassName("".concat(q,"-center")),ot),i.background&&v(o,"".concat(q,"-bg")),i.highlight||v(c,rt),i.cropBoxMovable&&(v(c,ct),M(c,dt,$)),i.cropBoxResizable||(v(s.getElementsByClassName("".concat(q,"-line")),ot),v(s.getElementsByClassName("".concat(q,"-point")),ot)),this.render(),this.ready=!0,this.setDragMode(i.dragMode),i.autoCrop&&this.crop(),this.setData(i.data),p(i.ready)&&B(t,Ct,i.ready,{once:!0}),k(t,Ct)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),w(this.element,ot))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=_t,t}},{key:"setDefaults",value:function(t){Xt(Lt,l(t)&&t)}}]),t}();return Xt(ti.prototype,Zt,Ft,Kt,Gt,Vt,Jt),ti});