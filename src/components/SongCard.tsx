import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { convertToTime } from "../utils/helpers";

const SongCard = ({ data, type }: { data: any; type: string }) => {
  const bg = useColorModeValue("white", "#6096FD");

  return (
    <>
      <Flex
        padding={2}
        rounded={5}
        bg={bg}
        boxShadow={"md"}
        width="100%"
        h={65}
      >
        <Image
          alignSelf={"center"}
          w={55}
          h={55}
          rounded={5}
          src={type === 'tracks' ? data.album.images[0].url : data.images[0].url}
        />
        <Flex w="90%" justify={"space-between"} alignSelf={"center"} ml={2}>
          <Flex flexDir="column">
            <Text fontWeight={"500"} fontSize={15} color={"gray.900"}>
              {data.name}
            </Text>
            <Flex>
              {type === "tracks"
                ? data.artists.map((artist: any, index: number) => (
                    <Text
                      fontWeight={"300"}
                      fontSize={13}
                      mt={-1}
                      color={"gray.900"}
                    >
                      {artist.name}
                      {index !== data.artists.length - 1 ? "," : null}
                    </Text>
                  ))
                : null}
            </Flex>
          </Flex>
          {type === "tracks" ? (
            <Text color={"gray.900"} alignSelf={"center"}>
              {convertToTime(data.duration_ms)}
            </Text>
          ) : null}
        </Flex>
      </Flex>
    </>
  );
};

export default SongCard;
