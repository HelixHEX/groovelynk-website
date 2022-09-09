const App = () => {
  const spotify = () => {
    window.open('http://localhost:5000/auth/spotify', '_self')
  }
  return(
    <>
      <button onClick={spotify}>login with spotify</button>
    </>
  )
}

export default App