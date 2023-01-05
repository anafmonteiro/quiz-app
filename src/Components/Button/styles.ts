import styled from "styled-components";

const Container = styled.button`
    font-size: 1.8rem;
    padding: 1rem 0;
    width: 20rem;
    text-align: center;
    border: 0.1rem solid #56a5eb;
    margin-bottom: 1rem;
    text-decoration: none;
    background-color: white;
    color: #56a5eb;

    :hover{
        cursor: pointer;
        box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
        transform: translateY(-0.1rem);
        transition: 150ms;
    }
`;


export {
    Container
}