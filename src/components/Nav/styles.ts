import styled from "styled-components";

export const Container = styled.nav<{ isShowing?: boolean }>`
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  z-index: 2;
  left: -200%;
  transition: ease-in-out 0.5s;
  width: 100%;

  &.active {
    left: 0;
  }

  svg.x-icon {
    position: absolute;
    top: 20px;
    right: 15px;
    color: ${(props) => props.theme.colors.blue300};
  }

  footer {
    @media screen and (min-height: 630px) {
      position: fixed;
      bottom: 37px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 78px 20px 0 20px;
    padding: 0;
  }

  @media screen and (min-width: 1080px) {
    display: block;
    position: static;
    width: auto;
    padding: 117px 30px 0 30px;

    svg.x-icon {
      display: none;
    }
  }
`;

export const Rows = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 11px;
  margin-top: 44px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    grid-gap: 33px;
  }

  @media screen and (min-width: 1080px) {
    margin-left: 7px;
  }
`;
