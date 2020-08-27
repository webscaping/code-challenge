import React from 'react';
import styled from 'styled-components';

/*
    Styled a button div, placed here as it is the only location being used
    but typically would want to store in a global file.
    Should have given ClearFilter component a more global functional name
    (ie. button) as it has nothing to do with ClearFilter feature
*/

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