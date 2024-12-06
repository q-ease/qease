import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { LiaCookieSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgLoadbarDoc } from "react-icons/cg";
import { HiHome } from "react-icons/hi2";
import { MdOutlineRestaurantMenu } from "react-icons/md";
// import { TbPaperBag } from "react-icons/tb";


type NavItem = {
  icon: JSX.Element; 
  tittle: string;    
};

export const navlist: NavItem[] = [
  {
    icon: <RiAccountCircleFill />,
    tittle: "Profile",
  },
  {
    icon: <HiHome />,
    tittle: "Home",
  },
  {
    icon: <MdOutlineRestaurantMenu />,
    tittle: "Menu",
  },
  {
    icon: <IoIosHelpCircleOutline />,
    tittle: "Help",
  },
  {
    icon: <LiaCookieSolid />,
    tittle: "Cookies",
  },
  {
    icon: <IoDocumentTextOutline />,
    tittle: "Terms and conditions",
  },
  {
    icon: <CgLoadbarDoc />,
    tittle: "Privacy Policy",
  },
  // {
  //   icon: <TbPaperBag />,
  //   tittle: "Order History",
  // },
];
