const Heading = (props) => {
  return (
    <th scope="col" className="px-6 py-3 text-left text-sm firago-medium-upper text-gray-500 uppercase tracking-wider"
    >
      {!props.sortable
        ? props.title
        : <button
          className="flex items-center justify-between border-0 bg-transparent h-full"
          onClick={() => props.onClick(props.column, props.direction)}
        >
          <span className="uppercase">{props.title}</span>
          <span className="ml-1">
          {props.direction === 'asc'
            ? <svg  className="h-3 w-3 ml-2 rotate-180" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 330 330">
              <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
            </svg>
            : <svg className="h-3 w-3 ml-2" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 330 330">
              <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
            </svg>
          }
        </span>
        </button>
      }
    </th>
  );
};

export default Heading;