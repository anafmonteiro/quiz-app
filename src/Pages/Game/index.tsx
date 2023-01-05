import React, { useEffect, useState } from "react";
import { getQuestions } from "../../Api";
import HeadsUpComponent from "../../Components/HeadsUp";
import OptionBoxComponent from "../../Components/OptionBox";
import { 
    Container, 
    SubTitle,
} from "./styles";

const GamePage: React.FC = () => {

    const [question, setQuestions] = useState<{question:string, answers:string[]}>({question: "", answers:[""]})

    const getAllQuestions = async () => {
        const response:any = await getQuestions()
        
        response.map((question: any) => {
            setQuestions({
                question: question.question, answers: [...question.incorrect_answers, question.correct_answer]})
        })
        
    }

    useEffect(()=>{
        getAllQuestions()
    },[])

    return(
        <Container>
            <HeadsUpComponent/>
                <SubTitle>{question.question}</SubTitle>
                <OptionBoxComponent
                    answers={question.answers}
                />
        </Container>
    )
}

export default GamePage