import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from "react-i18next"

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  lng: localStorage.getItem('i18nextLng'),
  fallbackLng: 'ka',
  debug: false,
  detection: {
    order: ['querystring', 'cookie', 'header'],
    lookupCookie: 'lang',
    lookupQuerystring: 'lang',
    cookieDomain: process.env.REACT_APP_BASE_FRONTEND_URL,
    cache: ['cookie']
  },
  react: {
    useSuspense: false
  },
  backend: {
    loadPath: process.env.REACT_APP_BASE_BACKEND_URL + '/locale/{{lng}}/translations',
  },
})

export default i18n;