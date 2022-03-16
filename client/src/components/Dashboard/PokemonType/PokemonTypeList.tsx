import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import { PokemonType } from "../../../interfaces/PokemonType";

import {
  GET_ALL_POKEMON_TYPES,
  DELETE_POKEMON,
} from "../../../queries/PokemonType";

const PokemonTypeList = () => {
  const { loading, data } = useQuery(GET_ALL_POKEMON_TYPES);

  const [deletePokemon, result] = useMutation(DELETE_POKEMON, {
    onError: (error) => {
      console.log(error.message);
    },
    update: (store, response) => {
      const dataInStore: any = store.readQuery({
        query: GET_ALL_POKEMON_TYPES,
      });
      store.writeQuery({
        query: GET_ALL_POKEMON_TYPES,
        data: {
          ...dataInStore,
          getAllPokemonTypes: dataInStore.getAllPokemonTypes.filter(
            (t: any) => t.id !== response.data.deletePokemon.pokemonType.id
          ),
        },
      });
    },
  });

  const onDeletePokemon = (id: number) => {
    const pokemon = {
      id: id.toString(),
    };

    deletePokemon({ variables: { pokemon } });

    toast("Pokemon type deleted", {
      type: "success",
    });
  };

  return (
    <>
      {loading === false && (
        <div className="col-md-6">
          <table className="table table-dark text-center table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {data.getAllPokemonTypes.map((t: PokemonType) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.name}</td>
                  <td>
                    <button className="btn btn-warning mx-2">Update</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDeletePokemon(t.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default PokemonTypeList;
