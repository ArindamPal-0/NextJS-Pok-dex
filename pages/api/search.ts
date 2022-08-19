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
  const { q } = req.query;

  const filter = typeof q === "string" ? new RegExp(q, "i") : /.*/;

  const response = await fetch(
    "https://arindampal-0.github.io/pokemon-api/index.json"
  );
  const pokemons = (await response.json()) as Pokemon[];

  const filtered = pokemons.filter(({ name }) => name.match(filter));

  filtered.sort(() => Math.random() - 0.5);

  res.status(200).json(filtered.slice(0, 10));
}
