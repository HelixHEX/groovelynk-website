import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useLightGray } from "../utils/theme";
import React from "react";

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
  const textColor = useLightGray;
  const btn = useColorModeValue("6096FD", "#6096FD");
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
        <Box rounded={"lg"} height={"220px"}>
          <Image
            rounded={"lg"}
            height={200}
            width={220}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack align={"left"}>
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"l"}>
              {description}
            </Text>
          </Stack>
          <Button colorScheme={"blue"} borderColor="" variant="outline">
            Add To Cart
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default MusicCard;
