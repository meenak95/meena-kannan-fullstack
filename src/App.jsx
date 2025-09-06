import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Portfolio from './Pages/Portfolio'
import Skills from './Pages/Skills'
import Experience from './Pages/Experience'
import Contact from './Pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
