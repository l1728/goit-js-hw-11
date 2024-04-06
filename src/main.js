
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api";
import {clearGallery, renderImages } from "./js/render-functions"

// Отримуємо посилання на форму та список галереї за їх ідентифікаторами
const searchForm = document.getElementById("search-form");
// Додаємо обробник події "submit" до форми
searchForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // Отримуємо значення текстового поля пошуку
  const searchInput = document.getElementById("search-input");
  // Видаляємо зайві пробіли з початку та кінця рядка
  const query = searchInput.value.trim();
  // Перевіряємо, чи не є поле пошуку порожнім
  if (query !== "") {
    // Показуємо індикатор завантаження
    showLoader();
    // Виконуємо HTTP-запит за допомогою функції fetchImages
    fetchImages(query)
      .then(images => {
        // Приховуємо індикатор завантаження
        hideLoader();
        //Очищуємо галерею
        clearGallery();
        //Очищуємо поле інпуту
        searchInput.value = "";
        if (images.length === 0) {
          // Виводимо повідомлення про відсутність зображень
          iziToast.info({
            title: "Information",
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topCenter",
          });
        } else {
          renderImages(images);
        };
      })
      .catch(error => {
        console.error("Error fetching images:", error);
        // Приховуємо індикатор завантаження в разі помилки
        hideLoader();
        // Очищаємо значення пошукового поля
        searchInput.value = "";
      })
      .finally(() => {
        // Очищаємо значення пошукового поля незалежно від результату
        searchInput.value = "";
      });
  }
};

function showLoader() {
  // Додати код для показу індикатора завантаження
  const loader = document.querySelector(".loader");
  loader.style.display = "block";
};

function hideLoader() {
  // Додати код для приховування індикатора завантаження
 const loader = document.querySelector(".loader");
  loader.style.display = "none";
};


// Після виклику функції renderImages(images) та додавання зображень до галереї
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});






