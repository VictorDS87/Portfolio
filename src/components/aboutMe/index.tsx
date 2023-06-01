import { Chronology, ChronologyLine, ChronologySummary, Date, H5 } from "./styles";

export function AboutMe() {
    return (
        <div id="aboutme">
            <H5>Sobre mim</H5>
            <div>
            <table>
                <tr>
                    <Date>2020</Date>
                    <Date>2021</Date>
                    <Date>2022</Date>
                    <Date>2023</Date>
                </tr>

                <tr>
                    <td style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Chronology></Chronology>
                        <ChronologyLine></ChronologyLine>
                    </td>
                    <td>
                        <Chronology></Chronology>
                        <div></div>
                    </td>
                    <td>
                        <Chronology></Chronology>
                        <div></div>
                    </td>
                    <td>
                        <Chronology></Chronology>
                        <div></div>
                    </td>
                </tr>

                <tr>
                    <ChronologySummary>
                        <p>
                            Inicio da faculdade de análise e desenvolvimento de sistemas
                        </p>
                    </ChronologySummary>
                    <ChronologySummary>
                        <p>
                            Comecei a aprender sobre front end, sendo mais especifico, comecei a aprender mais sobre html, css, javascript e um pouco de python
                        </p>
                    </ChronologySummary>
                    <ChronologySummary>
                        <p>
                            Comecei a estudar ReactJs e NodeJs via os cursos da rocketseat, para aprimorar meu nivel como programador frontEnd e backEnd, em busca de me tornar um fullstack
                        </p>
                    </ChronologySummary>
                    <ChronologySummary>
                        <p>
                            Concluí a faculdade de análise e desenvolvimento de sistemas, além disso também aprimorei tanto minhas hard skills quanto as soft skills
                        </p>
                    </ChronologySummary>
                </tr>
            </table>
            </div>
        </div>
    )
}