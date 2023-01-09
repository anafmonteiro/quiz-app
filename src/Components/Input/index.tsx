import React from "react";
import { Container, Input } from "./styles";

interface InputComponentProps {
    userInformation: {
        name?:string,
        id?:string,
        placeholder:string
    }
    onChange: (name:string) => void;
}

const InputComponent: React.FC<InputComponentProps> = (props:InputComponentProps) => {
    const {userInformation} = props

    return (
        <Container>
            <Input
                name="username" 
                id="username" 
                placeholder={userInformation.placeholder}
                onChange={(e)=>props.onChange(e.target.value)}
            />
        </Container>
    )
}

export default InputComponent
