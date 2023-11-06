import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/Header";
import RootLayout from "./RootLayout";
import About from "./pages/About";
import MainSection from "./components/MainSection";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />
      }
    ] 
  },
 
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
