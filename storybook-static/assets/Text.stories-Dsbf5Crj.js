import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{d as u}from"./styled-components.browser.esm-CW2lnlac.js";import"./index-DJO9vBfz.js";const x=u.span`
  color: ${e=>e.isDisabled?"#ccc":"#000"};
  cursor: ${e=>e.isDisabled?"not-allowed":"default"};
`,t=({children:e,isDisabled:m})=>l.jsx(x,{isDisabled:m,children:e});t.__docgenInfo={description:"",methods:[],displayName:"Text",props:{content:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:""}}};const f={title:"Components/Text",component:t,argTypes:{children:{control:"text"},isDisabled:{control:"boolean"}}},p=e=>l.jsx(t,{...e}),s=p.bind({});s.args={children:"Sample Text",isDisabled:!1};const r=p.bind({});r.args={children:"Sample Text",isDisabled:!0};var o,a,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Text {...args} />",...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var n,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Text {...args} />",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const D=["Default","Disabled"];export{s as Default,r as Disabled,D as __namedExportsOrder,f as default};