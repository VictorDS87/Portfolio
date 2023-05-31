import { Me, Nav, Routes, SocialMedia } from "./styles";

import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Header() {
    return (
        <>
            <Nav>
                <Me>
                    <li><strong>Eu Sou Victor</strong></li>
                </Me>

                <Routes>
                    <li><a href="#teste">Projetos</a></li>
                    <li><a href="">Tecnologicos</a></li>
                    <li><a href="">Sobre mim</a></li>
                </Routes>

                <SocialMedia>
                    <li><a href="https://www.linkedin.com/in/developervictor/"><LinkedinLogo /></a></li>
                    <li><a href=""><FacebookLogo /></a></li>
                    <li><a href=""><InstagramLogo  /></a></li>
                </SocialMedia>
            </Nav>
        </>
    )
}
