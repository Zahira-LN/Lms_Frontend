import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
import Register from "./loginSetup/Register.jsx";
import Login from "./loginSetup/Login.jsx";
import Layout from "./layouts/Layout.jsx";
import { Toaster } from "react-hot-toast";

import { Courses, Home } from "./pages/index.js";
import CourseDescription from "./components/CourseDescription.jsx";
import { useSelector } from "react-redux";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    protected: false,
    children: [
      { index: true, element: <Home />, protected: false },
      { path: "courses", element: <Courses />, protected: true },
      {
        path: "/courses/description",
        element: <CourseDescription />,
        protected: true,
      },
      ,
    ],
  },
  { path: "/register", element: <Register />, protected: false },
  { path: "/login", element: <Login />, protected: false },
];

const ProtectedRoute = ({ isProtected, children }) => {
  const { accessToken } = useSelector((state) => state.auth);


if(accessToken){
  console.log("Access Token is there",accessToken);
  
}else{
  console.log("Not there",accessToken);
  
}
  

  if (isProtected && !accessToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default function App() {
  return (
    <Suspense fallback={<div>Welcome to LMS System!! Loading...</div>}>
      <Toaster position="top-right" reverseOrder={true} />

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
