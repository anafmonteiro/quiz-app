import React from "react";
import HeadsUpComponent from "../../Components/HeadsUp";
import OptionBoxComponent from "../../Components/OptionBox";
import { 
    Container, 
    SubTitle,
} from "./styles";

const GamePage: React.FC = () => {
    return(
        <Container>
            <HeadsUpComponent/>
            <SubTitle>Question</SubTitle>
            <OptionBoxComponent/>
        </Container>
    )
}

export default GamePage