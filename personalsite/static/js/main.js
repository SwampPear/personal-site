let dark = false

const body = document.querySelector('body')
const header = document.querySelector('header')
const icon = document.querySelector('.icon')
const title = document.querySelector('.title')
const darkmode = document.querySelector('.darkmode__svg')
const navLinks = document.querySelectorAll('.nav__link')
const h1s = document.querySelectorAll('h1')
const h2s = document.querySelectorAll('h2')
const h3s = document.querySelectorAll('h3')

const darkmodeButton = document.querySelector('.darkmode')

const toDark = () => {
    icon.classList.remove('icon-from-dark')
    title.classList.remove('title-from-dark')
    body.classList.remove('body-from-dark')
    header.classList.remove('header-from-dark')
    darkmode.classList.remove('darkmode-from-dark')
    
    navLinks.forEach((element) => {
        element.classList.remove('nav-link-from-dark')
    })

    h1s.forEach((element) => {
        element.classList.remove('headers-from-dark')
    })

    h2s.forEach((element) => {
        element.classList.remove('headers-from-dark')
    })

    h3s.forEach((element) => {
        element.classList.remove('headers-from-dark')
    })

    icon.classList.add('icon-to-dark')
    title.classList.add('title-to-dark')
    body.classList.add('body-to-dark')
    header.classList.add('header-to-dark')
    darkmode.classList.add('darkmode-to-dark')

    navLinks.forEach((element) => {
        element.classList.add('nav-link-to-dark')
    })

    h1s.forEach((element) => {
        element.classList.add('headers-to-dark')
    })

    h2s.forEach((element) => {
        element.classList.add('headers-to-dark')
    })

    h3s.forEach((element) => {
        element.classList.add('headers-to-dark')
    })
}

const fromDark = () => {
    icon.classList.remove('icon-to-dark')
    title.classList.remove('title-to-dark')
    body.classList.remove('body-to-dark')
    header.classList.remove('header-to-dark')
    darkmode.classList.remove('darkmode-to-dark')
    
    navLinks.forEach((element) => {
        element.classList.remove('nav-link-to-dark')
    })

    h1s.forEach((element) => {
        element.classList.remove('headers-to-dark')
    })

    h2s.forEach((element) => {
        element.classList.remove('headers-to-dark')
    })

    h3s.forEach((element) => {
        element.classList.remove('headers-to-dark')
    })

    icon.classList.add('icon-from-dark')
    title.classList.add('title-from-dark')
    body.classList.add('body-from-dark')
    header.classList.add('header-from-dark')
    darkmode.classList.add('darkmode-from-dark')

    navLinks.forEach((element) => {
        element.classList.add('nav-link-from-dark')
    })

    h1s.forEach((element) => {
        element.classList.add('headers-from-dark')
    })

    h2s.forEach((element) => {
        element.classList.add('headers-from-dark')
    })

    h3s.forEach((element) => {
        element.classList.add('headers-from-dark')
    })
}

darkmodeButton.addEventListener('click', () => {
    if (!dark) {
        toDark()
        dark = true
    } else {
        fromDark()
        dark = false
    }
})