import React from "react";
import { 
    ChoiceContainer, 
    ChoicePrefix,
    ChoiceText
} from "./styles";

interface OptionBoxComponentProps {
    answers:string[]
}

const OptionBoxComponent:React.FC<OptionBoxComponentProps> = (props:OptionBoxComponentProps) => {
    const { answers } = props
    return (
        <>
            { answers.map((answer,i)=>(
                <ChoiceContainer>
                    <ChoicePrefix key={i}>{++i}</ChoicePrefix>
                    <ChoiceText key={i}>{answer}</ChoiceText>
                </ChoiceContainer>
            ))}
        </>
    )
}

export default OptionBoxComponent