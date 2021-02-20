import listenAPI from "../utils/listenAPI";

export const getGenres = async (genreIDs) => {
  const res = await listenAPI.get("/genres");
  const genres = res?.data?.genres;

  return genres;

//   return genreIDs.map(id => genres)
};
