import styled from "styled-components";

export const H5 = styled.h5`
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 21px;
`

export const Date = styled.th`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    color: white;
`

export const ChronologyContainer = styled.td`
    
`
export const Chronology = styled.div`
    height: 12px;
    width: 8px;
    padding: 0.2rem 0.2rem 0 0.2rem;
    background: linear-gradient(326.6deg, #13ADC7 21.25%, #6978D1 58.73%, #945DD6 77.47%);

    box-shadow: 0px 7px 30px rgba(19, 173, 199, 0.7);
    border-radius: 83px;

    margin-right: 0.5rem;
`

export const ChronologyLine = styled.div`
    background: white;
    width: 845px;  // 285px para a linha cronologica de cada ano
    padding: 0.2rem;
    position: absolute;
    z-index: -118;
    border-radius: 100px;
`

export const ChronologySummary = styled.td`
    width: 270px;
    word-break: break-word;
    color: rgba(146, 158, 176, 1);
    font-size: 13px;
    padding-right: 1rem;

    text-align: -webkit-center;
    vertical-align: baseline;

    position: relative;
`

