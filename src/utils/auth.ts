import { generateRandomString } from "./helpers";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const login = () => {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email user-top-read";


  window.location.href =
    "https://accounts.spotify.com/authorize?" +
    new URLSearchParams({
      response_type: "code",
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID as string,
      scope: scope,
      redirect_uri: `${process.env.REACT_APP_API_URL}/auth/callback`,
      state: state,
    }).toString();
};

const logout = () => {
  cookies.remove('access_token');
  window.location.href='/'
}

export { login, logout };
