import styles from '../styles/Game.module.css';

import Link from 'next/link';

import Door from '../components/Door';

import { FormContext } from '../contexts/FormContext';

import { useContext, useState } from 'react';

export default function Doors() {
  const [selected, setSelected] = useState();

  const {numDoors, doorSelected} = useContext(FormContext);

  let doors = [];

  for (let i = 0; i < numDoors; i++) {
    doors.push({
      doorNumber: i,
      present: i === doorSelected - 1 ? true : false,
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.doors}>
        {doors.map((door, index) => (
          <div onClick={() => setSelected(index)} key={index}>
            <Door
              present={door.present}
              doorNumber={door.doorNumber}
              isSelected={index === selected ? true : false}
            />
          </div>
        ))}
      </div>

      <Link href={`/`} passHref>
        <button>Reiniciar</button>
      </Link>
    </div>
  );
}