import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoryDetails from "./pages/CategoryDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element = {<Login />} />
        <Route path="/" element={<Home/>}>
          <Route path="/categories" element={< Categories/>}/>
          <Route path="/categories/:id" element={<CategoryDetails/>}/>
          <Route path="/Products/:id" element={<Products/>}/>
        </Route>

        <Route path="*" element={PageNotFound()}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;