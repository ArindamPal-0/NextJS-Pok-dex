import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";

const Home: NextPage = () => {
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
      </Container>
    </div>
  );
};

export default Home;
