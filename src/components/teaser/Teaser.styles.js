import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    font-size: 40px;
    text-transform: uppercase;
    border: 5px solid;
    text-align: center;
    max-width: 40%;
    padding: 15px;
    color: ${props => props.isBackgroundWhite ? '#fff' : '#000'};

    @media (max-width: 1020px) {
        font-size: 18px;
        border: 3px solid;
    }

    @media (max-width: 580px) {
        max-width: 60%;
    }
`;
