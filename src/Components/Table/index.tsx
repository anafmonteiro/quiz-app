import React from "react";

import { 
    Container, 
    ScoreContainer,
    ScoreList
} from "./styles";

const TableComponent: React.FC = () => {
    const highScores = JSON.parse(localStorage.getItem("highScores") || "")
    return(
        <Container>
            <ScoreContainer>
                {highScores.map((highScore:{name:string, score:string},i:number) => (
                    <ScoreList key={i}>
                        {highScore?.name} - {highScore?.score}
                    </ScoreList>
                ))}
            </ScoreContainer>
        </Container>
    )
}

export default TableComponent