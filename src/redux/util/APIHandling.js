const getAnime = async (type) => {
  const baseURL = `https://api.jikan.moe/v4/anime?order_by=score&sort=desc&page=1&type=${type}`;
  const response = await fetch(baseURL);
  const info = await response.json();
  const response2 = await fetch(`${baseURL}&page=2`);
  const info2 = await response2.json();
  return [...info.data, ...info2.data];
};

export default getAnime;
