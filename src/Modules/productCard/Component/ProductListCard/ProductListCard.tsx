
import { TbTriangleFilled } from 'react-icons/tb'
import { ProductListCardContainer, ProductListCardWrapper, ProductListRightContainer, ProductListLeftContainer } from './style'
import grilledChickenPasta from '../../assets/grilled_chicken_pasta.jpeg';
import { FaIndianRupeeSign } from "react-icons/fa6";
const ProductListCard = () => {
    return (
        <ProductListCardContainer>
            <ProductListCardWrapper>
                <ProductListLeftContainer>
                    <div className="mealType nonVeg">
                        <TbTriangleFilled />
                    </div>
                    <h3>grilled chicken pasta</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, voluptatibus exercitationem quos laudantium repellat dolores error nostrum laborum?</p>
                </ProductListLeftContainer>
                <ProductListRightContainer>
                    <div className='piceTag'><FaIndianRupeeSign /> <span>120</span></div>
                    <div className="productImg">
                        <img src={grilledChickenPasta} alt="" />
                    </div>
                    {/* <button>Add</button> */}
                </ProductListRightContainer>
            </ProductListCardWrapper>
        </ProductListCardContainer>
    )
}

export default ProductListCard
