import Layout from "./Layout/Layout";
import AddCustomer from "./Pages/AddCustomer";
import Customers from "./Pages/Customers";
import DashBoard from "./Pages/DashBoard";
import Employess from "./Pages/Employess";
import Login from "./Pages/Login";
import Mapping from "./Pages/Mapping";
import Revenue from "./Pages/Revenue";
import Role from "./Pages/Role";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/role" element={<Role/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Layout Maincontent={DashBoard}/>}/>
        <Route path="/customers" element={<Layout Maincontent={Customers}/>}/>
        <Route path="/employees" element={<Layout Maincontent={Employess}/>}/>
        <Route path="/revenue" element={<Layout Maincontent={Revenue}/>}/>
        <Route path="/addcustomer" element={<Layout Maincontent={AddCustomer}/>}/>
        <Route path="/mapping" element={<Layout Maincontent={Mapping}/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
