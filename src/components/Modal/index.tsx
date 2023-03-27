import Image, { StaticImageData } from 'next/image';
import styles from './styles.module.scss';

interface IModal {
  onClose: () => void
  image: StaticImageData
}

function Modal({ onClose, image }:IModal) {
  return (
    <div
      className={styles.modal}
      role="button"
      tabIndex={-1}
      onClick={onClose}
      onKeyDown={() => null}
    >
      <div className={styles.modalBody}>
        <div className={styles.content}>
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
    </div>
  );
}

export default Modal;
