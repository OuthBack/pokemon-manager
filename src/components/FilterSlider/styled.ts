import styled from "styled-components";

export const Container = styled.div`
  span {
    font-size: 14px;
  }
`;

export const MultiRangeContainer = styled.div<{ desktopWidth: number }>`
  margin-top: 12px;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .slider {
    position: relative;
    width: calc(100% - 20px);
  }

  .slider__track,
  .slider__range,
  .slider__left-value,
  .slider__right-value {
    position: absolute;
  }

  .slider__track,
  .slider__range {
    border-radius: 3px;
    height: 10px;
  }

  .slider__track {
    background-color: ${(props) => props.theme.colors.grey300};
    width: 100%;
    z-index: 1;
  }

  .slider__range {
    background-color: ${(props) => props.theme.colors.green200};
    z-index: 2;
  }

  .slider__left-value,
  .slider__right-value {
    position: absolute;
    z-index: 999999999;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.font.colors.grey700};
    font-weight: bold;
    font-size: 22px;
    margin-top: 30px;
    width: 77px;
    height: 34px;
    border: 1px solid ${(props) => props.theme.colors.grey300};
    border-radius: 10px;
  }

  .slider__left-value {
    left: 6px;
  }

  .slider__right-value {
    right: -4px;
  }

  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: calc(100% - 20px);
    outline: none;
  }

  .thumb--left {
    z-index: 3;
  }

  .thumb--right {
    z-index: 4;
  }

  .thumb::-webkit-slider-thumb {
    background-color: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: 50%;
    box-shadow: 0px 0px 6px #00000029;
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 10px;
    pointer-events: all;
    position: relative;
  }
`;

export const FilterSliderSkeleton = styled.div`
  border-radius: 3px;
  width: 100%;
  height: 10px;
  background-color: ${(props) => props.theme.colors.grey600}32;
`;

export const FilterValuesSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterValuesSkeletonBox = styled.div`
  margin-top: 30px;
  width: 77px;
  height: 34px;
  background-color: ${(props) => props.theme.colors.grey600}32;
  border-radius: 10px;
`;
