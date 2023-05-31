import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { FooterContainer } from "./styles";

export function Footer() {
    return (
        <FooterContainer>
            <p>Sinta-se livre para me contatar</p>
            <p>victordonizete65@gmail.com</p>

            <div>
                <a href="">
                    <FacebookLogo />
                </a>

                <a href="">
                    <InstagramLogo />
                </a>

                <a href="https://www.linkedin.com/in/developervictor/">
                    <LinkedinLogo />
                </a>
            </div>
        </FooterContainer>
    )
}