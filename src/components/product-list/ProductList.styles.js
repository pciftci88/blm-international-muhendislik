import styled, { css } from 'styled-components';

export const ProductTitle = styled.h2`
    font-size: 20px;
    margin: 20px 0;
    font-weight: bold;
`;

export const ProductListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

export const Table = styled.div`
    display: table;
`;

const row = css`
    display: table-row;
`;

const cell = css`
    display: table-cell;
     word-break: break-word;
`;

export const TableRow = styled.div`
    ${row};
`;

export const TableRowHeader = styled.div`
    ${row};
    background-color: #ddd;
`;

export const TableCell = styled.div`
    ${cell};
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

export const TableCellHeader = styled.div`
    ${cell};
    padding: 20px 10px;
`;