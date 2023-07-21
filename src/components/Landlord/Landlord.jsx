import { getPropertiesactived } from "../../services/propertyServices";
import PropertiesList from "../PropertiesList/PropertiesList";
import { useState, useEffect } from "react";

function Landlord(){
    const [propertiesactived, setPropertiesactived] = useState ([]);

        useEffect (() => {
        getPropertiesactived().then((data) => setPropertiesactived(data));
        }, []);
   
    return(
        <>
        <PropertiesList properties = {propertiesactived}/>
        </>

    )
}

export default Landlord