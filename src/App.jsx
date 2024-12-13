import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
import Register from "./loginSetup/Register.jsx";
import Login from "./loginSetup/Login.jsx";
import Layout from "./layouts/Layout.jsx";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Courses, Home } from "./pages/index.js";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    protected: false,
    children: [
      { index: true, element: <Home />, protected: false }, 
      { path: "courses", element: <Courses />, protected: true }, 
    ],
  },
  { path: "/register", element: <Register />, protected: false },
  { path: "/login", element: <Login />, protected: false },
];


const ProtectedRoute = ({ isProtected, children }) => {
  const isAuthenticated = useSelector((state) => state.auth.protected);

  if (isProtected && !isAuthenticated) {
 
    return <Navigate to="/login" replace />;
  }
  return children;
};


export default function App() {
  return (
    <Suspense fallback={<div>Welcome to LMS System!! Loading...</div>}>
      <Toaster />

      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedRoute isProtected={route.protected}>
                {route.element}
              </ProtectedRoute>
            }
          >
            {route.children &&
              route.children.map((child, childIndex) => (
                <Route
                  key={`child-${childIndex}`}
                  index={child.index}
                  path={child.path}
                  element={
                    <ProtectedRoute isProtected={child.protected}>
                      {child.element}
                    </ProtectedRoute>
                  }
                />
              ))}
          </Route>
        ))}

       
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
