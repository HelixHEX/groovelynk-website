import { Heading, Text } from "@chakra-ui/react"
import PageContainer from "../components/PageContainer"
import { useLightBlue } from "../utils/theme"

const App = () => {
  const lightBlue = useLightBlue()
  return(
    <>
    <PageContainer>
      <Heading color={lightBlue}>Spotlist.</Heading>
    </PageContainer>
    </>
  )
}

export default App