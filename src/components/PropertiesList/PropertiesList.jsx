import LandlordPropertyCard from "../PropertyCard/landlordpropertycard";
import SeekerPropertyCard from "../PropertyCard/seekerpropertycard";
import styled from "@emotion/styled";
import { useAuth } from "../../context/AuthContext";

const PropertiesListMainContainer = styled.div`
  flex-grow: 1;
  margin: auto;
  width: 1200px;
  padding: 32px 0;
`;

const PropertiesListContainer = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  row-gap: 4.5rem;
  place-items: center;
`;

function PropertiesList({ properties }) {
  const { user } = useAuth();

  return (
    <PropertiesListMainContainer>
      <PropertiesListContainer>
        {properties?.map((property) => {
          // Check if the user is a landlord or a seeker and render the corresponding component
          if (!user) {
            return <SeekerPropertyCard key={property.id} {...property} />;
          } else if (user.type_user === "Landlord") {
            return <LandlordPropertyCard key={property.id} {...property} />;
          } else if (user.type_user === "homeseeker") {
          }
          return <SeekerPropertyCard key={property.id} {...property} />;
        })}
      </PropertiesListContainer>
    </PropertiesListMainContainer>
  );
}

export default PropertiesList;
