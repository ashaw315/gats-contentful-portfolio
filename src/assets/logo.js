import React, { useState } from "react";
import { motion } from 'framer-motion';


// const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i) => {
//     const delay = 1 + i * 0.5;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
//         opacity: { delay, duration: 0.01 }
//       }
//     };
//   }
// };

const Logo = () => {
  const [visible, setVisible] = useState(true);

  const transition = {
    duration: 4,
    ease: "easeInOut"
  };

  const animateIn = {
    pathLength: 1,
    pathOffset: 0
  };
  const animateOut = {
    pathLength: 1,
    pathOffset: 1
  };
  return (
    <div className={`logo ${visible ? `active` : `inactive` }`}>
    <motion.svg
      width="121.8"
      height="60.4"
      viewBox="0 0 121.8 60.4"
      initial="hidden"
      animate="visible"
      onTap={() => {
        setVisible((val) => !val);
      }}
      
    >
      <motion.path
        d="M36.8,43.5c-0.4,1.6-0.4,4.2,0,5.8l1.9,7.2c0.4,1.6-0.6,2.9-2.2,2.9H7c-1.7,0-3.4-1.3-3.8-2.9l-1.9-7.2
        c-0.4-1.6-0.4-4.2,0-5.8l1.9-7.2c0.4-1.6,2.1-2.9,3.8-2.9h29.5c1.7,0,2.6,1.3,2.2,2.9L36.8,43.5z"
        fill="none"
        stroke="#000000"
        custom={1}
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={visible ? animateIn : animateOut}
        transition={transition}
        strokeLinecap="round"
        strokeLinejoin="round"
        
      />
      <motion.path
        d="M20,12.7c0-1.6,1.4-3,3-3h28.9c1.7,0,3,1.4,3,3v38.4c0,1.7-1.3,3-3,3H23c-1.6,0-3-1.3-3-3V12.7z"
        fill="none"
        stroke="#000000"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={visible ? animateIn : animateOut}
        transition={transition}
      />
      <motion.path
        d="M45.4,33.2c0-1.7,1.3-3,3-3h29.4c1.7,0,3,1.4,3,3v23.2c0,1.6-1.3,3-3,3H48.4c-1.7,0-3-1.4-3-3V33.2z"
        fill="none"
        stroke="#000000"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={visible ? animateIn : animateOut}
        transition={transition}
      />
      <motion.path
        d="M36.8,25c-0.4,1.6-2.1,2.9-3.8,2.9H3.5c-1.6,0-2.6-1.3-2.2-2.9L6.8,4.8c0.4-1.6,2.1-2.9,3.8-2.9H40
        c1.7,0,2.6,1.3,2.2,2.9L36.8,25z"
        fill="none"
        stroke="#000000"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={visible ? animateIn : animateOut}
        transition={transition}
      />
      <motion.path
        d="M99.9,29.4l-2.4-10.8c-0.4-1.6-0.4-4.2,0-5.9l1.8-7.9c0.4-1.6-0.7-2.9-2.3-2.9H71.1c-1.7,0-3.3,1.3-3.7,2.9
        l-1.8,7.9c-0.4,1.6-0.4,4.2,0,5.8l1.8,7.9c0.4,1.6,1,4.2,1.3,5.8l1.8,7.9c0.4,1.6,0.4,4.2,0,5.9L68.8,54c-0.4,1.6,0.7,2.9,2.3,2.9
        h25.8c1.6,0,3.3-1.3,3.7-2.9l1.8-7.9c0.4-1.6,0.4-4.2,0-5.8L99.9,29.4"
        
        stroke="#000000"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={visible ? animateIn : animateOut}
        transition={transition}
        fill="none"
      />
      <motion.path
        d="M85.4,9.3c0-1.7,1.3-3,3-3h29.4c1.7,0,3,1.3,3,3v20.8c0,1.7-1.3,3-3,3H88.4c-1.7,0-3-1.4-3-3V9.3z"
        fill="none"
        stroke="#000000"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={visible ? animateIn : animateOut}
        transition={transition}
      />
    </motion.svg>
    </div>
  );
}

export default Logo;