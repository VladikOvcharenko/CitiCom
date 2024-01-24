import JustValidate from 'just-validate'
import Inputmask from 'inputmask'

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector)
  const telSelector = form?.querySelector('input[type="tel"]')

  if (!form) {
    console.error('Нет такого селектора!')
    return false
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!')
    return false
  }

  if (telSelector) {
    const inputMask = new Inputmask('+38 (099) 999-99-99')
    inputMask.mask(telSelector)

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue()
            return phone.length === 9
          },
          errorMessage: item.telError,
        })
      }
    }
  }

  const validation = new JustValidate(selector)

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules)
  }

  validation.onSuccess(async (event) => {
    const formData = new FormData(form)

    const formObject = {}
    formData.forEach((value, key) => {
      formObject[key] = value
    })

    const formClass = form.className

    let text = formClass + '\nВід '
    if (formObject.name) text += `${formObject.name} `
    if (formObject.tel) text += `\nномер: ${formObject.tel} `
    if (formObject.problem) text += `\nпроблема: ${formObject.problem}`

    console.log(formObject)

    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      })
      if (response.ok) {
        const successElement = form.querySelector('.success')

        if (successElement) {
          successElement.classList.add('active')

          setTimeout(() => {
            successElement.classList.remove('active')
          }, 3000)
        }
      }

      if (response.ok) {
        form.reset()
      } else {
        throw new Error(response.statusText)
      }
    } catch (error) {
      console.error('Error:', error)
    }

    if (afterSend && typeof afterSend === 'function') {
      afterSend(formObject)
    }
  })
}
