
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

  // funciones para las img de Novedades //

  function mostrar () {
    const recorte = document.querySelector(".recorte")
    const img = document.querySelector(".recortei")
    const fondo = document.querySelector(".celeste")

    fondo.addEventListener('mousedown', () => {
        recorte.classList.toggle("imgvision")
        fondo.classList.toggle("fondo")
        img.classList.toggle("visionimg")
    } )
    }
    mostrar()

    function mostrar2 () {
    const recorte2 = document.querySelector(".recorte2")
    const img2 = document.querySelector(".recortei2")
    const fondo2 = document.querySelector(".green2")

    fondo2.addEventListener('mousedown', () => {
        recorte2.classList.toggle("imgvision")
        fondo2.classList.toggle("fondo")
        img2.classList.toggle("visionimg")
    } )
    }
    mostrar2()

    function mostrar3 () {
    const recorte2 = document.querySelector(".recorte3")
    const img2 = document.querySelector(".recortei3")
    const fondo2 = document.querySelector(".be")

    fondo2.addEventListener('mousedown', () => {
        recorte2.classList.toggle("imgvision")
        fondo2.classList.toggle("fondo")
        img2.classList.toggle("visionimg")
    } )
    }
    mostrar3()

    function mostrar4 () {
    const recorte2 = document.querySelector(".recorte4")
    const img2 = document.querySelector(".recortei4")
    const fondo2 = document.querySelector(".am")

    fondo2.addEventListener('mousedown', () => {
        recorte2.classList.toggle("imgvision")
        fondo2.classList.toggle("fondo")
        img2.classList.toggle("visionimg")
    } )
    }
    mostrar4()



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