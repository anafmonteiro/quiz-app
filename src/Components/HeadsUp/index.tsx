import React from "react";
import { 
    Container, 
    Itens, 
    ProgressBar, 
    ProgressBarFull,
    ItenPrincipalText,
    ItenSecondaryText,
} from "./styles";

const HeadsUpComponent:React.FC = () => {
    return(
        <Container>
            <Itens>
                <ItenSecondaryText>Question</ItenSecondaryText>
                <ProgressBar>
                    <ProgressBarFull/>
                </ProgressBar>
            </Itens>
            <Itens>
                <ItenSecondaryText>Score</ItenSecondaryText>
                <ItenPrincipalText>0</ItenPrincipalText>
            </Itens>
        </Container>
    )
}

export default HeadsUpComponent