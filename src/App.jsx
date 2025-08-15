import React from "react";
import RootLayout from "./layouts/RootLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Greeting = React.lazy(() => import("./components/Greeting"));
const Counter = React.lazy(() => import("./components/Counter"));
const ColorChanger = React.lazy(() => import("./components/ColorChanger"));
const LiveTyping = React.lazy(() => import("./components/LiveTyping"));
const TodoList = React.lazy(() => import("./components/TodoList"));
const ToggleText = React.lazy(() => import("./components/ToggleText"));
const FruitList = React.lazy(() => import("./components/FruitList"));
const Home = React.lazy(() => import("./components/Home"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="greeting" element={<Greeting />} />
        <Route path="counter" element={<Counter />} />
        <Route path="color-changer" element={<ColorChanger />} />
        <Route path="live-typing" element={<LiveTyping />} />
        <Route path="todo-list" element={<TodoList />} />
        <Route path="toggle-text" element={<ToggleText />} />
        <Route path="fruit-list" element={<FruitList />} />
      </Route>
    )
  );
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
