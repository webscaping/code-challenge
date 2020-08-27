import React from 'react';
import styled from 'styled-components';
import { map, find } from 'lodash';
import { NoData } from './NoData';
import { Header } from './Header';

const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

const Code = styled.div`
    font-weight: bold;
    text-align: right;
`

const Department = styled.div`
    font-style: italic;
`

const DiscountPrice = styled.div`
    margin-left: 15px;
    text-align: right;
`;

const List = styled.div`
    margin: 0;
    padding: 0;
    `;

const ListItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-bottom: solid 1px gainsboro;
    padding-bottom: 15px;
    margin: 15px 0;
`;

const ProductName = styled.div`
    font-size: 1.2em;
`;

const PromotionItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`;

const Promotions = styled.div`
    margin-left: auto;
    font-size: 0.9em;
`;

const RegPrice = styled.div`
    color: rgba(0, 0, 0, 0.85);
    margin-left: auto;
    text-align: right;
    font-size: 1.1em;
`

/*
    Set up the table then iterate over products and display details.
    Within displaying the details find the department name and promotions to display
*/

export const ProductList = ({ products, departments, promotions }) => {
    if (!products.length) {
        return (
            <NoData obj='products' />
        )
    }

    const getDepartmentName = product => {
        let department;
        if (product.relationships && product.relationships.department && departments.length) {

            department = find(
                departments,
                department => parseInt(product.relationships.department.data.id) === parseInt(department.id)
            );

        }
        return department ? department.attributes.name : "Unknown Department"

    }

    const renderPromotions = product => {
        return map(product.relationships.promotions.data, productPromotion => {
            const promotion = find(promotions, promotion => parseInt(productPromotion.id) === parseInt(promotion.id));
            if (!promotion || !promotion.attributes.active) return;

            return (
                <PromotionItem key={`product_promotion_${product.id}_${productPromotion.id}`}>
                    <Code>{promotion.attributes.code}</Code>
                    <DiscountPrice>${(product.attributes.price / (parseFloat(promotion.attributes.discount) + 1)).toFixed(2)}</DiscountPrice>
                </PromotionItem>
            );
        });
    }

    const renderProducts = () => {
        return map(products, product => (
            <ListItem key={`product_${product.id}`}>
                <ProductName>
                    {product.attributes.name}
                </ProductName>
                <RegPrice>Reg. ${product.attributes.price}</RegPrice>
                <Break />
                <Department>
                    {getDepartmentName(product)}
                </Department>
                <Promotions>
                    <Header as='h5'>{product.relationships.promotions.data.length > 0 ? '' : 'No '}Promotions Available</Header>
                    {renderPromotions(product)}
                </Promotions>
            </ListItem>
        ));
    }

    return (
        <List>
            {renderProducts()}
        </List>
    )
}
