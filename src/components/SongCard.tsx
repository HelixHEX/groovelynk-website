import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react"

const SongCard = () => {
  const bg = useColorModeValue('white', '#6096FD')

  return(
    <>
    <Flex padding={2} rounded={5} bg={bg} boxShadow={'md'} width='100%' h={65}>
      <Image alignSelf={'center'} w={55} h={55} rounded={5} src={require('../assets/images/tracks.jpeg')} />
      <Flex w='90%' justify={'space-between'} alignSelf={'center'} ml={2}>
        <Flex flexDir='column'>
          <Text fontWeight={'500'} fontSize={15} color={'gray.900'}>Ed, Edd, Eddy</Text>
          <Text fontWeight={'300'} fontSize={13} mt={-1} color={'gray.900'}>JID</Text>
        </Flex>
        <Text color={'gray.900'} alignSelf={'center'}>2:36</Text>
      </Flex>
    </Flex>
    </>
  )
}

export default SongCard