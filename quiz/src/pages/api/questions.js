import shuffleArray from '../../utils/shuffleArray';

export default async function getQuestions(req, res) {
  const response = await fetch(`https://graphql.datocms.com/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_READ_ONLY}`,
    },
    body: JSON.stringify({
      query: '{ allQuestions { id title answers } }'
    })
  });

  const questions = await response.json();

  questions.data.allQuestions.map(question => {
    question.answers = shuffleArray(question.answers);
  });

  return res.status(200).json({
    questions: shuffleArray(questions.data.allQuestions),
  });
}