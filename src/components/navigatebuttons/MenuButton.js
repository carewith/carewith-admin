import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Button = styled.button`
    width: 230px;
    height: 230px;
    background-color: #ffffff;
    border-radius: 20px;
    outline: none;
    border: none;
    margin: 30px;
    color: #424242;
    font-size: 20px;
    font-weight: 500;
    box-shadow: 2px 8px 36px rgba(1, 1, 1, 0.04);
`

export default function MenuButton(props) {

    const navigate = useNavigate()

    function onClick(e) {
        e.preventDefault()
        navigate(props.url)
    }

    return (
        <Button onClick={onClick}>
            {props.name}
        </Button>
    )
}