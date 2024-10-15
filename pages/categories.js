// pages/categories.js
import Link from 'next/link';
import styles from "../styles/Home.module.css";

export default function Categories() {
  // Define an array of categories, each with a name and quizId
  const categories = [
    { name: 'Science', quizId: 1 },
    { name: 'History', quizId: 2 },
    { name: 'Geography', quizId: 3 },
  ];

  return (
    <div className={styles.container}>
      <h1>Select a Quiz Category</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.quizId}>
            {/* Link to the quiz page with the dynamic quizId */}
            <Link  className={styles.description} href={`/quiz/${category.quizId}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
