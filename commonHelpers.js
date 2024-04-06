import{S as s,i as m}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function p(o){const i=`https://pixabay.com/api/?key=39588460-df52399cf23d63ffd2a80219a&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits.length===0?[]:e.hits).catch(e=>(console.error("Error fetching images:",e),[]))}function y(){const o=document.querySelector(".gallery");o.innerHTML=""}function g(o){document.querySelector(".gallery").insertAdjacentHTML("beforeend",i(o));function i(e){return e.map(({webformatURL:t,largeImageURL:r,tags:a,likes:c,views:u,comments:f,downloads:d})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${r}">
      <img class="gallery-image"
      src="${t}"
      alt="${a}"
      />
    </a>
    <div class="image-details">
    <p>Tags: ${a}</p>
    <p>Likes: ${c}</p>
    <p>Views: ${u}</p>
    <p>Comments: ${f}</p>
    <p>Downloads: ${d}</p>
  </div>
  </li>`).join("")}new s(".gallery a",{captionDelay:250,captionsData:"alt"})}const h=document.getElementById("search-form");h.addEventListener("submit",L);function L(o){o.preventDefault();const n=document.getElementById("search-input"),i=n.value.trim();i!==""&&(v(),p(i).then(e=>{l(),y(),n.value="",e.length===0?m.info({title:"Information",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):g(e)}).catch(e=>{console.error("Error fetching images:",e),l(),n.value=""}).finally(()=>{n.value=""}))}function v(){const o=document.querySelector(".loader");o.style.display="block"}function l(){const o=document.querySelector(".loader");o.style.display="none"}new s(".gallery a",{captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
