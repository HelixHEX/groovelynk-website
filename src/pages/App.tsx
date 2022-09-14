import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import Login from "./Login";
import Order from "./Order";
import { motion } from "framer-motion";

const App = () => {
  const [user] = useContext<any>(UserContext);
  return (
    <>
        <Flex w="100%" h="100vh" justify="center" align={"center"} >
          <motion.div
            animate={{
              scale: [1.5, 1],
            }}
            style={{ width: "100%", height: "100%", padding: 50 }}
            transition={{ duration: 2 }}
            
          >
            <Flex
              justify="center"
              w="100%"
              height="100%"
              rounded={10}
              bgGradient="linear(to-br, #29DE69, #17803C)"
              boxShadow={"2xl"}
            >
              {user ? (
                <>
                  <motion.div
                    animate={{opacity: [0, 1]}}
                    transition={{ delay: 2 }}
                  >
                    <Order />
                  </motion.div>
                </>
              ) : null}
            </Flex>
          </motion.div>
          {!user ? <Login /> : null}
        </Flex>
    </>
  );
};

export default App;
