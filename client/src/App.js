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
import Learning from "./pages/Learning";
import ErrorPage from "./pages/ErrorPage"

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
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/learning",
        element:<Learning />
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
        path:"/products/",
        element:<Products />
      },
      {
        path:"/products/:id",
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
