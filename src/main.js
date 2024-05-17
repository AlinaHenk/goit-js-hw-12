import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchPictureBySearch } from "./js/pixabay-api.js";
import { createGallery } from "./js/render-functions.js";

const inputForm = document.querySelector('input[name="search"]');
const allImages = document.querySelector('.gallery-list');
const form = document.querySelector('.form-image-search');
const loader = document.querySelector('.loader');
const btnLoad = document.querySelector('.btn');
form.addEventListener("submit", performSearch);
btnLoad.addEventListener("click", nextPage);
let search;
let page;
let totalPages;
const perPage = 15;
let limit;

async function performSearch(event) {
   event.preventDefault();
   btnLoad.classList.add('is-hidden');
   loader.classList.remove('is-hidden');
   search = inputForm.value.trim();
   page = 1;
   allImages.innerHTML = "";
   if (search === '') {
      event.target.reset();
      loader.classList.add('is-hidden');
   } else {
      try {
         const imagesData = await fetchPictureBySearch(search, perPage, page);
         limit = imagesData.totalHits;
         totalPages = Math.ceil(limit / perPage);
         if (imagesData.total === 0) {
            iziToast.info({
               position: 'topRight',
               message: 'Sorry, there are no images matching your search query. Please try again!',
               color: 'red',
               timeout: 3000,
            });
            event.target.reset();
         } else {
            const searchedGallery = createGallery(imagesData.hits);
            allImages.innerHTML = searchedGallery;
            let newGallery = new SimpleLightbox('.gallery-list a', { captionsData: 'alt', captionDelay: 250 });
            newGallery.refresh();
            if (totalPages > 1) {
               btnLoad.classList.remove('is-hidden');
            }
         }
      } catch (error) {
               console.log(error);
      } finally {
            event.target.reset();            
            loader.classList.add('is-hidden');
      };
   }
}

async function nextPage() {
    page += 1;
    const totalPages = Math.ceil(limit / perPage);
   try {
          const imagesData = await fetchPictureBySearch(search, perPage, page);
          const searchedGallery = createGallery(imagesData.hits);
          allImages.insertAdjacentHTML("beforeend", searchedGallery);
          let newGallery = new SimpleLightbox('.gallery-list a', { captionsData: 'alt', captionDelay: 250 });
          newGallery.refresh();
       
      if (page === totalPages) {
         btnLoad.classList.add('is-hidden');
         return iziToast.info({
            position: "topRight",
            message: "We're sorry, but you've reached the end of search results.",
            timeout: 3000,
         });
      }
    } catch (error) {
          console.log(error);
       } finally {
            let elem = document.querySelector(".image-holder");
            let rect = elem.getBoundingClientRect();
            window.scrollBy(0, rect.height*2);
            loader.classList.add('is-hidden');
         };
   }   


