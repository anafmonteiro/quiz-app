import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Components/Button";
import InputComponent from "../../Components/Input";
import { Container } from "./styles";

const EndPage:React.FC = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <InputComponent
                userInformation = {
                    {
                        placeholder:"username"
                    }
                }
            />
            <ButtonComponent
                buttonText="Save"
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