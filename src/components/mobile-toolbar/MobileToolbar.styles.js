import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
    max-width: 80px;
`;

export const NaviItem = styled(Link)`
    color: #777;
    text-decoration: none;

    &:hover {
        color: #333;
        cursor: pointer;
    }
    
    @media (max-width: 1020px) {
        padding: 0 10px;
    }
`;
