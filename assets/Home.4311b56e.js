import{c as a,d as e,u as t,l as s,f as l,g as o,q as i,t as r,j as c,p as n,k as v,F as u,x as f,y as d}from"./framework.8207f0d3.js";import{u as m,a as p,_ as k}from"./app.fba3c750.js";function h(){const e=m();return a((()=>e.value.frontmatter))}const x=c("data-v-66648584");n("data-v-66648584");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},b={key:1,class:"title"},$={key:2,class:"description"};v();var _=e({expose:[],setup(e){const c=p(),n=h(),v=a((()=>n.value.heroImage||u.value||d.value||_.value)),u=a((()=>null!==n.value.heroText)),f=a((()=>n.value.heroText||c.value.title)),d=a((()=>null!==n.value.tagline)),m=a((()=>n.value.tagline||c.value.description)),_=a((()=>n.value.actionLink&&n.value.actionText)),I=a((()=>n.value.altActionLink&&n.value.altActionText));return x(((a,e)=>t(v)?(s(),l("header",y,[a.$frontmatter.heroImage?(s(),l("figure",g,[o("img",{class:"image",src:a.$withBase(a.$frontmatter.heroImage),alt:a.$frontmatter.heroAlt},null,8,["src","alt"])])):i("v-if",!0),t(u)?(s(),l("h1",b,r(t(f)),1)):i("v-if",!0),t(d)?(s(),l("p",$,r(t(m)),1)):i("v-if",!0),t(_)?(s(),l(k,{key:3,item:{link:t(n).actionLink,text:t(n).actionText},class:"action"},null,8,["item"])):i("v-if",!0),t(I)?(s(),l(k,{key:4,item:{link:t(n).altActionLink,text:t(n).altActionText},class:"action alt"},null,8,["item"])):i("v-if",!0)])):i("v-if",!0)))}});_.__scopeId="data-v-66648584";const I=c("data-v-11ba5bf9");n("data-v-11ba5bf9");const T={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},j={class:"features"},w={key:0,class:"title"},q={key:1,class:"details"};v();var B=e({expose:[],setup(e){const c=h(),n=a((()=>c.value.features&&c.value.features.length>0)),v=a((()=>c.value.features?c.value.features:[]));return I(((a,e)=>t(n)?(s(),l("div",T,[o("div",A,[o("div",L,[o("div",j,[(s(!0),l(u,null,f(t(v),((a,e)=>(s(),l("section",{key:e,class:"feature"},[a.title?(s(),l("h2",w,r(a.title),1)):i("v-if",!0),a.details?(s(),l("p",q,r(a.details),1)):i("v-if",!0)])))),128))])])])])):i("v-if",!0)))}});B.__scopeId="data-v-11ba5bf9";const F={},z=c("data-v-832ca742");n("data-v-832ca742");const C={key:0,class:"footer"},D={class:"container"},E={class:"text"};v();const G=z(((a,e)=>a.$frontmatter.footer?(s(),l("footer",C,[o("div",D,[o("p",E,r(a.$frontmatter.footer),1)])])):i("v-if",!0)));F.render=G,F.__scopeId="data-v-832ca742";const H=c("data-v-59297c30");n("data-v-59297c30");const J={class:"home","aria-labelledby":"main-title"};v();var K=e({expose:[],setup:a=>H(((a,e)=>(s(),l("main",J,[o(_),d(a.$slots,"hero"),o(B),d(a.$slots,"features"),o(F),d(a.$slots,"footer")]))))});K.__scopeId="data-v-59297c30";export default K;
