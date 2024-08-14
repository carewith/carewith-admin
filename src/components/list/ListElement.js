import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    border-radius: 20px;
    margin: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 0px 4cqmax;
    box-sizing: border-box;
`

const Text = styled.div`
    width : 170px;
    height: 70px;
    line-height: 70px;
    color: #343434;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* background-color: #123123; */
`

const Button = styled.button`
    width: 80px;
    height: 40px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #5A81FA;
    color: #343434;
`

export default function ListElement(props) {

    const navigate = useNavigate()

    function onClick(e) {
        e.preventDefault()
        console.log(props.id)
        fetch(`https://api.carewith.life/api/v1/history/status/${props.id}`, {
            method:"POST",
        }).then((res) => {
            navigate("/menu")
        })
        // axios.patch("https://api.carewith.life/api/v1/history/status/" + props.id)
        
    }

    return (
        <Wrapper>
            <Text>{props.username}</Text>
            <Text>{props.drugName}</Text>
            <Text>{props.status}</Text>
            <Button onClick={onClick} >복용</Button>
        </Wrapper>
    )
}