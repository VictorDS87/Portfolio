import { GlobalStyles } from './styles/global'
import { Header } from './components/header'
import { Summary } from './components/summary'
import { Projects } from './components/projects'
import { Technologies } from './components/technologies'
import { AboutMe } from './components/aboutMe'
import { Footer } from './components/footer'
import { ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components'

import ReactPixel from 'react-facebook-pixel';
const StyledItem = styled.div`
  opacity: 0;
  transition: opacity 1.5s;
  &.show {
    opacity: 1;
  }
`;

interface ChildrenComponent {
  children: ReactNode
}


export function App() {
  ReactPixel.init('967655347833010');

  function OpacityEffect ({ children }: ChildrenComponent) {
    // effect
    const itemRef = useRef(null);
  
    useEffect(() => {
      const item = itemRef.current;
      
      if(item) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
    
        observer.observe(item);
    
        return () => {
          observer.unobserve(item);
        };
      }
    }, []);
  
    return <StyledItem ref={itemRef}>{children}</StyledItem>;
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <p style={{color:'red', fontSize:'4rem', position:'absolute', zIndex:5}}>Site em processo de atualização. Versão de 2022. Data prevista para nova versão: 31/07/2024</p>
      <OpacityEffect>{<Summary />}</OpacityEffect>
      <OpacityEffect>{<Projects />}</OpacityEffect>
      <OpacityEffect>{<Technologies /> }</OpacityEffect>
      <OpacityEffect>{<AboutMe /> }</OpacityEffect>
      <OpacityEffect>{ <Footer />}</OpacityEffect>
    </>
  )
}
