import React from 'react';
import styled from 'styled-components';

/*
    Created a header component to be versatile way of handling h#
    elements and hold the styling created for layout of site.
*/

const elements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
}

export const HeaderComponent = ({ as = elements.h1, children, ...props }) => {
    return React.createElement(
        elements[as],
        props,
        children
    );
}

export const Header = styled(HeaderComponent)`
    text-align: ${props => props.textAlign || 'center'};
    font-weight: 500;
    font-family: "Quicksand", sans-serif;
    color: #42415B;
    line-heght: 1;
    margin-bottom: 1.5rem;
`;
