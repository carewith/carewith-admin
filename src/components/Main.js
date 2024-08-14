import styled from "styled-components"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

const Wrapper = styled.div`
    width : 100vw;
    height : 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F4F5F9;
`

const Card = styled.div`
    width : 85vw;
    height : 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BackButton = styled.button`
    position: fixed;
    top: 15px;
    left: 15px;
    height: 30px;
    color: gray;
    text-align: left;
    outline: none;
    border: none;
    font-size: 30px;
    font-weight: 500;
    background-color: #F4F5F9; 
`

export default function Main() {
    const navigate = useNavigate()

    const backButtonText = "<"

    function handlebackButton() {
        navigate(-1)
    }

    return (
        <Wrapper>
            <BackButton onClick={handlebackButton}>{backButtonText}</BackButton>
            <Card>
                <Outlet /> 
            </Card>
        </Wrapper>
    )
}