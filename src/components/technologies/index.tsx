import { AdditionalTechnologie, Advanced, Beginner, Circle, ContainerAdditionalTechnologie, ContainerTechnologies, H3, H4, Intermediary, MainTechnologies, NameTechnologies } from "./styles";

export function Technologies() {
    return (
        <ContainerTechnologies>
            <H3>Tecnologias</H3>

            <section id="advanced">
                <MainTechnologies>
                    <NameTechnologies>HTML</NameTechnologies>
                    <Advanced></Advanced>
                </MainTechnologies>     

                <MainTechnologies>
                    <NameTechnologies>Css</NameTechnologies>
                    <Advanced></Advanced>
                </MainTechnologies>

                <MainTechnologies>
                    <NameTechnologies>Javascript</NameTechnologies>
                    <Advanced></Advanced>
                </MainTechnologies>
            </section>
            
            <section id="intermediary">
                <MainTechnologies>
                    <NameTechnologies>Typescript</NameTechnologies>
                    <Intermediary></Intermediary>
                </MainTechnologies>

                <MainTechnologies>
                    <NameTechnologies>React</NameTechnologies>
                    <Intermediary></Intermediary>
                </MainTechnologies>

            </section>
            
            <section id="beginner">
                <MainTechnologies>
                    <NameTechnologies>NodeJs</NameTechnologies>
                    <Beginner></Beginner>
                </MainTechnologies>

                <MainTechnologies>
                    <NameTechnologies>Python</NameTechnologies>
                    <Beginner></Beginner>
                </MainTechnologies>

                <MainTechnologies>
                    <NameTechnologies>Apex</NameTechnologies>
                    <Beginner></Beginner>
                </MainTechnologies>
            </section>

            <H4>Tecnologias adicionais e habilidades</H4>

            <ContainerAdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies>Git</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies>styled-components</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies>Sass</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies>MongoDB</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies>Server Json</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies>Aprendizagem rápida</NameTechnologies>
                </AdditionalTechnologie>
                <AdditionalTechnologie>
                    <Circle></Circle>
                    <NameTechnologies>Adaptação rápida</NameTechnologies>
                </AdditionalTechnologie>

            </ContainerAdditionalTechnologie>
        </ContainerTechnologies>
    )
}