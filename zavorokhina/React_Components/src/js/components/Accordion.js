import React, { useState, useContext, createContext } from 'react';

// const Accordion = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="accordion-1">
//       {items.map((item, index) => (
//         <div className="accordion-1-item" key={index}>
//           <div
//             className="accordion-1-title"
//             onClick={() => handleClick(index)}
//           >
//             <h3>{item.title}</h3>
//             <span>{activeIndex === index ? '-' : '+'}</span>
//           </div>
//           {activeIndex === index && (
//             <div className="accordion-1-content">{item.content}</div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;


const AccordionContext = createContext();

const Accordion = ({ children }) => {
  const [active, setActive] = useState(null);

  return (
    <AccordionContext.Provider value={{ active, setActive }}>
      {children}
    </AccordionContext.Provider>
  );
};

Accordion.Item = ({ children }) => {
  return children;
};

Accordion.Header = ({ children }) => {
  const { active, setActive } = useContext(AccordionContext);

  return (
    <div onClick={() => setActive(active ? null : true)} className='accordion-header'>
      {children}
    </div>
  );
};

Accordion.Content = ({ children }) => {
  const { active } = useContext(AccordionContext);

  return active ? <div className='accordion-content'>{children}</div> : null;
};

export default Accordion;