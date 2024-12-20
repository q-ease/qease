import styled from "styled-components";

export const FormContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background: #000000bd;
    backdrop-filter: blur(12px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormContent = styled.div`
    position: relative;
    position: relative;
    position: relative;
    margin: 0rem auto;
    width: 330px;
    padding: 60px;
    border-radius: 10px;
    background: #f9f7f3;
    box-shadow: 3px 3px 60px #00000070;
    @media only screen and (max-width:640px) {
        width: 80%;
        padding: 30px 20px;
    }
`

export const FormHead = styled.div`
    font-size: 21px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 35px;
    color: #595959;
    font-family: Roboto;
`
export const FormText = styled.div`
    margin: 10px 0;
    color: #595959;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    flex-wrap: wrap;

    p {
    font-size: 13px;
    font-family: "Nunito Sans", sans-serif;
    }
    span {
    color: #ea755f;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;
    font-family: "Nunito Sans", sans-serif;
    }
`

export const FormField = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    position: relative;
    border: .0625rem solid rgb(221 221 221 / 62%);
    border-radius: 10px;
    margin-top: 10px;
`

export const FormInput = styled.input`
    height: 100%;
    width: 100%;
    padding-left: 45px;
    outline: none;
    border: none;
    font-size: 13px;
    background: transparent;
    color: black;
    border-radius: 10px;
    &:focus {
    box-shadow: inset 1px 1px 2px #BABECC,
        inset -1px -1px 2px #ffffff73;
    }
`
export const FormFieldSpan = styled.span`
    position: absolute;
    line-height: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: unset;
    top: 50%;
    transform: translateY(-50%);
    left: 14px;
    color: #4e5079;
`

export const FormButton = styled.button`
    margin: 15px 0;
    width: 100%;
    font-size: 13px;
    padding: 13px 0;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    border: 1px solid #e6e7ed;
    color: white;
    box-shadow: 2px 2px 5px #BABECC, -5px -5px 10px #ffffff73;
    background-color: #ea755e;
    border-color: #ea755e;

    &:focus {
    color: #3498db;
    box-shadow: inset 2px 2px 5px #BABECC,
        inset -5px -5px 10px #ffffff73;
    }
`

export const FormClose = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
    svg {
    opacity: 0.4;
    font-size: 21px;
    }
`
export const FormLoginOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    button{
        display: grid;
        place-items: center;
        background: #f5f5f5;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(0, 0, 0, 0);
        cursor: pointer;
        transition: transform 0.5s;
        border-radius: 50%;
        border: 1px solid #f9f7f3;
        margin: 1rem 0;

        &:hover {
            box-shadow:
                inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
                inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
                -0.5px -0.5px 0px rgba(255, 255, 255, 1),
                0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
                0px 12px 10px -10px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(0, 0, 0, 0.1);
            transform: translateY(0.5em);
            svg {
            transform: scale(0.9);
            fill: #333333;
        }
        }
        svg {
            transition: transform 0.5s;
            width: 20px;
            height: 20px;
        }
    }
`