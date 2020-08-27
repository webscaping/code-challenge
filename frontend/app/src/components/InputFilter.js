import React from 'react';
import styled from 'styled-components';

/* 
    originally styled label as a styled.div should have been
    styled.label

    InputFilter created to be an input with label inside a container
    pre-styled and re-useable.
*/
const Label = styled.label`
    display: block;
`;

const SearchInput = styled.input`
    border-radius: 4px;
    border: solid 1px lightgray;
    padding: 10px 5px;
`;
export const InputFilter = ({ label, id, handleChange, value }) => {

    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            <SearchInput value={value} type='text' id={id} onChange={handleChange} />
        </div>
    )
}