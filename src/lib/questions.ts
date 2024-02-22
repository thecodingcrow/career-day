import { type Question } from "~/hooks/useQuestionContext";

const generalITQuestions: Question[] = [
  {
    question: "Was ist ein Gigabyte?",
    possibleAnswers: [
      "Eine Geschwindigkeit im Internet",
      "Eine Farbpalette für Monitore",
      "Eine Maßeinheit für Datenspeicher",
      "Ein neuer Typ von Computerchip",
    ],
    correctAnswer: 2,
  },
  {
    question: "Welches Betriebssystem wurde von Microsoft entwickelt?",
    possibleAnswers: [
      "Android",
      "Linux",
      "MacOS",
      "Windows",
    ],
    correctAnswer: 3,
  },
  {
    question: "Was ist das World Wide Web?",
    possibleAnswers: [
      "Ein globaler Webhosting-Dienst",
      "Ein Internet-Browser",
      "Eine Sammlung vernetzter Dokumente und Websites",
      "Ein Computerspiel über das Internet",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was beschreibt das Akronym 'IP' in 'IP-Adresse'?",
    possibleAnswers: [
      "Intelligentes Protokoll",
      "Internet-Protokoll",
      "Interne Passwort",
      "Informationspfad",
    ],
    correctAnswer: 1,
  },
  {
    question: "Wofür steht das 'www' in einer Webadresse?",
    possibleAnswers: [
      "Weltweites Warten",
      "Wichtige Web Waren",
      "World Wide Web",
      "Weites Web Wunder",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was ist eine Firewall?",
    possibleAnswers: [
      "Ein physisches Gerät zum Schutz von Computern",
      "Software zum Schutz vor Viren und Hackern",
      "Ein Fehler in der Software",
      "Eine neue Art von Monitor",
    ],
    correctAnswer: 1,
  },
  {
    question: "Welche Sprache wird hauptsächlich für die Gestaltung von Webseiten verwendet?",
    possibleAnswers: [
      "C++",
      "Python",
      "HTML",
      "Java",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was ist ein Algorithmus?",
    possibleAnswers: [
      "Ein Problem in der Software",
      "Eine Person, die im IT-Bereich arbeitet",
      "Ein Set von Anweisungen oder Regeln, die befolgt werden müssen",
      "Ein Typ von Computer",
    ],
    correctAnswer: 2,
  },
  {
    question: "Wofür wird USB verwendet?",
    possibleAnswers: [
      "Zur Geschwindigkeitsmessung im Internet",
      "Als Steckplatz für den Computer",
      "Zur Übertragung von Daten zwischen Geräten",
      "Zur Speicherung großer Datenmengen",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was ist Cloud-Computing?",
    possibleAnswers: [
      "Das Rechnen mit Daten in der Atmosphäre",
      "Eine spezielle Art von Computer",
      "Das Speichern und Zugreifen auf Daten über das Internet",
      "Eine neue Programmiersprache",
    ],
    correctAnswer: 2,
  },
  {
    question: "Welches der folgenden Protokolle ermöglicht den sicheren Transfer von Dateien zwischen zwei Computern?",
    possibleAnswers: ["SMTP", "HTTPS", "SFTP", "RPC"],
    correctAnswer: 2,
  },
  {
    question: "Wofür steht das Akronym 'HTML'?",
    possibleAnswers: [
      "Hyperlinks und Text Markup Language",
      "Hypertext Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Table Markup Language",
    ],
    correctAnswer: 1,
  },
  {
    question: "Welche ist die beliebteste Social-Media-Plattform?",
    possibleAnswers: ["TikTok", "Snapchat", "Instagram", "Facebook"],
    correctAnswer: 2,
  },
  {
    question: "Welches dieser Javascript Datentypen wird verwendet um TRUE oder FALSE werte zu speichern?",
    possibleAnswers: ["Event", "Boolean", "String", "Object"],
    correctAnswer: 1,
  },
  {
    question: "In welchem Format werden Daten über HTTP übertragen?",
    possibleAnswers: ["JSON", "XML", "Syntax", "HTML"],
    correctAnswer: 0,
  },
  {
    question: "Was ist ein anderes Wort für Anwendungen?",
    possibleAnswers: ["Treiber", "Peripheriegeräte", "Programme", "Hardware"],
    correctAnswer: 2,
  },
  {
    question: "Was war das erste jemals verwendete Emoji?",
    possibleAnswers: [":-D", ";-)", ":-)", ":-P"],
    correctAnswer: 3,
  },
  {
    question: "Welche Technologie wird verwendet, um Kryptowährungstransaktionen aufzuzeichnen?",
    possibleAnswers: ["Mining", "Digital Wallet", "Blockchain", "Token"],
    correctAnswer: 2,
  },
  {
    question: "Wofür steht das Akronym FOSS?",
    possibleAnswers: [
      "Free and Open-Source-Software",
      "Full Option Sensor System",
      "Follow-On Support Service",
      "Faser Optic Wissenschaft System",
    ],
    correctAnswer: 0,
  },
  {
    question: "Welche Programmiersprache wird am meisten verwendet?",
    possibleAnswers: ["C#", "Java", "Swift", "PHP"],
    correctAnswer: 1,
  },
  {
    question: "Welche Datenstruktur folgt dem 'First In, Last Out' (FILO) Prinzip?",
    possibleAnswers: ["Stack", "Queue", "Linked List", "Tree"],
    correctAnswer: 0,
  },
  {
    question: "Welches der folgenden HTML-Tags wird verwendet, um einen Hyperlink zu definieren?",
    possibleAnswers: ["<a>", "<i>", "<d>", "<s>"],
    correctAnswer: 0,
  },
  {
    question: "Was wird verwendet, um HTML-Elemente zu stylen?",
    possibleAnswers: ["Java", "CSS", "Python", "Ruby"],
    correctAnswer: 1,
  },
  {
    question: "Was ist eine SQL-Injection?",
    possibleAnswers: [
      "Alle Tabellenzeilen mit SQL abquestionn",
      "Informationen aus einer Datenbank extrahieren",
      "Schadcode über eine SQL Abquestion einfügen",
      "Daten zu einer Datenbank hinzufügen",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was passiert nach der Ausführung von `sudo rm -rf --no-preserve-root /`?",
    possibleAnswers: [
      "Dein Computer überhitzt",
      "Alle Lichter gehen aus",
      "Das Internet wird gelöscht",
      "Dein Hund springt vor einen Bus",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was wird verwendet, um einer Webseite Interaktivität hinzuzufügen?",
    possibleAnswers: ["HTML", "CSS", "JavaScript", "Typescript"],
    correctAnswer: 2,
  },
  {
    question: "Welches HTML-Tag wird verwendet, um einen Zeilenumbruch zu erstellen?",
    possibleAnswers: ["<hr>", "<lb>", "<ta>", "<br>"],
    correctAnswer: 3,
  },
  {
    question: "Welcher der folgenden Werte ist KEIN gültiger Wert für die CSS-Eigenschaft 'display'?",
    possibleAnswers: ["none", "inline-block", "vertical", "flex"],
    correctAnswer: 2,
  },
  {
    question: "Wofür steht URL?",
    possibleAnswers: [
      "Uniform Resource Locator",
      "Universal Research Language",
      "United Resource Link",
      "Unique Resource List",
    ],
    correctAnswer: 0,
  },
  {
    question: "Welches der folgenden ist KEIN Internetbrowser?",
    possibleAnswers: ["Chrome", "Firefox", "Explorer", "Photoshop"],
    correctAnswer: 3,
  },
  {
    question: "Wofür steht CPU?",
    possibleAnswers: [
      "Central Processing Unit",
      "Control Processing Unit",
      "Computer Power Unit",
      "Core Processing Unit",
    ],
    correctAnswer: 0,
  },
  {
    question: "Was ist der Begriff für eine Art von Malware, die sich selbst verbreitet, indem sie andere Programme infiziert?",
    possibleAnswers: ["Virus", "Wurm", "Trojaner", "Spyware"],
    correctAnswer: 1,
  },
  {
    question: "Was ist die Standard-Portnummer für HTTP-Traffic?",
    possibleAnswers: ["80", "443", "22", "25"],
    correctAnswer: 0,
  },
  {
    question: "Welches ist das Akronym das den Prozess der Umwandlung von Sprache in Text beschreibt?",
    possibleAnswers: ["OCR", "ASR", "NLP", "KI"],
    correctAnswer: 1,
  },
  {
    question: "Welches Unternehmen hat einen KI-Assistenten namens Cortana?",
    possibleAnswers: ["Apple", "Microsoft", "Amazon", "Samsung"],
    correctAnswer: 1,
  },
  {
    question: "Welches Unternehmen hat einen KI-Assistenten namens Sam?",
    possibleAnswers: ["Apple", "Microsoft", "Amazon", "Samsung"],
    correctAnswer: 3,
  },
   {
    question: "Welches Gerät wird verwendet, um die Netzwerkverbindungen zu verwalten?",
    possibleAnswers: [
      "Router",
      "Monitor",
      "Tastatur",
      "Festplatte",
    ],
    correctAnswer: 0,
  },
  {
    question: "Welche Programmiersprache wird vor allem für die Entwicklung von iOS-Apps verwendet?",
    possibleAnswers: [
      "Java",
      "Swift",
      "Python",
      "Kotlin",
    ],
    correctAnswer: 1,
  },
  {
    question: "Was beschreibt den Begriff 'Freeware'?",
    possibleAnswers: [
      "Software, die frei verwendet und verbreitet werden kann",
      "Software, die nur für Bildungszwecke kostenlos ist",
      "Software, die man nach einer Probezeit kaufen muss",
      "Software, die zusätzliche Hardware erfordert",
    ],
    correctAnswer: 0,
  },
  {
    question: "Was ist ein 'Bug' in der Programmierung?",
    possibleAnswers: [
      "Ein Feature, das vom Kunden gewünscht wird",
      "Ein Sicherheitsfeature",
      "Ein Fehler oder Defekt in einem Programm",
      "Ein Tool zur Produktivitätssteigerung",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was ist eine 'Cloud' im Kontext der Informationstechnologie?",
    possibleAnswers: [
      "Ein physischer Speicherort für Daten",
      "Ein dezentrales Netzwerk von Computern",
      "Ein Online-Speicherdienst",
      "Eine grafische Darstellung von Daten",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was ist eine 'Datenbank'?",
    possibleAnswers: [
      "Ein Ort zur Datensicherung",
      "Ein Programm zur Datenerfassung",
      "Ein System zur organisierten Datenspeicherung und -abfrage",
      "Ein Gerät zur Speichererweiterung",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was bedeutet 'Open Source'?",
    possibleAnswers: [
      "Software, deren Quellcode öffentlich und frei zugänglich ist",
      "Eine spezielle Art von Hardware",
      "Ein exklusiver Zugang zu Daten",
      "Eine geschlossene Softwareumgebung",
    ],
    correctAnswer: 0,
  },
  {
    question: "Was ist 'Phishing'?",
    possibleAnswers: [
      "Eine Technik zum Fischen im Internet",
      "Eine Methode, um schneller im Internet zu surfen",
      "Ein Angriff, um sensible Daten wie Passwörter zu stehlen",
      "Ein Programm zur Virenentfernung",
    ],
    correctAnswer: 2,
  },
  {
    question: "Was ist eine 'Firewall'?",
    possibleAnswers: [
      "Ein Hardware-Defekt",
      "Eine Software oder Hardware, die ein Netzwerk oder System schützt",
      "Ein Werkzeug zum Programmieren",
      "Ein physikalisches Netzwerkkabel",
    ],
    correctAnswer: 1,
  },
  {
    question: "Was ist 'Kryptographie'?",
    possibleAnswers: [
      "Die Wissenschaft der Verschlüsselung von Informationen",
      "Eine Programmiersprache",
      "Ein Algorithmus zur Datenkompression",
      "Ein Verfahren zur Herstellung von Prozessoren",
    ],
    correctAnswer: 0,
  },
];

const leanCodersQuestions: Question[] = [
  {
    question:
      "Welches dieser Prinzipien ist KEINER der Kernwerte von LEAN-CODERS?",
    possibleAnswers: [
      "Kontinuierliche Verbesserung",
      "Perfektionismus",
      "Respekt vor Menschen",
      "Verschwendung eliminieren",
    ],
    correctAnswer: 1,
  },
  {
    question: "Welcher der folgenden war niemals ein Kunde von LEAN-CODERS?",
    possibleAnswers: ["KTM", "Raiffeisenbank", "ÖBB", "Red Bull"],
    correctAnswer: 3,
  },
  {
    question: "Wie viele Personen arbeiten derzeit bei LEAN-CODERS?",
    possibleAnswers: ["40", "23", "29", "19"],
    correctAnswer: 0,
  },
  {
    question:
      "Welches dieser Frameworks ist NICHT im Technologiestack von LEAN-CODERS fokussiert?",
    possibleAnswers: ["Vue.JS", "Angular", "Nest.JS", "Next.JS"],
    correctAnswer: 0,
  },
  {
    question: "Welches dieser Unternehmen existiert nicht?",
    possibleAnswers: ["LEAN-CODERS", "LEAN-CODERS CH", "LEAN-LABS", "LEAN-HIVE"],
    correctAnswer: 2,
  },
  {
    question: "Wie viele Easter eggs sind auf der Website lean-coders.at versteckt?",
    possibleAnswers: ["10", "Easter eggs?", "0", "5"],
    correctAnswer: 3,
  },
  {
    question: "Welcher dieser Begriffe steht NICHT auf einem LEAN-CODERS Sticker?",
    possibleAnswers: [
      "Increasing bugs since 2015",
      "Die einzige Maske, die ich verwende, ist 255.255.255.255",
      "Eliminate bade code",
      "Make code great again",
    ],
    correctAnswer: 1,
  },
  {
    question: "In welchem dieser Länder befindet sich das zweite Büro von LEAN-CODERS?",
    possibleAnswers: ["Schweden", "Deutschland", "Niederlande", "Schweiz"],
    correctAnswer: 3,
  },
];


export const questions = [
  ...generalITQuestions,
  ...leanCodersQuestions,
];
