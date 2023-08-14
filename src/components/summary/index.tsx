import CircleImg from '../../assets/summary/circle.svg'
import Circle2Img from '../../assets/summary/circle2.svg'

import { Cv, Introduction, ProfileImage, Span, SummaryContainer } from './styles'

import ReactGA from 'react-ga';

export function Summary() {
    function finished() {
        ReactGA.event({
            category: 'Botao',
            action: 'Clique',
            label: 'Botao de Contagem de Visitantes Clicado'
          });
    }

    return (
        <SummaryContainer id='summary' style={{backgroundImage: `url(${CircleImg}), url(${Circle2Img})`}}>
            <div>
                <Introduction>
                    {/* separar em 3 o p para dar as 3 cores do gradient */}
                    <p tabIndex={0}>Olá, meu nome é Victor,</p> 
                    <p tabIndex={0}>sou um desenvolvedor fullstack</p>
                </Introduction>
                <Span>
                    <span tabIndex={0}>Programador fullstack, com foco em front-end, buscando uma oportunidade de por meu conhecimento em prática</span>
                </Span>

                <Cv>
                    <a
                    href="/Curriculo.pdf"
                    download="Curriculo"
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={-1}
                    >
                        <button>Download CV</button>
                    </a>
                </Cv>
            </div>
            <button onClick={() => {finished()}}></button>
            <ProfileImage >
                <div >
                    <img tabIndex={0} aria-label="foto do victor" src="https://avatars.githubusercontent.com/u/117544733?s=400&u=4965effa97bb926aa33e8d3384babe57dd7830f8&v=4" alt="" />
                </div>
            </ProfileImage>
        </SummaryContainer>
    )
}