import { Text, Button, Flex } from "@chakra-ui/react";
import BackBtn from "../components/BackBtn";
import PageContainer from "../components/PageContainer";

const Checkout = () => {
  return (
    <>
      <PageContainer>
        <Flex>
          <BackBtn />
          <Text>Checkout</Text>
        </Flex>
        <Button>hi</Button>
      </PageContainer>
    </>
  );
};

export default Checkout;
