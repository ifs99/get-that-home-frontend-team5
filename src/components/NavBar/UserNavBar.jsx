import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUserAdd, AiFillHeart } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { RiHome8Line } from "react-icons/ri";


import Button from "../ui/button";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

function UserNavBar() {
  const { user } = useAuth();
  const { logout } = useAuth();

  const navegate = useNavigate()
  
  const handleLogout = async () => {
    await logout();
  };

  function handleProperties(){

    navegate("/properties")

  }

  function handlesavedproperties(){
    navegate("/favorites")
  }

  return (
    <>
      <Menu>

      {user.user_type === "Landlord" ? (
          <></>
          ) : (

            <Button onClick={handleProperties}>
            <BiSearch size={24} />
            FIND A HOME
          </Button>
            
          )}   
        <>
          <Button type="secondary" onClick={handleLogout}>
            <BiLogOutCircle size={24} />
            LOGOUT
          </Button>

          {user.user_type === "Landlord" ? (
            <Button type="primary">
              <RiHome8Line size={24} />
              MY PROPERTIES
            </Button>
          ) : (
                <Button type="primary" onClick={handlesavedproperties}>
                  <AiFillHeart size={24} />
                  SAVED PROPERTIES
                </Button>
            
            
          )}

          <Button type="primary">
            <AiOutlineUserAdd size={24} />
            PROFILE
          </Button>
        </>
      </Menu>
    </>
  );
}

export default UserNavBar;
