import styled from 'styled-components'

export const ButtonContainer = styled.button`
    border: 2px solid var(--mainBlue);
    font-size: 1.4rem;
    background: transparent;
    // border: 0.05rem solid black;
    border-radius: 0.5rem;
    border-color: ${props => 
        props.cart ? "var(--mainYellow);" : 'var(--lightBlue);'};
    color: ${props => 
        props.cart ? "var(--mainYellow);" : "var(--lightBlue);"};
    padding: 0.2rem 0.5rem;
    margin:1rem 0.5rem 1rem 0.5rem;
    
    transition:all 0.5s ease-in-out;
    &:hover{
        background: ${props => 
            props.cart ? "var(--mainYellow);" : 'var(--lightBlue);'};
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
    `
