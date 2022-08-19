type Pokemon = {
  id: number;
  name: string;
  image: string;
};

type Stat = {
  name: string;
  value: number;
};

type PokemonDetail = {
  name: string;
  type: string[];
  stats: Stat[];
  image: string;
};
