import styled, { keyframes } from "styled-components";

const horizontalMovement = keyframes`
  0% {
    background-size: 370px, 160px;
    background-position-x: 600px, 922px;
    background-position-y: 100px, 180px;

    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.15));
  }
  25% {
    background-size: 400px, 100px;  
    background-position-x: 600px, 937px;
    background-position-y: 100px, 190px; 

    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.15));
  }
  50% {
    background-size: 370px, 160px; 
    background-position-x: 600px, 922px;
    background-position-y: 100px, 180px;

    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.15));
  }
  75% {
    background-size: 370px, 100px;  
    background-position-x: 600px, 937px;
    background-position-y: 100px, 190px;  

    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.25));
  }
  100% {
    background-size: 370px, 160px; 
    background-position-x: 600px, 922px;
    background-position-y: 100px, 180px;

    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.15));
  }
`;

const brightness = keyframes`
    0% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.15));
  }
    25% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.15));
  }
    50% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.15));
  }
    75% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.25));
  } 
  100% {
    filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.15));
  }
`;

export const SummaryContainer = styled.div`
    animation: ${brightness} 3.5s linear infinite;
    display: flex;
    max-height: 500px;

    background-repeat: no-repeat;

    background-size: 370px, 160px;
    background-position-x: 600px, 922px;
    background-position-y: 100px, 180px;

    &:hover {
        div {
        }
        animation: ${horizontalMovement} 3.5s linear infinite;
        img {
            filter: grayscale(0%);
        }
    }
`

export const ProfileImage = styled.div`

    height: 657px;
    width: 657px;
    padding: 6rem;
    margin-left: -22rem;
    
    div {
        filter: drop-shadow(0px 20px 50px rgba(0, 178, 255, 0.25));
    }
    img {
        position: relative;
        left: 320px;
        top: -30px;
        width: 200px;
        box-sizing: border-box;
        
        background: url(2.jpg), url(1.jpg);
        border-radius: 200px;
        
        transition: filter 0.7s ease-in-out;
        filter: grayscale(100%);
    }
    
    &:hover {
        animation: ${horizontalMovement} 3.5s linear infinite;
        img {
            filter: grayscale(0%);
        }
    }
`

export const Introduction = styled.div`
    margin-top: 7rem;
    p {
        color: #ffffff;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 0;
        margin-top: 0;
    }
`
export const Span = styled.div`
    span {
        color: rgba(146, 158, 176, 1)
    }
`
export const Cv = styled.div`
    margin-top: 85px;
    button {
        padding: 25px 51px 26px;
    
        background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
        /* Neon for Button */
        box-shadow: 0px 10px 30px rgba(0, 178, 255, 0.35);

        border-radius: 60px;
        border: none;

        color: #ffffff;
        font-size: 18px;

        cursor: pointer;
        transition: 0.4s;
        &:hover {
            filter: brightness(1.3);
        }
    }

`