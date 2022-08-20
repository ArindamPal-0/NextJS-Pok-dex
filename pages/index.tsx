import type { NextPage, GetServerSideProps } from "next";
import { useState } from "react";
import Head from "next/head";

import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";

type HomeProps = {
  pokemons: Pokemon[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  // get the base url of the nextjs app for api request
  const { req } = context;
  const host = req.headers.host;
  const protocol = req.headers["x-forwarded-proto"] ? "https" : "http";
  // console.log(protocol, host);

  // make the api request to fetch pokemons for server side rendering
  const res = await fetch(`${protocol}://${host}/api/search`);
  const pokemons = (await res.json()) as Pokemon[];

  return {
    props: {
      pokemons,
    },
  };
};

const Home: NextPage<HomeProps> = ({ pokemons }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(pokemons);

  return (
    <div className="container-fluid p-0">
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="NextJS Pokédex" />
        <link rel="icon" href="/pokeball.png" type="image/png" />
      </Head>

      <Header title="Pokédex" />
      <div className="container my-5">
        <div className="row gy-5">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
