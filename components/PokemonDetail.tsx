/* eslint-disable @next/next/no-img-element */
import React from "react";

type CompProps = {
  pokemonDetail: PokemonDetail;
};

const PokemonDetailComp: React.FC<CompProps> = ({ pokemonDetail }) => {
  return (
    <div className="container mb-4">
      <div className="row justify-content-center">
        {/* Pokemon Image */}
        <div className="col-sm-8 col-md-5">
          <img
            src={`https://arindampal-0.github.io/pokemon-api/${pokemonDetail.image}`}
            alt={pokemonDetail.name}
            style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
          />
        </div>

        {/* Pokemon details */}
        <div className="col-sm-6 col-md-4">
          {/* Pokemon Name */}
          <h3 className="fw-bolder">{pokemonDetail.name}</h3>
          {/* Pokemon Type */}
          <h5>{pokemonDetail.type.join(", ")}</h5>
          {/* Stats table */}
          <table className="fs-6">
            <thead className="text-center fw-bolder">
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemonDetail.stats.map((stat: Stat, index: number) => (
                <tr key={index}>
                  <td className="fw-bold">{stat.name}</td>
                  <td className="text-end">{stat.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailComp;
