export const createGallery = images => {
  return images
           .map(
            ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
   `<div class = "image-holder"><a class="gallery-link" href="${largeImageURL}">
     <img  class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
    </a>
   <div>
   <table>
   <tr class= "title">
   <td>Likes</td> 
   <td>Views</td>
   <td>Comments</td>
   <td>Downloads</td>
   </tr>
   <tr>
   <td>${likes}</td> 
   <td>${views}</td>
   <td>${comments}</td>
   <td>${downloads}</td>
   </tr>
   </table>
   </div>
    </div>
    `
    )
  .join("");
  };
