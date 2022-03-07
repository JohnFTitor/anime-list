const getAnime = async (type) => {
  const baseURL = `https://api.jikan.moe/v4/anime?order_by=score&sort=desc&type=${type}`;
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
};

export default getAnime;
