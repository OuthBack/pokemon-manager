import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  padding: 40px;
  transition: ease-in-out 0.5s;
  background-color: ${(props) => props.theme.colors.grey100};
  border-radius: 50px 50px 0px 0px;

  h1.title {
    margin-top: 20px;
    line-height: 1.55;
    font-size: clamp(23px, 2.2vw, 35px);
  }
  h5.subtitle {
    line-height: 1.2;
    font-size: 14px;
    color: ${(props) => props.theme.font.colors.blue400};
  }

  @media screen and (min-width: 1080px) {
    height: auto;
    margin-top: 50px;
    width: 596px;
    flex: 1 1 0;
  }

  @media screen and (min-width: 1080px) {
    h1.title {
      font-size: 35px;
    }
  }
`;

export const List = styled.section`
  margin-top: 31px;
  display: grid;
  grid-gap: 15px;
  width: 100%;
  max-height: calc(100vh - 257px);
  overflow: auto;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1080px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const PokemonCardSkeleton = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.colors.grey600}32;
  border-radius: 20px;
`;
