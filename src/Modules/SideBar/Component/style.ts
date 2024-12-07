import styled from "styled-components";

export const SideContainer = styled.div<{ showSidebar: boolean }>`
    width: min(100%, 400px);
    position: fixed;
    transition: transform 0.3s ease;
    z-index: 1;
    box-shadow: 6px 8px 15px -3px rgb(0 0 0 / 10%);
    top: 79px;
    bottom: 0;
    background-color: #f9f7f3;
    transform: ${(props) => (!props.showSidebar ? "translateX(-100%)" : "translateX(0)")};
    @media only screen and (max-width:560px) {
        width: 100%
    }
}
`
export const SideWrapper = styled.div`
    width: inherit;
`

export const SideUnOrderedList = styled.ul`
    padding-top: 1rem;
    width: inherit;
`

export const SideList = styled.li`
    color: #424767;
    padding: 12px 15px;
    margin: 15px 15px;
    font-size: 13px;
    cursor: pointer;
    font-weight: 400;
    transition: 300ms;
    border-bottom: .0625rem solid #efefef !important;
    display: flex;
    align-items: center;
    gap: 14px;
    svg{
        font-size: 22px;
    }
    &:hover {
        background: #e6e4e4bd;
    }
    }
        
`


