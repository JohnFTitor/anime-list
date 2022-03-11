const getAnime = async (type) => {
  const baseURL = `https://api.jikan.moe/v4/anime?order_by=score&sort=desc&type=${type}`;
  const response = await fetch(`${baseURL}&page=1`);
  const info = await response.json();
  const response2 = await fetch(`${baseURL}&page=2`);
  const info2 = await response2.json();
  return [...info.data, ...info2.data];
};

const getAnimeById = async (id) => {
  const baseURL = `https://api.jikan.moe/v4/anime/${id}`;
  const response = await fetch(baseURL);
  const info = await response.json();
  return info.data;
};

export { getAnimeById };

export default getAnime;
