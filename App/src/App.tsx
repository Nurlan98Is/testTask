import { Route, Routes } from "react-router";
import { Products } from "./pages/Products";
import { Layout } from "./components/Layout";
import { ProductPage } from "./pages/ProductPage";
import { CreateProducts } from "./pages/CreateProduct";
import { Contact } from "./pages/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/create" element={<CreateProducts />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
