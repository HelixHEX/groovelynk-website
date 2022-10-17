import { Flex, Button, useColorModeValue, VStack } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import MusicCard from "../components/MusicCard";
import Navbar from "../components/Navbar";
import PageContainer from "../components/PageContainer";
import { CartContext } from "../contexts/CartContext";
import { useProduct } from "../utils/products";
import { UserContext } from "../contexts/UserContext";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Musicbox = () => {
  // create use states for the buttons so that when one is selected it shows a different page
  const [duration, setDuration] = useState("short_term");
  const Bg = useColorModeValue("white", "#6096FD");
  const { product: topTracks } = useProduct("tracks", duration);
  const { product: topArtists } = useProduct("artists", duration);
  const { setCart } = useContext(CartContext);
  const { user } = useContext<any>(UserContext);

  const navigate = useNavigate();
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
                    variant={duration === "short_term" ? "solid" : "ghost"}
                    onClick={() => setDuration("short_term")}
                    bg={duration === "short_term" ? Bg : "none"}
                    size="lg"
                    mt={10}
                    w="100%"
                    _hover={{ bg: "#6096FD", color: "white" }}
                  >
                    Last Month
                  </Button>
                  <Button
                    variant={duration === "medium_term" ? "solid" : "ghost"}
                    onClick={() => setDuration("medium_term")}
                    bg={duration === "medium_term" ? Bg : "none"}
                    size="lg"
                    w="100%"
                    _hover={{ bg: "#6096FD", color: "white" }}
                  >
                    Last 6 Months
                  </Button>

                  <Button
                    variant={duration === "long_term" ? "solid" : "ghost"}
                    onClick={() => setDuration("long_term")}
                    bg={duration === "long_term" ? Bg : "none"}
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
                  addToCart={() =>{
                    setCart({ duration, data: topArtists, type: "artists" })
                    navigate('/checkout')
                  }
                  }
                />
                <MusicCard
                  title="Top Tracks"
                  description="5 Tracks"
                  image={require("../assets/images/tracks.jpeg")}
                  addToCart={() => {
                    setCart({ duration, data: topTracks, type: "tracks" });
                    navigate('/checkout')
                  }}
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
