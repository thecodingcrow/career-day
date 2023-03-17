/* eslint-disable @typescript-eslint/restrict-plus-operands */
import classnames from "classnames";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layout } from "~/components/layout";

const timestampOfLatestEntry: Date = new Date(0);

const Results = () => {
  const { username: currentUsername } = useRouter().query;

  const [allResults, setAllResults] = useState<
    {
      timestamp: Date;
      answers: string[];
      correctAnswers: number;
      score: number;
      username: string;
    }[]
  >([]);

  useEffect(() => {
    setAllResults(
      Object.keys(localStorage)
        .filter((key) => key.startsWith("LC-quiz:"))
        .map((key) => {
          const splittedKey = key.split(":");
          const element = JSON.parse(localStorage.getItem(key) as string) as {
            answers: string[];
            correctAnswers: number;
            score: number;
          };
          const timestamp = new Date(parseInt(splittedKey[2] as string));

          if (timestampOfLatestEntry.getTime() < timestamp.getTime()) {
            timestampOfLatestEntry.setTime(timestamp.getTime());
          }

          return {
            ...element,
            timestamp,
            username: splittedKey[1] as string,
          };
        })
        .sort((a, b) => b.score - a.score)
    );
  }, []);

  return (
    <Layout>
      <div className="w-[75%] rounded-lg bg-secondary-100 px-3 pb-5 pt-3">
        <h1 className="text-4xl font-extrabold tracking-wide text-primary-100">
          Leaderboard
        </h1>
        <div className="mt-6">
          <table className="w-full border-separate rounded-sm border border-primary-100 p-0">
            <thead className="border border-primary-100 py-1 text-start text-xl tracking-wide">
              <th className="pl-1 text-start">Username</th>
              <th className="pl-1">Correct Answers</th>
              <th className="pl-1">Score</th>
            </thead>

            <tbody className="text-lg">
              {allResults
                .sort()
                .map(
                  (
                    { answers, correctAnswers, score, timestamp, username },
                    i
                  ) => (
                    <tr
                      key={timestamp.getTime()}
                      className={classnames(
                        "text-secondary-100 odd:bg-secondary-300 even:bg-secondary-400",
                        timestamp.getTime() ===
                          timestampOfLatestEntry.getTime() &&
                          "!bg-primary-100 !text-inverted"
                      )}
                    >
                      <td className="pl-1">{username}</td>
                      <td className="pl-1 text-center tracking-widest">
                        {correctAnswers}/{answers.length}
                      </td>
                      <td className="pl-1 text-center tracking-wider">
                        {score ?? 0}
                        <span className="text-xs">pts</span>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
