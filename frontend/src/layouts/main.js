import React from 'react';
import {Link} from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Main = ({children}) => {
  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-gray-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer flex items-center">
              <Link to="/" className="cursor-pointer text-red-500 hover:text-red-600">
                <svg className="w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                  <defs>
                    <clipPath transform="translate(-1.73 -2.24)">
                      <rect x="1.73" y="2.24" width="60" height="60"/>
                    </clipPath>
                  </defs>
                  <g clipPath="#clip-path">
                    <path className="fill-red-500"
                          d="M42.42,21.55c.17.16.33.33.48.5a15,15,0,0,1,3.24,5.61c.14.44.26.89.36,1.34a15.39,15.39,0,0,1,0,6.48c-.1.44-.22.89-.36,1.33a15.06,15.06,0,0,1-3.24,5.62c-.15.16-.31.33-.48.49s-.33.33-.5.48a15,15,0,0,1-5.61,3.24c-.44.14-.89.26-1.33.36a15.43,15.43,0,0,1-6.49,0c-.44-.1-.89-.22-1.33-.36a15.06,15.06,0,0,1-5.62-3.24c-.17-.15-.33-.31-.5-.48l-.47-.49a15.06,15.06,0,0,1-3.24-5.62c-.14-.44-.26-.88-.36-1.33A15.39,15.39,0,0,1,17,29c.1-.45.22-.9.36-1.34a15,15,0,0,1,3.24-5.61c.15-.17.31-.34.47-.5s.33-.33.5-.48a15.06,15.06,0,0,1,5.62-3.24c.44-.14.89-.26,1.33-.36a15.43,15.43,0,0,1,6.49,0c.44.1.89.22,1.33.36a15,15,0,0,1,5.61,3.24c.17.15.34.31.5.48m6.81-11.2a3.11,3.11,0,0,0-.43,3.84l-4.56,4.56a18.19,18.19,0,0,0-7.08-4.09l1.67-6.23a3.08,3.08,0,1,0-1.34-.35l-1.67,6.23a18.18,18.18,0,0,0-8.17,0L26,8.08h0a3.12,3.12,0,1,0-1.34.35h0l1.67,6.22a18.3,18.3,0,0,0-7.09,4.09l-4.55-4.56a3.1,3.1,0,1,0-1,1l4.56,4.56a18.19,18.19,0,0,0-4.09,7.08L7.93,25.14h0a3.08,3.08,0,1,0-.35,1.34h0l6.22,1.67a18.51,18.51,0,0,0,0,8.18L7.58,38h0a3.11,3.11,0,1,0,.35,1.33h0l6.23-1.67a18.3,18.3,0,0,0,4.09,7.09L13.69,49.3a3.1,3.1,0,1,0,1,1l4.55-4.56a18.3,18.3,0,0,0,7.09,4.09L24.64,56h0a3.08,3.08,0,1,0,1.34.35h0l1.67-6.22a18.47,18.47,0,0,0,8.17,0l1.67,6.22A3.12,3.12,0,1,0,38.83,56l-1.67-6.23a18.19,18.19,0,0,0,7.08-4.09l4.56,4.56a3.1,3.1,0,1,0,1-1l-4.56-4.55a18.3,18.3,0,0,0,4.09-7.09l6.23,1.67A3.08,3.08,0,1,0,55.89,38h0l-6.22-1.67a18.47,18.47,0,0,0,0-8.17l6.22-1.67h0a3.12,3.12,0,1,0-.35-1.34l-6.23,1.67a18.19,18.19,0,0,0-4.09-7.08l4.56-4.56a3.1,3.1,0,1,0-.55-4.82"
                          transform="translate(-1.73 -2.24)"/>
                    <path className="fill-red-500" d="M35.69,25a4,4,0,1,1-4-4,4,4,0,0,1,4,4"
                          transform="translate(-1.73 -2.24)"/>
                    <path className="fill-red-500" d="M42.83,35.49a2,2,0,1,1-1.95-2,2,2,0,0,1,1.95,2"
                          transform="translate(-1.73 -2.24)"/>
                    <path className="fill-red-500" d="M27.78,39.52a2.67,2.67,0,1,1-2.67-2.67,2.67,2.67,0,0,1,2.67,2.67"
                          transform="translate(-1.73 -2.24)"/>
                  </g>
                </svg>
              </Link>
            </div>
            <LanguageSwitcher />
          </div>
        </div>

        {children}
      </div>

      <div className="relative hidden lg:flex items-center justify-center h-screen w-full shadow">
        <div className="absolute w-full h-full bg-start top-0 left-0 shadow-lg bg-cover bg-center"/>
      </div>
    </div>
  )
};

export default Main;
