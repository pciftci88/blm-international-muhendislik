import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;

    @media (max-width: 1020px) {
        flex-direction: column;
    }
`;

export const Navi = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    font-family: 'Roboto';
    text-transform: uppercase;

    @media (max-width: 1020px) {
        width: 100%;
        margin: 20px 0;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const NaviItem = styled.span`
    color: #777;

    &:hover {
        color: #333;
        cursor: pointer;
    }
    
    @media (max-width: 1020px) {
        padding: 0 10px;
    }
`;

export const Logo = styled.img`
    max-width: 160px;
`;
