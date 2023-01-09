import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../../Api";
import HeadsUpComponent from "../../Components/HeadsUp";
import LoaderComponent from "../../Components/Loader";
import OptionBoxComponent from "../../Components/OptionBox";
import { 
    Container, 
    QuestionContainer,
    SubTitle,
} from "./styles";

const GamePage: React.FC = () => {

    const navigate = useNavigate();

    const [question, setQuestions] = useState<{question:string, correct_answer:string, answers:string[], score:number}>({question: "", correct_answer: "", answers:[""], score:0})
    
    const [allquestions, setAllQuestions] = useState<any>([])

    const [maxQuestions, setMaxQuestions] = useState<number>(0)

    const [loader, setLoader] = useState<boolean>(false)

    const getAllQuestions = async () => {
        setLoader(true)
        try{
            localStorage.setItem("score", JSON.stringify(0))
            const response:any = await getQuestions()
            setAllQuestions(response) 
            setMaxQuestions(response.length)
            response.map((question: any) => (
                setQuestions({
                    question: question.question, 
                    correct_answer: question.correct_answer, 
                    answers: [...question.incorrect_answers, question.correct_answer],
                    score:0
                })
            ))
        }catch(e){
            console.log(e)
        }
        setLoader(false)
    }

    const getTheRestOfQuestions = async (answerScore:number) => {
        const response:any = allquestions.filter((questions: { question: any; }) => questions.question !== question.question)
        if(response.length > 0) {
            setAllQuestions(response)
            response.map((question: any) => (
                setQuestions({
                    question: question.question, 
                    correct_answer: question.correct_answer, 
                    answers: [...question.incorrect_answers, question.correct_answer],
                    score: answerScore
                })
            ))
        }else{
            navigate("/end")
        }
        
    }

    useEffect(()=>{
        getAllQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <Container>
            <HeadsUpComponent 
                questions={allquestions} 
                max_questions={maxQuestions} 
                score={question.score}
            />
            <QuestionContainer>
                {loader? 
                    <LoaderComponent/>
                    :
                    <>
                        <SubTitle>{question.question}</SubTitle>
                        {question.answers.map((answer, index) => (
                            <OptionBoxComponent
                                onClick={getTheRestOfQuestions}
                                key={index}
                                prefix={++index}
                                answer={answer}
                                correctAnswer={question.correct_answer}
                                score={question.score}
                            />
                        ))}
                    </>
                }
            </QuestionContainer>
        </Container>
    )
}

export default GamePage