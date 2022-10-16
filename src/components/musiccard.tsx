import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex
} from '@chakra-ui/react';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function ProductSimple() {
  const Bg = useColorModeValue("white", "#6096FD");
  return (
    <Box ml={10} mt={5}>
      <Box
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={Bg}
        rounded={'lg'}
        boxShadow={'2xl'}
        >
        <Box
          rounded={'lg'}
          height={'250px'}
          >
          <Image
            rounded={'lg'}
            height={230}
            width={220}
            objectFit={'cover'}
            src={IMAGE}
          />
        </Box>
        <Stack  align={'left'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Top Artists
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'l'}>
              5 Artists
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}