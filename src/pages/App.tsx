import Nav from "../components/Navbar"

const App = () => {
  const spotify = () => {
    window.open('http://localhost:5000/auth/spotify', '_self')
  }
  return(
    <>
      <Nav />
    </>
  )
}

export default App