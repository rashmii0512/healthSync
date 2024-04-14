import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.svg';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      }
    ]
  }
])

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)
