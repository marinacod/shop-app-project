import{v as s,j as t,f as $,g as y,s as M,a8 as L,n as x,i as n,x as B,r as p,h as S,_ as H,k as _,l as F}from"./index-e6b236b7.js";import{S as R}from"./SwitchBase-e410cf0a.js";const O=s(t("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=s(t("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=s(t("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function j(o){return y("MuiCheckbox",o)}const E=$("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),h=E,N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],w=o=>{const{classes:e,indeterminate:c,color:r}=o,i={root:["root",c&&"indeterminate",`color${x(r)}`]},a=F(i,j,e);return n({},e,a)},T=M(R,{shouldForwardProp:o=>L(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,c.color!=="default"&&e[`color${x(c.color)}`]]}})(({theme:o,ownerState:e})=>n({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:B(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${h.checked}, &.${h.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${h.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),W=t(U,{}),q=t(O,{}),A=t(V,{}),D=p.forwardRef(function(e,c){var r,i;const a=S({props:e,name:"MuiCheckbox"}),{checkedIcon:f=W,color:b="primary",icon:I=q,indeterminate:l=!1,indeterminateIcon:u=A,inputProps:z,size:d="medium",className:P}=a,g=H(a,N),m=l?u:I,k=l?u:f,C=n({},a,{color:b,indeterminate:l,size:d}),v=w(C);return t(T,n({type:"checkbox",inputProps:n({"data-indeterminate":l},z),icon:p.cloneElement(m,{fontSize:(r=m.props.fontSize)!=null?r:d}),checkedIcon:p.cloneElement(k,{fontSize:(i=k.props.fontSize)!=null?i:d}),ownerState:C,ref:c,className:_(v.root,P)},g,{classes:v}))}),K=D,Q=s(t("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),X=s(t("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");export{K as C,Q as F,X as L};