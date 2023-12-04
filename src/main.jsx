import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trivia from "./components/trivia/Trivia.jsx";
import WordSearch from "./components/wordsearch/WordSearch.jsx";
import Tictactoe from "./components/tictactoe/Tictactoe.jsx";
import CardMatch from "./components/cardmatch/CardMatch.jsx";

import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/card-match",
    element: <CardMatch />,
  },
  {
    path: "/tic-tac-toe",
    element: <Tictactoe />,
  },
  {
    path: "/word-search",
    element: <WordSearch />,
  },
  {
    path: "/trivia",
    element: <Trivia />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
