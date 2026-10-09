// Centralised, shared site-wide content. Text preserved from the original
// static pages so no business information is lost or invented.

export const brand = {
  name: 'Warm House',
  logo: '/images/logo.png',
  miniLogo: '/images/minilogo.png',
  logoAlt: 'Warm House Logo',
}

export const contact = {
  email: 'support@warmhouse.com',
  phones: [
    { label: 'Shadi Doghuz', value: '+963 994286559' },
    { label: 'Saad Eddin Ibrahim', value: '+963 993735995' },
  ],
  location: 'Online Platform - Syria',
  intro:
    'We would love to hear from you. Whether you have questions about adoption, need support, or want to collaborate with us — feel free to reach out.',
}

// Primary navigation shown on every page.
export const primaryNav = [
  { label: 'Home', to: { name: 'home' } },
  { label: 'Adoption', to: { name: 'adoption' } },
  { label: 'About', to: { name: 'about' } },
  { label: 'Contact', to: { name: 'contact' } },
]

// In-page navigation for the Home view (mirrors the original Home navbar).
export const homeSectionNav = [
  { label: 'About', to: { name: 'home', hash: '#about' } },
  { label: 'Services', to: { name: 'home', hash: '#services' } },
  { label: 'Owners', to: { name: 'home', hash: '#owners' } },
]

export const authNav = [
  { label: 'Login', to: { name: 'login' } },
  { label: 'Register', to: { name: 'register' } },
]

export const footer = {
  name: 'Warm House',
  tagline: 'Helping animals find homes and helping families find companions.',
  taglineWarm: 'Helping animals find homes and creating warm families.',
  copyright: '© 2026 Warm House. All Rights Reserved.',
}
