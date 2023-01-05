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

const SubTitle = styled.h2`
    font-size: 4.2rem;
    font-weight: 700;
    margin-bottom: 4rem;
`;



export {
    Container,
    SubTitle,
}