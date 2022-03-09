import React from 'react';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const LanguageSwitcher = () => {
  const {i18n} = useTranslation();
  const locales = useSelector(state => state.locales.i18n)
  const defaultClasses = ['ml-2', 'h-[24px]', 'w-[32px]', 'overflow-hidden', 'rounded-sm', 'focus:outline-none', 'focus:shadow-outline', 'border', 'border-gray-300', 'focus:border-red-500', 'ring', 'ring-transparent', 'focus:ring-red-500/20']
  const activeClasses = ['ml-2', 'h-[24px]', 'w-[32px]', 'overflow-hidden', 'rounded-sm', 'focus:outline-none', 'focus:shadow-outline', 'border', 'border-gray-300', 'border-red-500', 'ring', 'ring-transparent', 'ring-red-500/20']

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <div className="flex ml-3">
      {Object.keys(locales).map((locale) => {
        return <button
          key={locale}
          className={locale === i18n.language ? activeClasses.join(' ') : defaultClasses.join(' ')}
          onClick={() => changeLanguage(locale)}>
          <img src={process.env.REACT_APP_BASE_FRONTEND_URL+'/flags/'+locale+'.svg'} className="h-[24px] w-[32px] -mt-[1px]" alt={locale} />
        </button>
      })}
    </div>
  );
};

export default LanguageSwitcher;