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
        <Button
          bg={duration === "month" ? btnBg : "none"}
          onClick={() => setDuration("month")}
          variant={duration === "month" ? "solid" : "ghost"}
        >
          Last Month
        </Button>
        <Button
          bg={duration === "sixmonths" ? btnBg : "none"}
          onClick={() => setDuration("sixmonths")}
          variant={duration === "sixmonths" ? "solid" : "ghost"}
        >
          Last 6 Months
        </Button>
        <Button
          bg={duration === "alltime" ? btnBg : "none"}
          onClick={() => setDuration("alltime")}
          variant={duration === "alltime" ? "solid" : "ghost"}
        >
          All Time
        </Button>
      </PageContainer>
    </>
  );
};

export default App;
