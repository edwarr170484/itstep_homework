import React, { useState } from 'react';
import '../../scss/index.scss';

/* Tabs-1: */
// const Tabs = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="tabs-container">
//       {/* Панель вкладок: */}
//       <div className="tabs">
//         {tabs.map((tab, index) => (
//           <button
//             key={tab.label}
//             className={`tab ${activeTab === index ? 'active' : ''}`}
//             onClick={() => setActiveTab(index)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Контент активной вкладки: */}
//       <div className="tab-content">
//         {tabs[activeTab].content}
//       </div>
//     </div>
//   );
// };

// export default Tabs;


/* Tabs-2: */
const Tabs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button
                    className={`tab ${activeIndex === 0 ? 'active' : ''}`}
                    onClick={() => handleClick(0)}
                >
                    Tab 1
                </button>
                <button
                    className={`tab ${activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => handleClick(1)}
                >
                    Tab 2
                </button>
                <button
                    className={`tab ${activeIndex === 2 ? 'active' : ''}`}
                    onClick={() => handleClick(2)}
                >
                    Tab 3
                </button>
            </div>
            <div className="panels">
                <div className={`panel ${activeIndex === 0 ? 'active' : ''}`}>
                    <p>Content for Tab 1</p>
                </div>
                <div className={`panel ${activeIndex === 1 ? 'active' : ''}`}>
                    <p>Content for Tab 2</p>
                </div>
                <div className={`panel ${activeIndex === 2 ? 'active' : ''}`}>
                    <p>Content for Tab 3</p>
                </div>
            </div>
        </div>
    );
};

export default Tabs;