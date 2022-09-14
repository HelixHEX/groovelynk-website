import { Button, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { logout } from "../utils/auth"
import { UserContext } from "../utils/UserContext"

const Order = () => {
  const [user] = useContext<any>(UserContext)
  return (
    <>
    <Text>{user.display_name}</Text>
              <Button>Top tracks</Button>
              <Button onClick={() => logout()}>Logout</Button>
    </>
  )
}

export default Order