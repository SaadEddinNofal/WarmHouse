import { reactive, ref } from 'vue'
import { hasMinLength, isEmail, isRequired } from '@/utils/validators'

// Shared state/validation for the Login and Register forms.
//
// The original pages shipped static, non-submitting forms and the project has
// no authentication backend. Rather than fabricate a login result, this
// composable only validates the input (including password confirmation) and
// reports the outcome via a status message.
export function useAuthForm(mode = 'login') {
  const isRegister = mode === 'register'

  const form = reactive(
    isRegister
      ? { fullName: '', email: '', password: '', confirmPassword: '' }
      : { email: '', password: '' },
  )

  const errors = reactive(
    isRegister ? { fullName: '', email: '', password: '', confirmPassword: '' } : { email: '', password: '' },
  )
  const status = ref(null)

  function validate() {
    let valid = true

    if (isRegister) {
      errors.fullName = isRequired(form.fullName) ? '' : 'Please enter your full name.'
      valid = valid && !errors.fullName
    }

    if (!isRequired(form.email)) {
      errors.email = 'Please enter your email.'
      valid = false
    } else if (!isEmail(form.email)) {
      errors.email = 'Please enter a valid email address.'
      valid = false
    } else {
      errors.email = ''
    }

    if (!isRequired(form.password)) {
      errors.password = 'Please enter your password.'
      valid = false
    } else if (!hasMinLength(form.password, 6)) {
      errors.password = 'Password must be at least 6 characters.'
      valid = false
    } else {
      errors.password = ''
    }

    if (isRegister) {
      if (!isRequired(form.confirmPassword)) {
        errors.confirmPassword = 'Please confirm your password.'
        valid = false
      } else if (form.confirmPassword !== form.password) {
        errors.confirmPassword = 'Passwords do not match.'
        valid = false
      } else {
        errors.confirmPassword = ''
      }
    }

    return valid
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

    status.value = {
      variant: 'success',
      message: isRegister
        ? 'Your details were validated successfully. You can now log in.'
        : 'Your details were validated successfully. Welcome back!',
    }
  }

  return { form, errors, status, submit, isRegister }
}
