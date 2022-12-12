import { FC } from "react";
import { IRootState } from "../../store/store";
import Character from "../../types/character.types";
import { toggleFavorite } from "../../actions/favorites.actions";
import "./button-favorite.css";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

/**
 * Boton que sirve para agregar o quitar elementos a Favoritos
 * @author Rocio Torrez
 * @param { character }
 * @returns un JSX element
 */

const FavoriteButton: FC<{ character: Character }> = ({ character }) => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const favoriteMap = useSelector((state) => state.favorites.favoritesMapa);
  const dispatch = useDispatch();

  const src = require(favoriteMap.has(character.id)
    ? "../../Assets/star-filled.png"
    : "../../Assets/star.png");

  /**
   * Funcion que actualiza el estado de 'favorito' de los elementos, añadiendolo o removiendolo de la lista de favoritos
   * @author Rocio Torrez
   * @param {event} event
   */
  const toggleFavorites = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(toggleFavorite(character));
  };

  return (
    <button className="button-favorite" onClick={toggleFavorites} type="button">
      <img src={src} alt={"favorite"} />
    </button>
  );
};

export default FavoriteButton;
