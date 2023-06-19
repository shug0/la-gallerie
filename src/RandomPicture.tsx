import { motion } from "framer-motion";
import { pictures } from "./assets/canvas";
import { useMemo } from "react";

export default function RandomPicture() {
  const memoizedRandomPicture = useMemo(() => {
    return pictures[Math.floor(Math.random() * pictures.length)];
  }, [pictures]);

  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      alt="Paiting canvas"
      src={memoizedRandomPicture}
      className="max-h-full w-auto"
    />
  );
}
