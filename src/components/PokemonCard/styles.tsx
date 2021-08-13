import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  margin: 8px 8px 8px 8px;

  img.pokemon {
    width: 64px;
    height: 64px;
    padding: 5px;
    border: 1px solid ${(props) => props.theme.colors.grey300};
    border-radius: 14px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-left: 15px;
  h5 {
    font-size: 16px;
    color: ${(props) => props.theme.font.colors.grey700};
    font-weight: bold;
    line-height: 1.35;
  }

  p {
    font-size: 12px;
    line-height: 1.35;
    font-weight: 500;
  }
`;

export const TopText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  span {
    font-size: 12px;
    margin-top: 3px;
    margin-right: 7px;
  }
`;

export const CPContainer = styled.div<{ maxCP: number }>`
  width: 54px;
  height: 19px;
  margin-top: 7px;
  background-color: ${(props) => {
    if (props.maxCP < 500) {
      return props.theme.colors.red300;
    } else if (props.maxCP < 1000) {
      return props.theme.colors.purple400;
    } else if (props.maxCP < 1500) {
      return props.theme.colors.yellow500;
    } else {
      return props.theme.colors.blue200;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  span {
    color: ${(props) => props.theme.font.colors.white};
    font-weight: bold;
  }
`;
