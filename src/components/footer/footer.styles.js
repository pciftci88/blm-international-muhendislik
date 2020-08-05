import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    line-height: 1.5em;
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
            border-bottom: 2px solid #fff;
        }
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
`;

export const FooterLink = styled(Link)`
    display: block;
    margin-bottom: 10px;
    color: #fff;
    text-decoration: none;
    
    @media (max-width: 1020px) {
        padding-right: 10px;
    }
`;

export const Paragraph = styled.p`
    margin-bottom: 10px;
`;

export const Copyright = styled.p`
    margin: 0 40px 10px;
`;

export const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1020px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const ContactLink = styled.a`
    color: #fff;
    text-decoration: none;
`;
