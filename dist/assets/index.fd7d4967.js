import{B as K,C as L,u as B,d as N,r as n,o as S,e as q,g as e,m as a,w as t,f as h,D as v,i as r}from"./vendor.466f03f8.js";function A(_=!1){const o=K(_);return{loading:o,setLoading:i=>{o.value=i},toggle:()=>{o.value=!o.value}}}const P={class:"login-form"},R=h("div",{class:"login-form-title"},"Login Arco Admin",-1),U={class:"login-form-password-actions"},j=r(" \u8BB0\u4F4F\u5BC6\u7801 "),z=r("\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),D=r(" \u767B\u5F55 "),E=r(" \u6CE8\u518C\u8D26\u53F7 "),I={setup(_){const o=L({username:"admin",password:"admin"}),{loading:m,setLoading:l}=A(),i=B(),b=N(),d=async()=>{l(!0);const c=await i.dispatch("user/login",o);l(!1),c&&await b.push({name:"table"})};return(c,s)=>{const y=n("icon-user"),p=n("a-input"),f=n("a-form-item"),w=n("icon-lock"),x=n("a-checkbox"),k=n("a-link"),g=n("a-button"),V=n("a-space"),C=n("a-form");return S(),q("div",P,[R,e(C,{ref:"loginForm",model:a(o),layout:"vertical",onSubmit:d},{default:t(()=>[e(f,{field:"username",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(p,{modelValue:a(o).username,"onUpdate:modelValue":s[0]||(s[0]=u=>a(o).username=u),placeholder:"\u7528\u6237\u540D\uFF1Aadmin",onKeyup:v(d,["enter"])},{prefix:t(()=>[e(y)]),_:1},8,["modelValue","onKeyup"])]),_:1}),e(f,{field:"password",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],"validate-trigger":["change","blur"],"hide-label":""},{default:t(()=>[e(p,{modelValue:a(o).password,"onUpdate:modelValue":s[1]||(s[1]=u=>a(o).password=u),placeholder:"\u5BC6\u7801\uFF1Aadmin",type:"password",onKeyup:v(d,["enter"])},{prefix:t(()=>[e(w)]),_:1},8,["modelValue","onKeyup"])]),_:1}),e(V,{size:16,direction:"vertical"},{default:t(()=>[h("div",U,[e(x,{checked:"rememberPassword",onChange:c.setRememberPassword},{default:t(()=>[j]),_:1},8,["onChange"]),e(k,null,{default:t(()=>[z]),_:1})]),e(g,{type:"primary","html-type":"submit",long:"",loading:a(m)},{default:t(()=>[D]),_:1},8,["loading"]),e(g,{type:"text",long:"",class:"login-form-register-btn"},{default:t(()=>[E]),_:1})]),_:1})]),_:1},8,["model"])])}}};export{I as default};