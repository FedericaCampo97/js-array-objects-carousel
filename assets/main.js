/*Modifichiamo il codice dell'esercizio per renderlo 
funzionante con un array di oggetti al posto di un array 
di stringhe.*/

//Creo un array oggetto di immagini
const photo = [
   {
    image: './img/01.webp'
   },
   {
    image: './img/02.webp'
   },
   { 
    image: './img/03.webp'
   },
   {
    image: './img/04.webp'
   },
]

let activeSlide = 0;

// Seleziono gli elementi html
const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')

//Faccio ciclo foreach
photo.forEach((element,key) => {
    const slidePath = element.image;
    
    //Creo l'elemtno img e verifico l'active dalla key
    const slideMarkup = `<img class="${activeSlide === key ? 'active' : '' }" src="${slidePath}" alt="">`
  
    sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
})









