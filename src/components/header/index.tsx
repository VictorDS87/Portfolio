import { Me, Nav, ReturnFromNav, Routes, SocialMedia } from "./styles";

import { ArrowUp, GithubLogo, LinkedinLogo } from "phosphor-react";

export function Header() {
    return (
        <>
            <Nav id="nav">
                <ReturnFromNav style={{
                    position: 'fixed',
                    top: '500px',
                    left: '88%'
                }}>
                    <a href="#nav">
                        <ArrowUp size={32} />
                    </a>
                </ReturnFromNav>
                <Me>
                    <li><strong>Eu Sou Victor</strong></li>
                </Me>

                <Routes>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#technologies">Tecnologicos</a></li>
                    <li><a href="#aboutme">Sobre mim</a></li>
                </Routes>

                <SocialMedia>
                    <li><a href="https://www.linkedin.com/in/developervictor/"><LinkedinLogo /></a></li>
                    <li><a href="https://github.com/VictorDS87"><GithubLogo /></a></li>
                </SocialMedia>
            </Nav>
        </>
    )
}
