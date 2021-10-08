import { createContext, useState } from 'react';

const QuestionContext = createContext();

function QuestionProvider({ children }) {

  const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);

  const [indexQuestion, setIndexQuestion] = useState(0);

  const [result, setResult] = useState(0);

  async function getQuestions() {
    setLoading(true);

    const result = await fetch(`http://localhost:3000/api/questions`);
    const data = await result.json();
    setQuestions(data.questions);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  function newGame() {
    setResult(0);
  }

  return (
    <QuestionContext.Provider value={{ 
      getQuestions, 
      questions, 
      loading,
      indexQuestion,
      setIndexQuestion,
      result,
      setResult,
      newGame
     }}>
      {children}
    </QuestionContext.Provider>
  );
}

export { QuestionContext, QuestionProvider };