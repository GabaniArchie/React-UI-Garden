import{j as d}from"./jsx-runtime-CkxqCPlQ.js";import{d as b}from"./styled-components.browser.esm-CW2lnlac.js";import"./index-DJO9vBfz.js";const u=b.label`
  display: block;
  margin-bottom: 8px;
  color: ${e=>e.isDisabled?"#ccc":"#000"};
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
`,t=({text:e,isDisabled:m})=>d.jsx(u,{isDisabled:m,children:e});t.__docgenInfo={description:"",methods:[],displayName:"Label",props:{text:{required:!0,tsType:{name:"string"},description:""}}};const L={title:"Components/Label",component:t,argTypes:{text:{control:"text"},isDisabled:{control:"boolean"}}},p=e=>d.jsx(t,{...e}),s=p.bind({});s.args={text:"Label Text",isDisabled:!1};const r=p.bind({});r.args={text:"Label Text",isDisabled:!0};var a,o,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"args => <Label {...args} />",...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var i,c,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Label {...args} />",...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const f=["Default","Disabled"];export{s as Default,r as Disabled,f as __namedExportsOrder,L as default};