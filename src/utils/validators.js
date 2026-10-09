// Small, dependency-free validation helpers shared by the site forms.

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isRequired(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export function isEmail(value) {
  return emailPattern.test(String(value).trim())
}

export function hasMinLength(value, length) {
  return String(value).trim().length >= length
}
