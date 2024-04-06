import{S as l,i as y}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function p(o){const i=`https://pixabay.com/api/?key=39588460-df52399cf23d63ffd2a80219a&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(i).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits.length===0?[]:e.hits).catch(e=>(console.error("Error fetching images:",e),[]))}function g(){const o=document.querySelector(".gallery");o.innerHTML=""}function h(o){document.querySelector(".gallery").insertAdjacentHTML("beforeend",e(o)),new l(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh();function e(t){return t.map(({webformatURL:r,largeImageURL:n,tags:c,likes:u,views:d,comments:f,downloads:m})=>`
  <li class="gallery-item">
     <a class="gallery-link" href="${n}">
      <img class="gallery-image"
      src="${r}"
      alt="${c}"
      loading="lazy"
      />
     </a>
     <ul class="image-details">
       <li class="activities"><span class="details">Likes</span> ${u}</li>
       <li class="activities"><span class="details">Views</span> ${d}</li>
       <li class="activities"><span class="details">Comments</span> ${f}</li>
       <li class="activities"><span class="details">Downloads</span> ${m}</li>
     </ul>
  </li>`).join("")}}const L=document.getElementById("search-form");L.addEventListener("submit",v);document.addEventListener("DOMContentLoaded",function(){s()});function v(o){o.preventDefault();const a=document.getElementById("search-input"),i=a.value.trim();i!==""&&(b(),p(i).then(e=>{g(),a.value="",e.length===0?y.info({title:"Information",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",maxWidth:"500px"}):h(e)}).catch(e=>{console.error("Error fetching images:",e),s(),a.value=""}).finally(()=>{a.value="",s()}))}function b(){const o=document.querySelector(".loader");o.style.display="block"}function s(){const o=document.querySelector(".loader");o.style.display="none"}new l(".gallery a",{captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
