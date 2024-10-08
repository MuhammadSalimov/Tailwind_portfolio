
import Hero from "./Hero"
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
const Home = () => {
  return (
    <div className=' bg-hero'>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home