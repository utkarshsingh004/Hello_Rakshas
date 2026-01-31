import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GreetingCard from './components/GreetingCard'
import Proposal from './components/Proposal'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<GreetingCard />} />
          <Route path="/proposal" element={<Proposal />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
