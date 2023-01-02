import "./app.css"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Product from "./pages/Product";
import Products from "./pages/Products";

const Layout=()=>{
  return(
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/signup",
        element:<Signup />
      },
      {
        path:"/signin",
        element:<Signin />
      },
      {
        path:"/products/:category",
        element:<Products />
      },
      {
        path:"/products/:category/:id",
        element:<Product />
      }
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
