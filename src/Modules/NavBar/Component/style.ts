import styled from "styled-components";

export const NavContainer = styled.section`
    width: 100%;
    padding: 1.6rem 0;
    position: sticky;
    left: 0;
    top: 0;
    z-index: 1000;
    background: #f9f7f3;
    svg{
        font-size: 18px;
    }
    .IconNav{
        cursor: pointer;
        height: 21px;
        width: 21px;
        box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #fff;
        background: #ebf0f3;
        border: 1px solid #ecf0f3;
        border-radius: .5em;
        padding: 10px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const NavWrapper = styled.section`
    width: 90%;
    margin: 0rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
export const NavLeft = styled.div`
    display: flex;
`