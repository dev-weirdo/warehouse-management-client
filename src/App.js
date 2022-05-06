import { Route, Routes } from "react-router-dom";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import Inventory from "./components/Inventory/Inventory";
import InventoryItem from "./components/InventoryItem/InventoryItem";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path="/inventory/:id" element={<InventoryItem></InventoryItem>}></Route>
        <Route path="/addnewitem" element={<RequireAuth>
          <AddNewItem></AddNewItem>
        </RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
