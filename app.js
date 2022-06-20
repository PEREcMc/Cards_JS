function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll(".slide") /* объект документ с методом селектора который в строквом формате получает каждый слайд */

    slides[activeSlide].classList.add('active')
    
    for (const slide of slides) {                  /* на каждой итерации берём слайд из слайдов */
        slide.addEventListener("click", ()=> {     /* обращаемся к слайду и добавляем слушателя; добавлеям параметры - клик и вызываем стрелочную функцию */
            clearActiveClasses()
    
            slide.classList.add("active")
        })
    }
    
    function clearActiveClasses() {                /* добавляем функцию для очистки активного слайда */
        slides.forEach((slide) =>{
            slide.classList.remove("active")
        })
    }
}

slidesPlugin()