import Banner from './Banner/Component/Banner';
import Filters from './Filter/Filters';
import { HomeContainer, HomeWrapper } from './style';
import ProductCard from '../../productCard/Component/ProductCard';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <Banner />
          <Filters />
          <ProductCard />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};
