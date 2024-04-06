import{S as l,i as m}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function y(a){const o=`https://pixabay.com/api/?key=39588460-df52399cf23d63ffd2a80219a&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits.length===0?[]:e.hits).catch(e=>(console.error("Error fetching images:",e),[]))}function p(){const a=document.querySelector(".gallery");a.innerHTML=""}function g(a){document.querySelector(".gallery").insertAdjacentHTML("beforeend",o(a));function o(e){return e.map(({webformatURL:t,largeImageURL:r,tags:s,likes:c,views:u,comments:d,downloads:f})=>`
  <li class="gallery-item">
     <a class="gallery-link" href="${r}">
      <img class="gallery-image"
      src="${t}"
      alt="${s}"
      loading="lazy"
      />
     </a>
     <ul class="image-details">
       <li class="activities"><span class="details">Likes</span> ${c}</li>
       <li class="activities"><span class="details">Views</span> ${u}</li>
       <li class="activities"><span class="details">Comments</span> ${d}</li>
       <li class="activities"><span class="details">Downloads</span> ${f}</li>
     </ul>
  </li>`).join("")}new l(".gallery a",{captionDelay:250,captionsData:"alt"})}const h=document.getElementById("search-form");h.addEventListener("submit",v);function v(a){a.preventDefault();const i=document.getElementById("search-input"),o=i.value.trim();o!==""&&(L(),y(o).then(e=>{p(),i.value="",e.length===0?m.info({title:"Information",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",maxWidth:"500px"}):g(e)}).catch(e=>{console.error("Error fetching images:",e),n(),i.value=""}).finally(()=>{i.value="",n()}))}function L(){const a=document.querySelector(".loader");a.style.display="block"}function n(){const a=document.querySelector(".loader");a.style.display="none"}new l(".gallery a",{captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
