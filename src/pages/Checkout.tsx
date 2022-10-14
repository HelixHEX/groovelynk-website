import { Text, Button, Flex } from "@chakra-ui/react";
import BackBtn from "../components/BackBtn";
import PageContainer from "../components/PageContainer";
import { useDarkGray } from "../utils/theme";

const Checkout = () => {
  const darkGray = useDarkGray();
  return (
    <>
      <PageContainer>
        <Flex color={darkGray}>
          <BackBtn text="Continue Shopping" />
          
        </Flex>
        <Button>hi</Button>
      </PageContainer>
    </>
  );
};

export default Checkout;
