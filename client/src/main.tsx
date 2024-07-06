import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Accidents from "./components/Accidents";
import { Toaster } from "react-hot-toast";
import Signin from "./pages/Signin.tsx";
import DriverList from "./components/DriverList.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/register" element={<Signin />} />
      <Route
        path="/"
        element={
          <>
            <Layout />
          </>
        }
      >
        <Route path="" element={<Home />} />
        <Route path="accident" element={<Accidents />} />
        <Route path="driverlist" element={<DriverList />} />
      </Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={router}></RouterProvider>
  </>
);
