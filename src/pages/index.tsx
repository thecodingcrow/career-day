/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Layout } from "~/components/layout";
import { useQuestionContext } from "~/hooks/useQuestionContext";
import { shuffleArray } from "~/lib/helpers";

const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const { setQuestions } = useQuestionContext();

  useEffect(() => {
    setQuestions((prev) => {
      shuffleArray(prev);
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="relative rounded-md border border-[#2E3443] bg-[#121A2A] px-32 py-20 drop-shadow-xl">
        <div className="absolute -top-[25%] left-1/2 -translate-x-1/2 overflow-hidden rounded-md">
          {/* <img
            src="/qr_instagram.jpg"
            height="190"
            width="190"
            alt="Scan this code to follow us on instagram"
          ></img> */}
        </div>
        <h1 className="w-full bg-gradient-to-bl from-primary-600 via-secondary-800 bg-clip-text p-2 text-center text-[100px] font-extrabold tracking-wide text-transparent">
          LEAN-TRIVIA
        </h1>

        <h1 className="mb-6 -mt-4 w-full text-center text-[20px] font-extrabold tracking-wide text-primary-600 drop-shadow-md">
          Unter den besten zehn Teilnehmern werden 3x 25€ Amazon Gutscheine
          verlost
        </h1>

        <form
          className="flex gap-4 rounded-lg bg-[#0D111C] p-4"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const link = document.getElementById("enterQuiz");
            link?.click();
          }}
        >
          <input
            autoComplete="off"
            aria-autocomplete="none"
            placeholder="john@doe.com"
            className="w-full rounded-lg bg-inverted pl-2 text-t3Black outline-none"
            type="email"
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            id="enterQuiz"
            type="submit"
            disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)}
            onClick={() => {
              window.location.href = username !== "" ? "/quiz/" + username : "";
            }}
            className="rounded-lg bg-primary-600 px-6 py-3 text-xl text-t3Black transition-colors duration-150 ease-in-out hover:bg-primary-500 active:bg-primary-400 disabled:bg-slate-500"
          >
            enter
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Home;
