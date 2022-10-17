import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useDarkGray } from "../utils/theme";
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

type MusicCardProps = {
  title: string;
  description: string;
  image: any;
  addToCart: () => void;
};

const MusicCard = ({
  title,
  description,
  image,
  addToCart,
}: MusicCardProps) => {
  const Bg = useColorModeValue("white", "#171923");
  const textColor = useDarkGray();
  const btn = useColorModeValue("#6096FD", "#6096FD");

  const { cart } = useContext(CartContext);

  const navigate = useNavigate();
  return (
    <Box ml={10} mt={5}>
      <Box
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={Bg}
        rounded={"lg"}
        boxShadow={"2xl"}
      >
        <Box rounded={"lg"} height={"240px"}>
          <Image
            rounded={"lg"}
            height={200}
            width={220}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack align={"left"} color={textColor} mt={-8}>
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={600}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontSize={"l"} mt={-2}>
              {description}
            </Text>
          </Stack>
          <Spacer />
          {/* <Spacer /> */}
          {!cart ? (
            <Button
              onClick={addToCart}
              variant="outline"
              borderColor={btn}
              color={btn}
              _hover={{ bg: "#6096FD", color: "white" }}
              boxShadow={"md"}
            >
              Add To Cart
            </Button>
          ) : (
            <Text
              onClick={() => navigate("/checkout")}
              _hover={{ cursor: "pointer", color: "#6096FD" }}
              alignSelf="center"
            >
              Proceed to checkout
            </Text>
          )}
        </Stack>
      </Box>
    </Box>
  );
};
export default MusicCard;
