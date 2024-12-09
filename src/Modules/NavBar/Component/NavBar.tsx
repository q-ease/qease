import { NavContainer, NavWrapper, NavRight, NavLeft } from "./style"
import { FaShoppingCart } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { NavProps } from "./type";
import Form from "../../Form/Component/Form";



const NavBar = (props: NavProps) => {
    const {setShowSidebar} = props;

    const handleMenuClick = ()=>{
        setShowSidebar(prev=> !prev);
    }

    return (
        <>
            <NavContainer>
                <NavWrapper>
                    <NavLeft>
                        <div className="IconNav" onClick={handleMenuClick}>
                            <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                    </NavLeft>
                    <NavRight>
                        <div className="IconNav">
                            <FaRegBell />
                        </div>
                        <div className="IconNav">
                            <FaShoppingCart />
                        </div>
                    </NavRight>
                    <Form formType={"login"}/>
                </NavWrapper>
            </NavContainer>
        </>
    )
}

export default NavBar
