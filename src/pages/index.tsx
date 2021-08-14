import React, { Suspense, useState } from "react";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import PokemonList from "../components/PokemonList";
import { usePokemon } from "../contexts/pokemon";

const HomePage = React.lazy(() => import("../components/HomePage/styles"));

export interface MobileProps {
  isShowing: boolean;
  setShowItem?: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home() {
  const [showItem, setShowItem] = useState(2);
  const { loading } = usePokemon();

  return (
    <>
      <MobileHeader showItem={showItem} setShowItem={setShowItem} />

      <Suspense fallback={<Loading />}>
        <HomePage>
          <Nav
            isShowing={showItem === 1 ? true : false}
            setShowItem={setShowItem}
          />

          <PokemonList loading={loading} />

          <Filter
            isShowing={showItem === 3 ? true : false}
            setShowItem={setShowItem}
          />
        </HomePage>
      </Suspense>
    </>
  );
}
