import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";

type HomeProps = {
  pokemons: Pokemon[];
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const { req } = context;
  const host = req.headers.host;
  const protocol = req.headers["x-forwarded-proto"] ? "https" : "http";
  console.log(protocol, host);
  const res = await fetch(`${protocol}://${host}/api/search`);
  const pokemons = (await res.json()) as Pokemon[];

  return {
    props: {
      pokemons,
    },
  };
};

const Home: NextPage<HomeProps> = ({ pokemons }) => {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="NextJS Pokédex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className="pokemonfont">Pokédex</h1>
        <Image
          src="https://arindampal-0.github.io/pokemon-api/images/pikachu.jpg"
          alt="Pikachu"
          width={200}
          height={200}
        />
        <div>{JSON.stringify(pokemons)}</div>
      </Container>
    </div>
  );
};

export default Home;
