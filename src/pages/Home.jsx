import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import ProjectSection from '../components/ProjectSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* Background Effects */}
        <StarBackground/>

        {/* Navbar*/ }
        <Navbar/>
        {/* Main Content */}
        <main>
          <HeroSection/>
          <About/>
          <Skills/>
          <ProjectSection/>
          <Contact/>
        </main>
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Home