import classnames from "classnames";
import { useEffect } from "react";
import { type Question } from "~/hooks/useQuestionContext";

export interface LeaderBoardEntry {
  timestamp: Date;
  answers: string[];
  questions: Question[];
  score: number;
  username: string;
  rank: number;
}

export interface LeaderBoardProps {
  results: LeaderBoardEntry[];
  indexOfLatestEntry: number;
  timestampOfLatestEntry: Date;
}

export const LeaderBoard = ({
  results,
  timestampOfLatestEntry,
}: LeaderBoardProps) => {
  useEffect(() => {
    setTimeout(() => {
      const current = document.getElementById(
        "current-user-result"
      ) as HTMLElement;
      current.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, []);
  return (
    <div className="min-w-[50vw] rounded-lg border border-[#2E3443] bg-[#121A2A] px-3 pb-5 pt-3">
      <h1 className="text-4xl font-extrabold tracking-wide text-primary-600">
        Leaderboard
      </h1>
      <div className="mt-6 max-h-[400px] overflow-y-auto rounded-md bg-[#0D111C] p-2">
        <table className="w-full border-separate rounded-sm p-0">
          <thead className="py-1 text-start text-xl tracking-wide">
            <tr>
              <th className="pl-1 text-start">Username</th>
              <th className="pl-1">Score</th>
              <th className="pl-1">Rank</th>
            </tr>
          </thead>

          <tbody className="text-lg">
            {results
              // .slice(
              //   Math.max(indexOfLatestEntry - 5, 0),
              //   Math.min(indexOfLatestEntry + 6, results.length)
              // )
              .map(({ score, timestamp, username, rank }) => (
                <tr
                  key={timestamp.getTime()}
                  id={
                    timestamp.getTime() === timestampOfLatestEntry.getTime()
                      ? "current-user-result"
                      : ""
                  }
                  className={classnames(
                    " odd:bg-[#2E3443] even:bg-cold-800",
                    timestamp.getTime() === timestampOfLatestEntry.getTime() &&
                      "!bg-primary-600 !text-[#0D111C]"
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
  );
};
