import { fetchImages } from './pixabay-api.js';
import { renderGallery } from './render-functions.js';

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    alert('Please enter a search query');
    return;
  }

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        alert('No images found for your search query');
      } else {
        renderGallery(images);
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      alert('An error occurred while fetching images. Please try again later.');
    });
});








