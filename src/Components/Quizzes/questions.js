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

  export const questionsTypeScript = [
    {
      question: "Which of the following is not a valid type in TypeScript?",
      options: [
        { id: 0, question: "String", isCorrect: false },
        { id: 1, question: "Integer", isCorrect: true },
        { id: 2, question: "Boolean", isCorrect: false },
        { id: 3, question: "Object", isCorrect: false },
      ],
    },
    {
      question: "What is the definition of a type alias in TypeScript?",
      options: [
        { id: 0, question: "A type that creates an alias for a primitive type", isCorrect: false },
        { id: 1, question: "A type that creates an alias for an object type", isCorrect: false},
        { id: 2, question: "A type that creates an alias for another type", isCorrect: true },
        { id: 3, question: "A type that creates an alias for a function type", isCorrect: false },
      ],
    },
    {
      question: "In TypeScript, what is the purpose of the 'any' type?",
      options: [
        { id: 0, question: "To represent a value that can be of any type", isCorrect: true },
        { id: 1, question: "To represent a value that can be of any primitive type", isCorrect: false },
        { id: 2, question: "To represent a value that can be of any object type", isCorrect: false },
        { id: 3, question: "To represent a value that can be of any function type", isCorrect: false },
      ],
    },
    {
      question: "What does the 'readonly' keyword do in TypeScript?",
      options: [
        { id: 0, question: "Makes a property writable", isCorrect: false },
        { id: 1, question: "Makes a property read-only", isCorrect: true },
        { id: 2, question: "Makes a property accessible from outside the class", isCorrect: false },
        { id: 3, question: "Makes a property accessible only within the class", isCorrect: false },
      ],
    },
    {
      question: "Which of the following is not a valid TypeScript compiler option?",
      options: [
        { id: 0, question: "--module", isCorrect: false },
        { id: 1, question: "--compile", isCorrect: true },
        { id: 2, question: "--target", isCorrect: false },
        { id: 3, question: "--outDir", isCorrect: false },
      ],
    },
  ];

  export const questionsPython = [
    {
      question: "What is the purpose of the 'pass' keyword in Python?",
      options: [
        { id: 0, question: "To create a loop", isCorrect: false },
        { id: 1, question: "To define a function without a body", isCorrect: true },
        { id: 2, question: "To exit a loop", isCorrect: false },
        { id: 3, question: "To move to the next line", isCorrect: false },
      ],
    },
    {
      question: "What is the correct syntax for a for loop in Python?",
      options: [
        { id: 0, question: "for i in range():", isCorrect: false },
        { id: 1, question: "for (i=0; i<10; i++)", isCorrect: false },
        { id: 2, question: "for i in range(10):", isCorrect: true },
        { id: 3, question: "for i=1 to 10", isCorrect: false },
      ],
    },
    {
      question: "What data type is used to represent a single character in Python?",
      options: [
        { id: 0, question: "String", isCorrect: false },
        { id: 1, question: "Char", isCorrect: false },
        { id: 2, question: "Boolean", isCorrect: false },
        { id: 3, question: "String of length 1", isCorrect: true },
      ],
    },
    {
      question: "What is the correct syntax for a while loop in Python?",
      options: [
        { id: 0, question: "while (i<10; i++)", isCorrect: false },
        { id: 1, question: "while i = 1 to 10", isCorrect: false },
        { id: 2, question: "while (i<10)", isCorrect: false },
        { id: 3, question: "while i < 10:", isCorrect: true },
      ],
    },
    {
      question: "What is the purpose of the 'break' keyword in Python?",
      options: [
        { id: 0, question: "To create a loop", isCorrect: false },
        { id: 1, question: "To define a function without a body", isCorrect: false },
        { id: 2, question: "To exit a loop", isCorrect: true },
        { id: 3, question: "To move to the next line", isCorrect: false },
      ],
    },
  ];

  export const questionsNode = [
    {
      question: "What is the purpose of Node.js?",
      options: [
        { id: 0, question: "To develop web-based applications", isCorrect: true },
        { id: 1, question: "To develop server-side applications", isCorrect: true },
        { id: 2, question: "To develop mobile-based applications", isCorrect: false },
        { id: 3, question: "To develop desktop-based applications", isCorrect: false },
      ],
    },
    {
      question: "What is the syntax to create a function in Node.js?",
      options: [
        { id: 0, question: "function = myFunction()", isCorrect: false },
        { id: 1, question: "myFunction = function()", isCorrect: false },
        { id: 2, question: "function myFunction()", isCorrect: true },
        { id: 3, question: "myFunction() = function", isCorrect: false },
      ],
    },
    {
      question: "Which of the following is not a Node.js module?",
      options: [
        { id: 0, question: "http", isCorrect: false },
        { id: 1, question: "crypto", isCorrect: false },
        { id: 2, question: "fs", isCorrect: false },
        { id: 3, question: "mysql", isCorrect: true },
      ],
    },
    {
      question: "What is the syntax to read a file in Node.js?",
      options: [
        { id: 0, question: "fs.readFile(file)", isCorrect: true },
        { id: 1, question: "file.readFile(fs)", isCorrect: false },
        { id: 2, question: "fs.read(file)", isCorrect: false },
        { id: 3, question: "file.read(fs)", isCorrect: false },
      ],
    },
    {
      question: "What is the syntax to include a module in Node.js?",
      options: [
        { id: 0, question: "include module", isCorrect: false },
        { id: 1, question: "import module", isCorrect: false },
        { id: 2, question: "require module", isCorrect: true },
        { id: 3, question: "load module", isCorrect: false },
      ],
    },
  ];