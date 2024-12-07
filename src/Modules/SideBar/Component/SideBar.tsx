import { useState } from "react"
import { SideContainer, SideUnOrderedList, SideWrapper, SideList } from "./style"
import { navlist } from "../data/navlist";
import { SidebarProps } from "./type";

const SideBar = (props: SidebarProps) => {

      const { showSidebar } = props;
    

    return (
        <>
            <SideContainer showSidebar={showSidebar}>
                <SideWrapper>
                    <SideUnOrderedList >
                        {navlist.map((item, index) => {
                            return (
                            <SideList key={index}>
                                {item.icon} {item.tittle}
                            </SideList>)
                        })
                        }
                    </SideUnOrderedList>
                </SideWrapper>
            </SideContainer>
        </>
    )
}

export default SideBar