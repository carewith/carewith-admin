import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 400px;
    height: 200px;
    background-color: #ffffff;
    border-radius: 20px;
    line-height: 200px;
    text-align: center;
    font-weight: 500;
    font-size: 34px;
    color: #424242;
`

export default function UniqueId() {

    const [name, setName] = useState("")

    useEffect(() => {
        axios.get("https://api.carewith.life/api/v1/dispenser/id")
        .then((res) => {
            setName(res.data.data.id)
        })
    }, [])

    return (
        <Wrapper>
            {name}
        </Wrapper>
    )
}