import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { questions } from "~/lib/questions";

import { api } from "~/utils/api";

import { type Question, QuestionContext } from "~/hooks/useQuestionContext";
import "~/styles/globals.css";
import { useState } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [questionState, setQuestionState] = useState<Question[]>(questions);

  return (
    <QuestionContext.Provider
      value={{ questions: questionState, setQuestions: setQuestionState }}
    >
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QuestionContext.Provider>
  );
};

export default api.withTRPC(MyApp);
