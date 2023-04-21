/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Layout } from "~/components/layout";
import { useQuestionContext } from "~/hooks/useQuestionContext";
import { answerOptions } from "~/lib/constants";

const Quiz = () => {
  const router = useRouter();
  const { minutes, seconds, isRunning } = useTimer({
    expiryTimestamp: new Date(new Date().getTime() + 1000 * 60 * 1),
  });
  const { questions } = useQuestionContext();

  const { username } = router.query;
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [index, setIndex] = useState(0);

  const selectNextQuestion = () => {
    if (selectedAnswer !== "") {
      setAnswers((answers) => [...answers, selectedAnswer]);
      setSelectedAnswer("");

      setIndex(index + 1);
    }
  };

  const submitAnswers = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    let score = 0;

    answers.forEach((answer, i) => {
      score +=
        answerOptions.indexOf(answer) === questions[i]?.correctAnswer ? 1 : 0;
    });

    window.localStorage.setItem(
      "LC-quiz:" + username + ":" + Date.now(),
      JSON.stringify({
        answers,
        questions,
        score,
      })
    );

    await router.push("/results");
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="min-h-[32vh] min-w-[60vw] rounded-lg border border-[#2E3443] bg-[#121A2A] px-6 pb-6 pt-4">
          {!isRunning || index >= questions.length ? (
            <div className="mx-auto flex w-full flex-col items-center gap-5">
              <img
                className="mt-3"
                src="/fast.jpg"
                alt="That was fast"
                loading="eager"
                width={455}
                height={238}
              ></img>

              <div className="flex items-center gap-6">
                <span className="block">But how did you perfom?</span>
                <form onSubmit={submitAnswers}>
                  <button
                    type="submit"
                    className="rounded-lg text-primary-600 no-underline transition-colors duration-150 ease-in-out hover:text-primary-500 hover:underline"
                  >
                    <h2>Find out</h2>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="flex min-h-[inherit] flex-col justify-between">
              <div className="flex w-full flex-col">
                <h1 className="text-2xl font-bold text-primary-600">
                  Question {index + 1}
                </h1>
                <p className="mt-2 max-w-[80%]">{questions[index]?.question}</p>
              </div>

              <fieldset
                name="possibleAnswers"
                className="mt-8 flex flex-col gap-4"
              >
                {questions[index]?.possibleAnswers.map((answer, i) => (
                  <label
                    key={"answer" + i}
                    className="flex cursor-pointer items-center gap-2"
                    htmlFor={"answer" + answerOptions[i]}
                  >
                    <input
                      id={"answer" + answerOptions[i]}
                      type="radio"
                      name="possibleAnswers"
                      className="accent-primary-600"
                      value={answerOptions[i]}
                      onChange={(e) => setSelectedAnswer(e.target.value)}
                      checked={selectedAnswer === answerOptions[i]}
                    />
                    {answerOptions[i]}
                    {")"} {answer ?? ""}
                  </label>
                ))}
              </fieldset>
            </div>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          {isRunning && (
            <button
              className="rounded-lg bg-primary-600 px-5 py-3 text-xl text-t3Black transition-colors duration-150 ease-in-out hover:bg-primary-500 active:bg-primary-400"
              onClick={selectNextQuestion}
            >
              Next
            </button>
          )}
          <div className="ml-auto flex min-w-[150px] items-center justify-center rounded-lg border border-primary-600 px-4 pb-2 pt-1.5 text-4xl">
            <span className="mr-[2px] block">
              {minutes.toString().padStart(2, "0")}
            </span>
            :
            <span className="ml-[2px] block ">
              {seconds < 60 ? seconds.toString().padStart(2, "0") : seconds}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
