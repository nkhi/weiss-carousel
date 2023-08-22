import { styled } from "styled-components";
import { StyledPause } from "../App.styles";

export const CaretRight = () => (
  <svg
    width="7"
    height="14"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L6 6L1 11"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const IconPadding = styled.div`
  padding-right: 2px;
  padding-top: 2px;
`;

export const PauseIcon = ({ onClick }) => (
  <StyledPause title="Pause Image Carousel" onClick={onClick}>
    <IconPadding>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="3" width="3" height="10" />
        <rect x="10" y="3" width="3" height="10" />
      </svg>
    </IconPadding>
  </StyledPause>
);

export const PlayIcon = ({ onClick }) => (
  <StyledPause title="Enable Image Carousel" onClick={onClick}>
    <IconPadding>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
      </svg>
    </IconPadding>
  </StyledPause>
);
