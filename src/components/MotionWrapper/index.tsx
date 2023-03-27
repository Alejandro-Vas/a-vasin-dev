import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

interface IMotionWrapper {
    children: ReactElement
    direction?: 'top' | 'bottom'
    delay?: number
}

const coordinates = {
  top: -200,
  bottom: 200,
};

function MotionWrapper({ children, direction = 'bottom', delay = 0 }: IMotionWrapper) {
  const y = [coordinates[direction], 0];
  return (
    <motion.div
      animate={{ y, opacity: [0, 1] }}
      transition={{ delay, duration: 1, ease: 'easeInOut' }}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default MotionWrapper;
