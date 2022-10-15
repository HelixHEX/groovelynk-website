import { Heading, Text } from "@chakra-ui/react";
import Musicbox from "../components/Musicbox";
import Navbar from "../components/Navbar";
import PageContainer from "../components/PageContainer";
import { useLightBlue } from "../utils/theme";

const App = () => {
  const lightBlue = useLightBlue();
  return (
    <>
      <PageContainer>
        <Navbar />
        <Musicbox />        
      </PageContainer>
      
    </>
  );
};

export default App;
