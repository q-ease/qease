import Banner from './Banner/Component/Banner';
import { HomeContainer, HomeWrapper } from './style';
export default function Home() {
  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <Banner />
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};
