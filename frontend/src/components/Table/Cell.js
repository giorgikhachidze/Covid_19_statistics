import React from 'react';

const Cell = (props) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap">
      {props.children}
    </td>
  );
};

export default Cell;