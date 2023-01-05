import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Itens = styled.div`

`;

const ItenSecondaryText = styled.p`
    text-align: center;
    font-size: 2rem;
`;

const ItenPrincipalText = styled.h1`
    text-align: center;
`;

const ProgressBar = styled.div`
    width: 20rem;
    height: 4rem;
    border: 0.3rem solid #56a5eb;
    margin: 1rem 0;
`;

const ProgressBarFull = styled.div`
    height: 3.4rem;
    background-color: #56a5eb;
    width: 0%;
`;

export {
    Container,
    Itens,
    ItenPrincipalText,
    ItenSecondaryText,
    ProgressBar,
    ProgressBarFull
}