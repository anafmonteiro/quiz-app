import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Components/Button";
import InputComponent from "../../Components/Input";
import { Container } from "./styles";

const EndPage:React.FC = () => {

    const navigate = useNavigate();

    const [useName, setUseName] = useState<string>("")
    
    // @ts-ignore
    const highScores = JSON.parse(localStorage.getItem("highScores")) || []

    const saveUserInformations = () => {
        const score = {
            score: localStorage.getItem("score"),
            name: useName
        }
        highScores.push(score)
        localStorage.setItem("highScores", JSON.stringify(highScores))
        navigate("/")
    }

    return (
        <Container>
            <InputComponent
                userInformation = {
                    {
                        placeholder:"username"
                    }
                }
                onChange={(e)=>setUseName(e)}
            />
            <ButtonComponent
                buttonText="Save"
                onClick={saveUserInformations}
            />
            <ButtonComponent
                buttonText="Play Again!"
                onClick={()=>navigate("/game")}
            />
            <ButtonComponent
                buttonText="Go Home..."
                onClick={()=>navigate("/")}
            />
        </Container>
    )
}

export default EndPage