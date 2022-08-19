// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pokemon[]>
) {
  const response = await fetch(
    "https://arindampal-0.github.io/pokemon-api/index.json"
  );
  const pokemons = (await response.json()) as Pokemon[];

  res.status(200).json(pokemons);
}
