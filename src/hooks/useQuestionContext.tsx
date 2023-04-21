import { createContext, useContext, useState } from "react";
import { shuffleArray } from "~/lib/helpers";
import { questions } from "~/lib/questions";

export interface Question {
  question: string;
  possibleAnswers: [string, string, string, string];
  correctAnswer: number;
}

export interface QuestionState {
  questions: Question[];
  shuffleQuestions: () => void;
}

const questionStateDefault: QuestionState = {
  questions,
  shuffleQuestions: () => undefined,
};

export const QuestionContext =
  createContext<QuestionState>(questionStateDefault);

export const useQuestionContext = () => useContext(QuestionContext);

export const useInitializeQuestionContext = () => {
  const [questionState, setQuestionState] = useState<QuestionState>({
    ...questionStateDefault,
    shuffleQuestions: () => {
      setQuestionState((prev) => {
        shuffleArray(prev.questions);
        return prev;
      });
    },
  });

  return questionState;
};
