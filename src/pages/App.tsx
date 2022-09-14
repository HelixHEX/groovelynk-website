import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import Login from "./Login";
import Order from "./Order";

const App = () => {
  const [user] = useContext<any>(UserContext);
  return (
    <>
      <Flex w="100%" h="100vh" p={50}>
        <Flex
          justify="center"
          w="100%"
          rounded={10}
          bgGradient="linear(to-br, #29DE69, #17803C)"
          boxShadow={"2xl"}
        >
          {user ? (
            <>
              <Order />
            </>
          ) : (
            <Login />
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default App;
