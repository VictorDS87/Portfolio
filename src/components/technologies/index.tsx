import { AdditionalTechnologie, Advanced, Beginner, Circle, ContainerAdditionalTechnologie, ContainerTechnologies, H3, H4, Intermediary, MainTechnologies, NameTechnologies } from "./styles";

export function Technologies() {
    return (
        <ContainerTechnologies id="technologies">
            <H3  tabIndex={0}>Tecnologias</H3>

            <section id="advanced">
                <MainTechnologies>
                    <NameTechnologies tabIndex={0}>HTML</NameTechnologies>
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        height: '20px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Advanced></Advanced>
                        <span aria-label="O meu nível com essa linguagem é avançado" tabIndex={0}>Avançado</span>
                    </div>
                </MainTechnologies>     

                <MainTechnologies>
                    <NameTechnologies tabIndex={0}>Css</NameTechnologies>

                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        height: '20px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Advanced></Advanced>
                        <span aria-label="O meu nível com essa linguagem é avançado" tabIndex={0}>Avançado</span>
                    </div>
                    
                </MainTechnologies>

                <MainTechnologies>
                    <NameTechnologies tabIndex={0}>Javascript</NameTechnologies>

                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        height: '20px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Advanced></Advanced>
                        <span aria-label="O meu nível com essa linguagem é avançado" tabIndex={0}>Avançado</span>
                    </div>
                </MainTechnologies>
            </section>
            
            <section id="intermediary">
                <MainTechnologies>
                    <NameTechnologies tabIndex={0}>Typescript</NameTechnologies>

                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        height: '20px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Intermediary></Intermediary>
                        <span aria-label="O meu nível com essa linguagem é intermediário" tabIndex={0}>Intermediário</span>
                    </div>
                </MainTechnologies>

                <MainTechnologies>
                    <NameTechnologies tabIndex={0}>React</NameTechnologies>
                        
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        height: '20px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Intermediary></Intermediary>
                        <span aria-label="O meu nível com essa linguagem é intermediário" tabIndex={0}>Intermediário</span>
                    </div>
                </MainTechnologies>

            </section>
            
            <section id="beginner">
                <MainTechnologies>
                    <NameTechnologies tabIndex={0}>NodeJs</NameTechnologies>
                        
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        height: '20px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Beginner></Beginner>
                        <span aria-label="O meu nível com essa linguagem é básico" tabIndex={0}>Iniciante</span>
                    </div>
                </MainTechnologies>

                <MainTechnologies>
                    <NameTechnologies tabIndex={0}>Python</NameTechnologies>
                    
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        height: '20px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Beginner></Beginner>
                        <span aria-label="O meu nível com essa linguagem é básico" tabIndex={0}>Iniciante</span>
                    </div>
                </MainTechnologies>
            </section>

            <H4 tabIndex={0}>Tecnologias adicionais e habilidades</H4>

            <ContainerAdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies tabIndex={0}>Git</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies tabIndex={0}>styled-components</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies tabIndex={0}>Sass</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies tabIndex={0}>MongoDB</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies tabIndex={0}>Server Json</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies tabIndex={0}>Aprendizagem rápida</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies tabIndex={0}>Adaptação rápida</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies tabIndex={0}>Site com acessibilidade</NameTechnologies>
                </AdditionalTechnologie>

            </ContainerAdditionalTechnologie>
        </ContainerTechnologies>
    )
}