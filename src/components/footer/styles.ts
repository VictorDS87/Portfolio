import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2rem;
    color: white;
    div {

        a {
            color: #ffffff;
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
