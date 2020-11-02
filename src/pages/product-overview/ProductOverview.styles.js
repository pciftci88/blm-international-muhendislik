import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 40px;
`;

export const Title = styled.h1`
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
`;

export const ProductTitle = styled.h2`
    font-size: 20px;
    margin: 20px 0;
    font-weight: bold;
`;

export const ProductWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:not(:last-child) {
        border-bottom: 1px solid #ddd;
        padding-bottom: 20px;
    }

    @media (max-width: 1020px) {
        
    }
`;

export const ProductBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    @media (max-width: 1020px) {
        margin-bottom: 15px;
    }
`;

export const ProductImagesWrapper = styled.div`
    @media (max-width: 1020px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;

export const BrandsBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    border: 1px solid #ddd;
    padding: 10px 20px;

    @media (max-width: 1020px) {
        flex-wrap: wrap;
    }
`;

export const Logo = styled.img`
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export const ProductListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const PumpImage = styled.img`
    max-width: 260px;
`;