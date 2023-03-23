/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { Layout } from "~/components/layout";

const answerOptions = ["A", "B", "C", "D"];

const Quiz = ({
  questions,
}: {
  questions: {
    question: string;
    possibleAnswers: [string, string, string, string];
    correctAnswer: number;
  }[];
}) => {
  const router = useRouter();
  const { username } = router.query;
  const { minutes, seconds, isRunning, start } = useTimer({
    expiryTimestamp: new Date(new Date().getTime() + 1000 * 60 * 1),
  });

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

  // const [questions, setQuestions] = useState(shuffleArray(questionsRaw));

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
          <div className="min-h-[32vh] min-w-[60vw] rounded-xl border border-cold-800 bg-cold-900 px-6 pb-6 pt-4">
            {!isRunning || index >= questions.length ? (
              <div className="mx-auto flex w-full flex-col items-center gap-5">
                <Image
                  className="mt-3"
                  src="/fast.jpg"
                  alt="That was fast"
                  loading="eager"
                  width={455}
                  height={238}
                ></Image>

                <div className="flex items-center gap-6">
                  <span className="block">But how did you perfom?</span>
                  <form onSubmit={submitAnswers}>
                    <button
                      type="submit"
                      className="rounded-md text-primary-600 no-underline transition-colors duration-150 ease-in-out hover:text-primary-500 hover:underline"
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
                  <p className="mt-2 max-w-[80%]">
                    {questions[index]?.question}
                  </p>
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
                      {answerOptions[i]} {answer ?? ""}
                    </label>
                  ))}
                </fieldset>
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between">
            {isRunning && (
              <button
                className="rounded-xl border-primary-700 bg-primary-600 px-5 py-3 text-xl text-t3Black transition-colors duration-150 ease-in-out hover:bg-primary-500 active:bg-primary-400"
                onClick={selectNextQuestion}
              >
                Next
              </button>
            )}
            <div className="ml-auto flex min-w-[150px] items-center justify-center rounded-xl border border-primary-600 px-4 pb-2 pt-1.5 text-4xl">
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
    </>
  );
};

