import Banner from './Banner/Component/Banner';
import Filters from './Filter/Filters';
import { HomeContainer, HomeWrapper } from './style';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <Banner />
          <Filters />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};
