import styles from '../styles/Flip.module.css'

export default function Flip({ answer, isAnswered, selectedAnswer }) {
  return (
    <div className={`
      ${styles.flipCard}
      ${isAnswered && answer.correct && styles.answered}
      ${isAnswered && selectedAnswer === answer && !answer.correct && styles.answered} 
    `}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <span>{answer.value}</span>
        </div>

        <div className={`
          ${styles.flipCardBack}
          ${isAnswered && answer.correct && styles.correct}
          ${isAnswered && selectedAnswer === answer && !answer.correct && styles.wrong} 
        `}>
          <span>{answer.correct ? 'A resposta está correta!' : 'A resposta está errada :('}</span>
          <span>{answer.value}</span>
        </div>
      </div>
    </div>
  );
}