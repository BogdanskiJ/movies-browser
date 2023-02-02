import { Script, ReadMoreButton } from "./styled";
import { useState } from "react";

const ScriptBox = ({ biography, subBiography }) => {
  const [ReadMore, setReadMore] = useState(false);
  const toggleButton = () => {
    setReadMore((state) => !state);
  };
  return (
    <>
      <div>
        <Script> {ReadMore ? biography : subBiography}</Script>
        <ReadMoreButton onClick={toggleButton}>
          {" "}
          {ReadMore ? "...read less" : "read more"}{" "}
        </ReadMoreButton>
      </div>
    </>
  );
};

export default ScriptBox;
