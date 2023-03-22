import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';

interface IMotionWrapper {
    children: ReactElement
    direction?: 'left' | 'right'
    delay?: number
}

const coordinates = {
  left: -200,
  right: 200,
};

function MotionWrapper({ children, direction = 'left', delay = 0 }: IMotionWrapper) {
  const x = [coordinates[direction], 0];
  return (
    <motion.div
      animate={{ x, opacity: [0, 1] }}
      transition={{ delay, duration: 2, ease: 'easeInOut' }}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default MotionWrapper;
