import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import axios, { AxiosResponse } from "axios";

const UserContext = createContext({});

const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState()

  useEffect(() => {
    axios.get("http://localhost:500/users/me").then((res: AxiosResponse) => {
      setUser(res.data.user)
    })
  }, [])

  return (
    <UserContext.Provider value={user!}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext };
