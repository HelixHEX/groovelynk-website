import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import Login from "./Login";
import Order from "./Order";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [user] = useContext<any>(UserContext);
  return (
    <>
    <AnimatePresence>
      <Flex w="100%" h="100vh" justify="center" align={"center"} p={50}>
        <motion.div
          animate={{
            scale: user ? [1.5, 1] : [1.5, 1],
          }}
          style={{ width: "100%", height: "100%" }}
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
                <Order />
              </>
            ) : null}
          </Flex>
        </motion.div>
        {!user ? <Login /> : null}
      </Flex>
      </AnimatePresence>
    </>
  );
};

export default App;
