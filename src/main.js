import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




import { fetchImages } from "../src/js/pixabay-api";
// import { renderImages } from './render-functions.js';

// Отримуємо посилання на форму та список галереї за їх ідентифікаторами
const searchForm = document.getElementById("search-form");
const gallery = document.querySelector(".gallery");

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
    // Виконуємо HTTP-запит за допомогою функції fetchImages
    fetchImages(query)
      .then(images => {
        // Очищаємо попередні зображення в галереї
        gallery.innerHTML = "";
        // Відображаємо нові зображення в галереї
        renderImages(images, gallery);
      })
      .catch(error => {
        // Виводимо повідомлення про помилку в консоль
        iziToast.error({
          title: "Error",
          message: "Failed to fetch images. Please try again later.",
         });
       });
  } else {
    // Виводимо повідомлення про порожнє поле пошуку
     iziToast.info({
         title: "Information",
         message: "Search field is empty. Please enter a search query.",
        });
      }
};











