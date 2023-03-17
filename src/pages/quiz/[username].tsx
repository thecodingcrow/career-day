/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Layout } from "~/components/layout";

const questions = [
  {
    question:
      "Which of the following is a protocol that allows for the secure transfer of files between two computers?",
    possibleAnswers: ["SMTP", "HTTP", "SSH", "FTP"],
    correctAnswer: 2,
  },
  {
    question:
      "Which of the following devices is used to connect multiple devices on a local area network (LAN)?",
    possibleAnswers: ["Switch", "Router", "Modem", "Hub"],
    correctAnswer: 0,
  },
];

const answerOptions = ["A", "B", "C", "D"];

const Quiz = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { username } = router.query;

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

    let correctAnswers = 0;

    answers.forEach((answer, i) => {
      correctAnswers +=
        answerOptions.indexOf(answer) === questions[i]?.correctAnswer ? 1 : 0;
    });

    window.localStorage.setItem(
      "LC-quiz:" + username + ":" + Date.now(),
      JSON.stringify({
        answers,
        score: correctAnswers,
        correctAnswers,
      })
    );

    await router.push("/results/" + username);
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <div className="min-h-[22vh] min-w-[50vw] rounded-xl bg-secondary-100 px-6 pb-6 pt-4">
            {index < questions.length ? (
              <div>
                <h1 className="text-2xl font-bold text-primary-200">
                  Question {index + 1}
                </h1>
                <p className="mt-2 max-w-[80%]">{questions[index]?.question}</p>

                <fieldset
                  name="possibleAnswers"
                  className="mt-8 grid grid-cols-2 grid-rows-2"
                >
                  {questions[index]?.possibleAnswers.map((question, i) => (
                    <label
                      key={"answer" + i}
                      className="flex gap-2"
                      htmlFor={"answer" + answerOptions[i]}
                    >
                      <input
                        id={"answer" + answerOptions[i]}
                        type="radio"
                        name="possibleAnswers"
                        className="accent-primary-100"
                        value={answerOptions[i]}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        checked={selectedAnswer === answerOptions[i]}
                      />
                      {answerOptions[i]}){" "}
                      {questions[index]?.possibleAnswers[i] ?? ""}
                    </label>
                  ))}
                </fieldset>
              </div>
            ) : (
              <div className="mx-auto flex w-full flex-col items-center gap-5">
                <h1 className="block text-4xl font-extrabold text-primary-200">
                  You did it
                </h1>
                <p className="max-w-[50%] text-center">
                  If you reached this screen it means you clicked a lot of
                  times.&nbsp;
                  <strong>Congrats!</strong>
                </p>

                <div className="flex items-center gap-6">
                  <span className="block">But how did you perfom?</span>
                  <form onSubmit={submitAnswers}>
                    <button
                      type="submit"
                      className="rounded-md text-primary-100 no-underline transition-colors duration-150 ease-in-out hover:text-primary-300 hover:underline"
                    >
                      <h2>Find out</h2>
                    </button>
                  </form>
                </div>

                <div className="mt-3 flex max-w-[50%] flex-col gap-1">
                  <label
                    htmlFor="easterEggs"
                    className="rounded-xl text-xs text-tertiary"
                  >
                    If you think there is more to the score than selecting the
                    correct circles in this quiz, just drop it here..
                  </label>
                  <textarea
                    id="easterEggs"
                    className="rounded-xl py-3 pl-2 text-sm text-primary-100 outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {index < questions.length && (
            <div className="mt-8 ml-auto">
              <button
                className="rounded-xl bg-primary-100 px-5 py-2.5 text-xl text-secondary-100 transition-colors duration-150 ease-in-out hover:bg-primary-200 active:bg-primary-300"
                onClick={selectNextQuestion}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Quiz;
