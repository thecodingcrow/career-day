/* eslint-disable @typescript-eslint/restrict-plus-operands */
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layout } from "~/components/layout";

const timestampOfLatestEntry: Date = new Date(0);
let indexOfLatestEntry = 0;

const Results = () => {
  const { username: currentUsername } = useRouter().query;

  const [allResults, setAllResults] = useState<
    {
      timestamp: Date;
      answers: string[];
      correctAnswers: number;
      score: number;
      username: string;
      rank: number;
    }[]
  >([]);

  useEffect(() => {
    setAllResults(
      Object.keys(localStorage)
        .filter((key) => key.startsWith("LC-quiz:"))
        .sort(
          (a, b) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            JSON.parse(localStorage.getItem(b) ?? "{score:0}").score -
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            JSON.parse(localStorage.getItem(a) ?? "{score:0}").score
        )
        .map((key, i) => {
          const splittedKey = key.split(":");
          const element = JSON.parse(localStorage.getItem(key) as string) as {
            answers: string[];
            correctAnswers: number;
            score: number;
          };
          const timestamp = new Date(parseInt(splittedKey[2] as string));

          if (timestampOfLatestEntry.getTime() < timestamp.getTime()) {
            timestampOfLatestEntry.setTime(timestamp.getTime());
            indexOfLatestEntry = i;
          }

          return {
            ...element,
            timestamp,
            rank: i + 1,
            username: splittedKey[1] as string,
          };
        })
    );
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="min-w-[60vw] rounded-lg border border-cold-800 bg-cold-900 px-3 pb-5 pt-3">
          <h1 className="text-4xl font-extrabold tracking-wide text-primary-600">
            Leaderboard
          </h1>
          <div className="mt-6">
            <table className="w-full border-separate rounded-sm border border-primary-600 p-0">
              <thead className="border border-primary-600 py-1 text-start text-xl tracking-wide">
                <tr>
                  <th className="pl-1 text-start">Username</th>
                  <th className="pl-1">Score</th>
                  <th className="pl-1">Rank</th>
                </tr>
              </thead>

              <tbody className="text-lg">
                {allResults
                  .slice(
                    Math.max(indexOfLatestEntry - 5, 0),
                    Math.min(indexOfLatestEntry + 6, allResults.length - 1)
                  )
                  .map(({ score, timestamp, username, rank }, i) => (
                    <tr
                      key={timestamp.getTime()}
                      className={classnames(
                        " odd:bg-cold-600 even:bg-cold-700",
                        timestamp.getTime() ===
                          timestampOfLatestEntry.getTime() &&
                          "!bg-primary-600 !text-cold-900"
                      )}
                    >
                      <td className="pl-1">{username}</td>
                      <td className="pl-1 text-center tracking-wider">
                        {score ?? "-"}
                        <span className="text-xs">pts</span>
                      </td>
                      <td className="pl-1 text-center tracking-wider">
                        {rank}
                        {rank === 1 && <span className="text-xs">st</span>}
                        {rank === 2 && <span className="text-xs">nd</span>}
                        {rank === 3 && <span className="text-xs">rd</span>}
                        {rank > 3 && <span className="text-xs">th</span>}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex w-full items-center justify-between">
          <Link
            className="rounded-xl border border-primary-700 bg-primary-800 px-5 py-3 text-xl text-cold-400 transition-colors duration-150 ease-in-out hover:bg-primary-600 hover:text-cold-300 active:bg-primary-700"
            href={"/quiz/" + currentUsername}
          >
            Restart
          </Link>

          <Link
            className="rounded-xl border border-cold-800 bg-cold-900 px-5 py-3 text-xl text-primary-600 transition-colors duration-150 ease-in-out hover:bg-cold-700 active:bg-cold-800"
            href={"/"}
          >
            Reset
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