export function getServerSideProps() {
  const programmingQuestions: {
    question: string;
    possibleAnswers: [string, string, string, string];
    correctAnswer: number;
  }[] = [
    {
      question: "What is the difference between 'var' and 'let' in JavaScript?",
      possibleAnswers: [
        "There is no difference",
        "'var' is used to declare global variables, while 'let' is used to declare block-scoped variables",
        "'var' is used to declare block-scoped variables, while 'let' is used to declare global variables",
        "'var' is used to declare constants, while 'let' is used to declare variables that can be reassigned",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Which of the following is a protocol that allows for the secure transfer of files between two computers?",
      possibleAnswers: ["SMTP", "HTTP", "SSH", "FTP"],
      correctAnswer: 2,
    },
    {
      question: "What does the acronym 'HTML' stand for?",
      possibleAnswers: [
        "Hyperlinks and Text Markup Language",
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Tables Markup Language",
      ],
      correctAnswer: 1,
    },
    {
      question: "In JavaScript, what does the 'this' keyword refer to?",
      possibleAnswers: [
        "The parent function",
        "The global object",
        "The current object",
        "The previous object",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "What is the name of the process that occurs when a function is invoked?",
      possibleAnswers: [
        "Execution",
        "Initialization",
        "Declaration",
        "Invocation",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "Which data structure follows the 'First In, Last Out' (FILO) principle?",
      possibleAnswers: ["Stack", "Queue", "Linked List", "Tree"],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of the 'alt' attribute in an image tag?",
      possibleAnswers: [
        "Specifies the URL of the image file",
        "Defines a caption for the image",
        "Provides alternative text for the image",
        "Specifies the width of the image",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Which of the following HTML tags is used to define a hyperlink?",
      possibleAnswers: ["<a>", "<i>;", "<d>;", "<s>;"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is used to style HTML elements?",
      possibleAnswers: ["Java", "CSS", "Python", "Ruby"],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the HTML 'form' element?",
      possibleAnswers: [
        "To create an ordered list",
        "To create a table",
        "To create a form for user input",
        "To create a section of the webpage",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which HTML tag is used to create a line break?",
      possibleAnswers: ["<hr>", "<lb>", "<ta>", "<br>"],
      correctAnswer: 3,
    },
    {
      question:
        "Which of the following is NOT a valid value for the CSS 'display' property?",
      possibleAnswers: ["none", "inline-block", "vertical", "flex"],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of the CSS 'box-sizing' property?",
      possibleAnswers: [
        "Specifies the size of the border",
        "Specifies the padding of the element",
        "Specifies the width of the element",
        "Specifies the height of the element",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of the HTML 'meta' element?",
      possibleAnswers: [
        "To define metadata for a specific element",
        "To create a section of the webpage",
        "To define metadata about an HTML document",
        "To create an ordered list",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Which of the following is used to add interactivity to a webpage?",
      possibleAnswers: ["HTML", "CSS", "JavaScript", "Typescript"],
      correctAnswer: 2,
    },
    {
      question: "What does the `__init__` method do in Python classes?",
      possibleAnswers: [
        "It creates a new instance of the class.",
        "It is used to define the properties of the class.",
        "It initializes the class with default values.",
        "It is used to define the methods of the class.",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the command to remove a Docker container?",
      possibleAnswers: ["docker ps", "docker rm", "docker rmi", "docker run"],
      correctAnswer: 1,
    },
    {
      question:
        "What is the command to recursively copy a directory and its contents in Linux?",
      possibleAnswers: ["cp", "mv", "rsync", "scp"],
      correctAnswer: 2,
    },
    {
      question:
        "What happens after executing `sudo rm -rf --no-preserve-root /`?",
      possibleAnswers: [
        "The internet will be deleted",
        "Your computer overheats",
        "All lights go out",
        "Your dog jumps in front of a bus",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "What is the keyboard shortcut to insert a hyperlink in Microsoft Word?",
      possibleAnswers: ["Ctrl + K", "Ctrl + H", "Ctrl + I", "Ctrl + U"],
      correctAnswer: 1,
    },
    {
      question:
        "What is the command to find all files in a directory modified in the last 24 hours?",
      possibleAnswers: [
        "find . -mtime 0",
        "find . -mtime 1",
        "find . -mtime -1",
        "find . -mtime +1",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a closure in programming?",
      possibleAnswers: [
        "A block of code that is executed when a function is called",
        "A function that takes in a function as an argument",
        "A function that returns another function",
        "A variable that is defined outside of a function's scope",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "What is the keyboard shortcut to insert a comment in Microsoft Word?",
      possibleAnswers: [
        "Ctrl + Alt + C",
        "Ctrl + Shift + C",
        "Ctrl + Shift + M",
        "Ctrl + Alt + M",
      ],
      correctAnswer: 1,
    },
    {
      question: "What is a stack overflow error?",
      possibleAnswers: [
        "An error that occurs when a program tries to allocate more memory than is available",
        "An error that occurs when a program attempts to access an invalid memory address",
        "An error that occurs when a program tries to read from a write-only file",
        "An error that occurs when a program recurses too deeply and runs out of stack space",
      ],
      correctAnswer: 3,
    },
    {
      question: "What is an SQL injection?",
      possibleAnswers: [
        "A type of SQL query that returns all rows from a table",
        "A way of extracting information from a database",
        "An attack where malicious SQL code is inserted into a database query",
        "A way of inserting data into a database",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the difference between static and dynamic typing?",
      possibleAnswers: [
        "A type of SQL query that returns all rows from a table",
        "A way of extracting information from a database",
        "An attack where malicious SQL code is inserted into a database query",
        "A way of inserting data into a database",
      ],
      correctAnswer: 2,
    },
  ];

  const leanCodersQuestions = [
    {
      question:
        "Which one of these principles is NOT one of the core values of LEAN-CODERS?",
      possibleAnswers: [
        "Continuous improvement",
        "Perfectionism",
        "Respect for people",
        "Eliminate waste",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which of the following was never a customer of LEAN-CODERS?",
      possibleAnswers: ["Magenta", "Raiffeisenbank", "ÖBB", "KTM"],
      correctAnswer: 3,
    },
    {
      question: "How many people are currently working at LEAN-CODERS?",
      possibleAnswers: ["40", "23", "29", "19"],
      correctAnswer: 2,
    },
    {
      question:
        "Which of these frameworks is NOT focused in the tech stack of LEAN-CODERS?",
      possibleAnswers: ["Vue.JS", "Angular", "Nest.JS", "Next.JS"],
      correctAnswer: 0,
    },
    {
      question: "Which of these companies does not exist?",
      possibleAnswers: ["LEAN-CODERS", "LEAN-FORGE", "LEAN-LABS", "LEAN-HIVE"],
      correctAnswer: 2,
    },
    {
      question:
        "How many easter eggs are hidden on the lean-coders.at website?",
      possibleAnswers: ["10", "Easter eggs?", "0", "5"],
      correctAnswer: 3,
    },
    {
      question: "Which of these terms is NOT printed on a LEAN-CODERS sticker?",
      possibleAnswers: [
        "Increasing bugs since 2015",
        "The only mask I use is 255.255.255.255",
        "Weed-ing out the bad code",
        "Make code great again",
      ],
      correctAnswer: 1,
    },
    {
      question: "In which of these countries is the second LEAN-CODERS office?",
      possibleAnswers: ["Sweden", "Germany", "Netherlands", "Switzerland"],
      correctAnswer: 3,
    },
  ];

  const spengergasseQuestions = [
    {
      question:
        "How many students (appr.)  are currently enrolled at the HTL Spengergasse?",
      possibleAnswers: ["2600", "2550", "2800", "2100"],
      correctAnswer: 0,
    },
    {
      question: "Which building in the HTL Spengergasse is the best?",
      possibleAnswers: ["A", "B", "C", "D"],
      correctAnswer: 2,
    },
    {
      question: "Which of the five years are allowed to attend the FIT?",
      possibleAnswers: ["All ", "First to third", "Third to fifth", "None"],
      correctAnswer: 2,
    },
    {
      question: "How many floors has the large elevator in the C building? ",
      possibleAnswers: ["7 ", "4", "8", "5"],
      correctAnswer: 3,
    },
    {
      question: "Where is the secret toilet in the HTL Spengergasse?",
      possibleAnswers: [
        "Under the hall",
        "Under the D building",
        "Between the two gyms",
        "On the attic",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which console does the portier play?",
      possibleAnswers: ["PS5", "PS4", "Nintendo Switch", "XBOX One"],
      correctAnswer: 1,
    },
  ];

  const questions = [
    ...programmingQuestions,
    ...leanCodersQuestions,
    ...spengergasseQuestions,
  ];
  shuffleArray(questions);

  return {
    props: {
      questions,
    },
  };
}

function shuffleArray(array: object[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j] as object;
    array[j] = temp as object;
  }
}

export default Quiz;
