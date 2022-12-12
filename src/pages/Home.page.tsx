import Filters from "../components/characters/filters.component";
import GridCharacters from "../components/characters/grid-characters.component";
import Pagination from "../components/pagination/pagination.component";
import { fetchCharactersThunk } from "../actions/characters.actions";
import { FC } from "react";
import { useDispatch } from "react-redux";

const HomePage: FC = () => {
  const dispatch = useDispatch();

  /**
   * Funcion que remueve los filtros de busqueda
   * @author Rocio Torrez
   * @returns {React.ReactElement} JSX element
   */
  const deleteFiltersOnClick = () => {
    dispatch(fetchCharactersThunk(""));
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={deleteFiltersOnClick}>
          Limpiar Búsqueda
        </button>
      </div>
      <Filters />
      <Pagination />
      <GridCharacters />
      <Pagination />
    </div>
  );
};

export default HomePage;
