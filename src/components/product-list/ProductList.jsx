import React from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import {
    ProductTitle,
    ProductListWrapper,
    Table,
    TableRow,
    TableRowHeader,
    TableCell,
    TableCellHeader
} from './ProductList.styles';

import productList from '../../data/productList';

function ProductList() {
    const { t } = useTranslation();

    return (
        <ProductListWrapper>
            <ProductTitle>{t('ProductList.title')}</ProductTitle>
            <Table>
                <TableRowHeader>
                    <TableCellHeader>
                        <span>{t('ProductList.tableColumnProductSupplier')}</span>
                    </TableCellHeader>
                </TableRowHeader>
                {
                    productList.map((listItem) => {
                        return (
                            <TableRow key={uuidv4()}>
                                <TableCell>{listItem}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </Table>
        </ProductListWrapper>
    );
}

export default ProductList;