import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 20px 40px 0 40px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1020px) {
        flex-direction: column;
    }
`;

export const Title = styled.h2`
    text-align: center;
    border: 1px solid;
    padding: 20px;
    background-color: midnightblue;
    color: white;
`;

export const List = styled.ul`
    margin: 20px 0;

    @media (max-width: 1020px) {
        text-align: center;
    }
`;

export const ListItem = styled.li`
    margin: 10px 0;
    list-style: circle;
    list-style-position: inside;
    font-weight: bold;

    @media (max-width: 1020px) {
        list-style: none;
    }
`;