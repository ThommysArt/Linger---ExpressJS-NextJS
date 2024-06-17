import { getLevelQuiz, getQuiz } from "@/actions/Quiz"
import { getAllLessonsForLevel } from "@/actions/lesson"
import SelectQuiz from "@/app/dashboard/level/_components/select-quiz"

export default async function Page ({ params }: { params: { levelId: string } }) {
  const levelId = parseInt(params.levelId, 10);

  if (isNaN(levelId)) {
    console.error('Invalid level ID:', params.levelId);
    return <div>Error: Invalid level ID</div>;
  }

  const lessons = await getAllLessonsForLevel(levelId);
  const quizzes = await getLevelQuiz(levelId);

  console.log("quizzes: ", quizzes);

  return (
    <SelectQuiz lessons={lessons} quizzes={quizzes} />
  );
}
