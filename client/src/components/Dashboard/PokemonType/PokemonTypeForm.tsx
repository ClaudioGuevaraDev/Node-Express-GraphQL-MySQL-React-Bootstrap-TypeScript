import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import {
  CREATE_POKEMON_TYPE,
  GET_ALL_POKEMON_TYPES,
} from "../../../queries/PokemonType";
import { PokemonType } from "../../../interfaces/PokemonType";

const PokemonTypeForm = () => {
  const [nameValue, setNameValue] = useState("");

  const [createPokemonType, result] = useMutation(CREATE_POKEMON_TYPE, {
    onError: (error) => {
      toast(error.graphQLErrors[0].message, {
        type: "error",
      });
    },
    update: (store, response) => {
      const dataInStore: any = store.readQuery({ query: GET_ALL_POKEMON_TYPES });
      store.writeQuery({
        query: GET_ALL_POKEMON_TYPES,
        data: {
          ...dataInStore,
          getAllPokemonTypes: [
            ...dataInStore.getAllPokemonTypes,
            response.data.createPokemonType,
          ],
        },
      });
    },
  });

  useEffect(() => {
    if (result.data) {
      if (result.data.createPokemonType.id) {
        toast("Pokemon type created.", {
          type: "success",
        });
      }
    }
  }, [result.data]);

  const handleChangeNameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pokemonType = {
      name: nameValue,
    };

    createPokemonType({ variables: { pokemonType } });

    setNameValue("");
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group mb-3">
              <label className="form-label mb-2" htmlFor="nameInput">
                Name
              </label>
              <input
                type="text"
                id="nameInput"
                className="form-control"
                placeholder="Name"
                value={nameValue}
                onChange={handleChangeNameValue}
              />
            </div>
            <button className="btn btn-primary btn-lg w-100" type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PokemonTypeForm;
