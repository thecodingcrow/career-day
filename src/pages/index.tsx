/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "~/components/layout";
import { useQuestionContext } from "~/hooks/useQuestionContext";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const { shuffleQuestions } = useQuestionContext();

  useEffect(() => {
    shuffleQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="relative rounded-md border border-[#2E3443] bg-[#121A2A] px-32 py-20 drop-shadow-xl">
        <div className="absolute -top-[25%] left-1/2 -translate-x-1/2 overflow-hidden rounded-md">
          <img
            src="/qr_instagram.jpg"
            height="190"
            width="190"
            alt="Scan this code to follow us on instagram"
          ></img>
        </div>
        {/* <h1 className="bg-gradient-to-bl from-primary-600 via-t3Black  bg-clip-text p-2 text-[100px] font-extrabold tracking-wide text-transparent">
          LEAN-TRIVIA
        </h1> */}
        <h1
          className="mt-10 mb-1 w-full text-center text-[50px] font-extrabold tracking-wide text-primary-600 drop-shadow-md"
          style={{ fontFamily: "montserrat-bold" }}
        >
          SCAN & ENTER
        </h1>
        <h2 className="mb-3 block text-center text-primary-legacy">
          Score more than 3 points and get a Red Bull
        </h2>
        <form
          className="flex gap-4 rounded-lg bg-[#0D111C] p-4"
          onSubmit={async (): any => {
            await router.push(username !== "" ? "/quiz/" + username : "");
          }}
        >
          <input
            autoComplete="off"
            aria-autocomplete="none"
            placeholder="username"
            className="w-full rounded-lg bg-inverted pl-2 text-t3Black outline-none"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />

          <button className="rounded-lg bg-primary-600 px-6 py-3 text-xl text-t3Black transition-colors duration-150 ease-in-out hover:bg-primary-500 active:bg-primary-400">
            enter
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.quiz.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
