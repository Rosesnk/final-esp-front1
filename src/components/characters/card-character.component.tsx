import { FC } from "react";
import Character from "../../types/character.types";
import FavoriteButton from "../buttons/button-favorite.component";
import "./card-character.css";
import { useNavigate } from "react-router-dom";
/**
 * Tarjeta para cada episodio dentro de la vista de personaje
 * @author Rocio Torrez
 * @param {Character} character
 * @returns {React.ReactElement} JSX element
*/

const CharacterCard: FC<{ character: Character }> = ({ character }) => {
  let navigate = useNavigate();

  const redirectToDetailPage = () => {
    navigate(`/detail/${character.id}`, { state: { character: character } });
  };

  return (
    <div className="card-character">
      <img
        src={character.image}
        onClick={redirectToDetailPage}
        alt={character.name}
      />
      <div className="card-character-body">
        <span>{character.name}</span>
        <FavoriteButton character={character} />
      </div>
    </div>
  );
};

export default CharacterCard;
