import { Button } from "@chakra-ui/react";
import { login } from "../utils/auth";

const Login = () => {
  return (
    <>
      <Button
        rounded={100}
        width={[200, 300, 500]}
        height={[70, 70, 85]}
        alignSelf={"center"}
        onClick={() => login()}
        fontSize={[15, 20, 25]}
        color="#1DB954"
        boxShadow={"2xl"}
      >
        Login with Spotify
      </Button>
    </>
  );
};

export default Login;
