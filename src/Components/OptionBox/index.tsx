import React from "react";
import { 
    ChoiceContainer, 
    ChoicePrefix,
    ChoiceText
} from "./styles";

const OptionBoxComponent:React.FC = () => {
    return (
            <ChoiceContainer>
                <ChoicePrefix>A</ChoicePrefix>
                <ChoiceText>Texto</ChoiceText>
            </ChoiceContainer>
    )
}

export default OptionBoxComponent