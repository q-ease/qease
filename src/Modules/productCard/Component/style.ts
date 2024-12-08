import styled from "styled-components";


export const ProductCardContainer = styled.section`

`
export const ProductCardWrapper = styled.section`
    width: 80%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .menuHeader{
        display: flex;
        align-items: center;
        gap: 5px;
        justify-content: flex-start;
    }
    .menuHeader h2{
        color: #00021ead;
        gap: 5px;
        text-transform: UPPERCASE;
        font-size: 14px;
    }
    .menuHeader::after{
        content: "";
        width: 3px;
        height: 13px;
        display: block;
        background: #ff5200;
    }
    .productListHolder{
        background: #f8f6f2;
        margin: 1rem 0;
        border-radius: 10px;
    }
    .seprator{
        height:2px;
        background-color:#00000014;
        margin: 0 1rem;
    }
    @media only screen and (max-width: 991px) {
        width: 90%;
    }
    @media only screen and (max-width: 680px) {
        .seprator{
            height:1px;
        }
    }
`