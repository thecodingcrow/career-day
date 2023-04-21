import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import {
  QuestionContext,
  useInitializeQuestionContext as useInitializeQuestionState,
} from "~/hooks/useQuestionContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const defaultState = useInitializeQuestionState();

  return (
    <SessionProvider session={session}>
      <QuestionContext.Provider value={defaultState}>
        <Component {...pageProps} />
      </QuestionContext.Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
