!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"inset",(function(){return a})),window.Module={onRuntimeInitialized:()=>{console.log("[onRuntimeInitialized]"),p(Module)}};const o=e=>Array.from(Array(e).keys()),a=(e,t,n,o,a,r)=>[e+a,t+r,n-2*a,o-2*r],r=(e,t,n)=>{console.log("[imageDataFrom1Channel]");const o=new Uint8ClampedArray(t*n*4);return e.forEach((e,t)=>{const n=4*t;o[n]=e,o[n+1]=e,o[n+2]=e,o[n+3]=255}),new ImageData(o,t,n)},i=(e,t,n)=>{console.log("[imageDataFrom4Channels]");const o=new Uint8ClampedArray(e);return new ImageData(o,t,n)},l=(e,t)=>{console.log("[drawOutputImage]");const n=document.getElementById(t);n.width=e.width,n.height=e.height,n.getContext("2d").putImageData(e,0,0);const o=document.getElementById(`${t}-overlay`);o.width=e.width,o.height=e.height},c=(e,t,n)=>{console.log("[cropCells]");const r=document.getElementById(e).getContext("2d"),i=document.getElementById(t),[l,c,d,u]=a(...n,2,2),g=d/9,s=u/9;for(const e of o(9)){const t=document.createElement("div"),n=c+e*s;for(const e of o(9)){const o=l+e*g,i=r.getImageData(...a(o,n,g,s,2,2)),c=document.createElement("canvas");c.setAttribute("class","cell"),c.width=i.width,c.height=i.height,c.getContext("2d").putImageData(i,0,0),t.appendChild(c)}i.appendChild(t)}},d=e=>{const t=document.getElementById(e);t.getContext("2d").clearRect(0,0,t.width,t.height)},u=e=>{const t=document.getElementById(e);for(;t.firstChild;)t.removeChild(t.firstChild)},g=()=>{d("output-image-1"),d("output-image-1-overlay"),d("output-image-2"),d("output-image-2-overlay"),u("cells-1"),u("cells-2")},s=async e=>{console.log("[loadInputImage]");const t=document.getElementById("input-image-selector").options[e].value,n=new Image;await new Promise(e=>{n.onload=e,n.src=t});const o=document.getElementById("input-image");o.width=n.width,o.height=n.height,o.getContext("2d").drawImage(n,0,0,n.width,n.height);const a=document.getElementById("input-image-overlay");a.width=n.width,a.height=n.height,g()},m=e=>{console.log("[onSelectImageSudoku]"),s(e.target.selectedIndex)},h=(e,t)=>()=>{console.log("[onProcessImage]"),g();const{data:n,width:d,height:u}=(()=>{console.log("[getImageData]");const e=document.getElementById("input-image");return e.getContext("2d").getImageData(0,0,e.width,e.height)})(),s=t(n,d,u),m=s/e.HEAP32.BYTES_PER_ELEMENT,h=e.HEAP32.slice(m,m+20),[p,y,f,I,w,E,v,C,b,x,B,P]=h,S=[p,y,f,I],A=o(4).map(e=>({x:h[12+2*e],y:h[12+2*e+1]})),D=w*E*v,k=e.HEAPU8.slice(C,C+D),_=1===v?r(k,w,E):i(k,w,E);l(_,"output-image-1"),((e,t)=>{console.log("[drawBoundingBox]");const n=document.getElementById(t).getContext("2d");n.strokeStyle="red",n.lineWidth=1,n.strokeRect(...a(...e,2,2))})(S,"output-image-1-overlay"),((e,t)=>{console.log("[drawCorners]");const n=document.getElementById(t).getContext("2d");n.strokeStyle="magenta",n.lineWidth=1;const o=new Path2D;o.moveTo(e[0].x,e[0].y),e.slice(1).forEach(e=>{o.lineTo(e.x,e.y)}),o.closePath(),n.stroke(o)})(A,"output-image-1-overlay");const O=b*x*B,j=e.HEAPU8.slice(P,P+O),M=1===B?r(j,b,x):i(j,b,x);l(M,"output-image-2");const T=[0,0,M.width,M.height];c("output-image-1","cells-1",S),c("output-image-2","cells-2",T),e._free(s)},p=e=>{console.log("[init]");const t=document.getElementById("input-image-selector");o(2).forEach(e=>{const n=e+1,o=`/images/sudoku-${n}.png`,a=`Sudoku ${n}`,r=document.createElement("option");r.setAttribute("value",o),r.innerText=a,t.appendChild(r)}),t.addEventListener("change",m),s(0);const n=(e=>{console.log("[wrapProcessImage]");return e.cwrap("processImage","number",["array","number","number"])})(e);document.getElementById("process-image-btn").addEventListener("click",h(e,n))}}]);
//# sourceMappingURL=bundle.js.map