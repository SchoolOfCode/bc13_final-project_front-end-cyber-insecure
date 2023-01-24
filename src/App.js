import './App.css';
import InterviewPrepPage from "./Components/InterviewPrepPage/InterviewPrepPage"
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signup from './Components/AuthComponents/Signup'
import Login from './Components/AuthComponents/Login'
import ApplicationList from './Components/ApplicationList/ApplicationList'
import PortfolioPage from './Components/PortfolioPage/PortfolioPage'
import ForgotPassword from './Components/AuthComponents/ForgotPassword'
import DashboardPage from './Components/DashboardPage/DashboardPage'
import CVworkshop from './Components/CV/CVworkshop';
import Quizzes from './Components/Quizzes/Quizzes';
import AboutUs from './Components/AboutUs/AboutUs';
import KnowledgeBankList from './Components/KnowledgeBankList/KnowledgeBankList';
import SuggestContent from './Components/SuggestContent/SuggestContent';
import { AuthProvider } from './Components/contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return <div className='app-container'>
        <Router basename='/'>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute><DashboardPage/></PrivateRoute>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path="/applications" element={<PrivateRoute><ApplicationList/></PrivateRoute>}/>
              <Route path='/interviewprep' element={<PrivateRoute><InterviewPrepPage/></PrivateRoute>}/>
              <Route path='/portfolio' element={<PrivateRoute><PortfolioPage/></PrivateRoute>}/>
              <Route path='/cv-workshop' element={<PrivateRoute><CVworkshop/></PrivateRoute>}/>
              <Route path='/quizzes' element={<PrivateRoute><Quizzes/></PrivateRoute>}/>
              <Route path='/knowledge-bank' element={<PrivateRoute><KnowledgeBankList/></PrivateRoute>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
              <Route path='/suggest-content' element={<PrivateRoute><SuggestContent/></PrivateRoute>}/>
              <Route path='/about-us' element={<PrivateRoute><AboutUs /></PrivateRoute>}/>
            </Routes>
          </AuthProvider>
        </Router>
    </div>
}

export default App;

