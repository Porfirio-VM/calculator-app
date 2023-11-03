import MainComponent from "./components/MainComponent/MainComponent"
import ThemeProvider from "./hooks/ThemeProvider"

function App() {

  return (
    <>
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>
    </>
  )
}

export default App
