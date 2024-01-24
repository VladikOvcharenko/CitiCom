import SmoothScroll from 'smooth-scroll'
const scroll = new SmoothScroll('a[href*="#"]')

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 50)
})
