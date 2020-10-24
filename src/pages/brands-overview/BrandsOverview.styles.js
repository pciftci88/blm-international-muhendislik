import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 40px;
`;

export const Letter = styled.p`
    font-size: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    text-align: center;
    background-color: #fff;
    transition: .4s;

    &:hover {
        background-color: #f4f4f4;
    } 
`;

export const Title = styled.h1`
    font-size: 40px;
`;

export const BrandsWrapper = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    column-gap: 10px;
    row-gap: 10px;
    margin: 40px 0;

    @media (max-width: 1020px) {
        grid-template-columns: 33% 33% 33%;
    }

    @media (max-width: 720px) {
        grid-template-columns: 50% 50%;
    }
`;
