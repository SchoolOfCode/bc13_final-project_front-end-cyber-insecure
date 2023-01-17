import './InterviewPrepPage.css';
import { useState } from 'react';
import React from 'react';
// import Popup from '../Popup/Popup';
import Navbar from '../Navbar/Navbar';
import Popup from 'reactjs-popup';
import Card from './Card/Card';
import interviewQuestions from './dummyData/dummyData';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1500 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function InterviewPrepPage(props) {
  // 1. Onclick event handler showing a popup card of a good answer structure to each question when clicked
  // 2. I think we need to use, the useState hook in order for this to work.
  // 3. Check chatGt

  return [
    <Navbar />,
    <div className="interviewPrepPage_container">
      <h1>Interview Preparation</h1>
      <br />
      <h2>Key Interview Questions and Answers</h2>
      <br />
      <div className="allQuestions_container">
        <section className="interviewQuestionsSection">
          <h2>General Questions from Interviewers</h2>
          <div className="questionsList">
            <div className="carousel">
              <Carousel responsive={responsive} infinite={true}>
                {interviewQuestions.map((item) => {
                  return (
                    <div className="react-multi-carousel-item">
                      <Card question={item.question} answer={item.answer} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>

        <section className="interviewQuestionsSection">
          <h2>Technical Questions</h2>
          <div className="questionsList">
            <div className="carousel">
              <Carousel responsive={responsive}>
                <div className="questionStyling">
                  <Card
                    question={
                      'How does CRUD work? Examples? How do I get a crud ID?'
                    }
                    answer={`CRUD stands for Create, Read, Update, and Delete. These
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
                  </p>`}
                  />
                </div>
                <div className="questionStyling">
                  <Card
                    question={'How to use an API in the backend?'}
                    answer={`To use an API in the backend, you can make HTTP requests
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
                  </p>`}
                  />
                </div>
                <div className="questionStyling">
                  <Card
                    question={
                      'What is the difference between an object and an array?'
                    }
                    answer={`An array is a data structure used to store a collection of
                  elements, which can be of any data type, such as numbers,
                  strings, or objects.
                  <br />
                  <br />
                  Elements are accessed by their position in the array,
                  using an index, which is an integer value.
                  <br />
                  <br />
                  Arrays are commonly used to store lists of similar items,
                  and provide methods for working with the elements, such as
                  adding, removing, or iterating over them.
                  <br />
                  <br />
                  An object, on the other hand, is a data structure used to
                  store a collection of key-value pairs. The keys in an
                  object are usually strings, and the values can be of any
                  data type, including other objects. Elements in an object
                  are accessed using the keys, rather than an index. Objects
                  are commonly used to store properties and methods of an
                  entity, and provide a way to organize and group related
                  data.
                  <br />
                  <br />
                  In JavaScript, both Array and Object are objects, where
                  Array is a specific Object type.
                  <br />
                  <br />`}
                  />
                </div>
                <div className="questionStyling">
                  <Card
                    question={
                      'What is the difference between an object and an array?'
                    }
                    answer={`An array is a data structure used to store a collection of
                  elements, which can be of any data type, such as numbers,
                  strings, or objects.
                  <br />
                  <br />
                  Elements are accessed by their position in the array,
                  using an index, which is an integer value.
                  <br />
                  <br />
                  Arrays are commonly used to store lists of similar items,
                  and provide methods for working with the elements, such as
                  adding, removing, or iterating over them.
                  <br />
                  <br />
                  An object, on the other hand, is a data structure used to
                  store a collection of key-value pairs. The keys in an
                  object are usually strings, and the values can be of any
                  data type, including other objects. Elements in an object
                  are accessed using the keys, rather than an index. Objects
                  are commonly used to store properties and methods of an
                  entity, and provide a way to organize and group related
                  data.
                  <br />
                  <br />
                  In JavaScript, both Array and Object are objects, where
                  Array is a specific Object type.
                  <br />
                  <br />`}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        <section className="interviewQuestionsSection">
          <h2>After Interview Questions</h2>
          <div className="questionsList">
            <div className="carousel">
              <Carousel responsive={responsive}>
                <div className="questionStyling">
                  <Card
                    question={'Why do you like working here??'}
                    answer={`<p>
                    A good answer to the question "Why do you like working
                    here?" would be specific and demonstrate an
                    understanding of the company's values and mission.
                    <br />
                    For example, one might say "I like working here because
                    the company has a strong focus on sustainability and I
                    feel good about the work we're doing to promote
                    environmentally-friendly practices."
                    <br />
                    Another might say "I appreciate the opportunities for
                    professional development and the supportive team
                    environment that encourages learning and growth."
                    <br />
                    Additionally, one might talk about how the company's
                    mission and culture aligns with their own values and
                    interests, which makes for a fulfilling and engaging
                    work experience.
                  </p>`}
                  />
                </div>
                <div className="questionStyling">
                  <Card
                    question={
                      'Could you tell me more about the team I would be part of?'
                    }
                    answer={`A good answer to this question would be: "The team you
                    will be joining is a group of highly skilled and
                    dedicated professionals with a wide range of expertise.
                    We have a diverse set of backgrounds and experiences,
                    which makes for a dynamic and collaborative work
                    environment. The team is also well-respected within the
                    company and has a track record of delivering
                    high-quality work on time and within budget. We work
                    closely together and support each other to achieve our
                    common goals. Additionally, the team has a clear and
                    defined communication structure, with regular team
                    meetings and individual catch-ups. Overall, it's a great
                    team to be a part of and I'm sure you will find it very
                    productive and enjoyable."`}
                  />
                </div>
                <div className="questionStyling">
                  <Card
                    question={
                      'What are some areas of improvement in the team and where a new engineer can have an impact?'
                    }
                    answer={`A good answer to this question would be:
                    <br />
                    "The team currently has a strong focus on feature
                    development and delivery, but there may be opportunities
                    to improve in terms of code quality and maintainability.
                    Additionally, there may be room to improve in terms of
                    automated testing and continuous integration/deployment
                    processes. A new engineer could have a significant
                    impact in these areas by bringing fresh perspectives and
                    new ideas for improving efficiency and software
                    robustness."
                    <br />
                    Another possible answer is :
                    <br />
                    "One area that the team could improve on is our
                    collaboration and communication practices. We could
                    benefit from more frequent meetings and a more effective
                    process for coordinating work across different subteams.
                    Additionally, we could improve our workflow and code
                    review process to promote more effective knowledge
                    sharing and mentorship. A new engineer with experience
                    in these areas could help to drive these improvements
                    and benefit the entire team."
                    <br />
                    It is essential to consider the specific context of the
                    company and the team when answering this question. This
                    is just a general example and the answer may vary
                    depending on the specifics of the team and their
                    particular challenges.`}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </div>,
  ];
}
export default InterviewPrepPage;
