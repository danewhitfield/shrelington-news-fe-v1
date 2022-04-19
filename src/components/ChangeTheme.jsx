// import React, { createContext, useEffect, useState } from 'react'
// import {BsFillMoonFill} from 'react-icons/bs'


// const ChangeTheme = () => {
//   const [theme, setTheme] = useState(themes.dark);

//   const themes = {
//     dark: "",
//     light: "white-content",
//   };

//   const ThemeContext = createContext({
//       theme: themes.dark,
//     changeTheme: () => {},
//   });

//   function changeTheme(theme) {
//     setTheme(theme);
//   }

//   useEffect(() => {
//     switch (theme) {
//       case themes.light:
//         document.body.classList.add('light-mode');
//         break;
//       case themes.dark:
//       default:
//         document.body.classList.remove('light-mode');
//         break;
//     }
//   }, [theme]);

//   return (
//         <BsFillMoonFill onClick={changeTheme}/>
//   )
// }

// export default ChangeTheme