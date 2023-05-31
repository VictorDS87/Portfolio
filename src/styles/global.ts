import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;

        background-color: #0F1624;

        max-width: 1120px;
        margin: auto;

        &::-webkit-scrollbar {
            width: 8px; /* Largura da barra de rolagem */
        }

        &::-webkit-scrollbar-track {
            background-color: transparent; /* Cor do fundo da barra de rolagem */
        }

        &::-webkit-scrollbar-thumb {
            background: linear-gradient(270deg, rgba(19, 173, 199, 0.5), rgba(105, 120, 209, 0.5)); /* Cor da thumb (alça) da barra de rolagem */
            border-radius: 20px;
        }

        button {
            font-family: 'Poppins', sans-serif;
        }
    }
`