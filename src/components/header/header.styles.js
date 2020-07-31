import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`;

export const Navi = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    font-family: 'Roboto';
    text-transform: uppercase;
`;

export const NaviItem = styled.span`
    color: #777;

    &:hover {
        color: #333;
        cursor: pointer;
    } 
`;

export const Logo = styled.img`
    max-width: 160px;
`;