import PokemonTypeForm from "./PokemonTypeForm";
import PokemonTypeList from "./PokemonTypeList";

const PokemonType = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h3>Create Pokemon Type</h3>
        </div>
      </div>
      <div className="row g-3">
        <PokemonTypeForm />
        <PokemonTypeList />
      </div>
    </>
  );
};

export default PokemonType;
