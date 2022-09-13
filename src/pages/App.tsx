import { Button, Text } from "@chakra-ui/react"
import Nav from "../components/Navbar"
import { login } from "../utils/auth"
import { useContext } from "react"
import { UserContext } from "../utils/UserContext"
const App = () => {
  const [user] = useContext<any>(UserContext)
  return(
    <>
      <Nav />
      {user ? (
        <Text>
          {user.name}
        </Text>
      ) : (
        <Button onClick={login}>Login with spotify</Button>
      )}
    </>
  )
}

export default App