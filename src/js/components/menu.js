// const menuIcon = document.querySelector(".hamburger-wrapper");
// const navBar = document.querySelector(".header-nav");

// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle("active");
//   navBar.classList.toggle("active");
// });

// const menuIcon = document.querySelector('#menu-icon')

// // Обработчик клика по иконке меню
// menuIcon.addEventListener('click', () => {
//   console.log('awdesf')
//   menuIcon.classList.toggle('active')
// })

// // Обработчик клика в любом месте экрана
// document.addEventListener('click', (event) => {
//   const isClickInsideMenuIcon = menuIcon.contains(event.target)
//   const isClickInsideNavBar = navBar.contains(event.target)

//   // Если клик был сделан вне menuIcon и navBar, убираем класс active
//   if (!isClickInsideMenuIcon && !isClickInsideNavBar) {
//     menuIcon.classList.remove('active')
//     navBar.classList.remove('active')
//   }
// })

// // Обработчик скролла страницы
// document.addEventListener('scroll', () => {
//   // Проверяем, находится ли скролл внутри navBar
//   const isScrollInsideNavBar =
//     window.scrollY < navBar.offsetTop + navBar.offsetHeight

//   // Если скролл вне navBar, убираем класс active
//   if (!isScrollInsideNavBar) {
//     menuIcon.classList.remove('active')
//     navBar.classList.remove('active')
//   }
// })
