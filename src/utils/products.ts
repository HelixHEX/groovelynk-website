import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const useProduct = (type: string, duration: string) => {
  const [product, setProduct] = useState<any>([]);
  const access_token = cookies.get("access_token");

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${type}?access_token=${access_token}&time_range=${duration}`
      );
      console.log(response.data)
      setProduct(response.data);
    };
    getProduct();
  }, [access_token, type, duration]);

  return {
    product,
  };
};
