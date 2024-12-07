import styled from "styled-components";

export const FilterContainer = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    margin: 2rem 0;
`

export const FilterWrapper = styled.section`
    width: 90%;
    margin: 0rem auto;
`

export const FirstFilterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    flex-wrap: wrap;

    @media only screen and (max-width: 680px) {
        gap: 1.2rem;
    }
`
export const SecondFilterWrapper = styled.div`
margin: 1.4rem 0;
display: flex;
align-items: center;
gap: 3rem;
overflow-x: scroll;
padding: 20px;
.menuFilter{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 50%;
}
  .menuIcon{
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menuIcon img{
    width: 100%;
    object-fit: cover;
    object-position: center;
    background: #f9f7f3;
    border-radius: 50%;
    padding: 3px 5px;
    /* box-shadow: 10px 5px 10px #00000012; */
  } 
  p{
    font-size: 12px;
    font-family: "Poppins", serif;
    width: max-content;
    color: #31344bb0;
  }
  @media only screen and (max-width: 480px) {
    gap: 2rem;
    margin: 1rem 0;
  }
`

export const FilterTop = styled.section`

display: flex;
align-items: center;
justify-content: center;
gap: 1rem;

.iconFilter{
    padding: 8px;
    border-radius: 50%;
    background-color: #FF9900;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.iconFilter svg{
    color: #fff;
}
.inputBox_container {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 16rem;
  height: fit-content;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid #0000001f;
}

.search_icon {
  height: 20px;
  padding: 0 0.5em 0 0.8em;
  fill: #abb2bf;
}

.inputBox {
    background-color: transparent;
    color: #000;
    outline: none;
    width: 100%;
    border: 0;
    padding: 0.5em 1.5em 0.5em 0;
    font-size: 15px;
    /* font-family: "Roboto", serif; */
    text-transform: lowercase;
    font-weight: 300;
    opacity: 0.5;
}

::placeholder {
  color: #000;
  opacity: 0.7;
}

@media only screen and (max-width: 480px) {
    .inputBox {
        font-size: 14px;
    }
}

`

export const FilterBottom = styled.section`

`

export const FilterMealType = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .mealType{
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 13px;
        border-radius: 10px;
        border: 1px solid #0000001f;
        cursor: pointer; 
    }
    .mealType svg{
        font-size: 10px;
        border-radius: 5px;
        padding: 3px;
        border: 1px solid #0000001f;
    }
    span{
        font-size: 14px;
        font-family: "Nunito", sans-serif;
    }
    
    .nonVeg svg{
        color: red;
        border-color: red;
    }
    .veg svg{
        color: green;
        border-color: green;
    }
    .tags svg{
        color: #aa4203;
        border-color: #aa4203;
    }
    @media only screen and (max-width: 680px) {
        gap: 1.2rem;
    }
    @media only screen and (max-width: 480px) {
        gap: 1rem;
        span{
            font-size: 12px;
            font-family: "Nunito", sans-serif;
        }
        .mealType svg{
            font-size: 8px;
        }
    }
`
export const FilterMealBased = styled.section`
`
