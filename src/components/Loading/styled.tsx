import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    fill: ${(props) => props.theme.colors.blue300} !important;
  }
`;
