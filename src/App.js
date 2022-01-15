import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Mentorship from "./screen/Mentorship";
import Logout from "./screen/Logout";
import Community from "./screen/Community";
import Chapter from "./screen/Chapter";
import Journal from "./screen/Journal";
import Conference from "./screen/Conference";
import Book from "./screen/Book";
import Collobarator from "./screen/Collobarator";
import Peer from "./screen/Peer";
import EditResearch from "./screen/EditResearch";
import EditBook from "./screen/EditBook";
import ReasearchAdmin from './admin/ReasearchAdmin'
import EditResearchAdmin from "./admin/EditResearchAdmin";
import EditBookAdmin from "./admin/EditBookAdmin";
import EditMentorshipAdmin from "./admin/EditMentorshipAdmin";
import EditCommunityAdmin from "./admin/EditCommunityAdmin";
import EditChapterAdmin from "./admin/EditChapterAdmin";
import EditConferenceAdmin from "./admin/EditConferenceAdmin";
import EditJournal from "./screen/EditJournal";
import EditConference from "./screen/EditConference";
import EditChapter from "./screen/EditChapter";
import SingleConference from "./screen/SingleConference";
import SingleMentorhip from "./screen/SingleMentorhip";
import EditMentorship from "./screen/EditMentorship";
import EditCommunity from "./screen/EditCommunity";
import Innovation from "./screen/Innovation";
import Research from "./screen/Research";
import Dashboard from "./screen/Dashboard";
import Sidebar from "./components/sidebar";
import AdminDashboard from "./screen/AdminDashboard";
import SingleResearch from "./screen/singleResearch";
import SingleChapter from "./screen/SingleChapter";
import SingleBook from "./screen/SingleBook";
import SingleCommunity from "./screen/SingleCommunity";
import SingleJournal from "./screen/SingleJournal";
import CommunityAdmin from "./admin/CommunityAdmin";
import BookBasedAdmin from "./admin/BookBasedAdmin";
import ChapterAdmin from "./admin/ChapterAdmin";
import ConferenceBasedAdmin from "./admin/ConferenceBasedAdmin";
import JournalBasedAdmin from "./admin/JournalBasedAdmin";
import MentorshipAdmin from "./admin/MentorshipAdmin";
import JournalAdmin from "./admin/JournalAdmin";
import DashboardAdm from "./admin/DashboardAdm";

// import Login from "./components/Login";
import CreateResearch from "./components/CreateResearch";
import BookBasedResearch from "./components/BookBasedResearch";
import ConferenceBased from "./components/ConferenceBased";
import CommunityBased from "./components/CommunityBased";
import ChapterBased from "./components/ChapterBased";
import JournalBased from "./components/JournalBased";
import Mentoship from "./components/Mentoship";
import HomePage from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import ContinueRegister from "./components/continueRegister";
import NotFound from "./components/not_found";
import EditJournalAdmin from "./admin/EditJournalAdmin";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/Dash">
        <Research />
      </Route>
      <Route path="/Community">
        <Community />
      </Route>
      <Route path="/Mentorship">
        <Mentorship />
      </Route>

      <Route path="/Chapter">
        <Chapter />
      </Route>
      <Route path="/Journal">
        <Journal />
      </Route>
      <Route path="/Conference">
        <Conference />
      </Route>
      <Route path="/Book">
        <Book />
      </Route>
      <Route path="/Collabarator">
        <Collobarator />
      </Route>
      <Route path="/Peer">
        <Peer />
      </Route>

      <Route path="/Innovation">
        <Innovation />
      </Route>

      <Route path="/Dasboard">
        <Dashboard />
      </Route>
      <Route path="/admin">
        <DashboardAdm />
      </Route>
      <Route path="/CommunityAdmin">
        <CommunityAdmin />
      </Route>
      <Route path="/MentorshipAdmin">
        <MentorshipAdmin />
      </Route>
      <Route path="/BookBasedAdmin">
        <BookBasedAdmin />
      </Route>
      <Route path="/ChapterAdmin">
        <ChapterAdmin />
      </Route>
      <Route path="/ConferenceBasedAdmin">
        <ConferenceBasedAdmin />
      </Route>

      <Route path="/ReasearchAdmin">
        <ReasearchAdmin />
      </Route>

      <Route path="/JournalBasedAdmin">
        <JournalBasedAdmin />
      </Route>
      <Route path="/JournalAdmin">
        <JournalAdmin />
      </Route>
      <Route path="/SingleResearch/:id">
        <SingleResearch />
      </Route>
      <Route path="/SingleConference/:id">
        <SingleConference />
      </Route>
      <Route path="/SingleMentorhip/:id">
        <SingleMentorhip />
      </Route>
      <Route path="/SingleBook/:id">
        <SingleBook />
      </Route>
      <Route path="/SingleCommunity/:id">
        <SingleCommunity />
      </Route>
      <Route path="/SingleJournal/:id">
        <SingleJournal />
      </Route>
      <Route path="/SingleChapter/:id">
        <SingleChapter />
      </Route>
      <Route path="/EditResearch/:id">
        <EditResearch />
      </Route>

      <Route path="/EditBookAdmin/:id">
        <EditBookAdmin />
      </Route>
      <Route path="/EditMentorshipAdmin/:id">
        <EditMentorshipAdmin />
      </Route>
      <Route path="/EditCommunityAdmin/:id">
        <EditCommunityAdmin />
      </Route>
      <Route path="/EditMentorship/:id">
        <EditMentorship />
      </Route>
      <Route path="/EditBook/:id">
        <EditBook />
      </Route>

      <Route path="/EditChapterAdmin/:id">
        <EditChapterAdmin />
      </Route>
      <Route path="/EditConferenceAdmin/:id">
        <EditConferenceAdmin />
      </Route>
      <Route path="/EditJournalAdmin/:id">
        <EditJournalAdmin />
      </Route>

      <Route path="/EditChapter/:id">
        <EditChapter />
      </Route>
      <Route path="/EditConference/:id">
        <EditConference />
      </Route>
      <Route path="/EditCommunity/:id">
        <EditCommunity />
      </Route>
      <Route path="/EditResearchAdmin/:id">
        <EditResearchAdmin />
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
      <Route path="/CommunityBased">
        <CommunityBased />
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
        <Mentoship />
      </Route>
      <Route path="/continue">
        <ContinueRegister />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {/* <Route path="/logout">
        <Logout />
      </Route> */}
      <Route path="/register">
        <Register />
      </Route>
      {/* <Route path="*">
        <Redirect to="/" />
      </Route> */}
    </Router>
  );
}
export default App;
