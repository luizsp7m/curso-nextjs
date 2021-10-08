import styles from '../styles/Question.module.css'

import useQuestion from '../hooks/useQuestion';

import { Fragment, useEffect, useState } from 'react';

import Router from 'next/router';

import ReactLoading from 'react-loading';

import Countdown from '../components/Countdown';

export default function Question() {

  const {
    indexQuestion,
    setIndexQuestion,
    questions,
    loading,
    result,
    setResult,
    getQuestions
  } = useQuestion();

  const [selectedAnswer, setSelectedAnswer] = useState();

  const [isAnswered, setIsAnswered] = useState(false);

  const [key, setKey] = useState(0);

  function checkAnswer(answer) {
    if (isAnswered) {
      return alert('Você não pode mudar sua resposta, passe para a proxima pergunta');
    }

    answer.correct && setResult(result + 1);
    setSelectedAnswer(answer);
    setIsAnswered(true);
  }

  function nextQuestion() {
    setIsAnswered(false);

    if (indexQuestion === 2) {
      setIndexQuestion(0);
      return Router.push('/end');
    }

    setIndexQuestion(indexQuestion + 1);
    setKey(prevKey => prevKey + 1)
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? <ReactLoading type={'spin'} height={'3rem'} width={'3rem'} /> : (
        <Fragment>
          <h1>{questions[indexQuestion].title}</h1>

          <Countdown nextQuestion={nextQuestion} key={key} />

          <div className={styles.anwsers}>
            {questions[indexQuestion].answers.map((answer, index) => (
              <div
                className={`
                  ${styles.anwserContainer}
                  ${isAnswered && answer.correct && styles.correct}
                  ${isAnswered && selectedAnswer === answer && !answer.correct && styles.wrong} 
                `}
                key={index}
                onClick={() => checkAnswer(answer)}
              >
                <label>{index + 1}</label>
                <span>{answer.value}</span>
              </div>
            ))}
          </div>

          <button onClick={nextQuestion}>Próxima</button>
        </Fragment>
      )}

    </div>
  );
}