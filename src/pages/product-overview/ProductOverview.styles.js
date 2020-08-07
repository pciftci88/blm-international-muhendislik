import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 40px;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const ProductTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 15px;
`;

export const ProductWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;

    @media (max-width: 1020px) {
        flex-direction: column;
    }
`;

export const ProductBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 40px;
`;

export const ProductImagesWrapper = styled.div`
    @media (max-width: 1020px) {
        display: flex;
        align-items: center;
    }
`;

export const BrandsBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LogoWrapper = styled.div`
    display: flex;
`;

export const Logo = styled.img`
    &:not(:last-child) {
        margin-right: 10px;
    }
`;
