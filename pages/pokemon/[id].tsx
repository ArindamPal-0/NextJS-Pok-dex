import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import PokemonDetailComp from "../../components/PokemonDetail";

type DetailsProps = {
  pokemonDetail: PokemonDetail;
};

export const getServerSideProps: GetServerSideProps<DetailsProps> = async (
  context
) => {
  const { req, params } = context;

  // get the base url of the nextjs app for api request
  const host = req.headers.host;
  const protocol = req.headers["x-forwarded-proto"] ? "https" : "http";

  // console.log(protocol, host);

  // make the api request to fetch pokemonDetail for server side rendering
  const details_api = `${protocol}://${host}/api/pokemon/${params?.id}`;
  const res: Response = await fetch(details_api);
  const pokemonDetail = (await res.json()) as PokemonDetail;

  return {
    props: {
      pokemonDetail,
    },
  };
};

const Details: NextPage<DetailsProps> = ({ pokemonDetail }) => {
  return (
    <div>
      <Head>
        <title>Pokédex - {pokemonDetail.name}</title>
        <meta name="description" content={"NextJS Pokédex - pokemon_name"} />
        <link rel="icon" href="/pokeball.png" type="image/png" />
      </Head>
      {/* Page Header */}
      <Header title="Pokédex" />

      {/* Go Back Link */}
      <div className="container my-3">
        <Link href="/">
          <a className="link">Back to Home</a>
        </Link>
      </div>

      {/* Pokemon Detail Component */}
      <PokemonDetailComp pokemonDetail={pokemonDetail} />
    </div>
  );
};

export default Details;
