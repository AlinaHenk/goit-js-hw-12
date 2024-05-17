import{a as b,i as y,S as f}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const w="43769783-4ebd08048bd6758fdf84d5c5e",h=async(s,e,a)=>{try{return(await b.get("https://pixabay.com/api/",{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:e,page:a}})).data}catch(o){console.log(o)}},g=s=>s.map(({webformatURL:e,largeImageURL:a,tags:o,likes:t,views:r,comments:i,downloads:L})=>`<div class = "image-holder"><a class="gallery-link" href="${a}">
     <img  class="gallery-image"
      src="${e}"
      alt="${o}"
    />
    </a>
   <div>
   <table>
   <tr class= "title">
   <td>Likes</td> 
   <td>Views</td>
   <td>Comments</td>
   <td>Downloads</td>
   </tr>
   <tr>
   <td>${t}</td> 
   <td>${r}</td>
   <td>${i}</td>
   <td>${L}</td>
   </tr>
   </table>
   </div>
    </div>
    `).join(""),S=document.querySelector('input[name="search"]'),u=document.querySelector(".gallery-list"),v=document.querySelector(".form-image-search"),n=document.querySelector(".loader"),d=document.querySelector(".btn");v.addEventListener("submit",q);d.addEventListener("click",P);let c,l;const m=15;let p;async function q(s){if(s.preventDefault(),d.classList.add("is-hidden"),n.classList.remove("is-hidden"),c=S.value.trim(),l=1,u.innerHTML="",c==="")s.target.reset(),n.classList.add("is-hidden");else try{const e=await h(c,m,l);if(e.total===0)y.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",timeout:3e3}),s.target.reset();else{const a=g(e.hits);p=e.totalHits,u.innerHTML=a,new f(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh(),d.classList.remove("is-hidden")}}catch(e){console.log(e)}finally{s.target.reset(),n.classList.add("is-hidden")}}async function P(){l+=1;const s=Math.ceil(p/m);if(l>s)return d.classList.add("is-hidden"),y.info({position:"topRight",message:"We're sorry, but you've reached the end of search results.",timeout:3e3});try{const e=await h(c,m,l),a=g(e.hits);u.insertAdjacentHTML("beforeend",a),new f(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}catch(e){console.log(e)}finally{let a=document.querySelector(".image-holder").getBoundingClientRect();window.scrollBy(0,a.height),n.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
