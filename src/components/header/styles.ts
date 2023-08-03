import styled, { keyframes } from "styled-components";

const moveButton = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(10px);
  }
  75% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Nav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    transition: 1s;
    li {
        
        font-size: 'Poppins', sans-serif;
    }
    div {
        display: flex;
    }
`

export const ReturnFromNav = styled.div`
    margin-left: 6rem;
    border-radius: 20px;
    padding: 0.1rem 0.3rem 0 0.3rem;

    background: linear-gradient(326.6deg, #13ADC7 21.25%, #6978D1 58.73%, #945DD6 77.47%);

    box-shadow: 0px 10px 30px rgba(0, 178, 255, 0.35);

    filter: drop-shadow(rgba(0, 178, 255, 1.25) 0px 20px 50px);
    a {
        svg {
            animation: ${moveButton} 1.5s linear infinite;
            color: white;
        }
    }
`

export const Me = styled.div`
    font-size: 30px;
`

export const Routes = styled.div`
    font-size: 18px;
    padding: 0 9rem;
    
    gap: 4rem;
    li {
        
        a {
            position: relative;
            
            color: #FFFFFF;
            text-decoration: none;

            &::before {
                content: "";
                position: absolute;
                bottom: 0;
                height: 1px;
                width: 0%;
                background: linear-gradient(270deg, rgb(19, 173, 199) 0%, rgb(105, 120, 209) 66.67%, rgb(148, 93, 214) 100%);
                
                transition: 1s;
            }
            &:hover {
                &::before {
                    width: 100%;
                }
                
            }
        }   

    }
`

export const SocialMedia = styled.ul`
    font-size: 18px;
    gap: 1rem;
    
    display: flex;
    li {      
        a {
            svg {
                color: #ffffff;
                border-radius: 10px;
                
                font-size: 30px;
                &:hover {
                    margin-top: -4px;
                    filter: drop-shadow(0 0 8px #61dafbaa);
                    transition: .6s;
                    color: rgb(19, 173, 199);
                }
            }
            
        }
    }
`