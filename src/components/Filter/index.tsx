import { MobileProps } from "../../pages";
import FilterSlider from "../FilterSlider";
import FilterTypes from "../FilterTypes";
import {
  Container,
  FilterSliderContainer,
  InnerContainer,
  TypesContainerFilter,
} from "./styles";
import { ReactComponent as XIcon } from "../../assets/icons/x-icon.svg";
import { memo } from "react";

const Filter = ({ isShowing, setShowItem }: MobileProps) => {
  return (
    <Container className={isShowing ? "active" : ""}>
      {setShowItem && (
        <XIcon
          className="x-icon"
          onClick={() => setShowItem(2)}
          width={28}
          height={26}
        />
      )}
      <InnerContainer>
        <h1 className="title">Filtro</h1>
        <FilterSliderContainer>
          <FilterSlider />
        </FilterSliderContainer>
        <TypesContainerFilter>
          <FilterTypes />
        </TypesContainerFilter>
      </InnerContainer>
    </Container>
  );
};

export default memo(Filter);
