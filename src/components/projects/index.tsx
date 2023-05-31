import { ButtonProjects, CheckButton, ContainerProjects, H2, ImageProject, InfoProject, LiveButton, Project } from "./styles";

import coffeDeliveryImg from '../../assets/projects/coffe-delivery-home.png'
import chatImg from '../../assets/projects/chat.png'
import todoImg from '../../assets/projects/todo.png'
import bookwiseImg from '../../assets/projects/bookwise.png'
export function Projects() {
    return (
        <ContainerProjects>
            <H2>Projetos</H2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center' 
                }}>

                <Project>
                    <ImageProject>
                        <img src={coffeDeliveryImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Coffe Delivery</p>
                        <span>Site de entregas de café. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img src={chatImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Chat Live</p>
                        <span>Site de conversa ao vivo. tecnologias usadas são React, Javascript, html, css, nodejs e mongodb</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img src={todoImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Todo</p>
                        <span>Site feito para marcar novas tarefas. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img src={bookwiseImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Book Wise</p>
                        <span>Site similar a uma rede social, mas focada em livros, podendo dar sua review sobre um livro em especifico, ou marcar algum como lido. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton disabled>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>
                

            </div>
        </ContainerProjects>
    )
}