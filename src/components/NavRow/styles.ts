import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;

  @media screen and (min-width: 1080px) {
    width: 223px;
  }

  :hover {
    * {
      color: ${(props) => props.theme.font.colors.blue400} !important;

      svg {
        .b {
          fill: ${(props) => props.theme.font.colors.blue400} !important;
        }
      }
    }
  }
`;

export const IconContainer = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  ${(props) => {
    if (props.isSelected)
      return `
      
      padding: 11px 9px;
      background-color: ${props.theme.colors.blue400};
      box-shadow: 0px 0px 6px ${props.theme.colors.blue400};
      border-radius: 13px;

      svg{
        .a{
          fill: white;
        }
      }
    `;
  }}
`;

export const TextContainer = styled.div<{ isSelected: boolean }>`
  p {
    margin-left: 19px;
    ${(props) =>
      props.isSelected
        ? `
          color: ${props.theme.font.colors.blue400};
          font-weight: bold;
          text-shadow: 0px 0px 6px ${props.theme.font.colors.blue500};
        `
        : `color: ${props.theme.font.colors.grey600}`}
  }
`;
