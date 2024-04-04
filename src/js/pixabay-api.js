import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function fetchImages(query) {
    const apiKey = '39588460-df52399cf23d63ffd2a80219a'; 
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error(error);
      return [];
    });
};
  


