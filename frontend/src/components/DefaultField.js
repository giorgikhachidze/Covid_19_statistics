import React from 'react';

const DefaultField = (props) => {
  const widthSizeClass = `w-full px-2 xl:w-1/${props.element} lg:w-1/${props.element} md:w-1/${props.element}`;

  return <div className={widthSizeClass}>
    <label className="text-sm firago-medium-upper text-gray-700 tracking-wide cursor-pointer"
           htmlFor={props.name}>{props.title}</label>
    <input
      className="w-full text-sm p-3 rounded firago-regular border border-gray-300 focus:outline-none focus:border-red-500 ring ring-transparent focus:ring-red-500/20 disabled:text-gray-500"
      type={props.type}
      autoComplete="off"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.onChange(event.target.value)}
      disabled={props.disabled}
    />
    {props.message
      ? <div className="text-red-500 text-xs italic firago-medium mt-1 invalid-feedback">{props.message}</div>
      : null
    }
  </div>
};

export default DefaultField;