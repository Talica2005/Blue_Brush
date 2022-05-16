import { $authHost, $host } from "./index";

export const createTechniq = async (techniq) => {
  const { data } = await $authHost.post("api/techniq", techniq);
  return data;
};

export const fetchTechniques = async () => {
  const { data } = await $host.get("api/techniq");
  return data;
};

export const createGenre = async (genre) => {
  const { data } = await $authHost.post("api/genre", genre);
  return data;
};

export const fetchGenres = async () => {
  const { data } = await $host.get("api/genre");
  return data;
};

export const createArtwork = async (artwork) => {
  const { data } = await $authHost.post("api/artwork", artwork);
  return data;
};

export const fetchArtworks = async (techniqId, genreId, page, limit = 8) => {
  const { data } = await $host.get("api/artwork", {
    params: {
      techniqId,
      genreId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneArtwork = async (id) => {
  const { data } = await $host.get("api/artwork/" + id);
  return data;
};
