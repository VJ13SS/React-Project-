async function getMemes() {
  const url = "https://api.imgflip.com/get_memes";
  let response = await fetch(url);
  let data = await response.json();
  return data.data.memes;
}

export default getMemes;
