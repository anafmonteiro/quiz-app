import React from "react";
import { Container } from "./styles";

interface ButtonComponentProps {
    buttonText:string
    onClick?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props:ButtonComponentProps) => {
    const {buttonText, onClick} = props
    return (
        <Container onClick={onClick}>
            {buttonText}
        </Container>
    )
}

export default ButtonComponent