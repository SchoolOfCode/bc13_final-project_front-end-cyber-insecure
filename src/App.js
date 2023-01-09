import './App.css';
import InterviewPrepPage from "./Components/InterviewPrepPage/InterviewPrepPage"
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signup from './Components/AuthComponents/Signup'
import Login from './Components/AuthComponents/Login'
import ApplicationList from './Components/ApplicationList/ApplicationList'
import PortfolioPage from './Components/PortfolioPage/PortfolioPage'
import ForgotPassword from './Components/AuthComponents/ForgotPassword'
import DashboardPage from './Components/DashboardPage/DashboardPage'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './Components/contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return <div className='app-container'>
    <h1>Greeting from Cyber Insecure!🤠</h1>
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<PrivateRoute><DashboardPage/></PrivateRoute>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path="/applications" element={<PrivateRoute><ApplicationList/></PrivateRoute>}/>
              <Route path='/interviewprep' element={<PrivateRoute><InterviewPrepPage/></PrivateRoute>}/>
              <Route path='/portfolio' element={<PrivateRoute><PortfolioPage/></PrivateRoute>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    </div>
}

export default App;

