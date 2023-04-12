import{g as de,b as le,a8 as U,s as N,l as f,d as k,a9 as j,r as C,n as pe,_ as ue,v as ee,j as a,a as n,p as he,f as me,aa as fe,ab as be,k as ge,F as z,H as ve,I as ye,J as Ce,Z as x,N as R,$ as Be,a0 as Pe,K as Se,Y as xe,m as T,a1 as M,V as ke,ac as $e,ad as we,ae as Ae}from"./index-11b38b24.js";import{a as Ne,I as Ie,R as _e,A as De}from"./play-01b56c64.js";import{I as _,C as G,_ as K}from"./index-1a92e3c4.js";import{P as F,T as m,a as Le,C as D}from"./CustomBtn1-298678bb.js";import{D as Oe,a as Re}from"./DoneOutlined-73e31e2d.js";function Te(e){return de("MuiLinearProgress",e)}le("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const Me=["className","color","value","valueBuffer","variant"];let $=e=>e,X,Y,V,W,J,Q;const H=4,ze=U(X||(X=$`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),He=U(Y||(Y=$`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Ue=U(V||(V=$`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),je=e=>{const{classes:r,variant:t,color:s}=e,g={root:["root",`color${f(s)}`,t],dashed:["dashed",`dashedColor${f(s)}`],bar1:["bar",`barColor${f(s)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar",t!=="buffer"&&`barColor${f(s)}`,t==="buffer"&&`color${f(s)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return me(g,Te,r)},q=(e,r)=>r==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?fe(e.palette[r].main,.62):be(e.palette[r].main,.5),qe=N("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${f(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>k({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:q(r,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),Ee=N("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${f(t.color)}`]]}})(({ownerState:e,theme:r})=>{const t=q(r,e.color);return k({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},j(W||(W=$`
    animation: ${0} 3s infinite linear;
  `),Ue)),Ge=N("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${f(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>k({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${H}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${H}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&j(J||(J=$`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),ze)),Ke=N("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${f(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>k({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:q(r,e.color),transition:`transform .${H}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&j(Q||(Q=$`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),He)),Fe=C.forwardRef(function(r,t){const s=pe({props:r,name:"MuiLinearProgress"}),{className:g,color:B="primary",value:v,valueBuffer:o,variant:u="indeterminate"}=s,b=ue(s,Me),y=k({},s,{color:B,variant:u}),P=je(y),I=ee(),l={},S={bar1:{},bar2:{}};if((u==="determinate"||u==="buffer")&&v!==void 0){l["aria-valuenow"]=Math.round(v),l["aria-valuemin"]=0,l["aria-valuemax"]=100;let h=v-100;I.direction==="rtl"&&(h=-h),S.bar1.transform=`translateX(${h}%)`}if(u==="buffer"&&o!==void 0){let h=(o||0)-100;I.direction==="rtl"&&(h=-h),S.bar2.transform=`translateX(${h}%)`}return a(qe,k({className:he(P.root,g),ownerState:y,role:"progressbar"},l,{ref:t},b,{children:[u==="buffer"?n(Ee,{className:P.dashed,ownerState:y}):null,n(Ge,{className:P.bar1,ownerState:y,style:S.bar1}),u==="determinate"?null:n(Ke,{className:P.bar2,ownerState:y,style:S.bar2})]}))}),Xe=Fe,Ye=ge(n("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4-4H8V8h8v8z"}),"StopCircleOutlined"),Z=3,Ve=N(z)(({theme:e})=>({display:"flex",flexDirection:"column",flexGrow:1,"& > .header":{display:"flex",flexDirection:"column",borderBottom:`1px solid ${e.palette.divider}`,padding:"1rem 3.5rem",[e.breakpoints.down("md")]:{gap:4,flexDirection:"column",padding:"0.5rem 1.5rem"},"& .header-action-container":{justifyContent:"center",alignItems:"center",[e.breakpoints.down("md")]:{flexDirection:"column"}}},"& > .content":{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center",alignItems:"center",padding:"2rem 4rem",gap:"6rem",[e.breakpoints.down("md")]:{padding:"0.5rem 1.5rem"}}})),rr=()=>{const e=ee(),r=ve(),t=ye(),{_setting:{loading:s},user_inputs:g,keywords:{selected:B},titles:{selected:v},outlines:{selected:o},article_intros:{selected:u},article_bodies:b}=Ce(i=>i),[y,P]=C.useState(0),I=()=>P(y+1),l=C.useRef(!1),[S,h]=C.useState(""),L=100/(Z*(o==null?void 0:o.length)),[O,re]=C.useState(0);console.log("progressStepSize",L,o==null?void 0:o.length),C.useEffect(()=>{if(!B.length){w(),x.error("❗ Keywords are not selected yet."),r("/step1");return}if(!v){w(),x.error("❗ Title is not selected yet."),r("/step2");return}if(!o||!o.length){w(),x.error("❗ Outline is not selected yet."),r("/step3");return}if(!u){w(),x.error("❗ Introduction paragraph is not selected yet."),r("/step4");return}E()},[]),C.useEffect(()=>l.current=s,[s]);const E=i=>Ne("custom-messages",{messages:[{role:"system",content:`You are a content generator for a website blogs.
You respond as an expert, but in a casual way.`},{role:"user",content:`{Category(Content): [Subcategory(Blog Content Paragraph for a subheading)]<Attributes(Length: "around 6000 letters", Background: "buprenorphine prescribers", Keywords: "buprenorphine, buprenorphine for opioid use, buprenorphine practitioner locator, Dispensers of buprenorphine must, patterns of buprenorphine waivered, prescribed buprenorphine, treatment with buprenorphine, access to buprenorphine providers, buprenorphine pipeline graphic, Buprenorphine Practitioner, buprenorphine providers, buprenorphine waiver program, distribution of buprenorphine, nearest buprenorphine provider, office-based buprenorphine services, patients with buprenorphine, prevalence of buprenorphine, individual patient, Mental Health Services Administration, health, Mental Health Services, U.S. Department of Health & Human Services, prescriber, Buprenorphine prescribers, buprenorphine-waivered prescribers, High-volume prescribers, opioid use disorder, opioid use disorder treatment, Opioid use disorder prescriptions, substance use disorder treatment, opioid addiction, addiction specialists, addiction, addiction psychiatry, American Board of Addiction Medicine, certification in addiction medicine, primary care physicians, rural counties, access, medications, effective medication treatment, medication treatment availability, Substance Abuse, nurse practitioners, individuals with opioid use, medications for opioid use, barriers to treatment, medication-assisted treatment, opioid dependence, treatment of opioid use, buprenorphine treatment, treatment services, OUD treatment, treatment for opioid use, treatment program, treatment providers, qualified providers, medical provider, Primary care providers, buprenorphine waivers", Constraints: "Only output the Content Paragraph for below subheading without other contents.", Output: "Informative, Description")}>}
{Title: "Buprenorphine Practitioner Locator: Find Your Nearest Provider"}
{Outline: "Understanding Buprenorphine and its Use for Opioid Addiction Treatment
Access to Buprenorphine Providers and the Buprenorphine Waiver Program
Distribution and Patterns of Buprenorphine Prescribers
Buprenorphine Practitioner Locator: Finding Your Nearest Provider
Office-Based Buprenorphine Services and Treatment Options
Barriers to Treatment and Improving Access to Buprenorphine Providers"}`},{role:"system",content:`Buprenorphine is a medication used in the treatment of opioid addiction.
It is prescribed as part of medication-assisted treatment (MAT) along with counseling and behavioral therapies.
Buprenorphine works by reducing withdrawal symptoms and cravings associated with opioid dependence, making it easier for individuals to focus on their recovery.
The Substance Abuse and Mental Health Services Administration (SAMHSA), part of the U.S.
Department of Health & Human Services, oversees the use of buprenorphine in the treatment of opioid addiction.
Buprenorphine can be prescribed by qualified medical providers, including primary care physicians, nurse practitioners, and addiction specialists who have completed certification in addiction medicine through the American Board of Addiction Medicine.
However, access to buprenorphine providers can be limited, particularly in rural counties where there may be fewer healthcare options.
Increasing access to effective medication treatment for opioid use disorder (OUD) is critical to addressing the current opioid epidemic.`},{role:"user",content:`{Category(Content): [Subcategory(Blog Content Paragraph for a subheading)]<Attributes(Length: "around 6000 letters", Background: “${g.description}”, Keywords: “${B.join("”, “")}”, Constraints: "Only output the Content Paragraph without other contents. like Introduction, Conclusion", Output: "Informative, Description")}>}
{Title: “${v}”}
{Outline: “${o}
{Subheading: ${i}}`}]}),te=async()=>{if(!g.description||!B.length||!v||!o.length||!u)return;l.current=!0,t(ke());const i=o.length;for(let d=0;d<Z;d++)for(let c=0;c<i;c++){if(!l.current){t(R());return}const p=o[c];h(p);const A=await E(p);A?(t($e({iPos:d,iSub:c,data:A})),x.success(`Round ${d+1} ===>  ${c+1}: ${p}`),re(L*(d*i+c))):x.error(`Round ${d+1} ===>  ${c+1}: ${p}`)}t(R()),l.current=!1},w=()=>{t(R()),l.current=!1,t(Be()),t(Pe())},ne=()=>{l.current=!1,I()},ie=i=>i.map((d,c)=>`${`💬 ${o[c]}`}
${d}`).join(`

`),ae=i=>i.map((c,p)=>a("div",{className:"relative my-6",children:[n(m,{className:"mb-1",variant:"subtitle1",children:`💬 ${o[p]}`}),n(m,{variant:"body2",children:c}),n(_,{className:"absolute top-0 right-0",onClick:()=>ce(c,p),children:n(G,{fontSize:"small"})}),n(we,{})]},p)),oe=i=>t(Ae(i)),se=i=>K(ie(i)),ce=(i,d)=>K(`💬 ${o[d]}
${i}`);return n(Se,{children:a(Ve,{children:[a(F,{className:"gap-4 header",children:[a("div",{className:"flex gap-4",children:[a(z,{className:"flex flex-col",children:[a(m,{variant:"h4",children:["5. Choose a ",n("u",{children:"Body Content"})]}),a(m,{variant:"body1",children:["Press ",n("b",{children:"<Generate>"})," button. And then press your desired ",n("u",{children:"body content"})," in left panel."]}),a(m,{variant:"caption",children:[n("b",{children:"Description:"})," ",g.description]}),a(m,{variant:"caption",children:[n("b",{children:"Keywords:"})," ",B.join(", ")]})]}),n("div",{className:"grow"}),a(z,{className:"flex items-center gap-4 header-action-container",children:[s?a("div",{className:"flex items-center shrink-0 gap-4",children:[n(m,{variant:"body2",children:S}),n(Le,{})]}):a(D,{variant:"contained",disabled:!!b.total.length,onClick:te,children:[n("span",{children:"Generate Bodies"}),n("img",{className:"ml-2",src:Ie,alt:"play icon"})]}),s?a(D,{variant:"outlined",disabled:!l.current,onClick:ne,children:[n(Ye,{className:"mr-2"}),n("span",{children:"Stop"})]}):a(D,{variant:"outlined",disabled:!s&&!b.total.length,onClick:w,children:[n(_e,{className:"mr-2"}),n("span",{children:"Reset"})]}),a(D,{variant:"contained",disabled:!b.selected,onClick:()=>r("/step6"),children:[n("span",{children:"Next (Conclusion)"}),n(De,{className:"ml-2"})]})]})]}),O!==0?n(Xe,{variant:"buffer",color:"success",value:O,valueBuffer:O+L,sx:{height:"1.5rem"}}):""]}),n("div",{className:"content",children:b.total.length?b.total.map((i,d)=>{const c=!!xe.isEqual(b.selected,i);let p={},A={whiteSpace:"pre-wrap"};return c&&(p={bgcolor:T(e.palette.secondary.light,.2)},A={color:"secondary.dark",whiteSpace:"pre-wrap"}),a(F,{className:"relative px-8 py-4",elevation:8,sx:p,children:[a(m,{variant:"h6",sx:A,children:[a("b",{children:["Body Content ",d+1," :"]}),n("br",{}),ae(i)]}),a("div",{className:"absolute flex justify-end top-2 right-2",children:[c?n(M,{title:"SELECTED",children:n(_,{sx:{background:T(e.palette.background.paper,.5),color:e.palette.secondary.dark,border:`2px solid ${e.palette.secondary.dark}`,borderRadius:2},children:n(Oe,{fontSize:"large"})})}):n(M,{title:"Select this body content",children:n(_,{onClick:()=>oe(i),sx:{background:T(e.palette.background.paper,.5)},children:n(Re,{fontSize:"large"})})}),n(M,{title:"Copy to clipboard",children:n(_,{onClick:()=>se(i),children:n(G,{fontSize:"large"})})})]})]},d)}):n(m,{variant:"h5",color:"text.disabled",align:"center",children:"Generated Bodies"})})]})})};export{rr as default};
