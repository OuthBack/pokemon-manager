import AppProvider from "./contexts";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globals";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
