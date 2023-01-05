import React from "react";
import { Button, Container, Title } from "./styles";

const HomePage:React.FC = () => {
    return(
        <Container>
            <Title>
                Quick Quiz!
            </Title>
            <Button>
                Play
            </Button>
            <Button>
                High Score
            </Button>
        </Container>
    )
}

export default HomePage