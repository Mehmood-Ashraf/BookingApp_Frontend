import { useContext, useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [count, setCount] = useState(0);

  // const ProtectedRoute = ({ children }) => {
  //   const { user } = useContext(AuthContext);
  //   if (!user) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };
  return (
    <>
      <Routes>
        
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
        
      </Routes>
    </>
  );
}

export default App;
