import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;    
`;

const ScoreContainer = styled.div `
    list-style: none;
    padding-left: 0;
    margin-bottom: 4rem;
`;

const ScoreList = styled.h1 `
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
    color: #333; 
`;

export {
    Container,
    ScoreContainer,
    ScoreList
}