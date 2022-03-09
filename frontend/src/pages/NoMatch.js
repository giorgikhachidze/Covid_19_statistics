import React from 'react';
import {NavLink} from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-12">
        <div className="bg-white flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img className="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" alt=""/>
            <img className="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" alt=""/>
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS! </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">No signal here! we cannot find the page you are looking for </p>
            <NavLink to="/" className="bg-red-500 inline-flex items-center justify-center text-white px-8 py-2 rounded tracking-wide firago-medium-upper font-display focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg ring ring-transparent focus:ring-red-500/20 disabled:opacity-75 disabled:hover:bg-red-500 disabled:cursor-not-allowed">Go Back</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;