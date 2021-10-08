import { CountdownCircleTimer } from 'react-countdown-circle-timer'

import styles from '../styles/Countdown.module.css';

const renderTime = ({ remainingTime }) => {
  return (
      <div className={styles.value}>{remainingTime}</div>
  );
}

export default function Countdown({ nextQuestion, reset }) {

  return (
    <CountdownCircleTimer
      key={reset}
      size={100}
      strokeWidth={10}
      isPlaying
      duration={10}
      colors={[
        ['#2ecc71', 0.33],
        ['#f1c40f', 0.33],
        ['#e74c3c', 0.33],
      ]}
      onComplete={() => {
        nextQuestion();
      }}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
}