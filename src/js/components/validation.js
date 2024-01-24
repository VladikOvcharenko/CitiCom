import { validateForms } from '../functions/validate-forms'
const rules1 = [
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'введіть корректний телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'введіть номер телефону!',
      },
    ],
  },
]

const rules2 = [
  {
    ruleSelector: '.facts-input-phone',
    tel: true,
    telError: 'введіть корректний телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'введіть номер телефону!',
      },
    ],
  },
  {
    ruleSelector: '.facts-input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'мінімум 3 символи',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'введіть імʼя!',
      },
    ],
  },
]
const rules4 = [
  {
    ruleSelector: '.input-phone',
    tel: true,
    telError: 'введіть корректний телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'введіть номер телефону!',
      },
    ],
  },
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'мінімум 3 символи',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'введіть імʼя!',
      },
    ],
  },
]
const rules3 = [
  {
    ruleSelector: '[name="tel"]',
    tel: true,
    telError: 'введіть корректний телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'введіть номер телефону!',
      },
    ],
  },
  {
    ruleSelector: '[name="name"]',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'мінімум 3 символи',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'введіть імʼя!',
      },
    ],
  },
  {
    ruleSelector: '[name="problem"]',
    rules: [
      {
        rule: 'minLength',
        value: 20,
        errorMessage: 'мінімум 20 символів',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'опішіть вашу проблему!',
      },
    ],
  },
]

const afterForm = () => {}

validateForms('.hero-form', rules1, afterForm)
validateForms('.facts-form', rules2, afterForm)
validateForms('.discount-form__wrapper', rules4, afterForm)
validateForms('.contacts-form', rules3, afterForm)
