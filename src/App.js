import './App.css';
import HomePage from "./Components/HomePage/HomePage"
import SignIn from "./Components/SignIn/SignIn"
import InterviewPrepPage from "./Components/InterviewPrepPage/InterviewPrepPage"

function App() {
  return <div className='app-container'>
    <h1>Greeting from Cyber Insecure!🤠</h1>
    <HomePage/>
    <SignIn/>
    <InterviewPrepPage/>
    </div>
}

export default App;
