import{d as S,_ as I,e as K,u as L,f as C,g as B,h as u,a as e,w as t,r as a,o as N,i as h,j as q,p as A,k as P,b as r}from"./index.f4d04680.js";function R(s=!1){const o=S(s);return{loading:o,setLoading:d=>{o.value=d},toggle:()=>{o.value=!o.value}}}const U=s=>(A("data-v-501dcfc8"),s=s(),P(),s),j={class:"login"},z={class:"login-form"},E=U(()=>u("div",{class:"login-form-title"},"Login Arco Admin",-1)),F={class:"login-form-password-actions"},T=r(" \u8BB0\u4F4F\u5BC6\u7801 "),D=r("\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),G=r(" \u767B\u5F55 "),H=r(" \u6CE8\u518C\u8D26\u53F7 "),J={__name:"index",setup(s){const o=K({username:"admin",password:"admin"}),{loading:m,setLoading:l}=R(),d=L(),v=C(),i=async()=>{l(!0);const c=await d.dispatch("user/login",o);l(!1),c&&await v.push({name:"table"})};return(c,n)=>{const b=a("icon-user"),p=a("a-input"),f=a("a-form-item"),w=a("icon-lock"),y=a("a-checkbox"),x=a("a-link"),g=a("a-button"),k=a("a-space"),V=a("a-form");return N(),B("div",j,[u("div",z,[E,e(V,{ref:"loginForm",model:o,layout:"vertical",onSubmit:i},{default:t(()=>[e(f,{field:"username",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(p,{modelValue:o.username,"onUpdate:modelValue":n[0]||(n[0]=_=>o.username=_),placeholder:"\u7528\u6237\u540D\uFF1Aadmin",onKeyup:h(i,["enter"])},{prefix:t(()=>[e(b)]),_:1},8,["modelValue","onKeyup"])]),_:1}),e(f,{field:"password",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(p,{modelValue:o.password,"onUpdate:modelValue":n[1]||(n[1]=_=>o.password=_),placeholder:"\u5BC6\u7801\uFF1Aadmin",type:"password",onKeyup:h(i,["enter"])},{prefix:t(()=>[e(w)]),_:1},8,["modelValue","onKeyup"])]),_:1}),e(k,{size:16,direction:"vertical"},{default:t(()=>[u("div",F,[e(y,{checked:"rememberPassword",onChange:c.setRememberPassword},{default:t(()=>[T]),_:1},8,["onChange"]),e(x,null,{default:t(()=>[D]),_:1})]),e(g,{type:"primary","html-type":"submit",long:"",loading:q(m)},{default:t(()=>[G]),_:1},8,["loading"]),e(g,{type:"text",long:"",class:"login-form-register-btn"},{default:t(()=>[H]),_:1})]),_:1})]),_:1},8,["model"])])])}}};var O=I(J,[["__scopeId","data-v-501dcfc8"]]);export{O as default};