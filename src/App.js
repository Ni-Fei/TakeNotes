import { Routes, Route } from "react-router-dom";
import MyNotes from "./pages/MyNotes";
import RegisterUser from "./pages/RegisterUser";
import MyHome from "./pages/MyHome";
import HomeLayout from "./components/layout/HomeLayout";
import Login from "./pages/Login"


function App() {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/my-notes-list" element={<MyNotes />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </HomeLayout>
  );
}

export default App;
