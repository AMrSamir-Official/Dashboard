import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Customers from "./Pages/Customers/Customers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Ecommerce from "./Pages/Ecommerce/Ecommerce";
import Loader from "./Pages/Loader/Loader";
import Orders from "./Pages/Order/Order";
import AppLayout from "./Pages/appLayout/AppLayout";
import Calender from "./Pages/calendar/calendar";
import FAQ from "./Pages/faq/FAQ";
import Form from "./Pages/form/Form";
import Invoices from "./Pages/invoices/Invoices";
import Team from "./Pages/team/Team";
import SyncedCursors from "./component/SyncedCursors/SyncedCursors";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      path: "",
      loader: Loader,
      // errorElement: <ErrorBoundary />,
      children: [
        { element: <Navigate to="/Dashboard" />, path: "" },
        {
          element: <Dashboard />,

          path: "/dashboard",
        },
        { element: <Ecommerce />, path: "/E-Commerce" },
        { element: <Customers />, path: "/Customers" },
        { element: <Orders />, path: "/Orders" },
        { element: <Team />, path: "/Team" },
        { element: <FAQ />, path: "/FAQ" },
        { element: <Form />, path: "/Form" },
        { element: <Invoices />, path: "/Invoices" },
        { element: <SyncedCursors />, path: "/SyncedCursors" },
        { element: <Calender />, path: "/Calender" },
        // { element: <Trinding />, path: "/Trinding" },
        // { element: <Kanban />, path: "/Kanban" },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
