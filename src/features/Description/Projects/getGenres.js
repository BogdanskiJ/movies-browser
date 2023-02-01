
export const getGenres = async () => {
    
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9515ffc857c67f1558538dad140abb29&language=en-US`)
    const data = await response.json()

    if (!response.ok){
        new Error(response.statusText)
    }

    return await data;
}