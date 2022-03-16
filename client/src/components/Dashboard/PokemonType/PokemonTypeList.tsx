import { Dispatch, SetStateAction, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import {
  PokemonType,
  UpdatePokemonType,
} from "../../../interfaces/PokemonType";

import {
  GET_ALL_POKEMON_TYPES,
  DELETE_POKEMON,
} from "../../../queries/PokemonType";

interface Props {
  setUpdatePokemonType: Dispatch<SetStateAction<UpdatePokemonType>>;
}

const PokemonTypeList = (props: Props) => {
  const { setUpdatePokemonType } = props;

  const { loading, data } = useQuery(GET_ALL_POKEMON_TYPES);

  const [deletePokemonType, deleteResult] = useMutation(DELETE_POKEMON, {
    onError: (error) => {
      console.log(error.message);
    },
    update: (store, response) => {
      const dataInStore: any = store.readQuery({
        query: GET_ALL_POKEMON_TYPES,
      });
      const getAllPokemonTypesFilter = dataInStore.getAllPokemonTypes.filter(
        (t: any) => t.id !== response.data.deletePokemonType.pokemonType.id
      );
      store.writeQuery({
        query: GET_ALL_POKEMON_TYPES,
        data: {
          ...dataInStore,
          getAllPokemonTypes: getAllPokemonTypesFilter,
        },
      });
    },
  });

  useEffect(() => {
    if (deleteResult.data) {
      toast(deleteResult.data.deletePokemon.message, {
        type: "success",
      });
    }
  }, [deleteResult.data]);

  const onDeletePokemon = (id: number) => {
    const pokemon = {
      id: id.toString(),
    };

    deletePokemonType({ variables: { pokemon } });
  };

  const onUpdatePokemon = (pokemon: PokemonType) => {
    setUpdatePokemonType({
      id: pokemon.id,
      name: pokemon.name,
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
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => onUpdatePokemon(t)}
                    >
                      Update
                    </button>
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
