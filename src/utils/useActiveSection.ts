import { useEffect, useState } from 'react';

export const useActiveSection = (id: string) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.6, 
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [id]);

  return isActive;
};
