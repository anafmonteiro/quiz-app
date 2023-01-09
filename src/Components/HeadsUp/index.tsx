import React from "react";
import { 
    Container, 
    Itens, 
    ProgressBar, 
    ProgressBarFull,
    ItenPrincipalText,
    ItenSecondaryText,
} from "./styles";

interface HeadsUpComponentProps {
    questions:[],
    max_questions:number
    score:number
}

const HeadsUpComponent:React.FC<HeadsUpComponentProps> = (props:HeadsUpComponentProps) => {
    
    const size = ((props.max_questions - props.questions.length))/props.max_questions
    const currentQuestion = props.max_questions - props.questions.length
    
    return(
        <Container>
            <Itens>
                <ItenSecondaryText>Question {currentQuestion}/{props.max_questions}</ItenSecondaryText>
                <ProgressBar>
                    <ProgressBarFull style={{width: `${size *100}%`}}/>
                </ProgressBar>
            </Itens>
            <Itens>
                <ItenSecondaryText>Score</ItenSecondaryText>
                <ItenPrincipalText>{props.score}</ItenPrincipalText>
            </Itens>
        </Container>
    )
}

export default HeadsUpComponent