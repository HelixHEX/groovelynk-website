import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';
import { useLightGray } from '../utils/theme';


export default function ProductSimple() {
  const Bg = useColorModeValue("white", "#6096FD");
  const textColor = useLightGray
  const btn = useColorModeValue("6096FD", "#6096FD");
  return (
    <Box ml={10} mt={5} >
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
          height={'220px'}
          >
          <Image
            rounded={'lg'}
            height={200}
            width={220}
            objectFit={'cover'}
            src={require('../assets/images/tracks.jpeg')}
          />
        </Box>
        <Stack align={'left'}>
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
            Top Artists
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'l'}>
              5 Artists
            </Text>
          </Stack>
          <Button colorScheme={'blue'} variant="outline">Add To Cart</Button>
        </Stack>
      </Box>
    </Box>
  );
}