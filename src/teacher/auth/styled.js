import styled from 'styled-components'
import { Container, Form, Button } from 'react-bootstrap'

export const Bred = "#ee9b00"
export const Darkblue = "#ccc"
export const Navyblue = "#005f73"

export const BaseContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    background-color:${Darkblue};
    height:200%;
    width:100%;
    height:100vh;
`;

export const MidContainer = styled(Container)`
    border-radius: 7%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color:${Navyblue};
    color: #fff;
    width:22vw;
    height:60vh;
    padding:5em;
`;
export const FormTag = styled(Form)`
    width:100%
`;
export const FormControl = styled(Form.Control)`
    background:${Navyblue};
    border:2px solid ${Bred};
    border-radius:25px;
    color: #fff !important;
    :focus{
        outline: none;
        box-shadow:none;
        border:2px solid ${Bred};
        background:${Navyblue};
    }
`;

export const SubmitBtn = styled(Button)`
    border:none;
    background: ${Bred};
    border-radius:25px;
    :hover{
        border:none;
        background: ${Bred};
    }
`;
