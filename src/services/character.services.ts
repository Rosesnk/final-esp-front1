import Episode from "../types/episode.types";
import PageInfo from "../types/pageInfo.types";
import Character from "../types/character.types";

/**
 * Funcion que retorna todos los personajes por pagina y los filtra por nombre.
 * @author Rocio Torrez
 * @param {string | undefined} name
 * @returns {Promise<[Character[], PageInfo, number] | [any, any, number]>} retorna personajes y su informacion
 */
export const getCharactersAPI = async (
  name?: string
): Promise<[Character[], PageInfo, number] | [any, any, number]> => {
  let nameParam = "";
  if (name !== "" && name !== undefined) {
    nameParam = `name=${name}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character?${nameParam}`).then(
    function (response) {
      return response
        .json()
        .then((data) => [data.results, data.info, response.status]);
    }
  );
};

/**
 *  Funcion que retorna personajes por pagina
 * @author Rocio Torrez
 * @param {string }url
 * @returns {Promise<[Character[], PageInfo]>} retorna personajes e informacion
 */
export const changePage = async (
  url: string
): Promise<[Character[], PageInfo]> => {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => [data.results, data.info]);
};

/**
 * Funcion que devuelve todos los episodios donde aparecio el personaje.
 * @author Rocio Torrez
 * @param {Array<number>} arrayEpisodeID
 * @returns {Promise<Episode | Episode[]>} retorna los episodios donde aparecio el personaje
 */
export const fetchEpisodes = async (
  arrayEpisodeID: (string | undefined)[]
): Promise<Episode | Episode[]> => {
  return (
    await fetch(`https://rickandmortyapi.com/api/episode/${arrayEpisodeID}`)
  ).json();
};
