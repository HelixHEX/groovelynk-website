import { Flex, Button, useColorModeValue, VStack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import MusicCard from "../components/MusicCard";
import Navbar from "../components/Navbar";
import PageContainer from "../components/PageContainer";
import { useCart } from "../utils/cart";
import { CartContext } from "../utils/CartContext";
import { useProduct } from "../utils/products";
import { UserContext } from "../utils/UserContext";
import Login from "./Login";


const Musicbox = () => {
  // create use states for the buttons so that when one is selected it shows a different page
  const [duration, setDuration] = useState("month");
  const Bg = useColorModeValue("white", "#6096FD");
  const { addToCart } = useCart();
  const { product: topTracks } = useProduct("tracks");
  const { product: topArtists } = useProduct("artists");
  // const handleAddToCart = (data: any) => {
  //   console.log('hi')
  //   console.log(topTracks)
  //   let product = {
  //     duration,
  //     product: data,
  //   };
  //   addToCart(product);
  // };
  const {setCart} = useContext(CartContext)
  const {user} = useContext<any>(UserContext);

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <PageContainer>
            {/* Parent Flex ---------------------- */}
            <Flex w={"100%"} h="100%">
              {/* Button Box Flex ----------------------- */}
              <Flex h={"100%"} mr={10}>
                <VStack spacing={8} w="160px">
                  <Button
                    variant={duration === "month" ? "solid" : "ghost"}
                    onClick={() => setDuration("month")}
                    bg={duration === "month" ? Bg : "none"}
                    size="lg"
                    mt={10}
                    w="100%"
                    _hover={{ bg: "#6096FD", color: "white" }}
                  >
                    Last Month
                  </Button>
                  <Button
                    variant={duration === "sixmonths" ? "solid" : "ghost"}
                    onClick={() => setDuration("sixmonths")}
                    bg={duration === "sixmonths" ? Bg : "none"}
                    size="lg"
                    w="100%"
                    _hover={{ bg: "#6096FD", color: "white" }}
                  >
                    Last 6 Months
                  </Button>

                  <Button
                    variant={duration === "alltime" ? "solid" : "ghost"}
                    onClick={() => setDuration("alltime")}
                    bg={duration === "alltime" ? Bg : "none"}
                    size="lg"
                    _hover={{ bg: "#6096FD", color: "white" }}
                    w="100%"
                  >
                    All Time
                  </Button>
                </VStack>
              </Flex>
              {/* Music Card Flex ----------------------- */}
              <Flex
                h="87vh"
                w={"100%"}
                bg={Bg}
                borderRadius="10px"
                justify={"center"}
                align={"center"}
              >
                <MusicCard
                  title="Top Artists"
                  description="5 Artists"
                  image={require("../assets/images/artists.jpg")}
                  addToCart={() => setCart(topArtists)}
                />
                <MusicCard
                  title="Top Tracks"
                  description="5 Tracks"
                  image={require("../assets/images/tracks.jpeg")}
                  addToCart={() => setCart(topTracks)}
                />
                {/* <MusicCard title="Top Genres" description="5 Genres" image={require("../assets/images/genres.png")} addToCart={() => {}} /> */}
              </Flex>
            </Flex>
          </PageContainer>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};
export default Musicbox;
