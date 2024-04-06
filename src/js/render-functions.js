
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
function galleryItemsMarkup(arr) {
    return arr
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
      />
    </a>
    <div class="image-details">
    <p>Tags: ${tags}</p>
    <p>Likes: ${likes}</p>
    <p>Views: ${views}</p>
    <p>Comments: ${comments}</p>
    <p>Downloads: ${downloads}</p>
  </div>
  </li>`)
    .join('');
};

// Підключаємо бібліотеку і вказуємо затримку підпису зображення з атрибуту alt
const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,
    captionsData: 'alt', // Використовуємо атрибут alt як джерело підписів
});
};







