import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { FooterContainer } from "./styles";

export function Footer() {
    return (
        <FooterContainer id="footer">
            <p tabIndex={0}>Sinta-se livre para me contatar</p>
            <p tabIndex={0}>victordonizete65@gmail.com</p>

            <div>
                <a aria-label="Acessar o meu linkedin" href="https://www.linkedin.com/in/developervictor/">
                    <LinkedinLogo />
                </a>

                <a aria-label="Acessar o meu github" href="https://github.com/VictorDS87">
                    <GithubLogo  />
                </a>

            </div>
        </FooterContainer>
    )
}