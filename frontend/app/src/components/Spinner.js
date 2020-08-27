import React from 'react';
import styled, { keyframes } from 'styled-components';
import spinnerSrc from '../assets/spinner.png';

/*
    Created a loader component that would spin-animate via css
    
*/

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const SpinnerImg = styled.img`
    animation: ${rotate} 2s linear infinite;
    width: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
`;

// Shouldn't have exported
export const SpinnerContainer = styled.div`
    text-align: center;
    width: 70px;
    font-size: 0.8em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Spinner = () => {
    return (
        <SpinnerContainer>
            <SpinnerImg src={spinnerSrc} alt="Loading" />
            Loading...
        </SpinnerContainer>
    );
}
