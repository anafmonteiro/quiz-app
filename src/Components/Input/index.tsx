import React from "react";
import { Container, Input } from "./styles";

interface InputComponentProps {
    userInformation: {
        name?:string,
        id?:string,
        placeholder:string
    }
}

const InputComponent: React.FC<InputComponentProps> = (props:InputComponentProps) => {
    const {userInformation} = props

    return (
        <Container>
            <Input
                name="username" 
                id="username" 
                placeholder={userInformation.placeholder}
            />
        </Container>
    )
}

export default InputComponent
