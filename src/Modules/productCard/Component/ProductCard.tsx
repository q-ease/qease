import { ProductCardContainer, ProductCardWrapper } from './style'
import ProductListCard from './ProductListCard/ProductListCard'
const ProductCard = () => {
    return (
        <ProductCardContainer>
            <ProductCardWrapper>
                <div className="cardHolder">
                    <div className="menuHeader">
                        <h2>Main Course</h2>
                    </div>
                    <div className="productListHolder">
                        <ProductListCard />
                        <div className="seprator"></div>
                        <ProductListCard />
                        <div className="seprator"></div>
                        <ProductListCard />
                    </div>
                </div>
                <div className="cardHolder">
                    <div className="menuHeader">
                        <h2>Fast food</h2>
                    </div>
                    <div className="productListHolder">
                        <ProductListCard />
                        <div className="seprator"></div>
                        <ProductListCard />
                        <div className="seprator"></div>
                        <ProductListCard />
                    </div>
                </div>
            </ProductCardWrapper>
        </ProductCardContainer>
    )
}

export default ProductCard
