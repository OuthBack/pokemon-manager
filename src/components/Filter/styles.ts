import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey100};
  transition: ease-in-out 0.5s;
  position: absolute;
  z-index: 2;
  right: -200%;
  height: 100%;
  bottom: 0;

  &.active {
    background-color: ${(props) => props.theme.colors.white};
    right: 0;
  }

  svg.x-icon {
    position: absolute;
    top: 20px;
    left: 15px;
    color: ${(props) => props.theme.colors.blue300};
  }

  @media screen and (min-width: 1080px) {
    border-radius: 50px 0px 0px 50px;
    position: static;
    background-color: ${(props) => props.theme.colors.grey100} !important;
    margin-top: 100px;
    margin-left: 28px;
    width: 429px;
    height: fit-content;

    svg.x-icon {
      display: none;
    }
  }

  @media screen and (min-width: 1366px) {
    height: 556px;
    margin-top: 141px;
    margin-left: 58px;
  }
`;

export const InnerContainer = styled.div`
  padding: 20px;
  margin-top: 40px;

  h1.title {
    line-height: 1.55;
    font-size: clamp(23px, 2.2vw, 35px);
  }

  @media screen and (min-width: 1080px) {
    padding: 40px;
    margin-top: 0px;
  }

  @media screen and (min-width: 1368px) {
    h1.title {
      font-size: 35px;
    }
  }
`;

export const FilterSliderContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 45px;
`;

export const TypesContainerFilter = styled.div`
  margin-top: 77px;
`;
