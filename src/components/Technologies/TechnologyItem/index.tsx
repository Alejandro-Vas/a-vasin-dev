import { Dispatch, memo, SetStateAction } from 'react';
import { ITechnologyEntity } from '@models/index';
import styles from '../styles.module.scss';

interface IItechnology {
    technology: ITechnologyEntity;
    isActiveSelected: boolean;
    setActive: Dispatch<SetStateAction<ITechnologyEntity>>;
}

function TechnologyItem({ technology, isActiveSelected, setActive }: IItechnology) {
  const { label, Icon } = technology;
  const selectedClassName = isActiveSelected ? styles.selected : '';

  return (
    <div
      key={label}
      className={`${styles.technologyItem} ${selectedClassName}`}
      onClick={() => setActive(technology)}
      tabIndex={-1}
      role="button"
      onKeyDown={() => null}
    >
      <Icon />
    </div>
  );
}

export default memo(TechnologyItem);
