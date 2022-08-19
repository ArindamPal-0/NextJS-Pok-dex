import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonDetail>
) {
  const { id } = req.query;
  const response = await fetch(
    `https://arindampal-0.github.io/pokemon-api/pokemon/${id}.json`
  );
  const pokemonDetail = (await response.json()) as PokemonDetail;

  res.status(200).json(pokemonDetail);
}
