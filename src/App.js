import { Routes, Route } from "react-router-dom";


import MyNotes from "./pages/MyNotes";
import Login from "./pages/Login";
import MyHome from "./pages/MyHome";
import HomeLayout from "./components/layout/HomeLayout";

function App() {

 
  
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-notes-list" element={<MyNotes />} />
      </Routes>
    </HomeLayout>
  );
}

export default App;
