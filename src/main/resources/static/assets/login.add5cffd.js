import{a as p,b as v,h as o,_ as R,O as S,r as d,o as B,f as L,p as s,e as i,u as e,k as D,j as N,S as j,U as F,ay as $,J as h}from"./index.e67223f6.js";import{aL as T,aM as H,h as J,aN as O,r as A}from"./base.03e490c8.js";import{E as G,a as K}from"./form-item.b94a85f0.js";/* empty css               */import"./tooltip.f118fcb0.js";import{E as P}from"./popper.460a55fd.js";import{E as Q}from"./link.7e3f2de4.js";import{E as W}from"./image-viewer.ee162581.js";/* empty css              */import{_ as X}from"./zfile-basic.366804e6.js";import{l as Y,c as Z,a as ee,b as te}from"./login.71d086da.js";import{i as oe}from"./install.524fb5fa.js";import{r as ae}from"./BadgeCheckIcon.69000794.js";import{E as k}from"./request.4e49ca07.js";import{E as le}from"./index.af07ff27.js";import"./index.c92ded65.js";import"./isEqual.a7e24ef1.js";import"./focus-trap.795b07b9.js";import"./event.3ec63147.js";import"./index.23b60175.js";import"./debounce.a75ceac7.js";import"./scroll.14397f07.js";import"./event.776e7e11.js";function ie(m,f){return p(),v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})])}const x=m=>(j("data-v-03172336"),m=m(),F(),m),se={class:"h-full min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center"},re={class:"h-full lg:h-auto max-w-screen-lg bg-white shadow-xl sm:rounded-xl flex flex-1"},ne=x(()=>s("div",{class:"flex-1 bg-gray-50 text-center hidden lg:flex rounded-l-xl"},[s("div",{class:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat zfile-login-logo"})],-1)),de={class:"w-full lg:w-1/2 xl:w-1/2 mt-10 p-6 sm:p-12"},me={class:"mt-0 flex flex-col items-center"},fe={class:"text-2xl mt-0 xl:text-3xl font-extrabold box animate__animated animate__fadeInDown"},ue={class:"w-full flex-1"},pe=$('<div class="my-12 relative" data-v-03172336><div class="absolute inset-0 flex items-center" aria-hidden="true" data-v-03172336><div class="w-full border-t text-gray-600" data-v-03172336></div></div><div class="relative flex justify-center text-sm" data-v-03172336><span class="px-2 bg-white text-sm leading-none text-gray-600 tracking-wide font-medium" data-v-03172336>\u7BA1\u7406\u5458\u767B\u5F55</span></div></div>',1),ce={class:"flex space-x-5 w-full"},_e=h(" \u5C06\u914D\u7F6E\u6587\u4EF6 application.properties \u4E2D zfile.debug \u4FEE\u6539\u4E3A true, \u91CD\u542F\u540E\u8BBF\u95EE\u9996\u9875\u5373\u53EF\u91CD\u7F6E\u5BC6\u7801 "),ge=x(()=>s("br",null,null,-1)),ve=x(()=>s("a",{target:"_blank",class:"text-blue-400",href:"https://docs.zfile.vip/#/question?id=reset-pwd"},"\u70B9\u51FB\u53EF\u524D\u5F80\u6587\u6863\u67E5\u770B\u64CD\u4F5C\u65B9\u5F0F",-1)),he=h("\u5FD8\u8BB0\u5BC6\u7801"),xe=h("\u767B\u5F55"),be={__name:"login",setup(m){let f=S(),c=d(!1),b=d(),l=d({username:"",password:"",verifyCode:"",verifyCodeUUID:""});const V=a=>{window.open(a)};let z=d({username:[{required:!0,message:"\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change","blur"]}],password:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change","blur"]}]});const I=()=>{b.value.validate(a=>{a?(c.value=!0,ee(l.value).then(t=>{window.localStorage.setItem("zfile-token",t.data),k({message:"\u767B\u5F55\u6210\u529F",type:"success",duration:1e3,onClose(){f.push("/admin")}})}).catch(()=>{c.value=!1,g()})):k.warning("\u8BF7\u8F93\u5165\u8D26\u53F7\u5BC6\u7801!")})},_=d("");Y().then(a=>{_.value=a.data});const w=d({}),g=()=>{te().then(a=>{w.value=a.data,l.value.verifyCodeUUID=a.data.uuid})};return g(),B(()=>{oe().then(a=>{a.data||f.push("/install")}),Z().then(a=>{a.data&&f.push("/admin")})}),(a,t)=>{const u=le,n=G,C=W,E=Q,U=P,M=A,q=K;return p(),L("div",se,[s("div",re,[ne,s("div",de,[s("div",me,[s("h1",fe,[s("img",{class:"w-16 cursor-pointer",onClick:t[0]||(t[0]=r=>V("https://github.com/zhaojun1998/zfile")),src:X})]),s("div",ue,[pe,o(q,{onSubmit:t[6]||(t[6]=N(()=>{},["prevent"])),ref_key:"loginFormRef",ref:b,rules:e(z),model:e(l),class:"zfile-login-form",size:"large"},{default:i(()=>[o(n,{class:"box animate__animated animate__fadeInUp",prop:"username"},{default:i(()=>[o(u,{placeholder:"\u7BA1\u7406\u5458\u8D26\u53F7","prefix-icon":e(T),modelValue:e(l).username,"onUpdate:modelValue":t[1]||(t[1]=r=>e(l).username=r),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),o(n,{class:"box animate__animated animate__fadeInUp",prop:"password"},{default:i(()=>[o(u,{placeholder:"\u7BA1\u7406\u5458\u5BC6\u7801",type:"password","show-password":"","prefix-icon":e(H),modelValue:e(l).password,"onUpdate:modelValue":t[2]||(t[2]=r=>e(l).password=r),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1}),_.value==="2fa"?(p(),v(n,{key:0,class:"box animate__animated animate__fadeInUp",prop:"verifyCode"},{default:i(()=>[o(u,{placeholder:"\u53CC\u56E0\u7D20\u8BA4\u8BC1\u9A8C\u8BC1\u7801","prefix-icon":e(J),modelValue:e(l).verifyCode,"onUpdate:modelValue":t[3]||(t[3]=r=>e(l).verifyCode=r),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]),_:1})):_.value==="image"?(p(),v(n,{key:1,class:"box animate__animated animate__fadeInUp",prop:"verifyCode"},{default:i(()=>{var r;return[s("div",ce,[o(u,{class:"flex-1",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801","prefix-icon":e(ie),modelValue:e(l).verifyCode,"onUpdate:modelValue":t[4]||(t[4]=y=>e(l).verifyCode=y),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"]),o(C,{src:(r=w.value)==null?void 0:r.imgBase64,onClick:t[5]||(t[5]=y=>g())},null,8,["src"])])]}),_:1})):D("",!0),o(n,{class:"box animate__animated animate__fadeInUp float-right"},{default:i(()=>[o(U,{class:"item",effect:"dark",placement:"left"},{content:i(()=>[_e,ge,ve]),default:i(()=>[o(E,{icon:e(O),underline:!1,class:"zfile-float-right"},{default:i(()=>[he]),_:1},8,["icon"])]),_:1})]),_:1}),o(n,{class:"clear-right"},{default:i(()=>[o(M,{loading:e(c),class:"w-full mb-0","native-type":"submit",type:"primary",icon:e(ae),onClick:I},{default:i(()=>[xe]),_:1},8,["loading","icon"])]),_:1})]),_:1},8,["rules","model"])])])])])])}}};var Oe=R(be,[["__scopeId","data-v-03172336"]]);export{Oe as default};
