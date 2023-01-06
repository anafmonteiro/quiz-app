import React, { useState } from "react";
import { 
    ChoiceContainer, 
    ChoicePrefix,
    ChoiceText
} from "./styles";

interface OptionBoxComponentProps {
    answer:string
    prefix:number
    correctAnswer: string 
    onClick: () => void;
}

const OptionBoxComponent:React.FC<OptionBoxComponentProps> = (props:OptionBoxComponentProps) => {
    
    const { answer, prefix, correctAnswer} = props

    const [answerStyle, setAnswerStyle] = useState<string>("")

    const verifyAnswer = (user_answer:string) => {
        if(user_answer === correctAnswer) setAnswerStyle("correct")
        else setAnswerStyle("incorrect")
        setTimeout(()=>{
            props.onClick()
            setAnswerStyle("")
        }, 1000)
    }

    return (
        <ChoiceContainer onClick={()=>verifyAnswer(answer)}>
            <ChoicePrefix>{prefix}</ChoicePrefix>
            <ChoiceText color={answerStyle}>{answer}</ChoiceText>
        </ChoiceContainer>
    )
}

export default OptionBoxComponent