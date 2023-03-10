import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;    
`;

const Input = styled.input`
    margin-bottom: 1rem;
    width: 20rem;
    padding: 1.5rem;
    font-size: 1.8rem;
    border: none;
    box-shadow: 0 0.1rem 1.4rem 0 rgba(86, 185, 235, 0.5) ;
    color: #aaa;
    
`;

export {
    Container,
    Input
}