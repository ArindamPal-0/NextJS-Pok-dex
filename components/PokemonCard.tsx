/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="col-md-3">
      <Link href={`/pokemon/${pokemon.id}`}>
        <a>
          <div
            className="card hover:border-primary"
            style={{ width: "auto", height: "20rem" }}
          >
            <img
              className="card-img-top"
              style={{ width: "auto", height: "80%", objectFit: "contain" }}
              src={`https://arindampal-0.github.io/pokemon-api/${pokemon.image}`}
              alt={pokemon.name}
            />
            <div className="card-body" style={{ height: "20%" }}>
              <h5 className="card-title text-center">{pokemon.name}</h5>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default PokemonCard;
