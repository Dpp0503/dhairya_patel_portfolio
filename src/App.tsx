import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Background from '@/components/Background'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Background />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
