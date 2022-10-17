import { createRef, useContext, useEffect, useState } from "react";
import BackBtn from "../components/BackBtn";
import PageContainer from "../components/PageContainer";
import { useButtonColor, useTextColor } from "../utils/theme";
import {
  Heading,
  Text,
  Flex,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";
import SongCard from "../components/SongCard";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { convertToTime } from "../utils/helpers";

const Checkout = () => {
  const [checkoutColor, setCheckoutColor] = useState("ocean");
  const buttonColor = useButtonColor();
  const textColor = useTextColor();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const ref = createRef<any>();

  const download = (image: any, { name = "img", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => {
    takeScreenShot(ref.current).then(download);
  };
  const selectTextColor = useColorModeValue("#656565", "gray.900");
  const selectBg = useColorModeValue("white", "#6096FD");

  const { cart, emptyCart, loading } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const btnBg = useColorModeValue("#656565", "gray.700");
  useEffect(() => {
    if (!cart && !loading) {
      navigate("/");
    }
  }, [cart, navigate, loading]);

  
  return (
    <>
      {cart && !loading ? (
        <PageContainer>
          <ColorModeSwitcher />

          <Flex
            flexDir={{ base: "column", lg: "row" }}
            justify={"space-between"}
            w="100%"
            h="100%"
          >
            <Flex
              color={textColor}
              w={{ base: "100%", lg: "50%" }}
              flexDir={"column"}
            >
              <BackBtn text="Continue Shopping" />
              <Flex bg={textColor} mt={3} width={"100%"} h={0.1} />
              <Flex mt={10} justify={"space-between"}>
                <Heading>Shopping Cart</Heading>
                <Select
                  alignSelf={"center"}
                  color={selectTextColor}
                  w={200}
                  bg={selectBg}
                  onChange={(e) => setCheckoutColor(e.target.value)}
                  defaultValue={checkoutColor}
                  border="none"
                >
                  <option value="ocean">Ocean Gradient</option>
                  <option value="purple">Purple Gradient</option>
                  <option value="teal">Teal Gradient</option>
                  <option value="blue">Blue Gradient</option>
                </Select>
              </Flex>
              <Flex mt={2}>
                <Text mt={2}>You have 5 items in your cart</Text>
                <Spacer />
                <Button
                  onClick={emptyCart}
                  _hover={{ bg: "#6096FD", color: "white" }}
                  ml={5}
                  size="sm"
                  bg={btnBg}
                  color={buttonColor}
                >
                  Clear Cart
                </Button>
              </Flex>
              <VStack justify={"space-between"} mt={5} h="100%" spacing={8}>
                {cart.data.map((item: any, index: number) => (
                  <SongCard type={cart.type} data={item} key={index} />
                ))}
              </VStack>
            </Flex>
            <Flex
              mt={{ base: 10, lg: 0 }}
              justify={"space-between"}
              flexDir={"column"}
              width={{ base: "100%", lg: 500 }}
              h="100%"
            >
              <Flex
                rounded={5}
                flexDir={"column"}
                boxShadow={"md"}
                bgGradient={
                  checkoutColor === "purple"
                    ? "linear(to-br, #AAB6FB, #6096FD)"
                    : checkoutColor === "blue"
                    ? "linear(to-br, #004E9A, #428CD4)"
                    : checkoutColor === "ocean"
                    ? "linear(to-br, #1CA7EC, #1F2F98)"
                    : "linear(to-br, #56C596, #329D9C)"
                }
                width={"100%"}
                h="90%"
                p={5}
                color={"white"}
                ref={ref}
              >
                <Flex justifyContent={"space-between"}>
                  <Heading>Summary</Heading>
                </Flex>
                <Flex bg={"white"} mt={3} width={"100%"} h={0.1} />
                <Text mt={3} fontWeight={"700"}>
                  Order Name:{" "}
                  <Text as="span" fontWeight={"400"}>
                    {user.display_name}
                  </Text>
                </Text>
                <Text fontWeight={"700"}>
                  Duration:{" "}
                  <Text as="span" fontWeight={"400"}>
                    {cart.duration === "short_term"
                      ? "Last month"
                      : cart.duration === "medium_term"
                      ? "Last 6 months"
                      : "All time"}
                  </Text>
                </Text>
                <Text fontWeight={"700"}>
                  Order Number:{" "}
                  <Text fontWeight={"400"} as="span">
                    123
                  </Text>
                </Text>
                <Flex bg={"white"} mt={3} width={"100%"} h={0.1} />
                <TableContainer mb={5} w="100%" mt={5}>
                  <Table w="100%" size="sm" variant="unstyled">
                    <Thead>
                      <Tr>
                        <Th>QTY</Th>
                        <Th>ITEM</Th>
                        {cart.type === "tracks" ? (
                          <Th isNumeric>DURATION</Th>
                        ) : null}
                      </Tr>
                    </Thead>
                    <Tbody>
                      {cart.data.map((item: any, index: number) => (
                        <Tr key={index}>
                          <Td>{index + 1}</Td>
                          <Td>
                            <Flex flexDir={"column"}>
                              <Text fontWeight={"700"}>{item.name}</Text>
                              {/* <Text fontWeight={"300"}>JID</Text> */}
                              <Flex>
                                {cart.type === "tracks"
                                  ? item.artists.map(
                                      (artist: any, index: number) => (
                                        <Text key={index} fontWeight={"300"}>
                                          {artist.name}
                                          {index !== item.artists.length - 1
                                            ? ","
                                            : null}
                                        </Text>
                                      )
                                    )
                                  : null}
                              </Flex>
                            </Flex>
                          </Td>
                          {cart.type === "tracks" ? (
                            <Td isNumeric>{convertToTime(item.duration_ms)}</Td>
                          ) : null}
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
                <Flex bg={"white"} width={"100%"} h={0.1} />
                <Text mt={5} fontWeight="700" alignSelf={"center"}>
                  spotlist.com
                </Text>
              </Flex>
              <Button
                onClick={downloadScreenshot}
                mt={8}
                color={"gray.900"}
                boxShadow={"md"}
                h={45}
                rounded={5}
                bg={buttonColor}
              >
                Download
              </Button>
            </Flex>
          </Flex>
        </PageContainer>
      ) : (
        <Text>Please add an item to your cart</Text>
      )}
    </>
  );
};

export default Checkout;
