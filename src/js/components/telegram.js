const TELEGRAM_BOT_TOKEN = '6584923978:AAHm8GknPUO4AVWr-V1b2k3gyVtv1LA9dcQ'
const TELEGRAM_CHAT_ID = '@CitiComBot'
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

document.querySelectorAll('.telegram-form').forEach((form) => {
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    if (typeof sendData === 'function') {
      sendData(event)
    } else {
      console.error('sendData function is not defined')
    }
  })
})

async function sendData(event) {
  try {
    event.preventDefault()
    const form = event.target

    const { name, phone, problem } = Object.fromEntries(
      new FormData(form).entries()
    )
    const text = `Від ${name} \nномер: ${phone} \nпроблема: ${problem} `

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
      form.reset()
    } else {
      throw new Error(response.statusText)
    }
  } catch (error) {}
}
