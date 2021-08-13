import styled from "styled-components";
import Ticked from "../../assets/icons/ticked.svg";

export const Container = styled.div`
  span {
    font-size: 14px;
    color: ${(props) => props.theme.font.colors.grey600};
  }
`;

export const TypesList = styled.div`
  margin-top: 9px;
  display: grid;
  grid-column-gap: 21px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Type = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    border: 3px solid ${(props) => props.theme.colors.grey300};
    border-radius: 6px;
    padding: 8px;
    -webkit-appearance: none;
    transition: ease-in-out 0.1s;
    cursor: pointer;

    &:checked {
      background-image: url(${Ticked});
      background-repeat: no-repeat;
      background-size: contain;
      background-color: ${(props) => props.theme.colors.white};
      background-position-y: center;
      border: 3px solid ${(props) => props.theme.colors.blue400};
      box-shadow: ${(props) => props.theme.colors.blue400} 0px 0px 6px;

      ~ label {
        color: ${(props) => props.theme.colors.blue400};
        text-shadow: #00a9fd32 0px 0px 6px;
      }
    }
  }
  label {
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.35;
    color: ${(props) => props.theme.font.colors.grey700};
    margin-left: 15px;
    transition: ease-in-out 0.1s;

    :hover {
      color: ${(props) => props.theme.colors.blue400};
      text-shadow: #00a9fd32 0px 0px 6px;
    }
  }
`;
