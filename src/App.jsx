

import './App.css'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Skill from './components/skills/skill'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/Experience/Experience'
  

function App() {
 

  return (
   <>
    <Navbar/>  
    <Intro/>
    <Skill/>
    <Work/>
    <Experience/>
    <Contact/>

    <Footer/>
     </>
  )
}

export default App
