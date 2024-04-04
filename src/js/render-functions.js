export function renderGallery(images) {
  const galleryElement = document.getElementById('gallery');
  galleryElement.innerHTML = '';

  images.forEach(image => {
    const imageElement = document.createElement('img');
    imageElement.src = image.webformatURL;
    imageElement.alt = image.tags;
    galleryElement.appendChild(imageElement);
  });
}


