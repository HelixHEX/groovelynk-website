import { Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
// import { logout } from "../utils/auth";
import { UserContext } from "../utils/UserContext";
import Cookies from 'universal-cookie';

const Order = () => {
  const [user, setUser] = useContext<any>(UserContext);
  const cookies = new Cookies();

  const logout = () => {
    cookies.remove('access_token');
    setUser(null);
  }
  return (
    <>
      <Text>{user.display_name}</Text>
      <Button>Top tracks</Button>
      <Button onClick={() => logout()}>Logout</Button>
    </>
  );
};

export default Order;
