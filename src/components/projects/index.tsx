import { ButtonProjects, CheckButton, ContainerProjects, H2, ImageProject, InfoProject, LiveButton, Project } from "./styles";

import coffeDeliveryImg from '../../assets/projects/coffe-delivery-home.png'
export function Projects() {
    return (
        <ContainerProjects>
            <H2>Projetos</H2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap' 
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
                        <LiveButton>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img src={coffeDeliveryImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Coffe Delivery</p>
                        <span>Site de entregas de café. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img src={coffeDeliveryImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Coffe Delivery</p>
                        <span>Site de entregas de café. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>

                <Project>
                    <ImageProject>
                        <img src={coffeDeliveryImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Coffe Delivery</p>
                        <span>Site de entregas de café. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>
                <Project>
                    <ImageProject>
                        <img src={coffeDeliveryImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Coffe Delivery</p>
                        <span>Site de entregas de café. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>
                <Project>
                    <ImageProject>
                        <img src={coffeDeliveryImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Coffe Delivery</p>
                        <span>Site de entregas de café. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>
                <Project>
                    <ImageProject>
                        <img src={coffeDeliveryImg} alt="" />
                    </ImageProject>
                    <InfoProject>
                        <p>Coffe Delivery</p>
                        <span>Site de entregas de café. tecnologias usadas são React, Javascript, html, css, json server</span>
                    </InfoProject>
                    <ButtonProjects>
                        <LiveButton>Teste ao vivo</LiveButton>
                        <CheckButton>Checar no Github</CheckButton>
                    </ButtonProjects>
                </Project>

            </div>
        </ContainerProjects>
    )
}