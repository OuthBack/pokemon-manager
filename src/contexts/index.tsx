import { ApolloProvider } from "@apollo/client";
import { client } from "../config";
import { PokemonProvider, PokemonProviderProps } from "./pokemon";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/default";

const AppProvider = ({ children, pokemon }: PokemonProviderProps) => {
  return (
    <ApolloProvider client={client}>
      <PokemonProvider pokemon={pokemon}>
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </PokemonProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
