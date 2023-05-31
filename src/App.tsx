import './teste.css'

// import teste from './mais.svg'
import { GlobalStyles } from './styles/global'
import { Header } from './components/header'
import { Summary } from './components/summary'
import { Projects } from './components/projects'

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Summary />
      <Projects /> 
      {/* <img id="teste" src={teste} alt="" /> */}
    </>
  )
}
