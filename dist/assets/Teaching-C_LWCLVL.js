import{A as d,S as p,_ as m,a as v,b,c as u,d as f,e as j,f as k,g as w,h as B,i as P,j as M,k as C,l as S,m as A,n as T,o as x,p as y,q as N}from"./Articles-DHlq6h8m.js";import{B as F}from"./BackBlog-Cd9jjQZH.js";import{_ as I,c as _,e as c,a as s,F as R,r as V,b as J,f as L,d as l,o as a,t as q}from"./index-Ce1o5oBM.js";import"./BlogContent-DQ6Pod7m.js";const D={name:"BlogSearch",components:{ArticleModal:d,BackBlog:F,SearchSidebar:p},methods:{openModal(e){this.selectedArticle=e,this.showModal=!0},closeModal(){this.showModal=!1,this.selectedArticle=null},resolvePhotoPath(e){try{return new URL(Object.assign({"../assets/img/Cat1.jpg":m,"../assets/img/Cat2.jpg":v,"../assets/img/Cat3.jpg":b,"../assets/img/Cat4.jpg":u,"../assets/img/JudgePT1.jpg":f,"../assets/img/JudgePT2.jpg":j,"../assets/img/NewsInfo1.jpg":k,"../assets/img/NewsInfo2.jpg":w,"../assets/img/Relax&Fun1.jpg":B,"../assets/img/Relax&Fun2.jpg":P,"../assets/img/Teaching1.jpg":M,"../assets/img/Teaching2.jpg":C,"../assets/img/news1.jpg":S,"../assets/img/news2.jpg":A,"../assets/img/news3.jpg":T,"../assets/img/news4.jpg":x})[`../assets/img/${e.split("/").pop()}`],import.meta.url).href}catch{return console.error("Image not found: ",e),""}}},data(){return{showModal:!1,articles:y}},created(){N.get("http://localhost:3000/teaching").then(e=>{this.articles=e.data}).catch(e=>{console.log("There was an error: "+e)})}},E={class:"blogsearch"},O={class:"content"},U={class:"backblog"},z={class:"photo-gallery"},G=["onClick"],H=["src"],K={class:"photo-title"};function Q(e,r,W,X,i,t){const n=l("SearchSidebar"),g=l("BackBlog"),h=l("ArticleModal");return a(),_("div",E,[c(n),s("div",O,[s("button",U,[c(g)]),s("div",z,[(a(!0),_(R,null,V(i.articles,o=>(a(),_("div",{class:"photo-item",key:o.id},[s("div",{class:"photo-placeholder",onClick:Y=>t.openModal(o)},[s("span",null,[s("img",{src:t.resolvePhotoPath(o.photo),alt:"article-title"},null,8,H)])],8,G),s("div",K,"["+q(o.title)+"]",1)]))),128))]),i.showModal?(a(),J(h,{key:0,onClose:t.closeModal,article:e.selectedArticle,resolvePhotoPath:t.resolvePhotoPath},null,8,["onClose","article","resolvePhotoPath"])):L("",!0)])])}const te=I(D,[["render",Q],["__scopeId","data-v-ff131783"]]);export{te as default};