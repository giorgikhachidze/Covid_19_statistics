import React from 'react';

const Row = (props) => {
  return (
    <tr className="odd:bg-white even:bg-slate-50">
      {props.children}
    </tr>
  );
};

export default Row;