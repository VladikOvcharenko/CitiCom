import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const examples = document.querySelector('.examples-slider')
const clients = document.querySelector('.clients-slider')
const gap = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--gap')
)

const swiperExamples = new Swiper(examples, {
  slidesPerView: '1',
  loop: true,
  spaceBetween: gap,
  navigation: {
    prevEl: '.examples-btn--prev',
    nextEl: '.examples-btn--next',
  },
})
const swiperReviews = new Swiper(clients, {
  slidesPerView: '1',
  loop: true,
  spaceBetween: gap,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    prevEl: '.clients-btn--prev',
    nextEl: '.clients-btn--next',
  },
})
