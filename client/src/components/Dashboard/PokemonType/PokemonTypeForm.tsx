import {
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import {
  CREATE_POKEMON_TYPE,
  GET_ALL_POKEMON_TYPES,
  UPDATE_POKEMON_TYPE,
} from "../../../queries/PokemonType";
import { UpdatePokemonType } from "../../../interfaces/PokemonType";

interface Props {
  updatePokemonType: UpdatePokemonType;
  setUpdatePokemonType: Dispatch<SetStateAction<UpdatePokemonType>>;
}

const PokemonTypeForm = (props: Props) => {
  const { updatePokemonType, setUpdatePokemonType } = props;

  const [nameValue, setNameValue] = useState("");

  const [createPokemonType, createResult] = useMutation(CREATE_POKEMON_TYPE, {
    onError: (error) => {
      toast(error.graphQLErrors[0].message, {
        type: "error",
      });
    },
    update: (store, response) => {
      const dataInStore: any = store.readQuery({
        query: GET_ALL_POKEMON_TYPES,
      });
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

  const [mutationUpdatePokemonType, updateResult] = useMutation(
    UPDATE_POKEMON_TYPE,
    {
      onError: (error) => {
        toast(error.graphQLErrors[0].message, {
          type: "error",
        });
      },
      update: (store, response) => {
        const dataInStore: any = store.readQuery({
          query: GET_ALL_POKEMON_TYPES,
        });
        const updatedPokemonTypes = dataInStore.getAllPokemonTypes.map(
          (p: any) =>
            p.id !== response.data.updatePokemonType.id
              ? p
              : response.data.updatePokemonType
        );
        store.writeQuery({
          query: GET_ALL_POKEMON_TYPES,
          data: {
            ...dataInStore,
            getAllPokemonTypes: updatedPokemonTypes,
          },
        });
      },
    }
  );

  useEffect(() => {
    if (updatePokemonType.id > 0) {
      setNameValue(updatePokemonType.name);
    }
  }, [updatePokemonType.id]);

  useEffect(() => {
    if (createResult.data) {
      if (createResult.data.createPokemonType.id) {
        toast("Pokemon type created.", {
          type: "success",
        });
      }
    }
  }, [createResult.data]);

  useEffect(() => {
    if (updateResult.data) {
      toast(updateResult.data.updatePokemonType.message, {
        type: "success",
      });
    }
  }, [updateResult.data]);

  const handleChangeNameValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let pokemonType;

    if (updatePokemonType.id === 0) {
      pokemonType = {
        name: nameValue,
      };
    } else {
      pokemonType = {
        id: updatePokemonType.id,
        name: nameValue,
      };
    }

    if (updatePokemonType.id === 0)
      createPokemonType({ variables: { pokemonType } });
    if (updatePokemonType.id > 0) {
      mutationUpdatePokemonType({
        variables: { pokemonType },
      });
    }

    setNameValue("");
    setUpdatePokemonType({
      id: 0,
      name: "",
    });
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
              {updatePokemonType.id === 0 ? "Create" : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PokemonTypeForm;
