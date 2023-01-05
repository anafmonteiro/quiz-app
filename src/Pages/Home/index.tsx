import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Components/Button";
import { Container, Title } from "./styles";

const HomePage:React.FC = () => {

    const navigate = useNavigate();

    return(
        <Container>
            <Title>
                Quick Quiz!
            </Title>
            <ButtonComponent
                buttonText="Play"
                onClick={()=>navigate("/game")}
            />
            <ButtonComponent
                buttonText="High Score"
            />
                
        </Container>
    )
}

export default HomePage