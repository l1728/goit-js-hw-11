
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function clearGallery() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
};

export function renderImages(images) {
    const gallery = document.querySelector(".gallery");
 // Генеруємо розмітку для кожного елемента галереї
    gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup(images));

    // Підключаємо бібліотеку і вказуємо затримку підпису зображення з атрибуту alt
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,
    captionsData: 'alt', // Використовуємо атрибут alt як джерело підписів
});

      // Оновлюємо галерею після додавання нових елементів
    lightbox.refresh();
    
function galleryItemsMarkup(arr) {
    return arr
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
  <li class="gallery-item">
     <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      loading="lazy"
      />
     </a>
     <ul class="image-details">
       <li class="activities"><span class="details">Likes</span> ${likes}</li>
       <li class="activities"><span class="details">Views</span> ${views}</li>
       <li class="activities"><span class="details">Comments</span> ${comments}</li>
       <li class="activities"><span class="details">Downloads</span> ${downloads}</li>
     </ul>
  </li>`)
    .join('');
};


};







