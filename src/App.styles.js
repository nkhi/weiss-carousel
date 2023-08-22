import { styled } from "styled-components";
import "./fonts.css";

// For implementing media queries
// add @media {devices.laptopL} {...}
// const sizes = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   carouselMax: '1180px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px',
// };

// const devices = {
//   mobileS: `(max-width: ${sizes.mobileS})`,
//   mobileM: `(max-width: ${sizes.mobileM})`,
//   mobileL: `(max-width: ${sizes.mobileL})`,
//   tablet: `(max-width: ${sizes.tablet})`,
//   carouselMax: `(max-width: ${sizes.carouselMax})`,
//   laptop: `(max-width: ${sizes.laptop})`,
//   laptopL: `(max-width: ${sizes.laptopL})`,
//   desktop: `(max-width: ${sizes.desktop})`,
// };

export const Flexbox = styled.div`
  display: flex;
`;

export const CenteredDiv = styled(Flexbox)`
  justify-content: center;
  align-items: center;
`;

export const Main = styled(CenteredDiv)`
  height: 100vh;
  background: #ffffff;
  font-family: "TT Norms";

  display: grid;
  grid-template-columns: 1fr 1176px 1fr;
  grid-template-rows: 1fr 530px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  --dark-teal: #263640;

  --lighter-gray: #c4c4c4;
  --light-gray: #929a9f;
  --gray: #eaeaea;

  --orange: #ff9900;
  --dark-orange: #de8500;
`;

export const LandingContent = styled(CenteredDiv)`
  min-height: 530px;
  min-width: 1176px;

  grid-area: 2 / 2 / 3 / 3;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const MainText = styled(Flexbox)`
  grid-area: 1 / 1 / 2 / 2;
  text-align: left;
  flex-flow: column;
`;

export const TextConstants = styled.div`
  margin-bottom: 16px;
  max-width: 416px;
  font-family: "TT Norms", sans-serif;
`;

export const SubHeading = styled(TextConstants)`
  color: var(--light-gray);
  font-family: "Arial";
  line-height: 20px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const MainHeading = styled(TextConstants)`
  color: var(--dark-teal);
  line-height: 42px;
  font-size: 32px;
  font-weight: 700;
`;

export const DetailText = styled(TextConstants)`
  color: var(--light-gray);
  line-height: 26px;
  font-size: 16px;
  font-weight: regular;

  margin-bottom: 32px;
`;

export const CTAButton = styled.button`
  height: 48px;
  width: 161px;
  background-color: var(--orange);
  color: white;
  font-weight: 700;
  border-radius: 48px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.625s;

  &:hover {
    background-color: var(--dark-orange);
  }
`;

export const ImageContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  text-align: right;
  position: relative;
`;

export const PaginationControls = styled.div`
  grid-area: 2 / 3 / 3 / 4;
  text-align: right;
  align-items: flex-end;
  margin-right: 32px;
  display: flex;
  flex-flow: column;
`;

export const BackgroundElement = styled.div`
  position: absolute;
  top: -50px;
  left: 90px;
`;

export const FirstImage = styled.img`
  transition: transform 1s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const PaginationTile = styled.div`
  margin-bottom: 56px;
  font-weight: 700;
  border-radius: 8px;
  display: flex;
  flex-flow: row;

  display: flex;
  align-items: center;

  color: ${(props) => (props.activeImage ? "black" : "var(--light-gray)")};
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: black;
  }
`;

export const StyledPause = styled.div`
  color: var(--light-gray);
  cursor: pointer;
  transition: color 1s, background 1s;
  margin-left: 40px;
  min-width: 20px;
  max-height: 20px;
  border-radius: 4px;
  margin-top: -20px;

  &:hover {
    color: black;
    background: var(--gray);
  }
`;

export const WhiteBackground = styled.div`
  background-color: white;
`;

export const DotOrLineStyled = styled.div`
  width: 3px;
  transition: height 0.5s;
  height: ${(props) => (props.isALine ? "14px" : "3px")};
  background: ${(props) =>
    props.isALine ? "var(--orange)" : "var(--lighter-gray)"};
  border-radius: 40px;
  margin-left: 32px;
`;

export const ButtonText = styled.div`
  margin-right: 12px;
  font-weight: 800;
  font-size: 15px;
`;
