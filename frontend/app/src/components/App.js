import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { orderBy, filter, find, includes } from 'lodash';
import styled from 'styled-components';
import { fetchProducts } from '../actions/productActions';
import { fetchDepartments } from '../actions/departmentActions';
import { fetchPromotions } from '../actions/promotionActions';
import { Header } from './Header';
import { Container } from './Container';
import { ProductList } from './ProductList';
import { Spinner } from './Spinner';
import { Paginator } from './Paginator';
import { InputFilter } from './InputFilter';
import { SelectFilter } from './SelectFilter';
import { ClearFilter } from './ClearFilter';
const Options = styled.div`
    display: flex;
    align-items: flex-end;
`;

const Searches = styled.div`
    margin-left: auto;
    display: flex;
    align-items: flex-end;
    & > div {
        margin-left: 15px;
    }
`;

const AppComponent = ({
    error,
    products,
    promotions,
    departments,
    fetchProducts,
    fetchPromotions,
    fetchDepartments, }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [inputFilter, setInputFilter] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState(0);
    const [promotionFilter, setPromotionFilter] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const perPage = 5;
    const fetchData = async () => {
        setIsLoading(true);
        await fetchProducts();
        await fetchDepartments();
        await fetchPromotions();
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (products) {
            setPage(1);
            setFilteredProducts(products);

            let filterProducts = products;
            if (inputFilter.length > 1) {
                filterProducts = filter(filterProducts, product => includes(product['attributes']['name'].toLowerCase(), inputFilter.toLowerCase()));
            }

            if (departmentFilter > 0) {
                filterProducts = filter(filterProducts, ['relationships.department.data.id', departmentFilter]);
            }

            if (promotionFilter > 0) {
                filterProducts = filter(filterProducts, product => find(product['relationships']['promotions']['data'], { id: promotionFilter }));
            }

            setFilteredProducts(filterProducts);
        }
    }, [inputFilter, departmentFilter, promotionFilter, products]);

    const handleClearFilter = () => {
        setInputFilter('');
        setDepartmentFilter(0);
        setPromotionFilter(0);
    }

    const handleInputFilterChange = (e) => {
        setInputFilter(e.target.value);
    }

    const handleDepartmentChange = (e) => {
        setDepartmentFilter(e.target.value);
    }

    const handlePromotionChange = (e) => {
        setPromotionFilter(e.target.value);
    }

    return (
        <Container>
            <Header as='h1'>Trufla Code Challenge</Header>
            <Header as='h3'>Product List</Header>
            {
                isLoading ? <Spinner /> :
                    <>
                        <Options>
                            {filteredProducts.length > 0 &&
                                <Paginator
                                    pages={Math.round(filteredProducts.length / perPage)}
                                    activePage={page} setPage={setPage} />}
                            <Searches>
                                <InputFilter
                                    id='products-filter'
                                    label='Search Products'
                                    handleChange={handleInputFilterChange}
                                    value={inputFilter} />
                                <SelectFilter
                                    objects={departments}
                                    id='departments-filter'
                                    label='Filter By Department'
                                    optionName="name"
                                    optionValue="id"
                                    selectedValue={departmentFilter}
                                    handleChange={handleDepartmentChange}
                                    placeholder='Select a department' />
                                <SelectFilter
                                    objects={filter(promotions, ['attributes.active', true])}
                                    id='promtions-filter'
                                    label='Filter By Promotion'
                                    selectedValue={promotionFilter}
                                    optionName='code'
                                    optionValue='id'
                                    handleChange={handlePromotionChange}
                                    placeholder='Select a promotion' />
                                <ClearFilter handleClick={handleClearFilter} />
                            </Searches>
                        </Options>
                        <ProductList
                            products={
                                orderBy(
                                    filteredProducts,
                                    ['attributes.name'], ['asc'])
                                    .slice((page - 1) * perPage, perPage * page)}
                            departments={departments}
                            promotions={promotions} />
                    </>
            }
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        products: Object.values(state.products),
        departments: Object.values(state.departments),
        promotions: Object.values(state.promotions),
        error: state.error
    }
}

export const App = connect(
    mapStateToProps,
    {
        fetchProducts,
        fetchDepartments,
        fetchPromotions
    })(AppComponent);