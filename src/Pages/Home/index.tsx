import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Title } from "./styles";

const HomePage:React.FC = () => {

    const navigate = useNavigate();

    return(
        <Container>
            <Title>
                Quick Quiz!
            </Title>
            <Button onClick={()=>navigate("/game")}>
                Play
            </Button>
            <Button>
                High Score
            </Button>
        </Container>
    )
}

export default HomePage