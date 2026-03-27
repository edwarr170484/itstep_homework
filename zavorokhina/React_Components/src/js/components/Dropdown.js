import React, { useState, useRef, useEffect } from 'react';

// const Dropdown = ({ options, value, onChange, placeholder = 'Выберите...' }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const ref = useRef(null);

//   // Закрываем при клике вне компонента:
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleSelect = (option) => {
//     onChange(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="dropdown" ref={ref}>
//       <div className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
//         {value ? value.label : placeholder}
//       </div>
//       {isOpen && (
//         <div className="dropdown-menu">
//           {options.map((option) => (
//             <div
//               key={option.value}
//               className="dropdown-item"
//               onClick={() => handleSelect(option)}
//             >
//               {option.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;


const DropdownWithSearch = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dropdown" ref={ref}>
      <div className="dropdown-trigger" onClick={() => setIsOpen(true)}>
        {value?.label || 'Выберите...'}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск..."
            className="dropdown-search"
          />
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => {
                onChange(option);
                setSearch('');
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;