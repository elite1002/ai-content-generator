import{k as I,a as e,s as P,F as _,v as k,H as B,I as T,J as j,r as L,Z as l,K as F,j as n,a1 as G,ad as v,V as K,N as b}from"./index-11b38b24.js";import{b as S,P as w,T as s,a as A,C as E}from"./CustomBtn1-298678bb.js";import{I as H,C as O,_ as R}from"./index-1a92e3c4.js";import{G as f}from"./Grid-d888edc5.js";const z=I(e("path",{d:"m19.77 4.93 1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"}),"DoneOutlineOutlined"),J=r=>{const a="vladimir",c="RememberYouDamnPassword2309!$",y="https://suboxone-physicians.com//wp-json/wp/v2/posts",x={username:a,password:c},u={title:r.title,content:r.content,status:r.status};return S.post(y,u,{auth:x})},Q=P(_)(({theme:r})=>({display:"flex",flexDirection:"column",flexGrow:1,"& > .header":{display:"flex",flexDirection:"column",borderBottom:`1px solid ${r.palette.divider}`,padding:"1rem 3.5rem",[r.breakpoints.down("md")]:{gap:4,flexDirection:"column",padding:"0.5rem 1.5rem"},"& .header-action-container":{justifyContent:"center",alignItems:"center",[r.breakpoints.down("md")]:{flexDirection:"column"}}},"& > .content":{display:"flex",flexGrow:1,justifyContent:"center",alignItems:"center",margin:"1rem 3rem",[r.breakpoints.down("md")]:{margin:"0.5rem 1rem"}}})),q=()=>{const r=k(),a=B(),c=T(),{_setting:{loading:y},user_inputs:x,keywords:{selected:u},titles:{selected:m},outlines:{selected:o},article_intros:{selected:h},article_bodies:{selected:d},article_conclusions:{selected:g}}=j(t=>t);L.useEffect(()=>{if(!u.length){l.error("❗ Keywords are not selected yet."),a("/step1");return}if(!m){l.error("❗ Title is not selected yet."),a("/step2");return}if(!o||!o.length){l.error("❗ Outline is not selected yet."),a("/step3");return}if(!h){l.error("❗ Introduction paragraph is not selected yet."),a("/step4");return}if(!d||!d.length){l.error("❗ Body Content is not selected yet."),a("/step5");return}if(!g){l.error("❗ Conclusion paragraph is not selected yet."),a("/step6");return}},[]);const C=()=>{let t=`${m}


1. Introduction

${h}


`;return o.map((i,p)=>{t+=`${p+2}. ${i}

${d[p]}


`}),t+=`${o.length+2}. Conclusion

${g}`,t},N=()=>R(C()),$=()=>{let t="<!-- wp:paragraph -->";return t+=`<h4>1. Introduction</h4>

${h}


`,o.map((i,p)=>{t+=`<h4>${p+2}. ${i}</h4>

${d[p]}


`}),t+=`<h4>${o.length+2}. Conclusion</h4>

${g}`,t+="<!-- /wp:paragraph -->",t},D=()=>{c(K()),J({title:m,content:$(),status:"publish"}).then(t=>{console.log(t.data),l.success("👍 Successfully created !"),c(b())}).catch(t=>{console.error(t),l.error(t),c(b())})};return e(F,{children:n(Q,{children:[e(w,{className:"gap-4 header",children:n("div",{className:"flex gap-4",children:[n(_,{className:"flex flex-col mr-auto",children:[n(s,{variant:"h4",children:["Final : Preivew ",e("u",{children:"Result Blog Post"})]}),n(s,{variant:"caption",children:[e("b",{children:"Description:"})," ",x.description]}),n(s,{variant:"caption",children:[e("b",{children:"Keywords:"})," ",u.join(", ")]})]}),e(_,{className:"flex items-center gap-4 shrink-0 header-action-container",children:y?e(A,{}):n(E,{variant:"contained",onClick:()=>{D()},children:[e(z,{className:"mr-2"}),e("span",{children:"Done"})]})})]})}),e("div",{className:"content",children:n(w,{className:"flex flex-col py-4 rounded-xl",elevation:8,children:[n("div",{className:"flex items-center px-4",children:[e(s,{className:"mx-auto my-4",variant:"h5",align:"center",fontWeight:800,children:m}),e(G,{title:"Copy to clipboard",children:e(H,{onClick:()=>N(),children:e(O,{})})})]}),e(v,{className:"mb-4 border-b-2"}),n(f,{container:!0,className:"px-6 space-y-4",children:[n(f,{item:!0,className:"w-full",children:[e(s,{variant:"subtitle1",children:"1. Introduction"}),e(v,{sx:{width:"100%",borderColor:r.palette.secondary.main}}),e(s,{variant:"body2",children:h})]}),o.map((t,i)=>n(f,{item:!0,className:"w-full",children:[n(s,{variant:"subtitle1",children:[i+2,". ",t]}),e(s,{variant:"body2",children:d[i]})]},i)),n(f,{item:!0,className:"w-full",children:[n(s,{variant:"subtitle1",children:[o.length+2,". Conclusion"]}),e(v,{className:"w-full"}),e(s,{variant:"body2",children:g})]})]})]})})]})})};export{q as default};
