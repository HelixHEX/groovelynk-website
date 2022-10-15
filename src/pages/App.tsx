import { Heading } from "@chakra-ui/react";
import PageContainer from "../components/PageContainer";
import Navbar from "../components/Navbar";
import Musicbox from "../components/Musicbox";

const App = () => {
  return (
    <>
      <PageContainer>
        {/* <Navbar /> */}
        <Musicbox />        
      </PageContainer>
      
    </>
  );
};

export default App;
