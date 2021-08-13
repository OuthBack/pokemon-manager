import { Container } from "./styled";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <Container>
      <ReactLoading type={"spinningBubbles"} />
    </Container>
  );
}
