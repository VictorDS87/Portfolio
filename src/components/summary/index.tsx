import CircleImg from '../../assets/summary/circle.svg'
import Circle2Img from '../../assets/summary/circle2.svg'

import { saveAs } from 'file-saver';

import cv from '../../../public/Curriculo-04-2023.pdf'

import { Cv, Introduction, ProfileImage, Span, SummaryContainer } from './styles'
import { Link } from 'react-router-dom';

export function Summary() {

    return (

        <SummaryContainer style={{backgroundImage: `url(${CircleImg}), url(${Circle2Img})`}}>
            <div>
                <Introduction>
                    {/* separar em 3 o p para dar as 3 cores do gradient */}
                    <p>Olá, meu nome é Victor,</p> 
                    <p>sou um desenvolvedor fullstack</p>
                </Introduction>
                <Span>
                    <span>Programador fullstack, com foco em front-end, buscando uma oportunidade de por meu conhecimento em prática</span>
                </Span>

                <Cv>
                    <a
                    href="/Curriculo.pdf"
                    download="Curriculo"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <button>Download CV</button>
                    </a>
                </Cv>
            </div>

            <ProfileImage >
                <div>
                    <img src="https://avatars.githubusercontent.com/u/117544733?s=400&u=4965effa97bb926aa33e8d3384babe57dd7830f8&v=4" alt="" />
                </div>
            </ProfileImage>
        </SummaryContainer>
    )
}