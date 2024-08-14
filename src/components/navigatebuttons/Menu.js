import styled from "styled-components"
import MenuButton from "./MenuButton"

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 8px 36px rgba(1, 1, 1, 0.04);
`

export default function Menu() {
    return (
        <Wrapper>
            <MenuButton name="QR CODE" url="/qr" />
            <MenuButton name="UNIQUE ID" url="/unique" />
            <MenuButton name="LIST" url="/list" />
        </Wrapper>
    )
}