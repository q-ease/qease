import styled from "styled-components";

export const BannerContainer = styled.div`
    background: #f9f7f3;
    padding-bottom: 5rem;
    @media only screen and (max-width:680px) {
        padding-bottom: 2rem;
    }
`

export const BannerWrapper = styled.div`
    width: 80%;
    margin: 0rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    @media only screen and (max-width:991px) {
        width: 90%;
    }
    @media only screen and (max-width:680px) {
        flex-direction: column-reverse;
        gap: 3rem;
        padding: 1rem;
    }
`

export const CompanyDesc = styled.div`
    width: 55%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    h1 {
    font-size: 2.2rem;
    font-weight: 500;
    font-family: "EB Garamond", serif;
    color: #31344b;
    }
    p {
    font-size: 14px;
    font-family: "Nunito Sans", sans-serif;
    opacity: 0.5;
    }
    @media only screen and (max-width:680px) {
        width: 100%;
        h1 {
        font-size: 22px;
        }
        p {
        font-size: 12px;
        }
}
`

export const ExploreButton = styled.div`
    width: 100px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background: #0C4B33;
    border-radius: 30px;
    color: white;
    font-weight: 400;
    border: none;
    position: relative;
    cursor: pointer;
    transition-duration: .2s;
    padding-left: 8px;
    transition-duration: .5s;
    margin-top: 10px;
    font-size: 12px;

    &:hover {
        background-color: rgb(0, 0, 0);
        transition-duration: .5s;
        svg{
            transform: rotate(250deg);
            transition-duration: 1.5s;
        }
    }

    &:active {
        transform: scale(0.97);
        transition-duration: .2s;
    }

    svg {
        height: 25px;
        transition-duration: 1.5s;
        fill: white;
    }

    @media only screen and (max-width:680px) {
        width: 96px;
        height: 34px;
        font-size: 12px;

        svg {
        width: 20px;
    }
    }
`

export const ImageContainer = styled.div`
    border-radius: 76% 24% 70% 30% / 47% 73% 27% 53%;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
    background: #ecf0f3;
    border: 1px solid #ecf0f3;
    width: 414px;
    height: 414px;
    align-items: center;
    display: flex;
    justify-content: center;

    @media only screen and (max-width:991px) {
        width: 350px;
        height: 350px;
    }
    
    @media only screen and (max-width:680px) {
        width: 300px;
        height: 300px;
    }
`

export const ImageHolder = styled.div`
    display: block;
    border-radius: 76% 24% 70% 30% / 47% 73% 27% 53%;
    width: 91%;
    img {
    box-shadow: -20px 20px 60px #cecece,
        20px -20px 60px #ffffff;
    border-radius: 76% 24% 70% 30% / 47% 73% 27% 53%;
    width: 100%;
    object-fit: cover;
}
`