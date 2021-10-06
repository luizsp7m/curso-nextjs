import { useState } from 'react';

import styles from '../styles/Door.module.css';

export default function Door({ doorNumber, present, isSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  function handle(e) {
    e.stopPropagation();
    setIsOpen(true);
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.door}
        style={{ borderColor: isSelected ? '#f1c40f' : '' }}>
        {!isOpen && <h5 style={{ color: isSelected ? '#f1c40f' : '' }}>{doorNumber + 1}</h5>}

        {!isOpen && <div
          className={styles.handle}
          onClick={handle}
          style={{ background: isSelected ? '#f1c40f' : '' }}>
        </div>}

        {present && <img src={`/assets/presente.png`} />}

        {!isOpen && <div className={styles.closeDoor}></div>}
      </div>
    </div>
  );
}