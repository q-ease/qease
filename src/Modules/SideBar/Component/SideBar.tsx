import { useState } from "react"
import { SideContainer, SideUnOrderedList, SideWrapper, SideList } from "./style"
import { navlist } from "../data/navlist";

const SideBar = () => {

    const [showPopUp, setShowPopUp] = useState(false);
    return (
        <>
            <SideContainer showPopup={showPopUp}>
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