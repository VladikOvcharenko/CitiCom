document.addEventListener('DOMContentLoaded', function () {
  var textarea = document.querySelector('.contacts-form__input-big')

  textarea.addEventListener('input', function () {
    this.style.height = 'auto'
    this.style.height = this.scrollHeight + 2 + 'px'
  })
})
