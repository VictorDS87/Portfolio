import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { FooterContainer } from "./styles";

export function Footer() {
    return (
        <FooterContainer id="footer">
            <p>Sinta-se livre para me contatar</p>
            <p>victordonizete65@gmail.com</p>

            <div>
                <a href="https://www.linkedin.com/in/developervictor/">
                    <LinkedinLogo />
                </a>

                <a href="https://github.com/VictorDS87">
                    <GithubLogo  />
                </a>

            </div>
        </FooterContainer>
    )
}