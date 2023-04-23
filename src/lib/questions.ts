import { type Question } from "~/hooks/useQuestionContext";

const funQuestions: Question[] = [
  {
    question:
      "What popular internet meme is typically captioned with the phrase 'Ight, Imma head out'?",
    possibleAnswers: [
      "Arthur",
      "SpongeBob SquarePants",
      "Pepe the Frog",
      "Bad Luck Brian",
    ],
    correctAnswer: 1,
  },
  {
    question: "Why did the tomato turn red?",
    possibleAnswers: [
      "It saw a pretty apple",
      "It was shy",
      "It blushed",
      "It got sunburned",
    ],
    correctAnswer: 0,
  },
  {
    question: "What do you call a fake noodle?",
    possibleAnswers: ["Spoodle", "Foodle", "Impasta", "Noodlet"],
    correctAnswer: 2,
  },
  {
    question: "Why do programmers prefer dark mode?",
    possibleAnswers: [
      "To reduce the light-ning bugs",
      "To see the matrix",
      "To impress girls",
      "To hide from the boss",
    ],
    correctAnswer: 0,
  },
  {
    question: "Why do programmers always mix up Halloween and Christmas?",
    possibleAnswers: [
      "Because Oct 31 equals Dec 25",
      "Because of their coding skills",
      "Because of the stress",
      "Because they like scary code",
    ],
    correctAnswer: 0,
  },
  {
    question: "Why do programmers hate nature?",
    possibleAnswers: [
      "It has too many bugs",
      "It's too green",
      "It's too hot",
      "It's too wet",
    ],
    correctAnswer: 0,
  },
  {
    question: "What do you call a programmer who's always hungry?",
    possibleAnswers: [
      "A byte-eater",
      "A snack overflow",
      "A code muncher",
      "A data digestor",
    ],
    correctAnswer: 1,
  },
  {
    question: "Why do programmers wear glasses?",
    possibleAnswers: [
      "Because they can't C#",
      "To look smarter",
      "To fit in with other programmers",
      "To keep their eyes healthy",
    ],
    correctAnswer: 0,
  },
  {
    question: "What do you call a group of programmers?",
    possibleAnswers: ["A Clique", "An Assembly", "A Posse", "A Squadron"],
    correctAnswer: 1,
  },
  {
    question: "Why do Java developers wear sun glasses?",
    possibleAnswers: [
      "To look cool",
      "To hide their identity",
      "Because they stare straight into the Eclipse!",
      "To avoid eye contact",
    ],
    correctAnswer: 2,
  },
  {
    question: "What do you call software that kills someone?",
    possibleAnswers: [
      "Deadly Code",
      "Code-blooded murderer",
      "Killer Program",
      "Fatal Application",
    ],
    correctAnswer: 1,
  },
  {
    question: "What did the .NET developer name their boat?",
    possibleAnswers: ["Net Boat", "Sharp Boat", "Boat.NET", "Sea Sharp"],
    correctAnswer: 3,
  },
  {
    question: "I like my coffee like I like my IDEs…",
    possibleAnswers: [
      "Colorful and customizable",
      "Easy to use",
      "Dark and free",
      "Robust and efficient",
    ],
    correctAnswer: 2,
  },
  {
    question: "What’s a better name for Frontend Developers?",
    possibleAnswers: ["HTMLers", "<div>elopers", "Frontenders", "CSSmiths"],
    correctAnswer: 1,
  },
  {
    question: "Which Hogwarts house is able to communicate securely?",
    possibleAnswers: ["Hufflepuff", "Gryffindor", "Ravenclaw", "SSLytheryn"],
    correctAnswer: 3,
  },
  {
    question: "You know how a hacker escapes the FBI?",
    possibleAnswers: ["<Escape>", "\\FBI", "/Escape", "|FBI|"],
    correctAnswer: 1,
  },
  {
    question:
      "What’s the difference between a delicious dinner and a slow computer?",
    possibleAnswers: [
      "One is tasty and the other is not",
      "One is expensive and the other is not",
      "One’s a rack of lamb and the other’s a lack of RAM.",
      "There's no difference",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is a software developer’s favorite herb?",
    possibleAnswers: ["Thyme", "Rosemary", "Basil", "Parsley"],
    correctAnswer: 3,
  },
  {
    question: "What is a web developer’s favorite tea?",
    possibleAnswers: ["Green Tea", "Earl Grey", "Chamomile", "URL Grey"],
    correctAnswer: 3,
  },
  {
    question: "What do toll booths and Microsoft have in common?",
    possibleAnswers: [
      "They're both toll collectors",
      "They both charge you money",
      "They're both gatekeepers",
      "They're both Bill Gates",
    ],
    correctAnswer: 3,
  },
  {
    question: "What’s a programmer’s favorite horror movie?",
    possibleAnswers: [
      "The XORcist",
      "Nightmare on Binary Street",
      "The Loops of Madness",
      "The Program",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What do you call people who used the internet before it was cool?",
    possibleAnswers: [
      "Web veterans",
      "Httpsters",
      "Netizens",
      "Cyber pioneers",
    ],
    correctAnswer: 1,
  },

  {
    question: "What does an embedded systems programmer eat for breakfast?",
    possibleAnswers: ["Java", "Cereal", "“char i/o”s", "Eggs"],
    correctAnswer: 2,
  },

  {
    question: "Why do opticians hate Microsoft software developers?",
    possibleAnswers: [
      "Because they wear thick glasses",
      "Because they use Windows",
      "Because they C#",
      "Because they are always debugging",
    ],
    correctAnswer: 2,
  },

  {
    question: "Why aren't frontend developers humble?",
    possibleAnswers: [
      "They have too much experience",
      "They display: flex;",
      "They have too much confidence",
      "They are too young",
    ],
    correctAnswer: 1,
  },

  {
    question: "You know what screams “I’m insecure”?",
    possibleAnswers: ["ftp://", "ssh://", "https://", "http://"],
    correctAnswer: 3,
  },

  {
    question: "Why did the programmer cross the road?",
    possibleAnswers: [
      "To get to the other side",
      "To reach the nearest Starbucks",
      "To reach the nearest pub",
      "To get to the other IDE",
    ],
    correctAnswer: 3,
  },

  {
    question:
      "What did Peter Parker do after he lost his job as a photographer at the Daily Bugle?",
    possibleAnswers: [
      "He became a barista",
      "He transitioned into web development",
      "He became a taxi driver",
      "He joined the army",
    ],
    correctAnswer: 1,
  },

  {
    question: "Why was a web developer’s boat always sinking?",
    possibleAnswers: [
      "They were using Internet Explorer",
      "They had too many anchors",
      "They didn't know how to swim",
      "The boat was too small",
    ],
    correctAnswer: 1,
  },

  {
    question: "Why are i and j are good sources of information?",
    possibleAnswers: [
      "Because they are short",
      "Because they are always in the loop",
      "Because they are easy to remember",
      "Because they are easy to type",
    ],
    correctAnswer: 1,
  },

  {
    question: "How did pirates communicate before the internet?",
    possibleAnswers: [
      "Pier-to-pier networking",
      "Smoke signals",
      "Carrier pigeon",
      "Semaphore",
    ],
    correctAnswer: 0,
  },

  {
    question: "Why do software developers use dark themes?",
    possibleAnswers: [
      "Because they are easier on the eyes",
      "Because bugs are attracted to the light",
      "Because they are more professional",
      "Because they are cheaper",
    ],
    correctAnswer: 1,
  },

  {
    question: "Why do SQL developers have one of the highest rates of divorce?",
    possibleAnswers: [
      "Because they are always at work",
      "Because they have poor social skills",
      "Because they have one-to-many relationships",
      "Because they have high salaries",
    ],
    correctAnswer: 2,
  },

  {
    question: "What’s a programmer’s favorite beverage?",
    possibleAnswers: ["Coffee", "Tea", "Soda", "Beer"],
    correctAnswer: 2,
  },
];

const generalITQuestions: Question[] = [
  {
    question:
      "Which of the following is a protocol that allows for the secure transfer of files between two computers?",
    possibleAnswers: ["SMTP", "HTTP", "SFTP", "RPC"],
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
    question: "What is the most popular social media platform?",
    possibleAnswers: ["TikTok", "Snapchat", "Instagram", "Facebook"],
    correctAnswer: 2,
  },
  {
    question:
      "What is a JavaScript element that represents either TRUE or FALSE values?",
    possibleAnswers: ["Event", "Boolean", "Condition", "RegExp"],
    correctAnswer: 1,
  },

  {
    question:
      "What is the format called that is used for storing and transporting data?",
    possibleAnswers: ["JSON", "Font", "Syntax", "HTML"],
    correctAnswer: 0,
  },
  {
    question: "What is another word for applications?",
    possibleAnswers: ["Drivers", "Peripherals", "Programs", "Hardware"],
    correctAnswer: 2,
  },
  {
    question: "What was the first emoticon ever used?",
    possibleAnswers: ["😀", "🙂", "🙁", "😛"],
    correctAnswer: 3,
  },
  {
    question: "What technology is used to record cryptocurrency transactions?",
    possibleAnswers: ["Mining", "Digital Wallet", "Blockchain", "Token"],
    correctAnswer: 2,
  },
  {
    question: "What does acronym FOSS stand for?",
    possibleAnswers: [
      "Free and Open-Source Software",
      "Full Option Sensor System",
      "Follow-On Support Service",
      "Fiber Optics Science System",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which programming language is the most widely used?",
    possibleAnswers: ["C#", "Java", "Swift", "PHP"],
    correctAnswer: 1,
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
    question: "Which of the following HTML tags is used to define a hyperlink?",
    possibleAnswers: ["<a>", "<i>", "<d>", "<s>"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is used to style HTML elements?",
    possibleAnswers: ["Java", "CSS", "Python", "Ruby"],
    correctAnswer: 1,
  },
  {
    question: "What is an SQL injection?",
    possibleAnswers: [
      "Get all table rows with SQL.",
      "Extract info from a database.",
      "Malicious code attack on a query.",
      "Add data to a database.",
    ],
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
    question: "What does URL stand for?",
    possibleAnswers: [
      "Uniform Resource Locator",
      "Universal Research Language",
      "United Resource Link",
      "Unique Resource List",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is NOT an internet browser?",
    possibleAnswers: ["Chrome", "Firefox", "Explorer", "Photoshop"],
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following is NOT a valid value for the CSS 'display' property?",
    possibleAnswers: ["none", "inline-block", "vertical", "flex"],
    correctAnswer: 2,
  },
  {
    question:
      "Which of the following is NOT a valid value for the CSS 'display' property?",
    possibleAnswers: ["none", "inline-block", "vertical", "flex"],
    correctAnswer: 2,
  },
  {
    question: "What does CPU stand for?",
    possibleAnswers: [
      "Central Processing Unit",
      "Control Processing Unit",
      "Computer Power Unit",
      "Core Processing Unit",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the term for a type of malware that spreads itself by duplicating and infecting other programs?",
    possibleAnswers: ["Virus", "Worm", "Trojan", "Spyware"],
    correctAnswer: 1,
  },
  {
    question: "What is the default port number for HTTP traffic?",
    possibleAnswers: ["80", "443", "22", "25"],
    correctAnswer: 0,
  },
  {
    question:
      "What is the acronym for the process of converting speech into text?",
    possibleAnswers: ["OCR", "ASR", "NLP", "AI"],
    correctAnswer: 1,
  },
  {
    question: "Which company has an AI-Assistant called Cortana?",
    possibleAnswers: ["Apple", "Microsoft", "Amazon", "Samsung"],
    correctAnswer: 1,
  },
  {
    question: "Which company has an AI-Assistant called Sam?",
    possibleAnswers: ["Apple", "Microsoft", "Amazon", "Samsung"],
    correctAnswer: 3,
  },

  // {
  //   question: "What is the difference between 'var' and 'let' in JavaScript?",
  //   possibleAnswers: [
  //     "There is no difference",
  //     "'var' is used to declare global variables, while 'let' is used to declare block-scoped variables",
  //     "'var' is used to declare block-scoped variables, while 'let' is used to declare global variables",
  //     "'var' is used to declare constants, while 'let' is used to declare variables that can be reassigned",
  //   ],
  //   correctAnswer: 1,
  // },
  // {
  //   question:
  //     "What is the name of the process that occurs when a function is invoked?",
  //   possibleAnswers: [
  //     "Execution",
  //     "Initialization",
  //     "Declaration",
  //     "Invocation",
  //   ],
  //   correctAnswer: 3,
  // },
  // {
  //   question: "In JavaScript, what does the 'this' keyword refer to?",
  //   possibleAnswers: [
  //     "The parent function",
  //     "The global object",
  //     "The current object",
  //     "The previous object",
  //   ],
  //   correctAnswer: 1,
  // },
  // {
  //   question: "What is the purpose of the HTML 'form' element?",
  //   possibleAnswers: [
  //     "To create an ordered list",
  //     "To create a table",
  //     "To create a form for user input",
  //     "To create a section of the webpage",
  //   ],
  //   correctAnswer: 2,
  // },

  // {
  //   question: "What is the purpose of the CSS 'box-sizing' property?",
  //   possibleAnswers: [
  //     "Specifies the size of the border",
  //     "Specifies the padding of the element",
  //     "Specifies the width of the element",
  //     "Specifies the height of the element",
  //   ],
  //   correctAnswer: 1,
  // },

  // {
  //   question: "What does the `__init__` method do in Python classes?",
  //   possibleAnswers: [
  //     "It creates a new instance of the class.",
  //     "It is used to define the properties of the class.",
  //     "It initializes the class with default values.",
  //     "It is used to define the methods of the class.",
  //   ],
  //   correctAnswer: 0,
  // },
  // {
  //   question: "What is the command to remove a Docker container?",
  //   possibleAnswers: ["docker ps", "docker rm", "docker rmi", "docker run"],
  //   correctAnswer: 1,
  // },
  // {
  //   question:
  //     "What is the command to recursively copy a directory and its contents in Linux?",
  //   possibleAnswers: ["cp", "mv", "rsync", "scp"],
  //   correctAnswer: 1,
  // },

  // {
  //   question:
  //     "What is the keyboard shortcut to insert a hyperlink in Microsoft Word?",
  //   possibleAnswers: ["Ctrl + K", "Ctrl + H", "Ctrl + I", "Ctrl + U"],
  //   correctAnswer: 1,
  // },
  // {
  //   question:
  //     "What is the command to find all files in a directory modified in the last 24 hours?",
  //   possibleAnswers: [
  //     "find . -mtime 0",
  //     "find . -mtime 1",
  //     "find . -mtime -1",
  //     "find . -mtime +1",
  //   ],
  //   correctAnswer: 1,
  // },
  // {
  //   question: "What is a closure in programming?",
  //   possibleAnswers: [
  //     "A block of code that is executed when a function is called",
  //     "A function that takes in a function as an argument",
  //     "A function that returns another function",
  //     "A variable that is defined outside of a function's scope",
  //   ],
  //   correctAnswer: 2,
  // },
  // {
  //   question:
  //     "What is the keyboard shortcut to insert a comment in Microsoft Word?",
  //   possibleAnswers: [
  //     "Ctrl + Alt + C",
  //     "Ctrl + Shift + C",
  //     "Ctrl + Shift + M",
  //     "Ctrl + Alt + M",
  //   ],
  //   correctAnswer: 1,
  // },
  // {
  //   question: "What is a stack overflow error?",
  //   possibleAnswers: [
  //     "An error that occurs when a program tries to allocate more memory than is available",
  //     "An error that occurs when a program attempts to access an invalid memory address",
  //     "An error that occurs when a program tries to read from a write-only file",
  //     "An error that occurs when a program recurses too deeply and runs out of stack space",
  //   ],
  //   correctAnswer: 3,
  // },
];

const leanCodersQuestions: Question[] = [
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
    correctAnswer: 0,
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
    question: "How many easter eggs are hidden on the lean-coders.at website?",
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

const spengergasseQuestions: Question[] = [
  {
    question:
      "How many students (appr.)  are currently enrolled at the HTL Spengergasse?",
    possibleAnswers: ["2600", "2550", "2800", "2100"],
    correctAnswer: 0,
  },
  {
    question: "Which building in the HTL Spengergasse is the best?",
    possibleAnswers: ["D", "A", "C", "B"],
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

export const questions = [
  ...generalITQuestions,
  ...leanCodersQuestions,
  ...funQuestions,
  // ...spengergasseQuestions,
];
