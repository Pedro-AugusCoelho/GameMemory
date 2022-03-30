import styled from "styled-components";


export const BoxAreaInfo = styled.div`
    flex:1;
    @media(max-width:935px){
        width: 100%;
        text-align: center;
    }
`;

export const LogoLink = styled.a`
    img{
        width: 200px;
    }
`;

export const Info = styled.div`
    width: 100%;
    @media(max-width:935px){
        display: flex;
    }
`;

export const Box = styled.div`
    width: 100%;
    padding: 1% 0;
    p{
        font-size: 18px;
        color: #BBB;
    }
    span{
        font-size: 45px;
        font-weight: bold;
        color: #000;
    }
`;

export const Btn = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 50px;
    margin-top: 2%;
    background-color: blue;
    border-radius: 20px;
    border:0;
    p{
        flex: 1;
        color: #FFF;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
    }
    @media(max-width:935px){
        width: 50%;
        margin: 5% auto;
    }
    @media(max-width:470px){
        width: 100%;
    }
`;

export const Icon = styled.div`
    width: 20px;
    margin: 2%;
    padding-right: 5%;
    border-right: 2px solid #CCC;
    img{
        height: 20px;
    }
`;

