import { Route, Routes } from "react-router-dom";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import Inventory from "./components/Inventory/Inventory";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/inventory/:id" element={<InventoryItem></InventoryItem>}></Route>
        <Route path="/addnewitem" element={<AddNewItem></AddNewItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;
