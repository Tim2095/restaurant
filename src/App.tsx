import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/Header";
import RootLayout from "./RootLayout";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: 'about',
    element: <About />
  }
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
