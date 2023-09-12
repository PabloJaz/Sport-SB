import ItemListContainer from "./components/ItemListContainerCompo/ItemListContainer"
import NavBar from "../src/components/NavBarCompo/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Cart from "./components/NavBarCompo/Cart"
import ItemDetailContainer from "./components/ItemDetailComp/ItemDetailContainer"



const App = () => {

 
  return (
  <BrowserRouter>


      <NavBar/>
        <Routes>  
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />

        </Routes>

        
      {/* <ItemListContainer greeting={"Sport  STYLE BLACK"}/> */}
      <ItemDetailContainer/>

    </BrowserRouter>
  )                                                                 
} 

export default App


  