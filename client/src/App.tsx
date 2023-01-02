import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound, TaskForm, TaskPage } from "./pages";
import { Navbar } from "./components";

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Navegación */}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<TaskPage />} />
        <Route path="/newtask" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}
