import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from "../../styles/Home.module.css";

// Exemplu de date pentru quiz-uri. Într-o aplicație reală, acestea ar veni dintr-o bază de date sau dintr-un API.
const quizzes = [
  { id: '1', title: 'Science Quiz', description: 'Test your Science knowledge!' },
  { id: '2', title: 'History Quiz', description: 'Test your History knowledge!' },
  { id: '3', title: 'Geography Quiz', description: 'Test your Geography knowledge!' },
];

const QuizPage = () => {
  const router = useRouter();
  const { quizId } = router.query; 
  const quiz = quizzes.find(q => q.id === quizId);

   if (!quiz) {
    return <div>Quiz was not found!</div>;
  }

  const startQuiz = () => {
    // Navigate to the first question (e.g., 1.1, 2.1, etc.)
    const firstQuestionId = `${quizId}.1`;
    router.push(`/quiz/${quizId}/question/${firstQuestionId}`);
  };
  return (
    <div className={styles.container}>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
      <button onClick={startQuiz}>Start the Quiz</button>
    <p></p>
      <Link href="/categories">Back to categories</Link>
      <p></p>
      <Link href="/">Back home</Link>
    </div>
  );
};

export default QuizPage;
