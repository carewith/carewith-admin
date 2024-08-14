import styled from "styled-components"
import ListElement from "./ListElement"
import { useEffect, useState } from "react"
import axios from "axios"

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

export default function List() {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get("https://api.carewith.life/api/v1/history/incomplete")
        .then((res) => {
            console.log(res.data.data.histories)
            setList(res.data.data.histories)
        })
    }, [])

    return (
        <Wrapper>
            {
                list.map((it) =>  {
                    return (
                        <ListElement drugName={it.drugName} username={it.username} status={it.dosingStatus} id={it.id} />
                    ) 
                })
            }
        </Wrapper>
    )
}