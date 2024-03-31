import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/api";

import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Fileload from "./pages/Fileload";
import Login from "./pages/Login";
import Community from "./pages/Community";
import DocsRecent from "./pages/DocsRecent";
import BoardList from "./component/board/BoardList";
import BoardDetail from "./component/board/BoardDetail";
import BoardWrite from "./component/board/BoardWirte";
import BoardUpdate from "./component/board/BoardUpdate";
import FindId from "./pages/FindId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "file",
        element: <Fileload />,
      },
      {
        path: "board",
        element: (
          <>
            <Community /> 
            <BoardList />
          </>
        ),
      },
      {
        path: "board/:idx",
        element: (
          <>
            <Community /> 
            <BoardDetail />
          </>
        ),
      },
      {
        path: "board/write",
        element: (
          <>
            <Community /> 
            <BoardWrite />
          </>
        ),
      },
      {
        path: "board/Update/:idx",
        element: (
          <>
            <Community /> 
            <BoardUpdate />
          </>
        ),
      },
      {
        path: "docs/edit",
        element: <DocsRecent />,
      },
      {
        path: "user",
        element: <Login />,
      },
      {
        path: "findId",
        element: <FindId />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
