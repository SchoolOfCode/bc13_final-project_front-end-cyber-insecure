const interviewQuestions = [
  {
    question: 'Why did you choose to be a developer?',
    answer: `As a developer, I have a passion for using technology
          to solve problems and improve people's lives.
          <br />I enjoy the process of creating and building
          software, from understanding user needs and defining
          requirements, to designing and implementing solutions,
          to testing and maintaining the final product.
          <br />I find it particularly satisfying to see the
          impact of my work on users and the positive difference
          it can make in their lives.
          <br />
          Additionally, I am constantly learning new
          technologies, methodologies, and best practices which
          make the job challenging and enjoyable.`,
    category: 1,
  },

  {
    question:
      ' Do you like to work in a team? What would be a perfect team for you?',
    answer: `I think it's important for developers to be able to work
    well in teams.
    <br />
    Working in a team allows for different perspectives and
    ideas to be shared, which can lead to better solutions.
    <br />
    It also allows for more efficient problem-solving, as
    team members can divide up the work and leverage each
    other's strengths.
    <br />
    Additionally, working in a team environment can be more
    enjoyable and motivating than working alone.
    <br />
    So it is important for a developer to be able to
    communicate effectively and be able to work together
    with others.`,
    category: 1,
  },

  {
    question: 'What is your motivation for joining the @companyname?',
    answer: `Express your excitement about the company's mission,
    values, and industry leadership.
    <br />
    <br />
    You may also highlight specific projects or initiatives
    that the company is working on that align with your own
    interests and experience.
    <br />
    <br />
    Additionally, you may discuss how you believe your
    skills and experiences can contribute to the company's
    success and how you are looking forward to being a part
    of the team.
    <br />
    <br />
    Finally you may express that you want to work with the
    team members and grow your skills, and that you
    appreciate the opportunities that the company can offer
    you to achieve your professional and personal goals.`,
    category: 1,
  },

  {
    question: 'How does CRUD work? Examples? How do I get a crud ID?',
    answer: `CRUD stands for Create, Read, Update, and Delete. These
    are the four basic functions of persistent storage, such
    as a database, and are often used to represent the basic
    operations of an application's data.
    <br />
    <br />
    <b>Create</b>: The create operation is used to insert
    new data into the database. For example, when a new user
    signs up for an application, their information is sent
    to the database and a new record is created.
    <br />
    <b>Read</b>: The read operation is used to retrieve data
    from the database. For example, when a user logs into an
    application, their information is retrieved from the
    database and displayed on the screen.
    <br />
    <b>Update</b>: The update operation is used to modify
    existing data in the database. For example, when a user
    updates their personal information, the changes are made
    in the database.
    <br />
    <b>Delete</b>: The delete operation is used to remove
    data from the database. For example, when a user wants
    to delete their account, their information is removed
    from the database.
    <br />
    A CRUD ID is a unique identifier that is assigned to
    each data record in a database, it is also called
    primary key.awddw
    <br />
    <br />
    The purpose of the CRUD ID is to allow you to quickly
    and easily identify a specific record when you want to
    update or delete it. For example, in a database table of
    users, each user will have a unique user ID (CRUD ID)
    which can be used to quickly retrieve their information
    or update/delete their account. In web applications,
    CRUD operations are often performed through a web API,
    which allows the application to communicate with the
    database. The API will handle the CRUD operations by
    receiving and parsing HTTP requests and returning the
    appropriate response.
    </p>`,
    category: 2,
  },
  {
    question: 'How to use an API in the backend?',
    answer: `To use an API in the backend, you can make HTTP requests
    to the API using a programming language such as
    JavaScript, Python, or Ruby. Here is a general process
    for using an API in the backend:
    <br />
    <br />
    Research the API and its documentation to understand the
    endpoints (URLs) and the data that it returns. Create a
    new project or open an existing one in your preferred
    programming language. Install any necessary dependencies
    for making HTTP requests, such as the requests library
    in Python or the axios library in JavaScript. Write code
    to make an HTTP request to the API endpoint.
    <br />
    <br />
    Depending on the type of request (GET, POST, PUT,
    DELETE, etc.) and the data that you are sending, you
    will need to specify the appropriate headers and payload
    in the request. Handle the response from the API, which
    will usually be in JSON format. You can parse the JSON
    data and use it in your code. Use the data you obtained
    from the API to perform the desired logic in the
    backend.
    <br />
    <br />
    Finally, you will likely return the obtained data to a
    frontend, to be rendered in some way by it. Keep in mind
    that the above process is a general one and the details
    will depend on the specific use case and programming
    language you are using.
    </p>`,
    category: 2,
  },
  {},
];
