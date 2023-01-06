import React, { useEffect, useState } from "react";
import { getQuestions } from "../../Api";
import HeadsUpComponent from "../../Components/HeadsUp";
import OptionBoxComponent from "../../Components/OptionBox";
import { 
    Container, 
    QuestionContainer,
    SubTitle,
} from "./styles";

const GamePage: React.FC = () => {
    const [question, setQuestions] = useState<{question:string, correct_answer:string, answers:string[]}>({question: "", correct_answer: "", answers:[""]})

    const getAllQuestions = async () => {
        const response:any = await getQuestions()
        response.map((question: any) => (
            setQuestions({
                question: question.question, 
                correct_answer: question.correct_answer, 
                answers: [...question.incorrect_answers, question.correct_answer]
            })
        ))
    }

    useEffect(()=>{
        getAllQuestions()
    },[])

    return(
        <Container>
            <HeadsUpComponent/>
            <QuestionContainer>
                <SubTitle>{question.question}</SubTitle>
                {question.answers.map((answer, index) => (
                    <OptionBoxComponent
                        onClick={getAllQuestions}
                        key={index}
                        prefix={++index}
                        answer={answer}
                        correctAnswer={question.correct_answer}
                    />
                ))}
            </QuestionContainer>
        </Container>
    )
}

export default GamePage