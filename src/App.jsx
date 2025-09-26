import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />} />
    </Routes>
  );
}

