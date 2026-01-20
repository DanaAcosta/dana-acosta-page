import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Cv from './components/cv/Cv'
import Proyects from './components/proyects/Proyectos'
import Publications from './components/publications/Publications'


const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Proyects />
      <Cv />
      <Publications />
      <Contact />
      <Footer />
    </>
  )
}

export default App
