import styled from "styled-components";


export const BoxAreaGame = styled.div`
    flex:2;
    display: flex;
    justify-content: flex-end;
    margin-left: 10%;
    @media(max-width:935px){
        margin-left: 0%;
        width:100%;
        justify-content: center;
    }
`;

export const Grid = styled.div`
    width: 500px;
    display: grid;
    grid-template-columns: repeat(4 , 1fr);
    gap:5%;
    @media(max-width:935px){
        width: 100%;
        grid-template-columns: repeat(4 , 1fr);
    }
    @media(max-width:470px){
        grid-template-columns: repeat(3 , 1fr);
        margin-bottom: 10%;
        gap:2%;
    }
`;