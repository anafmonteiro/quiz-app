import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem;
`;

const Title = styled.h1`
    font-size: 5.4rem;
    color: #56a5eb;
    margin-bottom: 5rem;
`;

const Button = styled.button`
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
    Container,
    Title,
    Button
}