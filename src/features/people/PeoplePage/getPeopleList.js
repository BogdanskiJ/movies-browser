export const getPeopleList = async (peoplePage) => {

  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=9515ffc857c67f1558538dad140abb29&language=en-US&page=${peoplePage}`
  );
  console.log(response)
  const data = await response.json();

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await data;
};