import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export function Counter(n: number) {
  const count = useMotionValue(0);
  const [rounded, setRounded] = useState(0);

  useEffect(() => {
    const controls = animate(count, n, { duration: 5 });
    const unsubscribe = count.onChange((v) => setRounded(Math.round(v)));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, n]);

  return <motion.pre>{rounded}</motion.pre>;
}
