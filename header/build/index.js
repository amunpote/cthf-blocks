(()=>{"use strict";var e,t={569:()=>{const e=window.wp.blocks,t=window.wp.i18n,l=window.wp.blockEditor,o=window.wp.element,s=window.wp.components,n=window.wp.primitives,r=window.ReactJSXRuntime,i=(0,r.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(n.Path,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})}),a=(0,r.jsx)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)(n.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 0 1-6.5 6.5v-13a6.5 6.5 0 0 1 6.5 6.5Z"})}),c=(0,o.memo)((({attributes:e,setAttributes:t})=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{},"cozy-block-setting")}))),d=window.wp.data,C=(0,o.memo)((({attributes:e,setAttributes:o})=>((0,d.select)("core/editor").getEditorSettings().colors,(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"",style:{padding:"0 16px"},children:(0,r.jsx)(l.PanelColorSettings,{className:"border-none",enableAlpha:!0,title:(0,t.__)("Color","cozy-addons"),colorSettings:[{label:(0,t.__)("Text","cozy-addons"),value:e.color.text,onChange:t=>o({...e,color:{...e.color,text:t}})},{label:(0,t.__)("Background","cozy-addons"),value:e.color.bg,onChange:t=>o({...e,color:{...e.color,bg:t}})}]})})},"cthf-block__style")})))),h=(0,o.memo)((({attributes:e,setAttributes:o})=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.InspectorControls,{children:(0,r.jsx)(s.TabPanel,{tabs:[{title:(0,t.__)("Settings","cozy-addons"),name:"cozy-tab__one",icon:i,className:"cozy-block__tab-control"},{title:(0,t.__)("Styles","cozy-addons"),name:"cozy-tab__two",icon:a,className:"cozy-block__tab-control"}],children:t=>(0,r.jsxs)(r.Fragment,{children:["cozy-tab__one"===t.name&&(0,r.jsx)(c,{attributes:e,setAttributes:o}),"cozy-tab__two"===t.name&&(0,r.jsx)(C,{attributes:e,setAttributes:o})]})})})})));function b(e,t){var l,o;return`\n      #${e} {\n       ${l="padding",o=t.padding,o&&Object.keys(o).length<4?1===Object.keys(o).length?`\n        ${l}: ${o};\n      `:`\n        ${l}: ${o.width} ${o.style} ${o.color};\n      `:o&&4===Object.keys(o).length?`\n      ${l}: ${o?.top} ${o?.right} ${o?.bottom} ${o?.left};\n    `:""}\n      }\n    `}const p=(0,o.memo)((({blockID:e,attributes:t})=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{id:e,className:"cthf-block__header",children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]})}))),u=JSON.parse('{"UU":"cthf-blocks/header","h_":""}'),x=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("svg",{width:"28",height:"23",viewBox:"0 0 28 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M26 2H2V21H26V2ZM0 0V23H28V0H0Z",fill:"#0C50FF"}),(0,r.jsx)("path",{d:"M2 10.9773H26V8.88639H2V10.9773Z",fill:"#0C50FF"}),(0,r.jsx)("path",{d:"M15.0433 5.74994C15.0433 6.08286 14.9829 6.36609 14.8622 6.59962C14.7424 6.83316 14.5789 7.01155 14.3717 7.13477C14.1654 7.25701 13.9335 7.31813 13.6759 7.31813C13.4164 7.31813 13.1835 7.25651 12.9772 7.13328C12.7709 7.01006 12.6079 6.83167 12.4881 6.59813C12.3684 6.3646 12.3085 6.08187 12.3085 5.74994C12.3085 5.41703 12.3684 5.1338 12.4881 4.90026C12.6079 4.66673 12.7709 4.48884 12.9772 4.36661C13.1835 4.24338 13.4164 4.18176 13.6759 4.18176C13.9335 4.18176 14.1654 4.24338 14.3717 4.36661C14.5789 4.48884 14.7424 4.66673 14.8622 4.90026C14.9829 5.1338 15.0433 5.41703 15.0433 5.74994ZM14.4173 5.74994C14.4173 5.53429 14.3864 5.35243 14.3246 5.20436C14.2638 5.05629 14.1778 4.94399 14.0666 4.86747C13.9553 4.79095 13.8251 4.75269 13.6759 4.75269C13.5266 4.75269 13.3964 4.79095 13.2852 4.86747C13.174 4.94399 13.0875 5.05629 13.0257 5.20436C12.9648 5.35243 12.9344 5.53429 12.9344 5.74994C12.9344 5.96559 12.9648 6.14746 13.0257 6.29553C13.0875 6.4436 13.174 6.5559 13.2852 6.63242C13.3964 6.70894 13.5266 6.7472 13.6759 6.7472C13.8251 6.7472 13.9553 6.70894 14.0666 6.63242C14.1778 6.5559 14.2638 6.4436 14.3246 6.29553C14.3864 6.14746 14.4173 5.96559 14.4173 5.74994Z",fill:"#0C50FF"}),(0,r.jsx)("path",{d:"M11.2416 5.21032C11.2216 5.13778 11.1936 5.07368 11.1575 5.01803C11.1213 4.96138 11.0771 4.91368 11.0248 4.87492C10.9735 4.83517 10.9146 4.80486 10.848 4.78399C10.7825 4.76312 10.7097 4.75269 10.6299 4.75269C10.4806 4.75269 10.3495 4.79145 10.2364 4.86896C10.1242 4.94647 10.0367 5.05927 9.97399 5.20734C9.91126 5.35442 9.87989 5.53429 9.87989 5.74696C9.87989 5.95963 9.91078 6.1405 9.97257 6.28957C10.0344 6.43863 10.1218 6.55242 10.2349 6.63093C10.348 6.70844 10.4816 6.7472 10.6356 6.7472C10.7753 6.7472 10.8946 6.72136 10.9935 6.66969C11.0933 6.61702 11.1693 6.54298 11.2216 6.44758C11.2748 6.35217 11.3015 6.23938 11.3015 6.1092L11.4269 6.12857H10.6741V5.64262H11.896V6.02721C11.896 6.29553 11.8419 6.52609 11.7335 6.71888C11.6251 6.91068 11.4759 7.05875 11.2858 7.1631C11.0957 7.26645 10.878 7.31813 10.6327 7.31813C10.359 7.31813 10.1185 7.25502 9.91126 7.12881C9.70403 7.00161 9.54243 6.82124 9.42647 6.5877C9.31145 6.35317 9.25394 6.07491 9.25394 5.75293C9.25394 5.50548 9.28816 5.28486 9.3566 5.09107C9.42599 4.89629 9.52295 4.73132 9.64747 4.59617C9.772 4.46101 9.91696 4.35816 10.0824 4.2876C10.2478 4.21704 10.4269 4.18176 10.6199 4.18176C10.7853 4.18176 10.9393 4.2071 11.0819 4.25779C11.2245 4.30748 11.3509 4.37803 11.4612 4.46946C11.5724 4.56089 11.6632 4.66971 11.7335 4.79592C11.8038 4.92113 11.849 5.05927 11.869 5.21032H11.2416Z",fill:"#0C50FF"}),(0,r.jsx)("path",{d:"M8.84795 5.74994C8.84795 6.08286 8.78759 6.36609 8.66687 6.59962C8.54709 6.83316 8.3836 7.01155 8.17637 7.13477C7.9701 7.25701 7.73816 7.31813 7.48055 7.31813C7.22105 7.31813 6.98816 7.25651 6.78189 7.13328C6.57561 7.01006 6.41259 6.83167 6.29282 6.59813C6.17305 6.3646 6.11316 6.08187 6.11316 5.74994C6.11316 5.41703 6.17305 5.1338 6.29282 4.90026C6.41259 4.66673 6.57561 4.48884 6.78189 4.36661C6.98816 4.24338 7.22105 4.18176 7.48055 4.18176C7.73816 4.18176 7.9701 4.24338 8.17637 4.36661C8.3836 4.48884 8.54709 4.66673 8.66687 4.90026C8.78759 5.1338 8.84795 5.41703 8.84795 5.74994ZM8.222 5.74994C8.222 5.53429 8.19111 5.35243 8.12932 5.20436C8.06848 5.05629 7.98246 4.94399 7.87124 4.86747C7.76002 4.79095 7.62979 4.75269 7.48055 4.75269C7.33132 4.75269 7.20109 4.79095 7.08987 4.86747C6.97865 4.94399 6.89215 5.05629 6.83036 5.20436C6.76953 5.35243 6.73911 5.53429 6.73911 5.74994C6.73911 5.96559 6.76953 6.14746 6.83036 6.29553C6.89215 6.4436 6.97865 6.5559 7.08987 6.63242C7.20109 6.70894 7.33132 6.7472 7.48055 6.7472C7.62979 6.7472 7.76002 6.70894 7.87124 6.63242C7.98246 6.5559 8.06848 6.4436 8.12932 6.29553C8.19111 6.14746 8.222 5.96559 8.222 5.74994Z",fill:"#0C50FF"}),(0,r.jsx)("path",{d:"M4 7.27627V4.22339H4.6174V6.74411H5.8693V7.27627H4Z",fill:"#0C50FF"}),(0,r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 5.22722H22H20V4.18176H24V5.22722Z",fill:"#0C50FF"}),(0,r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 6.79545H22H20V5.75H24V6.79545Z",fill:"#0C50FF"})]})});(0,e.registerBlockType)(u.UU,{title:(0,t.__)("Header Builder","cozy-addons"),description:(0,t.__)(u.h_,"cozy-addons"),icon:{src:x},edit:function({attributes:e,setAttributes:t,clientId:o}){if(e.cover)return(0,r.jsx)("img",{src:e.cover});e.clientId=o;const s=`cozyBlock_${o.replace(/-/gi,"_")}`,n=(0,l.useBlockProps)({className:"cthf-block__wrapper"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{...n,children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:b(s,e)}}),(0,r.jsx)(p,{blockID:s,attributes:e})]}),(0,r.jsx)(h,{attributes:e,setAttributes:t})]})},save:function({attributes:e}){}})}},l={};function o(e){var s=l[e];if(void 0!==s)return s.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,l,s,n)=>{if(!l){var r=1/0;for(d=0;d<e.length;d++){for(var[l,s,n]=e[d],i=!0,a=0;a<l.length;a++)(!1&n||r>=n)&&Object.keys(o.O).every((e=>o.O[e](l[a])))?l.splice(a--,1):(i=!1,n<r&&(r=n));if(i){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,s,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var s,n,[r,i,a]=l,c=0;if(r.some((t=>0!==e[t]))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(a)var d=a(o)}for(t&&t(l);c<r.length;c++)n=r[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},l=globalThis.webpackChunkheader=globalThis.webpackChunkheader||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var s=o.O(void 0,[350],(()=>o(569)));s=o.O(s)})();