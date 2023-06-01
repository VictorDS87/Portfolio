import styled from "styled-components";

export const H2 = styled.h2`
    font-size: 30px;
    color: #ffffff;
`

export const ContainerProjects = styled.div`
    font-size: 30px;
    color: #ffffff;
`
export const Project = styled.div`
    font-size: 30px;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 350px;

    border: 1px solid transparent;
    border-radius: 10px;

    padding: 1rem 0 0 0;
    margin: 0.4rem;

    background: 
        linear-gradient(to right, #0F1624, #0F1624), 
        linear-gradient(to right, #13ADC7, #6978D1); 

    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
`
export const ImageProject = styled.div`
    img {
        width: 300px;
        height: 200px;
    }
`
export const InfoProject = styled.div`
    display: flex;
    flex-direction: column;
    text-align: -webkit-center;
    p {
        font-size: 20px;
        color: #ffffff;
        font-weight: 600;
    }

    span {
        font-size: 16px;
        color: #929EB0;
        font-weight: 500;

        width: 300px;
        word-break: break-word;
    }
`
export const ButtonProjects = styled.div`
    margin: 1rem 0;
    display: flex;
    gap: 1rem;
`

export const Button = styled.button`
    border-radius: 60px;
    

    color: #FFFFFF;
    cursor: pointer;

    &:disabled{
        cursor: not-allowed;
        box-shadow: none;
    }
`

export const LiveButton = styled(Button)`
    padding: 1rem;
    width: 125px;

    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    box-shadow: 0px 10px 30px rgba(0, 178, 255, 0.35);
    border: none;

    transition: .5s;
    &:hover {
        filter: brightness(1.2);
    }
`

export const CheckButton = styled(Button)`
    height: 60px;
    padding: 0 2rem 0 2rem;

    background: transparent;
    border: 1px solid #b1b1b1;

    transition: .5s;
    &:hover {
        border: 1px solid #ffffff;
    }
`