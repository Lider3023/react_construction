import { useEffect, useState } from 'react';
import './BackToTopButton.scss'
import { motion, AnimatePresence  }   from 'framer-motion';
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <AnimatePresence mode='wait'>
 {isVisible && (
        <motion.button onClick={scrollToTop} className="back-to-top"
        initial={{opacity:0, y: 20}}
        animate={{opacity:1, y: 0}}
        exit={{opacity:0, y: 20}}
        >
          ↑ Top
        </motion.button>
      )}
    </AnimatePresence>
     
    </>
  );
};

export default BackToTopButton;
