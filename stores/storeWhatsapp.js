import { defineStore } from 'pinia'

export const useStoreWhatsapp = defineStore('storeWhatsapp', () => {
  const baseLink = 'https://wa.me/'
  const defaultPhoneNumber = '999999999999'

  const abrirLink = (message = '') => {
    const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : ''
    return `${baseLink}${defaultPhoneNumber}${encodedMessage}`
  }

  return {
    abrirLink
  }
})
