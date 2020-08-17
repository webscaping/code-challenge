import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MessageContainer = styled.div`
    color: goldenrod;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Message = styled.p`
    color: goldenrod;
    font-size: 1.1em;
`;

export const NoData = ({ obj }) => {
    return (
        <MessageContainer>
            <FontAwesomeIcon icon="exclamation-triangle" size='4x' />
            <Message>There are no {obj} currently recorded in the system.</Message>
        </MessageContainer>
    )
}