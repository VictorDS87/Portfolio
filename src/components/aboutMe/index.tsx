import { Chronology, ChronologyLine, ChronologySummary, Date, H5 } from "./styles";

export function AboutMe() {
    return (
        <div id="aboutme">
            <H5 tabIndex={0}>Sobre mim</H5>
            <div>
            <table>
                <tbody>
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
                        </td>
                        <td>
                            <Chronology></Chronology>
                        </td>
                        <td>
                            <Chronology></Chronology>
                        </td>
                    </tr>

                    <tr>
                        <ChronologySummary>
                            <p tabIndex={0}>
                                Inicio da faculdade de análise e desenvolvimento de sistemas
                            </p>
                        </ChronologySummary>
                        <ChronologySummary>
                            <p tabIndex={0}>
                                Comecei a aprender sobre front end, sendo mais especifico, comecei a aprender mais sobre html, css, javascript e um pouco de python
                            </p>
                        </ChronologySummary>
                        <ChronologySummary>
                            <p tabIndex={0}>
                                Comecei a estudar ReactJs e NodeJs via os cursos da rocketseat, para aprimorar meu nivel como programador frontEnd e backEnd, em busca de me tornar um fullstack
                            </p>
                        </ChronologySummary>
                        <ChronologySummary>
                            <p tabIndex={0}>
                                Concluí a faculdade de análise e desenvolvimento de sistemas, além disso também aprimorei tanto minhas hard skills quanto as soft skills
                            </p>
                        </ChronologySummary>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}