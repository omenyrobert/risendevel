import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import VisionMission from './pages/VisionMission'
import ContactUs from './pages/ContactUs'
import Donate from './pages/Donate'
import EdifyCorner from './pages/EdifyCorner'
import NotFound from './pages/NotFound'

import LeadershipHub from './pages/leadership/LeadershipHub'
import BoardLeadTeam from './pages/leadership/BoardLeadTeam'
import InternationalTeam from './pages/leadership/InternationalTeam'
import UgandaTeam from './pages/leadership/UgandaTeam'
import BurundiTeam from './pages/leadership/BurundiTeam'
import CongoTeam from './pages/leadership/CongoTeam'
import SouthSudanTeam from './pages/leadership/SouthSudanTeam'

import ProgramsOverview from './pages/programs/ProgramsOverview'
import ProgramDetail from './pages/programs/ProgramDetail'

import Partnership from './pages/getinvolved/Partnership'
import Careers from './pages/getinvolved/Careers'
import Volunteer from './pages/getinvolved/Volunteer'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/vision-mission" element={<VisionMission />} />

        <Route path="/leadership" element={<LeadershipHub />} />
        <Route path="/leadership/international-board-lead-team" element={<BoardLeadTeam />} />
        <Route path="/leadership/international-team" element={<InternationalTeam />} />
        <Route path="/leadership/uganda-team" element={<UgandaTeam />} />
        <Route path="/leadership/burundi-team" element={<BurundiTeam />} />
        <Route path="/leadership/congo-team" element={<CongoTeam />} />
        <Route path="/leadership/south-sudan" element={<SouthSudanTeam />} />

        <Route path="/what-we-do" element={<ProgramsOverview />} />
        <Route path="/what-we-do/:slug" element={<ProgramDetail />} />

        <Route path="/get-involved/partnership" element={<Partnership />} />
        <Route path="/get-involved/careers" element={<Careers />} />
        <Route path="/get-involved/volunteer" element={<Volunteer />} />

        <Route path="/contact" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/edify-corner" element={<EdifyCorner />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
