import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';
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
      </div>
    </div>
  );
}

export default Modal;
