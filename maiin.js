
// Funcion del boton del Menu //

function myFunction() {
    const boton = document.getElementById('navbar-menu-mobile');
    const navHeader = document.getElementById('navbar-header')
    const nav = document.getElementById('navbar-container');
    boton.addEventListener('click', () => {
        nav.classList.toggle('show')
        navHeader.classList.toggle('headerBlack')
        boton.classList.toggle('show2')
    })
}
myFunction();


// Script del Repositorio para mostrar la img del perrito //

function imgPerro() {
    const arrow = document.querySelector("#imgDog")
    const imgPerro = document.querySelector("#perro")
    arrow.addEventListener('mousemove', () => {
        imgPerro.classList.toggle('vista')
    })
}
imgPerro();


// funciones del sliders //

const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null
let step = 1
const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxScrollLeft) {
            step = step * -1
        }
    }, 10)
}

start();

const carrusel2 = document.querySelector("#carrusel2")


let maxScrollLeft2 = carrusel2.scrollWidth - carrusel2.clientWidth
const start2 = () => {
    intervalo = setInterval(function () {
        carrusel2.scrollLeft = carrusel2.scrollLeft + step;
        if (carrusel2.scrollLeft === maxScrollLeft2) {
            step = step * -1
        }

    }, -5)
}

start2()

const carrusel3 = document.querySelector("#carrusel3")


let maxScrollLeft3 = carrusel3.scrollWidth - carrusel3.clientWidth
const start3 = () => {
    intervalo = setInterval(function () {
        carrusel3.scrollLeft = carrusel3.scrollLeft + step;
        if (carrusel3.scrollLeft === maxScrollLeft3) {
            step = 1
        }

    }, 8)
}

start3()

// Funcion para el slider de Noticias //
const slider = document.querySelector("#stwitt")
let sliderSection = document.querySelectorAll(".blue")
let sliderSectionLast = sliderSection[sliderSection.length - 1]

const btnLeft = document.querySelector("#left")
const btnRight = document.querySelector("#right")

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".blue")[0]
    slider.style.marginLeft = "-100%"
    slider.style.transition = "all 0.5s"
    setTimeout(function () {
        slider.style.transition = "none"
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = "0"
    }, 500)
}

function Prev() {
    let sliderSection = document.querySelectorAll(".blue")
    let sliderSectionLast = sliderSection[sliderSection.length - 1]
    slider.style.marginLeft = "100%"
    slider.style.transition = "all 0.5s"
    setTimeout(function () {
        slider.style.transition = "none"
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = "0"
    }, 500)
}

btnRight.addEventListener('click', function () {
    Next()
})

btnLeft.addEventListener('click', function () {
    Prev()
})