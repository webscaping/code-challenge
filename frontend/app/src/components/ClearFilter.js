import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
    cursor: pointer;
    color: white;
    background-color: goldenrod;
    border-radius: 4px;
    padding: 10px;

    &:hover {
        background-color: peru;
    }
`;

export const ClearFilter = ({ handleClick }) => {
    return (
        <ButtonDiv onClick={handleClick}>
            Clear Filters
        </ButtonDiv >
    )
}