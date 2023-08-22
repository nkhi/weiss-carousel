import { useEffect, useState } from "react";

// Styled Components
import {
  Main,
  LandingContent,
  MainText,
  SubHeading,
  MainHeading,
  DetailText,
  CTAButton,
  ImageContainer,
  PaginationControls,
  BackgroundElement,
  PaginationTile,
  DotOrLineStyled,
  CenteredDiv,
  ButtonText,
} from "./App.styles.js";

// Utility classes for carousel
import "./image.css";

// Icons
import { CaretRight, PauseIcon, PlayIcon } from "./icons/icons.js";

// Landing page assets
import img1 from "./assets/img1.svg";
import img2 from "./assets/img2.svg";
import img3 from "./assets/img3.svg";

const Ring = () => (
  <BackgroundElement>
    <svg
      width="164"
      height="164"
      viewBox="0 0 164 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M82 -61C36.7 -61 0 -24.3 0 21C0 66.3 36.7 103 82 103C127.3 103 164 66.3 164 21C164.1 -24.3 127.3 -61 82 -61ZM82 71.2C54.3 71.2 31.8 48.7 31.8 21C31.8 -6.7 54.3 -29.2 82 -29.2C109.7 -29.2 132.2 -6.7 132.2 21C132.2 48.8 109.8 71.2 82 71.2Z"
        fill="#FF9900"
      />
    </svg>
  </BackgroundElement>
);

const DotOrLine = ({ isALine }) => {
  return <DotOrLineStyled isALine={isALine} />;
};

const Tile = ({ activeImage, onClick, label, classes }) => {
  return (
    <PaginationTile
      activeImage={activeImage}
      className={classes}
      onClick={onClick}
    >
      {label}
      <DotOrLine isALine={activeImage} />
    </PaginationTile>
  );
};

// We could split this into a Homepage component that is served via a Router.
// but since we only have one page, it's not necessary.
function App() {
  // Maps that enable the onClick updating the carousel state.
  const firstClasses = {
    1: "img1-first",
    2: "img2-second",
    3: "img3-third",
  };

  const secondClasses = {
    1: "img1-third",
    2: "img2-first",
    3: "img3-second",
  };

  const thirdClasses = {
    1: "img1-second",
    2: "img2-third",
    3: "img3-first",
  };

  const numToNumInPrimaryPositionMap = {
    1: firstClasses,
    2: secondClasses,
    3: thirdClasses,
  };

  // State for primary image selection
  const [activeImage, setActiveImage] = useState(1);
  const [activeImageClasses, setActiveImageClasses] = useState(firstClasses);
  const [isPaused, setIsPaused] = useState(false);

  // Helpers for automatic progression
  // 1 -> 2 -> 3 -> 1 ad infinitum
  const nextNumber = (oldNum) => (oldNum === 3 ? 1 : oldNum + 1);
  const nextClasses = (activeImageClasses) => {
    // Set each image's position class to it's neighbors position class
    return {
      1: `img1-${activeImageClasses[3].split("-")[1]}`,
      2: `img2-${activeImageClasses[1].split("-")[1]}`,
      3: `img3-${activeImageClasses[2].split("-")[1]}`,
    };
  };

  // Helpers to map image order to path & util classes
  const numToImg = {
    1: img1,
    2: img2,
    3: img3,
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    clearInterval(); // clears active setInterval()
  };

  const handlePlay = () => {
    setIsPaused(!isPaused);
  };

  // Set a new primary image every 4s
  // and clears the active interval to
  // avoid memory leaks.
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveImage(nextNumber(activeImage));
        setActiveImageClasses(nextClasses(activeImageClasses));
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isPaused, activeImage, activeImageClasses, setActiveImageClasses]);

  return (
    <Main className="App">
      {/* Decal */}
      <Ring />

      {/* Left */}
      <LandingContent>
        <MainText>
          <SubHeading>LOREM IPSUM DOLOR</SubHeading>
          <MainHeading>
            Lorem ipsum dolor sit amet, est mollis evertitur ut
          </MainHeading>
          <DetailText>
            Lorem ipsum dolor sit amet, est mollis evertitur ut, clita utinam
            quaeque ad sed, an legere concludaturque eum. Duo omnis solet
            dissentiet te, ea sed quis erat reprehendunt, cetero consetetur
            philosophia mel in.
          </DetailText>

          <CTAButton>
            <CenteredDiv>
              <ButtonText>Learn More</ButtonText>
              <CaretRight />
            </CenteredDiv>
          </CTAButton>
        </MainText>

        {/* Right */}
        <ImageContainer>
          {[1, 2, 3].map((x) => {
            return (
              <picture>
                <source srcSet={numToImg[x]} media="(orientation: portrait)" />
                <img src={numToImg[x]} alt="" class={activeImageClasses[x]} 
                onClick={() => {
                  setActiveImage(x);
                  setActiveImageClasses(numToNumInPrimaryPositionMap[x]);
                }}/>
              </picture>
            );
          })}
        </ImageContainer>
      </LandingContent>

      <PaginationControls>
        {[1, 2, 3].map((x) => {
          return (
            <Tile
              onClick={() => {
                setActiveImage(x);
                setActiveImageClasses(numToNumInPrimaryPositionMap[x]);
              }}
              label={`0${x}`}
              activeImage={activeImage === x}
            />
          );
        })}
        {isPaused ? (
          <PlayIcon onClick={handlePlay} />
        ) : (
          <PauseIcon onClick={handlePause} />
        )}
      </PaginationControls>
    </Main>
  );
}

export default App;
