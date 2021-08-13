import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  height: 40px;
  background-color: ${(props) => props.theme.colors.blue400};
  border-radius: 2px;
  z-index: 1;

  @media screen and (min-width: 1080px) {
    display: none;
  }

  svg {
    fill: ${(props) => props.theme.colors.white};
    .a {
      fill: ${(props) => props.theme.colors.white};
    }

    &.hamburguer {
      padding: 3px;
      margin-left: 7px;
    }

    &.filter {
      margin-right: 7px;
    }
  }
`;
