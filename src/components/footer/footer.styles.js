import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
    border-top: 1px solid #ddd;
    padding: 20px 0;
    justify-content: space-around;
    background-color: #3d3d3d;
    color: #fff;

    @media (max-width: 1020px) {
        flex-direction: column;
    }
`;

export const FooterItem = styled.div`
    padding: 0 20px;
    line-height: 1.3em;
    max-width: 30%;

    &:first-child {
        padding-left: 0;
    } 

    &:last-child {
        padding-right: 0;
    }

    @media (max-width: 1020px) {
        max-width: 100%;
        padding: 0;
        text-align: center;
        margin: 0 20px;

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Link = styled.a`
    display: block;
    margin-bottom: 10px;
`;

export const Paragraph = styled.p`
    margin-bottom: 10px;
`;
