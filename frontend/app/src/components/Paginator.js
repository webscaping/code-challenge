import React from 'react';
import styled from 'styled-components';
import { times } from 'lodash';

const PaginatorContainer = styled.div`
    display: flex;
    border: solid 1px gainsboro; 
    border-radius: 4px;
    overflow: hidden;
`;

const PageLink = styled.div`
border-right: solid 1px gainsboro;
    background-color: ${ props => props.activePage ? '#42415B' : 'transparent'};
    color: ${ props => props.activePage ? 'white' : 'black'};
    cursor: pointer;
    padding: 8px 16px;

    &:last-child {
        border: none;
    }
`

export const Paginator = ({ pages, activePage, setPage }) => {
    return (
        <PaginatorContainer>
            {times(pages, n => (
                <PageLink key={`page_${n}`} activePage={activePage === n + 1} onClick={() => setPage(n + 1)}>{n + 1}</PageLink>
            ))}
        </PaginatorContainer>
    )
}