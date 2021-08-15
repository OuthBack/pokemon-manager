import styled from "styled-components";

interface GetColorProps {
  cp: number;
  color: { red: string; purple: string; yellow: string; blue: string };
}

const getColor = ({ cp, color }: GetColorProps) => {
  if (cp < 500) {
    return color.red;
  } else if (cp < 1000) {
    return color.purple;
  } else if (cp < 1500) {
    return color.yellow;
  } else {
    return color.blue;
  }
};

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
    font-size: 13px;
    color: ${(props) => props.theme.font.colors.grey700};
    font-weight: bold;
    line-height: 1.35;
  }

  p {
    font-size: 12px;
    line-height: 1.35;
    font-weight: 500;
  }

  @media screen and (min-width: 1366px) {
    h5 {
      font-size: 16px;
    }
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
  background-color: ${(props) =>
    getColor({
      cp: props.maxCP,
      color: {
        red: props.theme.colors.red300,
        purple: props.theme.colors.purple400,
        yellow: props.theme.colors.yellow500,
        blue: props.theme.colors.blue200,
      },
    })};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  span {
    color: ${(props) => props.theme.font.colors.white};
    font-weight: bold;
  }
`;
