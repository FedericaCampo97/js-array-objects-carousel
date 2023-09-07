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
   {
    image: './img/05.webp'
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

const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);

const thumbsElement = document.querySelector('.thumbnails')

photo.forEach((element,key) => {
    const thumbPath = element.image;
    const thumbMarkup = `<img class="thumb ${activeSlide === key ? 'active' : ''}" src="${thumbPath}" alt="">`
    //console.log(thumbMarkup);
  
    thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
})

//Creo funzione al click del next 
nextEl.addEventListener('click', function(){
  
    // Immagine
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
  
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')
  
    
    // activeSlide = 4
  
    if (activeSlide === slidesImages.length - 1) {
      activeSlide = 0
      // activeSlide = 5
    } else {
      // increment the activeSlide of 1
      activeSlide++
    }
  
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')
  
  
    /* TODO */
  
  
    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')
  
  
  })

  prevEl.addEventListener('click', function () {
  
    // select the current slide
    const currentSlide = slidesImages[activeSlide]
    console.log(currentSlide);
    // remove the active class from the current slide
    currentSlide.classList.remove('active')
    
    // select the active thumb
    const currentThumb = document.querySelector('.thumbnails > img.active')
    console.log(currentThumb);
    // remove the active class from the active thumb
    currentThumb.classList.remove('active')
  
    if (activeSlide === 0) {
      activeSlide = slidesImages.length - 1
    } else {
        activeSlide--
    }
    
    
    console.log(activeSlide);
  
  
    // select the next slide
    const nextSlide = slidesImages[activeSlide]
    console.log(nextSlide);
    // add the active class to the next slide
    nextSlide.classList.add('active')

    // select the next thumb
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    console.log(nextThumb);
    // add to the next thumb the active class
    nextThumb.classList.add('active')
  })







