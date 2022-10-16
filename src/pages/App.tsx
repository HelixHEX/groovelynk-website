import { Button, Heading, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import PageContainer from "../components/PageContainer";

const App = () => {
  const [duration, setDuration] = useState("month");
  const btnBg = useColorModeValue("white", "#6096FD");
  return (
    <>
      <PageContainer>
        <Heading color={"#6096FD"}>Spotlist.</Heading>
      </PageContainer>
    </>
  );
};

export default App;
