import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    100% {
        transform: rotatez(360deg);
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    width: 100%;
    margin-top: 200px;
`;

export const Loader = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;

    &::before {
        content: "";
        color: #fff;
        height: 70px;
        width: 70px;
        background: transparent;
        border-radius: 50%;
        border: 10px solid blue;
        border-color: #0277BD #0277BD #0277BD #81D4FA;
        animation: ${spin} .6s infinite ease-in-out;
        box-shadow: 0px 0px 40px -2px skyblue;
    }
`;