import { useState } from "react";

import PokemonTypeForm from "./PokemonTypeForm";
import PokemonTypeList from "./PokemonTypeList";

import { UpdatePokemonType } from "../../../interfaces/PokemonType";

const PokemonType = () => {
  const [updatePokemonType, setUpdatePokemonType] = useState<UpdatePokemonType>(
    {
      id: 0,
      name: "",
    }
  );

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h3>Create Pokemon Type</h3>
        </div>
      </div>
      <div className="row g-3">
        <PokemonTypeForm updatePokemonType={updatePokemonType} />
        <PokemonTypeList setUpdatePokemonType={setUpdatePokemonType} />
      </div>
    </>
  );
};

export default PokemonType;
