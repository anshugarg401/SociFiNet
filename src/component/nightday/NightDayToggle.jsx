import React, { useState, useEffect } from 'react';
import { Switch } from 'antd';
import light from '/day-mode.png';
import dark from '/dark-mode.png';
const NightAndDay = () => {
  // State to keep track of the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Use useEffect to apply the theme when the component mounts or when the theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="toggle-container relative ">

{/* <div 
className='absolute border-2 top-0 left-0 rounded-full mt-1 ml-2 bg-slate-900  h-10 w-10' ></div> */}
      <button
      className='border-4 rounded-full bg-white px-1 pt-0.5'
        checked={isDarkMode}
       onClick={toggleDarkMode}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      >
        {
           isDarkMode?( <img src={light} alt="" height={40} width={40}  />):(
            <img src={dark} alt="" height={40} width={40} />
           )
           

        }
     
      {/* Your app content here */}
      </button>
    </div>
  );
};

export default NightAndDay;
