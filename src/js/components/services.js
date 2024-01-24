const servicesList = document.querySelector('.services-list')

servicesList.addEventListener('click', (event) => {
  const targetButton = event.target.closest('.services-list__item')
  if (!targetButton) return

  const targetSelector = targetButton.getAttribute('data-target')
  const correspondingItem = document.querySelector(targetSelector)

  handleServiceClick(targetButton, correspondingItem)
})

function handleServiceClick(serviceButton, serviceItem) {
  document.querySelectorAll('.services-list__item').forEach((button) => {
    button.classList.remove('active')
  })
  serviceButton.classList.add('active')

  document.querySelectorAll('.services-info-wrapper').forEach((item) => {
    item.classList.remove('active')
  })
  serviceItem.classList.add('active')
}

// const serviceButtons = document.querySelectorAll('.services-list__item')
// const servicesInfoWrapper = document.querySelectorAll('.services-info-wrapper')

// function handleServiceClick(serviceButton, serviceItem) {

//   serviceButtons.forEach((button) => {
//     button.classList.remove('active')
//   })
//   serviceButton.classList.add('active')

//   servicesInfoWrapper.forEach((item) => {
//     item.classList.remove('active')
//   })
//   serviceItem.classList.add('active')
// }

// serviceButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const targetSelector = button.getAttribute('data-target')
//     const correspondingItem = document.querySelector(targetSelector)
//     handleServiceClick(button, correspondingItem)
//   })
// })
