
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/pages/logingPage/HomePage";
import ErrorPage from "./Components/pages/ErrorPage/ErrorPage";
import OrderPage from "./Components/pages/Order-Page/OrderPage";

function App(){
  return (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/order" element={<OrderPage />} />
    <Route path="*" element={<ErrorPage />} />
  </ Routes>
  
  )
}

export default App
