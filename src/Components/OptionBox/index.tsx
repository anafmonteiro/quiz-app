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
    score:number
    onClick: (answerScore:number) => void;
}

const OptionBoxComponent:React.FC<OptionBoxComponentProps> = (props:OptionBoxComponentProps) => {
    
    const { answer, prefix, correctAnswer} = props

    const [answerStyle, setAnswerStyle] = useState<string>("")

    const verifyAnswer = (user_answer:string) => {
        
        if(user_answer === correctAnswer) {
            let lastScore = JSON.parse(localStorage.getItem("score") || "")
            setAnswerStyle("correct")
            localStorage.setItem("score", JSON.stringify(lastScore+=10))
        }else {
            setAnswerStyle("incorrect")
        }
        userScore()
    }

    const userScore = () => {
        const score = JSON.parse(localStorage.getItem("score")||"")
        setTimeout(()=>{
            props.onClick(score)
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