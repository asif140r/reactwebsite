import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Howitworks from './components/Howitworks'
import Footer from './components/Footer'
import Community from './components/Community'
import Agency from './components/Agency'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'

const App = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <Agency />
    <Howitworks />
    <Pricing />
    <FAQ />
    <Community />
    <Footer />
    </>
  )
}

export default App