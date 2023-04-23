import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
} from "react";

export interface Question {
  question: string;
  possibleAnswers: [string, string, string, string];
  correctAnswer: number;
}

export const QuestionContext = createContext<{
  questions: Question[];
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}>({
  questions: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setQuestions: () => {},
});

export const useQuestionContext = () => useContext(QuestionContext);
