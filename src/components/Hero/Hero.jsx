import styled from "@emotion/styled";
import bg_image from "../../assets/GTHBackground.png";
import Search from "../Search/Search";

const HeroContainer = styled.div`
  background-image: url(${bg_image});
  background-repeat: no-repeat, no-repeat;
  background-position-x: center;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding-top: 60px;
  /* z-index: -1; */
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.div`
  color: var(--dark-gray, #373737);
  text-align: center;

  font-size: 64px;
  font-style: normal;
  font-weight: 300;
  line-height: 88px;
  letter-spacing: -0.5px;
`;

const HeroSlogan = styled.div`
  color: var(--gray, #616161);
  text-align: center;

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Meet your new Home</HeroTitle>
        <HeroSlogan>The easiest way to find where you belong</HeroSlogan>
        <Search />
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
