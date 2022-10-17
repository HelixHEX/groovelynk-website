import { createRef, useState } from "react";
import BackBtn from "../components/BackBtn";
import PageContainer from "../components/PageContainer";
import { useButtonColor, useDarkGray, useTextColor } from "../utils/theme";
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
} from "@chakra-ui/react";
import SongCard from "../components/SongCard";
import { useCart } from "../utils/cart";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";

const Checkout = () => {
  const darkGray = useDarkGray();
  const [checkoutColor, setCheckoutColor] = useState("ocean");
  const buttonColor = useButtonColor();
  const textColor = useTextColor();
  const { getCart } = useCart();
  const [_image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const [downloading, setDownloading] = useState(false);
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
  return (
    <>
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
            <Text mt={2}>You have 5 items in your cart</Text>
            <VStack justify={"space-between"} mt={5} h="100%" spacing={8}>
              {[...Array(5)].map((_, index) => (
                <SongCard key={index} />
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
                  Elias Wambugu
                </Text>
              </Text>
              <Text fontWeight={"700"}>
                Duration:{" "}
                <Text as="span" fontWeight={"400"}>
                  Last 6 months
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
                      <Th>AMT</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {[...Array(5)].map((_, index) => (
                      <Tr key={index}>
                        <Td>{index + 1}</Td>
                        <Td>
                          <Flex flexDir={"column"}>
                            <Text fontWeight={"700"}>Ed, Edd, Eddy</Text>
                            <Text fontWeight={"300"}>JID</Text>
                          </Flex>
                        </Td>
                        <Td>2:36</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              <Flex bg={"white"} width={"100%"} h={0.1} />
              <Flex mt={5} pl={4} mr={58} justify={"space-between"}>
                <Text fontWeight={"700"}>Total:</Text>
                <Text>13:00</Text>
              </Flex>
              <Text fontWeight="700" alignSelf={"center"}>
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
    </>
  );
};

export default Checkout;
