import { useRouter } from 'next/router';
import { useState } from 'react';

// Question data
const questions = {
  '1': {
    '1.1': {
      text: 'Who was the first President of the United States?',
      choices: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John Adams'],
      correctAnswer: 0
    },
    '1.2': {
      text: 'What year did the American Civil War end?',
      choices: ['1861', '1865', '1870', '1850'],
      correctAnswer: 1
    },
    '1.3': {
      text: 'Which US state is known as the “Sunshine State”?',
      choices: ['California', 'Texas', 'Florida', 'Nevada'],
      correctAnswer: 2
    }
  },
  '2': {
    '2.1': {
      text: 'What is the largest planet in our solar system?',
      choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 2
    },
    '2.2': {
      text: 'What is the chemical symbol for water?',
      choices: ['H2O', 'CO2', 'O2', 'NaCl'],
      correctAnswer: 0
    },
    '2.3': {
      text: 'What gas do plants absorb from the atmosphere?',
      choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
      correctAnswer: 1
    }
  },
  '3': {
    '3.1': {
      text: 'Who wrote the play "Romeo and Juliet"?',
      choices: ['William Shakespeare', 'Charles Dickens', 'J.K. Rowling', 'George Orwell'],
      correctAnswer: 0
    },
    '3.2': {
      text: 'In which year did World War II end?',
      choices: ['1945', '1939', '1918', '1950'],
      correctAnswer: 0
    },
    '3.3': {
      text: 'What is the capital of Japan?',
      choices: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
      correctAnswer: 0
    }
  }
};

const QuestionPage = () => {
  const router = useRouter();
  const { quizId, questionId } = router.query; // Extract quizId and questionId from URL

  const question = questions[quizId]?.[questionId]; // Get the question based on quizId and questionId

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // If the question is not found, show a message
  if (!question) {
    return <div>Question not found!</div>;
  }

  const handleSubmit = () => {
    setIsSubmitted(true); // Mark that the answer has been submitted
  };

  const handleNextQuestion = () => {
    const [quizPart, questionPart] = questionId.split('.');
    const nextQuestionId = `${quizPart}.${parseInt(questionPart) + 1}`;
    router.push(`/quiz/${quizId}/question/${nextQuestionId}`);
  };

  return (
    <div>
      <h1>Quiz {quizId} - Question {questionId}</h1>
      <p>{question.text}</p>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {question.choices.map((choice, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={index}
                checked={selectedChoice === index}
                onChange={() => setSelectedChoice(index)}
                disabled={isSubmitted} // Disable after submission
              />
              {choice}
            </label>
          </div>
        ))}

        {!isSubmitted ? (
          <button type="submit" disabled={selectedChoice === null}>Submit Answer</button>
        ) : (
          <div>
            <p>
              {selectedChoice === question.correctAnswer
                ? 'Correct answer!'
                : 'Wrong answer!'}
            </p>
            <button type="button" onClick={handleNextQuestion}>Next Question</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuestionPage;
