import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Layout } from "~/components/layout";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");

  return (
    <>
      <Layout>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Welcome to the{" "}
          <span className="rounded-xl bg-gradient-to-bl from-[#e6e0eb] to-primary-100 p-2 text-t3Black">
            Career Day
          </span>
        </h1>

        <div className="mt-2 flex flex-col">
          <label htmlFor="username" className="mb-1 self-start text-xs ">
            Your Instagram username
          </label>

          <div className="flex gap-8">
            <input
              autoComplete="off"
              aria-autocomplete="none"
              id="username"
              className="rounded-xl bg-tertiary pl-2 text-t3Black outline-none"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />

            <Link
              href={username !== "" ? "/quiz/" + username : ""}
              passHref
              className="rounded-xl bg-primary-100 px-6 py-3 text-xl text-secondary-100 transition-colors duration-150 ease-in-out hover:bg-primary-200 active:bg-primary-300"
            >
              <h2>Start Quiz</h2>
            </Link>
          </div>
        </div>
      </Layout>
    </>
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
