import styled from "styled-components";

export const Nav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    color: #FFFFFF;

    li {
        
        font-size: 'Poppins', sans-serif;
    }
    div {
        display: flex;
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

export const SocialMedia = styled.div`
    font-size: 18px;
    gap: 1rem;
    li {      
        display: flex;
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