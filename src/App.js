import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom"
import Mentorship from './screen/Mentorship'
import Community from './screen/Community'
import Chapter from './screen/Chapter'
import Journal from './screen/Journal'
import Conference from './screen/Conference'
import Book from './screen/Book'
import Collobarator from './screen/Collobarator'
import Peer from './screen/Peer'
import Innovation from './screen/Innovation'
import Research from './screen/Research'
import Dashboard from './screen/Dashboard'
import Sidebar from './components/sidebar'
import AdminDashboard from './screen/AdminDashboard'
import CommunityAdmin from './admin/CommunityAdmin'
import BookBasedAdmin from './admin/BookBasedAdmin';
import MentorshipAdmin from './admin/MentorshipAdmin';
import ChaperAdmin from './admin/ChapterAdmin'
import JournalAdmin from './admin/JournalAdmin'
import DashboardAdm from './admin/DashboardAdm'

// import Login from "./components/Login";
import CreateResearch from "./components/CreateResearch";
import BookBasedResearch from "./components/BookBasedResearch";
import ConferenceBased from "./components/ConferenceBased";
import ChapterBased from "./components/ChapterBased";
import JournalBased  from "./components/JournalBased";
import Mentoship from "./components/Mentoship";
import HomePage from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import ContinueRegister from "./components/continueRegister";
import NotFound from "./components/not_found";


function App() {
  return (
  <Router>    
     <Route path="/" exact>
          <HomePage/>
        </Route>
          <Route path='/Dash' >
            <Research/>
           </Route>  
          <Route path='/Community'>
             <Community/>
            </Route>         
          <Route path='/Mentorship'>
             <Mentorship/>
          </Route>   

          <Route path='/Chapter'>
             <Chapter/>
          </Route> 
          <Route path='/Journal'>
             <Journal/>
          </Route>
          <Route path='/Conference'>
             <Conference/>
          </Route>
          <Route path='/Book'>
             <Book/>
          </Route>
          <Route path='/Collabarator'>
             <Collobarator/>
          </Route>
          <Route path='/Peer'>
             <Peer/>
          </Route>

          <Route path='/Innovation'>
             <Innovation/>
          </Route>

        <Route path='/Dasboard'> 
             <Dashboard/> 
         </Route>
         <Route path='/admin'> 
             <DashboardAdm/> 
         </Route>
         <Route path='/CommunityAdmin'> 
             <CommunityAdmin/> 
         </Route>
         <Route path='/MentorshipAdmin'> 
             <MentorshipAdmin/> 
         </Route>
         <Route path='/BookBasedAdmin'> 
             <BookBasedAdmin/> 
         </Route>
         <Route path='/ChaperAdmin'> 
             <ChaperAdmin/> 
         </Route>
         <Route path='/JournalAdmin'> 
             <JournalAdmin/> 
         </Route>

         {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route path="/research">
          <CreateResearch />
        </Route>
        <Route path="/bookbased">
          <BookBasedResearch />
        </Route>
        <Route path="/conferencebased">
          <ConferenceBased />
        </Route>
        <Route path="/chapterbased">
          <ChapterBased />
        </Route>
        <Route path="/journalbased">
          <JournalBased />
        </Route>
        <Route path="/mentoship">
          <Mentoship/>
        </Route>
        <Route path="/continue">
          <ContinueRegister/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
       
   </Router>
 );
}
export default App;
