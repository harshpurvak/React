import Card from "./components/card"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
    <Navbar />
    <Card user='Aman' age={18}/>
    <Card user='harsh' age='26'/>
    </>
    
  )
}

export default App
