import styled from "styled-components";


export const ProductListCardContainer = styled.section`

`
export const ProductListCardWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 16px;
    padding-bottom: 30px;
    gap: 1rem;
    @media only screen and (max-width: 680px) {
        padding: 15px 10px;
        padding-bottom: 20px;
        gap: 10px;
    }
    @media only screen and (max-width: 480px) {
        padding-bottom: 16px;
    }
`
export const ProductListLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
    .mealType{
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mealType svg{
        font-size: 10px;
        border-radius: 5px;
        padding: 3px;
        border: 1px solid #0000001f;
    }
    .nonVeg svg{
        color: red;
        border-color: red;
    }
    .veg svg{
        color: green;
        border-color: green;
    }
    h3{
        font-family: "Nunito", sans-serif;
        color: black;
        display: -webkit-box; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
    }
    p{
        font-family: "Poppins", serif;
        opacity: 0.5;
        font-size: 13px;
        text-overflow: ellipsis;
        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
    }
    @media only screen and (max-width: 680px) {
        gap: 7px;
        .mealType{
            gap: 8px;
        }
        p{
            font-size: 11px;
        }
        h3{
            font-size: 16px;
        }
    }
    @media only screen and (max-width: 480px) {
        gap: 2px;
        .mealType{
            gap: 8px;
        }
        p{
            font-size: 11px;
        }
        h3{
            font-size: 14px;
        }
        .mealType svg{
            font-size: 7px;
            padding: 2;
        }
     }
`
export const ProductListRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .productImg{
        width: 120px;
        height: 120px;
        border-radius: 10px;
        overflow: hidden;
    }
    .productImg img{
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    /* button{
        width: 80px;
        margin: 0 auto;
        background: white;
        height: 40px;
        border: none;
        border-radius: 6px;
        font-weight: 800;
        font-size: 16px;
        line-height: 24px;
        text-transform: uppercase;
        color: rgb(27, 166, 114);
        transform: translateY(-1rem);
        cursor: pointer;
    } */
     .piceTag{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top:8px;
        color: #ff5200;
        font-size: 18px;
        /* opacity: 0.6; */
     }
     .piceTag span{
        font-family: "Nunito", sans-serif;
        font-size: 18px;
        font-weight: 600;
     }
     @media only screen and (max-width: 680px) {
        .productImg{
            width: 100px;
            height: 100px;
        }
        .piceTag{
            font-size: 15px;
        }
        .piceTag span{
            font-size: 15px;
        }
     }
     @media only screen and (max-width: 480px) {
        flex-direction: column-reverse;
        gap: 0;
        .productImg{
            width: 80px;
            height: 80px;
        }
     }
`