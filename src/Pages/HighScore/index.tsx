import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Components/Button";
import TableComponent from "../../Components/Table";
import { 
    Container, 
    Title 
} from "./styles";

const HighScore:React.FC = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Title>
                High Score!
            </Title>
            <TableComponent/>
            <ButtonComponent
                buttonText="Go Home!"
                onClick={()=>navigate("/")}
            />
            
    </Container>
    )
}

export default HighScore