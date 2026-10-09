import { reactive, ref } from 'vue'
import { isEmail, isRequired } from '@/utils/validators'
import { contact } from '@/data/site'

// Contact form state + validation. The original site had no backend, so a
// valid submission is handed off to the visitor's mail client addressed to
// the existing support email rather than silently pretending to succeed.
export function useContactForm() {
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const errors = reactive({})
  const status = ref(null)

  function validate() {
    errors.name = isRequired(form.name) ? '' : 'Please enter your name.'
    errors.email = isRequired(form.email)
      ? isEmail(form.email)
        ? ''
        : 'Please enter a valid email address.'
      : 'Please enter your email.'
    errors.subject = isRequired(form.subject) ? '' : 'Please enter a subject.'
    errors.message = isRequired(form.message) ? '' : 'Please enter your message.'

    return !Object.values(errors).some(Boolean)
  }

  function reset() {
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    Object.keys(errors).forEach((key) => {
      errors[key] = ''
    })
  }

  function submit() {
    status.value = null
    if (!validate()) {
      status.value = {
        variant: 'error',
        message: 'Please correct the highlighted fields and try again.',
      }
      return
    }

    const subject = encodeURIComponent(`[Warm House] ${form.subject}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`

    status.value = {
      variant: 'success',
      message: `Thank you, ${form.name}. Your mail app has been opened to send this message to ${contact.email}.`,
    }
    reset()
  }

  return { form, errors, status, submit }
}
