import { useState, useEffect } from "react";
import Next from "./next";
import Previous from "./previous";
import {
  PrevButton,
  StyledSpan,
  Wrapper,
  Number,
  NextButton,
  TextBox,
} from "./styled";


export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(8)
    const [data, setData] = useState([])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    // const currentRecord = data.slice(indexOfFirstRecord, indexOfLastRecord)
    const Pages = Math.ceil(data.length / recordsPerPage)
    
    const getData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=9515ffc857c67f1558538dad140abb29&language=en-US&page=${currentPage}`);
        const data = await response.json()
        setData(data)
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [currentPage])
  return (
    <>
      <Wrapper>
        <PrevButton>
          <Previous />
          First
        </PrevButton>
        <PrevButton>
          <Previous />
          Previous
        </PrevButton>
        <TextBox>
          <StyledSpan>
            Page <Number>{currentPage}</Number> of <Number>{data.total_pages}</Number>
          </StyledSpan>
        </TextBox>
        <NextButton onClick={() =>setCurrentPage(currentPage + 1)}>
          Next
          <Next />
        </NextButton>
        <NextButton>
          Last
          <Next />
        </NextButton>
      </Wrapper>
    </>
  );
};

export default Pagination;
