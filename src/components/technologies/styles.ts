import styled, { keyframes } from "styled-components";

const brightness = keyframes`
    0% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.3));
  }
    25% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.3));
  }
    50% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.3));
  }
    75% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.38));
  } 
  100% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.3));
  }
`;


export const ContainerTechnologies = styled.div`
    margin-top: 4rem;

    margin-left: 1rem;
    margin-right: 1rem;
`
export const H3 = styled.h3`
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 22px;
`

export const H4 = styled.h3`
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 22px;
    margin-top: 4.5rem;
`

export const MainTechnologies = styled.div`
    margin-top: 1.5rem;

    div {
        span {
            color: #fff;

            font-size: 0.875rem;
        }
    }
`

export const NameTechnologies = styled.h3`
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 16px;
`

export const LevelTechnologies = styled.div`
    max-width: 1088px;
    padding: 0.6rem 0 0.6rem 0;

    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    box-shadow: 0px 7px 30px rgba(19, 173, 199, 0.3);
    border-radius: 83px;
    
    animation: ${brightness} 3.5s linear infinite;
    transition: 0.5s;
    &:hover {
        box-shadow: 0px 7px 30px rgba(19, 173, 199, 0.6);
    }
`

export const Beginner = styled(LevelTechnologies)`
    max-width: 1088px;
    width: 33%;
    padding: 0.6rem 0 0.6rem 0;

    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    border-radius: 83px;
`

export const Intermediary = styled(LevelTechnologies)`
    max-width: 1088px;
    width: 66%;
    padding: 0.6rem 0 0.6rem 0;
    
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    border-radius: 83px;
`

export const Advanced = styled(LevelTechnologies)`
    max-width: 1088px;
    width: 100%;
    padding: 0.6rem 0 0.6rem 0;

    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    border-radius: 83px;
`

// Additional Tecnologies

export const ContainerAdditionalTechnologie = styled.div`
    columns: 3;
`
export const AdditionalTechnologie = styled.div`
    display: flex;
    align-items: center;
`
export const Circle = styled.div`
    height: 6px;
    padding: 0.5rem 0.4rem 0 0.5rem;
    background: linear-gradient(326.6deg, #13ADC7 21.25%, #6978D1 58.73%, #945DD6 77.47%);

    box-shadow: 0px 7px 30px rgba(19, 173, 199, 0.7);
    border-radius: 83px;

    margin-right: 0.5rem;

`

