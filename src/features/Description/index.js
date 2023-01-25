import { Info, Photo, Tile, Wrapper, Name, Script } from "./styled";
import Information from "./PersonalInfo";
import { useEffect, useState } from "react";
import { Projects } from "./Projects";
import Movie from "../movieList/Movie";

export const Descritpion = () => {
  const [details, setDetails] = useState([]);
  const [info, setInfo] = useState([])

  const url_img = "https://image.tmdb.org/t/p/w500";

  const getDetails = async () => {
    const response = await fetch("https://api.themoviedb.org/3/person/2?api_key=9515ffc857c67f1558538dad140abb29&language=en-US");
    const data = await response.json()
    setDetails(data)
    // console.log(data)
}

useEffect(() => {
    getDetails()
}, [])

const getInfo = async () => {
  const res = await fetch("https://api.themoviedb.org/3/person/2/movie_credits?api_key=9515ffc857c67f1558538dad140abb29&language=en-US")
  const info = await res.json()
  console.log(info)
  setInfo(info)
}
useEffect(() => {
getInfo()
}, [])


  return (
    <>
      <Wrapper>
        <Tile>
          <Photo src={url_img+details.profile_path}></Photo>
          <Info>
            <Name>{details.name}</Name>
            <Information birthday={details.birthday} place_of_birth={details.place_of_birth} />
            <Script>{details.biography}</Script>
          </Info>
        </Tile>
      <Projects />
      </Wrapper>
    </>
  );
};

export default Descritpion;
