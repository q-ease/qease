import { FilterContainer, FilterWrapper, FilterTop, FilterBottom, FilterMealType, FilterMealBased, FirstFilterWrapper, SecondFilterWrapper } from "./style"
import { LuSettings2 } from "react-icons/lu";
import { TbTriangleFilled } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import filters from "../../../../config";
const Filters = () => {
    return (
        <FilterContainer>
            <FilterWrapper>
                <FirstFilterWrapper>
                    <FilterTop>
                        <div className="inputBox_container">
                            <svg
                                className="search_icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                aria-label="search icon"
                                role="img"
                            >
                                <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
                            </svg>
                            <input
                                className="inputBox"
                                id="inputBox"
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                        <div className="iconFilter">
                            <LuSettings2 />
                        </div>
                    </FilterTop>
                    <FilterBottom>
                        <FilterMealType>
                            <div className="mealType nonVeg">
                                <TbTriangleFilled /><span>non-veg</span>
                            </div>
                            <div className="mealType veg">
                                <FaCircle /> <span>veg</span>
                            </div>
                            <div className="mealType tags">
                                <FaFire /><span>BestSeller</span>
                            </div>
                        </FilterMealType>
                        <FilterMealBased>

                        </FilterMealBased>
                    </FilterBottom>
                </FirstFilterWrapper>
                <SecondFilterWrapper>
                    {filters.map((val, ind) => (
                        <div className="menuFilter" key={ind}>
                            <div className="menuIcon">
                                <img src={val.imageIcon} alt={val.title} />
                            </div>
                            <p>{val.title}</p>
                        </div>
                    ))}
                </SecondFilterWrapper>
            </FilterWrapper>
        </FilterContainer>
    )
}

export default Filters
