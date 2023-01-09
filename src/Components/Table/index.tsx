import React from "react";
import { sortHighScores } from "../../Utils/functions";

import { 
    Container, 
    ScoreContainer,
    ScoreList
} from "./styles";

const TableComponent: React.FC = () => {

    const highScores = sortHighScores(JSON.parse(localStorage.getItem("highScores") || ""))
    
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