import { IconContainer, Container, TextContainer } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  Icon: React.FunctionComponent;
  title: string;
  isSelected: boolean;
}

export default function NavRow({ Icon, title, isSelected }: Props) {
  return (
    <Link to="/">
      <Container>
        <IconContainer isSelected={isSelected}>
          <Icon />
        </IconContainer>
        <TextContainer isSelected={isSelected}>
          <p>{title}</p>
        </TextContainer>
      </Container>
    </Link>
  );
}
