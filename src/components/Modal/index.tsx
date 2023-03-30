import Image, { StaticImageData } from 'next/image';
import { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface IModal {
  onClose: () => void
  image: StaticImageData
}

function Modal({ onClose, image }:IModal) {
  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden';
    }

    return () => {
      if (bodyElement) {
        bodyElement.style.overflow = 'auto';
      }
    };
  }, []);

  return (
    <div
      className={styles.modal}
      role="button"
      tabIndex={-1}
      onClick={onClose}
      onKeyDown={() => null}
    >
      <div className={styles.modalBody}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 0.7 }}
          style={{ width: '100%', height: '100%' }}
        >
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt="Project preview"
              className={styles.image}
              placeholder="blur"
              width={0}
              height={0}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default memo(Modal);
