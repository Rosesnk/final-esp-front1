import { FC, useEffect } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../../store/store";
import { fetchCharactersThunk } from "../../actions/characters.actions";
import CharacterCard from "./card-character.component";
import "./grid-characters.css";

/**
 * Grilla de personajes para la pagina de inicio
 * @author Rocio Torrez
 * @param {Character[]} characters
 * @returns {JSX.Element} jsx.element
 */

const GridCharacters: FC = () => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const { status, characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersThunk(""));
  }, [dispatch]);

  if (status === "LOADING") return <div>Cargando personajes...</div>;
  if (status === "FAILED") return <div>No se pudieron cargar los personajes</div>;
  if (!characters || characters.length === 0) return <></>;

  return (
    <div className="grid-characters">
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <CharacterCard character={character} />
          </div>
        );
      })}
    </div>
  );
};

export default GridCharacters;
