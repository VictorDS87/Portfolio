import { ButtonProjects, CheckButton, ContainerProjects, H2, ImageProject, InfoProject, LiveButton, Project } from "./styles";

import coffeDeliveryImg from '../../assets/projects/coffe-delivery-home.png'
import chatImg from '../../assets/projects/chat.png'
import bookwiseImg from '../../assets/projects/bookwise.png'
export function Projects() {
    return (
        <ContainerProjects id="projects">
            <H2 tabIndex={0}>Projetos</H2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center' 
                }}>

                <Project>
                    <ImageProject>
                        <img tabIndex={0} src={coffeDeliveryImg} alt="Imagem do projeto coffe delivery." />
                    </ImageProject>
                    <InfoProject>
                        <p tabIndex={0}>Coffe Delivery</p>
                        <span tabIndex={0}>É um site de entregas de café. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>
                        <a href="https://github.com/VictorDS87/Coffe-Delivery">
                            <CheckButton tabIndex={-1}>Checar no Github</CheckButton>
                        </a>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img tabIndex={0} src={chatImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p tabIndex={0}>Chat Live</p>
                        <span tabIndex={0}>Site de conversa ao vivo. tecnologias usadas são React, Javascript, html, css, nodejs e mongodb</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>
                        <a href="https://github.com/VictorDS87/live-chat">
                            <CheckButton tabIndex={-1}>Checar no Github</CheckButton>
                        </a>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img tabIndex={0} src="" alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p tabIndex={0}>Automação Instagram</p>
                        <span tabIndex={0}>Uma automação feitao com o Selenium, a função dela é dar like e comentar em todos os posts de uma pessoa no instagram</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>

                        <a href="https://github.com/VictorDS87/curtida_comentario_automatica_instragram_selenium">
                            <CheckButton tabIndex={-1}>Checar no Github</CheckButton>
                        </a>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img tabIndex={0} src={bookwiseImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p tabIndex={0}>Book Wise</p>
                        <span tabIndex={0}>Site similar a uma rede social, mas focada em livros. No front end as tecnologias usadas foram React, Javascript, html e css, já para o backend nodejs e mongodb como banco de dados</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>

                        <a href="https://github.com/VictorDS87/Book-Wise">
                            <CheckButton tabIndex={-1}>Checar no Github</CheckButton>
                        </a>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img tabIndex={0} src='' alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p tabIndex={0}>HangMan</p>
                        <span tabIndex={0}>Jogo ta forca feito inteiramente em python. Não fiz nenhuma tela para o programa, é possivel jogar ele pelo terminal. As palavras estão disponiveis em um arquivo. Obs: O programa está em inglês</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>

                        <a href="https://github.com/VictorDS87/HangMan">
                            <CheckButton tabIndex={-1}>Checar no Github</CheckButton>
                        </a>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img tabIndex={0} src='' alt="" />
                    </ImageProject>
                    <InfoProject
                        tabIndex={0}
                    >
                        <p tabIndex={0}>Number in full</p>
                        <span tabIndex={0}>Programa para converter o número digitado em um numero por extenso. O programa foi feito inteiramente em python e só possível usar ele pelo terminal. Obs:  O programa está em inglês</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>

                        <a href="https://github.com/VictorDS87/number-in-full">
                            <CheckButton tabIndex={-1}>Checar no Github</CheckButton>
                        </a>
                    </ButtonProjects>
                </Project>
                

            </div>
        </ContainerProjects>
    )
}