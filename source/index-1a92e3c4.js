import{b as C,g as y,s as m,l as r,d as s,m as u,r as R,n as h,_ as B,a as g,p as I,f as $,k as x}from"./index-11b38b24.js";import{B as k}from"./CustomBtn1-298678bb.js";function _(o){return y("MuiIconButton",o)}const M=C("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),O=M,T=["edge","children","className","color","disabled","disableFocusRipple","size"],U=o=>{const{classes:a,disabled:e,color:t,edge:n,size:i}=o,l={root:["root",e&&"disabled",t!=="default"&&`color${r(t)}`,n&&`edge${r(n)}`,`size${r(i)}`]};return $(l,_,a)},V=m(k,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.color!=="default"&&a[`color${r(e.color)}`],e.edge&&a[`edge${r(e.edge)}`],a[`size${r(e.size)}`]]}})(({theme:o,ownerState:a})=>s({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:o,ownerState:a})=>{var e;const t=(e=(o.vars||o).palette)==null?void 0:e[a.color];return s({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&s({color:t==null?void 0:t.main},!a.disableRipple&&{"&:hover":s({},t&&{backgroundColor:o.vars?`rgba(${t.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(t.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${O.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),E=R.forwardRef(function(a,e){const t=h({props:a,name:"MuiIconButton"}),{edge:n=!1,children:i,className:l,color:v="default",disabled:c=!1,disableFocusRipple:d=!1,size:b="medium"}=t,f=B(t,T),p=s({},t,{edge:n,color:v,disabled:c,disableFocusRipple:d,size:b}),z=U(p);return g(V,s({className:I(z.root,l),centerRipple:!0,focusRipple:!d,disabled:c,ref:e,ownerState:p},f,{children:i}))}),N=E,P=x(g("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopyOutlined"),j=o=>window.navigator.clipboard.writeText(o);export{P as C,N as I,j as _};
