import React from 'react'
import LandingPage from './components/LandingPage'
import Timeline from './components/Timeline'
import Solution from './components/Solution'
import Features from './components/Features'
import Action from './components/Action'
import Footer from './components/Footer'
import { ScrollProvider } from './context/ScrollContext'

const App = () => {
  return (
    <ScrollProvider>
      <div className="relative">
        <LandingPage />
        <section id="timeline">
          <Timeline/>
        </section>
        <section id="solution">
          <Solution/>
        </section>
        <section id="features">
          <Features/>
        </section>
        <section id="contact">
          <Action/>
        </section>
        <Footer/>
      </div>
    </ScrollProvider>
  )
}

export default App