import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

/*
    Put label in here as well as input filter, should have been in a global
    styled-component page

    Created a reusable select field with label inside container
*/

const SearchSelect = styled.select`
    border-radius: 4px;
    border: solid 1px lightgray;
    padding: 10px 5px;
    background-color: transparent;
`;

const Label = styled.label`
    display: block;
`;

export const SelectFilter = ({
    objects,
    id,
    label,
    optionValue,
    optionName,
    handleChange,
    placeholder,
    selectedValue, }) => {
    if (!objects.length) return null;

    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            <SearchSelect id={id} onChange={handleChange} value={selectedValue}>
                <option value="0">{placeholder}</option>
                {map(objects, object => {
                    return <option key={`option_${id}_${object[optionValue]}`} value={object[optionValue]}>{object.attributes[optionName]}</option>
                })}
            </SearchSelect>
        </div>
    )
}