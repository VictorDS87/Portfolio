import { GlobalStyles } from './styles/global'
import { Header } from './components/header'
import { Summary } from './components/summary'
import { Projects } from './components/projects'
import { Technologies } from './components/technologies'
import { AboutMe } from './components/aboutMe'
import { Footer } from './components/footer'

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Summary />
      <Projects />
      <Technologies /> 
      <AboutMe /> 
      <Footer />
    </>
  )
}
