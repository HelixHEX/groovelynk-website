import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import axios, { AxiosResponse } from "axios";
import Cookies from "universal-cookie";
import Loading from "../components/Loading";
// import { Flex } from "@chakra-ui/react";
const cookies = new Cookies();

type UserContextProps = {
  user: any;
  setUser: (user: any) => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
});

const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const access_token = cookies.get("access_token");
    if (access_token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/me?access_token=${access_token}`)
        .then((res: AxiosResponse) => {
          if (res.status === 200) {
            setTimeout(() => {
              setUser(res.data);
              setLoading(false);
            }, 2000);
          } else {
            setLoading(false);
            setUser(null);
          }
        }).catch(() => {
          setLoading(false);
          setUser(null);
        })
    } else {
      setLoading(false);
      setUser(null);
    }
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
       {loading ? <Loading /> : props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
