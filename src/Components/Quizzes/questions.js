export const placeholderQuestion = [
  {
    question: "Choose a category and your questions will appear here!",
    options: [
      { id: 0, question: "Question A", isCorrect: true },
      { id: 1, question: "Question B", isCorrect: false },
      { id: 2, question: "Question C", isCorrect: false },
      { id: 3, question: "Question D", isCorrect: false },
    ],
  },
];

export const questionsJavaScript = [
    {
      question: "What is the correct syntax for a for loop in JavaScript?",
      options: [
        { id: 0, question: "for (i=0; i < 10; ++i) { }", isCorrect: true },
        { id: 1, question: "for (i=0; i < 10; i++) { }", isCorrect: false },
        { id: 2, question: "for (i=0; i <= 10; ++i) { }", isCorrect: false },
        { id: 3, question: "for (i=0; i <= 10; i++) { }", isCorrect: false },
      ],
    },
    {
      question: "What is the correct syntax for declaring a variable in JavaScript?",
      options: [
        { id: 0, question: "let myVariable;", isCorrect: true },
        { id: 1, question: "myVariable;", isCorrect: false },
        { id: 2, question: "declare myVariable;", isCorrect: false },
        { id: 3, question: "var myVariable", isCorrect: false },
      ],
    },
    {
      question: "What type of data does the parseInt() function return?",
      options: [
        { id: 0, question: "String", isCorrect: false },
        { id: 1, question: "Integer", isCorrect: true },
        { id: 2, question: "Boolean", isCorrect: false },
        { id: 3, question: "Float", isCorrect: false },
      ],
    },
    {
      question: "What is the correct syntax for a function in JavaScript?",
      options: [
        { id: 0, question: "function myFunction { }", isCorrect: false },
        { id: 1, question: "function = myFunction { }", isCorrect: false },
        { id: 2, question: "function myFunction() { }", isCorrect: true },
        { id: 3, question: "myFunction() { }", isCorrect: false },
      ],
    },
    {
      question: " How would you write an if statement in JavaScript?",
      options: [
        { id: 0, question: "if (condition) { } ", isCorrect: true },
        { id: 1, question: "if {condition}", isCorrect: false },
        { id: 2, question: "if condition", isCorrect: false },
        { id: 3, question: "if (condition)", isCorrect: false },
      ],
    },
  ];

  export const questionsReact = [
    {
      question: "What is the correct syntax for using the React useState hook?",
      options: [
        { id: 0, question: "const [state, setState] = useState();", isCorrect: true },
        { id: 1, question: "const state = useState();", isCorrect: false },
        { id: 2, question: "const setState = useState();", isCorrect: false },
        { id: 3, question: "useState(state, setState);", isCorrect: false },

      ],
    },
    {
      question: "How do you use the useContext hook?",
      options: [
        { id: 0, question: "useContext hook can be used to access data from a database.", isCorrect: false },
        { id: 1, question: "The useContext hook is used to store data in a component.", isCorrect: false },
        { id: 2, question: "useContext hook can be used to access data from a database.", isCorrect: false },
        { id: 3, question: "You can use the useContext hook to access data stored in a Context object from any component in your application.", isCorrect: true },

      ],
    },
    {
      question: " What is the purpose of the useEffect hook?",
      options: [
        { id: 0, question: "The useEffect hook is used to perform side effects after a component has been mounted or updated.", isCorrect: true },
        { id: 1, question: "The useEffect hook is used to access data from a database.", isCorrect: false },
        { id: 2, question: "The useEffect hook is used to set state in a component.", isCorrect: false },
        { id: 3, question: "The useEffect hook is used to modify component props.", isCorrect: false },

      ],
    },
    {
      question: "What is the purpose of using React??",
      options: [
        { id: 0, question: "To create interactive user interfaces", isCorrect: true },
        { id: 1, question: "To create databases", isCorrect: false },
        { id: 2, question: "To create web applications", isCorrect: false },
        { id: 3, question: "To create mobile applications", isCorrect: false },
      ],
    },
    {
      question: "What is the most commonly used method to create a React component?",
      options: [
        { id: 0, question: "Using a class", isCorrect: false },
        { id: 1, question: "Using a function", isCorrect: true },
        { id: 2, question: "Using a package", isCorrect: false },
        { id: 3, question: "Using a library", isCorrect: false },
      ],
    },
  ];

  export const questionsCSS = [
    {
      question: "Which of the following is the correct selector to apply a style to all <h2> elements?",
      options: [
        { id: 0, question: " h2", isCorrect: true },
        { id: 1, question: "*h2", isCorrect: false },
        { id: 2, question: "h2*", isCorrect: false },
        { id: 3, question: "#h2", isCorrect: false },
      ],
    },
    {
      question: "What is the correct syntax for applying a style to all <p> elements with the class 'intro'?",
      options: [
        { id: 0, question: "p#intro", isCorrect: false },
        { id: 1, question: "p.intro", isCorrect: true },
        { id: 2, question: "#p.intro", isCorrect: false },
        { id: 3, question: "p*intro", isCorrect: false },
      ],
    },
    {
      question: "Which of the following is the correct way to apply a style to an element with an id of 'main'?",
      options: [
        { id: 0, question: "#main", isCorrect: true },
        { id: 1, question: "main", isCorrect: false },
        { id: 2, question: "main*", isCorrect: false },
        { id: 3, question: "main#", isCorrect: false },
      ],
    },
    {
      question: "Which of the following is the correct syntax for applying a style to all <p> elements inside a <div> with the id 'container'?",
      options: [
        { id: 0, question: "div#container p", isCorrect: true },
        { id: 1, question: "#container div p", isCorrect: false },
        { id: 2, question: "p div#container", isCorrect: false },
        { id: 3, question: "p#container div", isCorrect: false },
      ],
    },
    {
      question: "Which of the following is the correct way to apply a style to a <p> element that is a direct child of a <div> with the class 'intro'?",
      options: [
        { id: 0, question: "div.intro > p", isCorrect: true },
        { id: 1, question: "div > p.intro", isCorrect: false },
        { id: 2, question: "div p#intro", isCorrect: false },
        { id: 3, question: "p > div.intro)", isCorrect: false },
      ],
    },
  ];