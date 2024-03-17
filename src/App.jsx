import RootLayout from "./components/root/RootLayout";
import About_us from "./pages/About_us"
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Features from "./pages/Features";
import Home from "./pages/Home"
import Pricing from "./pages/Pricing";

import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About_us" element={<About_us/>}></Route>
    <Route path="/Features" element={<Features/>}></Route>
    <Route path="/Pricing" element={<Pricing/>}></Route>
    <Route path="/FAQ" element={<FAQ/>}></Route>
    <Route path="/Blog" element={<Blog/>}></Route>
  </Route>
))

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
