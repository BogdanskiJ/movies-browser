import { Info, PersonalInfo, Result } from "./styled";

export const Information = ({place_of_birth, birthday}) => {
    return(
        <>
       <Info>
       <PersonalInfo>date of birth: <Result>{birthday}</Result></PersonalInfo>
       <PersonalInfo>place of birth: <Result>{place_of_birth}</Result></PersonalInfo>
       </Info>
        </>
    );
};

export default Information;