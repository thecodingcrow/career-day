/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useState } from "react";
import { Layout } from "~/components/layout";
import { LeaderBoard, type LeaderBoardProps } from "~/components/leaderboard";
import { answerOptions } from "~/lib/constants";
import { extractResultsFromLocalStorage } from "~/lib/helpers";

const Results = () => {
  const [allResults, setAllResults] = useState<LeaderBoardProps>({
    indexOfLatestEntry: 0,
    results: [],
    timestampOfLatestEntry: new Date(),
  });

  useEffect(() => {
    setAllResults(extractResultsFromLocalStorage());
  }, []);

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex max-h-[600px] gap-12">
          <LeaderBoard {...allResults}></LeaderBoard>
          <div className="relative flex flex-col gap-4 overflow-y-auto rounded-md border border-[#2E3443] bg-[#121A2A] p-4">
            {(() => {
              const res = allResults.results.at(allResults.indexOfLatestEntry);
              const questions = res?.questions ?? [];
              return res?.answers.map((answer, i) => {
                const isCorrect =
                  res.questions.at(i)?.correctAnswer ===
                  answerOptions.indexOf(res.answers.at(i) ?? "");

                return (
                  <div
                    key={"answer-" + String(i)}
                    className="rounded-md bg-[#0D111C] p-4"
                  >
                    <h1 className="text-xl font-bold text-primary-600">
                      Question {i + 1}
                    </h1>
                    <div className="flex w-full items-baseline gap-12">
                      <span className="mt-2 block">
                        {questions.at(i)?.question}
                      </span>
                      {isCorrect ? (
                        <span className="ml-auto rounded-full bg-green-default px-3 py-1 text-xs text-green-light">
                          CORRECT
                        </span>
                      ) : (
                        <span className="ml-auto rounded-full bg-red-default px-3 py-1 text-xs text-red-light">
                          WRONG
                        </span>
                      )}
                    </div>
                    <div className="flex w-full">
                      <div className="mt-3 flex w-[50%] flex-col">
                        <span className="text-primary-600">Your answer:</span>
                        <p className="w-[80%] text-[#757C96]">
                          {
                            questions.at(i)?.possibleAnswers[
                              answerOptions.indexOf(answer)
                            ]
                          }
                        </p>
                      </div>

                      {!isCorrect && (
                        <div className="mt-3 flex w-[50%] flex-col">
                          <span className="text-primary-600">
                            Correct answer:
                          </span>
                          <p className="w-[80%] text-[#757C96]">
                            {
                              questions.at(i)?.possibleAnswers[
                                questions.at(i)?.correctAnswer ?? 0
                              ]
                            }
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
