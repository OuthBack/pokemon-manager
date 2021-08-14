import AppProvider from "./contexts";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globals";
import { Pokemon } from "./contexts/pokemon";

interface Props {
  pokemon: Pokemon[];
}

function App({ pokemon }: Props) {
  return (
    <AppProvider pokemon={pokemon}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
