import type { NextPage, GetServerSideProps } from "next";
import { useState } from "react";
import Head from "next/head";

import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";

type HomeProps = {
  pokemons: Pokemon[];
  search_api: string;
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
  const search_api = `${protocol}://${host}/api/search`;
  const res = await fetch(search_api);
  const pokemons = (await res.json()) as Pokemon[];

  return {
    props: {
      pokemons,
      search_api,
    },
  };
};

const Home: NextPage<HomeProps> = ({ pokemons, search_api }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>(pokemons);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const onSearchTerm = async (e: React.FormEvent<HTMLInputElement>) => {
    const text: string = e.currentTarget.value.trim();

    if (searchTerm !== text) {
      setSearchTerm(text);

      const res = await fetch(`${search_api}?q=${text}`);
      setPokemonList((await res.json()) as Pokemon[]);
    }
  };

  return (
    <div className="container-fluid p-0">
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="NextJS Pokédex" />
        <link rel="icon" href="/pokeball.png" type="image/png" />
      </Head>

      {/* Page Header */}
      <Header title="Pokédex" />

      {/* Search Field */}
      <div className="my-5 container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6">
            <input
              type="search"
              autoComplete="off"
              onChange={onSearchTerm}
              value={searchTerm}
              placeholder="Search for a Pokémon"
              className="fs-4 py-2 px-md-3 rounded border border-gray-800 w-100"
            />
          </div>
        </div>
      </div>

      {/* List of Pokemon Cards */}
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
