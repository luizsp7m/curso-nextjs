import { createContext, useState } from 'react';

const QuestionContext = createContext();

function QuestionProvider({ children }) {

  const [questions, setQuestions] = useState();

  async function getQuestions() {
    const result = await fetch(`http://localhost:3000/api/questions`);
    const data = await result.json();
    setQuestions(data);
  }

  return (
    <QuestionContext.Provider value={{ getQuestions, questions }}>
      {children}
    </QuestionContext.Provider>
  );
}

export { QuestionContext, QuestionProvider };