import { ApolloProvider } from "@apollo/client";
import { client } from "../config";
import { PokemonProvider } from "./pokemon";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/default";

const AppProvider: React.FC = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </PokemonProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
