!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).LgZoom=e()}}(function(){return function e(t,o,r){function i(s,a){if(!o[s]){if(!t[s]){var n="function"==typeof require&&require;if(!a&&n)return n(s,!0);if(l)return l(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=o[s]={exports:{}};t[s][0].call(u.exports,function(e){var o=t[s][1][e];return i(o||e)},u,u.exports,e,t,o,r)}return o[s].exports}for(var l="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,o){!function(e,t){if(void 0!==o)t();else{var r={exports:{}};t(),e.lgZoom=r.exports}}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},t={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300},o=function(o){return this.el=o,this.core=window.lgData[this.el.getAttribute("lg-uid")],this.core.s=e({},t,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=window.innerWidth/2,this.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)),this};o.prototype.init=function(){var e=this,t='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';e.core.s.actualSize&&(t+='<span id="lg-actual-size" class="lg-icon"></span>'),this.core.outer.querySelector(".lg-toolbar").insertAdjacentHTML("beforeend",t),utils.on(e.core.el,"onSlideItemLoad.lgtmzoom",function(t){var o=e.core.s.enableZoomAfter+t.detail.delay;utils.hasClass(document.body,"lg-from-hash")&&t.detail.delay?o=0:utils.removeClass(document.body,"lg-from-hash"),e.zoomabletimeout=setTimeout(function(){utils.addClass(e.core.___slide[t.detail.index],"lg-zoomable")},o+30)});var o=1,r=function(t){var o=e.core.outer.querySelector(".lg-current .lg-image"),r=(window.innerWidth-o.clientWidth)/2,i=(window.innerHeight-o.clientHeight)/2+(document.documentElement.scrollTop||document.body.scrollTop),l=(t-1)*(e.pageX-r),s=(t-1)*(e.pageY-i);utils.setVendor(o,"Transform","scale3d("+t+", "+t+", 1)"),o.setAttribute("data-scale",t),o.parentElement.style.left=-l+"px",o.parentElement.style.top=-s+"px",o.parentElement.setAttribute("data-x",l),o.parentElement.setAttribute("data-y",s)},i=function(){o>1?utils.addClass(e.core.outer,"lg-zoomed"):e.resetZoom(),o<1&&(o=1),r(o)},l=function(t,r,l,s){var a,n=r.clientWidth;a=e.core.s.dynamic?e.core.s.dynamicEl[l].width||r.naturalWidth||n:e.core.items[l].getAttribute("data-width")||r.naturalWidth||n;utils.hasClass(e.core.outer,"lg-zoomed")?o=1:a>n&&(o=a/n||2),s?(e.pageX=window.innerWidth/2,e.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)):(e.pageX=t.pageX||t.targetTouches[0].pageX,e.pageY=t.pageY||t.targetTouches[0].pageY),i(),setTimeout(function(){utils.removeClass(e.core.outer,"lg-grabbing"),utils.addClass(e.core.outer,"lg-grab")},10)},s=!1;utils.on(e.core.el,"onAferAppendSlide.lgtmzoom",function(t){var o=t.detail.index,r=e.core.___slide[o].querySelector(".lg-image");e.core.isTouch||utils.on(r,"dblclick",function(e){l(e,r,o)}),e.core.isTouch&&utils.on(r,"touchstart",function(e){s?(clearTimeout(s),s=null,l(e,r,o)):s=setTimeout(function(){s=null},300),e.preventDefault()})}),utils.on(window,"resize.lgzoom scroll.lgzoom orientationchange.lgzoom",function(){e.pageX=window.innerWidth/2,e.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop),r(o)}),utils.on(document.getElementById("lg-zoom-out"),"click.lg",function(){e.core.outer.querySelector(".lg-current .lg-image")&&(o-=e.core.s.scale,i())}),utils.on(document.getElementById("lg-zoom-in"),"click.lg",function(){e.core.outer.querySelector(".lg-current .lg-image")&&(o+=e.core.s.scale,i())}),utils.on(document.getElementById("lg-actual-size"),"click.lg",function(t){l(t,e.core.___slide[e.core.index].querySelector(".lg-image"),e.core.index,!0)}),utils.on(e.core.el,"onBeforeSlide.lgtm",function(){o=1,e.resetZoom()}),e.core.isTouch||e.zoomDrag(),e.core.isTouch&&e.zoomSwipe()},o.prototype.resetZoom=function(){utils.removeClass(this.core.outer,"lg-zoomed");for(var e=0;e<this.core.___slide.length;e++)this.core.___slide[e].querySelector(".lg-img-wrap")&&(this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("style"),this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-x"),this.core.___slide[e].querySelector(".lg-img-wrap").removeAttribute("data-y"));for(var t=0;t<this.core.___slide.length;t++)this.core.___slide[t].querySelector(".lg-image")&&(this.core.___slide[t].querySelector(".lg-image").removeAttribute("style"),this.core.___slide[t].querySelector(".lg-image").removeAttribute("data-scale"));this.pageX=window.innerWidth/2,this.pageY=window.innerHeight/2+(document.documentElement.scrollTop||document.body.scrollTop)},o.prototype.zoomSwipe=function(){for(var e=this,t={},o={},r=!1,i=!1,l=!1,s=0;s<e.core.___slide.length;s++)utils.on(e.core.___slide[s],"touchstart.lg",function(o){if(utils.hasClass(e.core.outer,"lg-zoomed")){var r=e.core.___slide[e.core.index].querySelector(".lg-object");l=r.offsetHeight*r.getAttribute("data-scale")>e.core.outer.querySelector(".lg").clientHeight,((i=r.offsetWidth*r.getAttribute("data-scale")>e.core.outer.querySelector(".lg").clientWidth)||l)&&(o.preventDefault(),t={x:o.targetTouches[0].pageX,y:o.targetTouches[0].pageY})}});for(var a=0;a<e.core.___slide.length;a++)utils.on(e.core.___slide[a],"touchmove.lg",function(s){if(utils.hasClass(e.core.outer,"lg-zoomed")){var a,n,c=e.core.___slide[e.core.index].querySelector(".lg-img-wrap");s.preventDefault(),r=!0,o={x:s.targetTouches[0].pageX,y:s.targetTouches[0].pageY},utils.addClass(e.core.outer,"lg-zoom-dragging"),n=l?-Math.abs(c.getAttribute("data-y"))+(o.y-t.y):-Math.abs(c.getAttribute("data-y")),a=i?-Math.abs(c.getAttribute("data-x"))+(o.x-t.x):-Math.abs(c.getAttribute("data-x")),(Math.abs(o.x-t.x)>15||Math.abs(o.y-t.y)>15)&&(c.style.left=a+"px",c.style.top=n+"px")}});for(var n=0;n<e.core.___slide.length;n++)utils.on(e.core.___slide[n],"touchend.lg",function(){utils.hasClass(e.core.outer,"lg-zoomed")&&r&&(r=!1,utils.removeClass(e.core.outer,"lg-zoom-dragging"),e.touchendZoom(t,o,i,l))})},o.prototype.zoomDrag=function(){for(var e=this,t={},o={},r=!1,i=!1,l=!1,s=!1,a=0;a<e.core.___slide.length;a++)utils.on(e.core.___slide[a],"mousedown.lgzoom",function(o){var i=e.core.___slide[e.core.index].querySelector(".lg-object");s=i.offsetHeight*i.getAttribute("data-scale")>e.core.outer.querySelector(".lg").clientHeight,l=i.offsetWidth*i.getAttribute("data-scale")>e.core.outer.querySelector(".lg").clientWidth,utils.hasClass(e.core.outer,"lg-zoomed")&&utils.hasClass(o.target,"lg-object")&&(l||s)&&(o.preventDefault(),t={x:o.pageX,y:o.pageY},r=!0,e.core.outer.scrollLeft+=1,e.core.outer.scrollLeft-=1,utils.removeClass(e.core.outer,"lg-grab"),utils.addClass(e.core.outer,"lg-grabbing"))});utils.on(window,"mousemove.lgzoom",function(a){if(r){var n,c,u=e.core.___slide[e.core.index].querySelector(".lg-img-wrap");i=!0,o={x:a.pageX,y:a.pageY},utils.addClass(e.core.outer,"lg-zoom-dragging"),c=s?-Math.abs(u.getAttribute("data-y"))+(o.y-t.y):-Math.abs(u.getAttribute("data-y")),n=l?-Math.abs(u.getAttribute("data-x"))+(o.x-t.x):-Math.abs(u.getAttribute("data-x")),u.style.left=n+"px",u.style.top=c+"px"}}),utils.on(window,"mouseup.lgzoom",function(a){r&&(r=!1,utils.removeClass(e.core.outer,"lg-zoom-dragging"),!i||t.x===o.x&&t.y===o.y||(o={x:a.pageX,y:a.pageY},e.touchendZoom(t,o,l,s)),i=!1),utils.removeClass(e.core.outer,"lg-grabbing"),utils.addClass(e.core.outer,"lg-grab")})},o.prototype.touchendZoom=function(e,t,o,r){var i=this.core.___slide[this.core.index].querySelector(".lg-img-wrap"),l=this.core.___slide[this.core.index].querySelector(".lg-object"),s=-Math.abs(i.getAttribute("data-x"))+(t.x-e.x),a=-Math.abs(i.getAttribute("data-y"))+(t.y-e.y),n=(this.core.outer.querySelector(".lg").clientHeight-l.offsetHeight)/2,c=Math.abs(l.offsetHeight*Math.abs(l.getAttribute("data-scale"))-this.core.outer.querySelector(".lg").clientHeight+n),u=(this.core.outer.querySelector(".lg").clientWidth-l.offsetWidth)/2,d=Math.abs(l.offsetWidth*Math.abs(l.getAttribute("data-scale"))-this.core.outer.querySelector(".lg").clientWidth+u);(Math.abs(t.x-e.x)>15||Math.abs(t.y-e.y)>15)&&(r&&(a<=-c?a=-c:a>=-n&&(a=-n)),o&&(s<=-d?s=-d:s>=-u&&(s=-u)),r?i.setAttribute("data-y",Math.abs(a)):a=-Math.abs(i.getAttribute("data-y")),o?i.setAttribute("data-x",Math.abs(s)):s=-Math.abs(i.getAttribute("data-x")),i.style.left=s+"px",i.style.top=a+"px")},o.prototype.destroy=function(){utils.off(this.core.el,".lgzoom"),utils.off(window,".lgzoom");for(var e=0;e<this.core.___slide.length;e++)utils.off(this.core.___slide[e],".lgzoom");utils.off(this.core.el,".lgtmzoom"),this.resetZoom(),clearTimeout(this.zoomabletimeout),this.zoomabletimeout=!1},window.lgModules.zoom=o})},{}]},{},[1])(1)});