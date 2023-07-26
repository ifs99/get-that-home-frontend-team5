import styled from "@emotion/styled";
import Button from "../../ui/button";
import { typography } from "../../../styles";
import { useAuth } from "../../../context/AuthContext";
import { BiEdit } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { createFavorite } from "../../../services/propertyServices";
import { useParams, useNavigate } from "react-router-dom";

const PropertyCardInteractionBox = styled.div`
  max-width: 290px;
  max-height: 250px;
`;

const PropertyContact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  border-radius: 0.5rem;
  background: var(--white, #fff);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

const ContactContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

const Body1C = styled.p`
  ${typography.text.md}
  color:#373737;
  text-align: center;
`;

function RightPropertyDetail({isFavorite}) {
  const { user } = useAuth();

  const {id} = useParams();
  const navigate = useNavigate();
 
   async function handlefavorites() {
     try {
       await createFavorite(id);
       navigate("/favorites");
     } catch (error) {
       console.error("Error creating favorite:", error);
     }
   }
   console.log("holaaa")
   console.log(isFavorite)
 
  return (
    <PropertyCardInteractionBox>
      <PropertyContact>
        {user ? (
          user.type_user.toLowerCase() === "landlord" ? (
            <Button type="primary">
              <BiEdit size={24}/>
              EDIT PROPERTY
            </Button>
          ) : (

            <div>
              {isFavorite ? "is favorite" : <button onClick={handlefavorites} >Add favorites</button> }
            </div>
            
          )
        ) : (
          <ContactContainer>
            <Body1C>Log in or Join to contact the advertiser</Body1C>
            {/* <Button type="primary">
              <AiOutlineUserAdd size={24} />
              LOGIN
            </Button> */}
          </ContactContainer>
        )}
      </PropertyContact>
    </PropertyCardInteractionBox>
  );
}

export default RightPropertyDetail;
