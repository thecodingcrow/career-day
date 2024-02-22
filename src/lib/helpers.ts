import { type Question } from "~/hooks/useQuestionContext";

export function shuffleArray(array: object[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j] as object;
    array[j] = temp as object;
  }
}

export function extractResultsFromLocalStorage() {
  const timestampOfLatestEntry: Date = new Date(0);
  let indexOfLatestEntry = 0;

  const results = Object.keys(localStorage)
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
        questions: Question[];
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
    });

  return {
    results,
    indexOfLatestEntry,
    timestampOfLatestEntry,
  };
}
