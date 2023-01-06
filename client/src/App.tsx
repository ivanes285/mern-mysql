import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound, TaskForm, TaskPage } from "./pages";
import { Navbar } from "./components";

export default function App() {
  return (
    <Router>
      <div className="bg-slate-900 h-screen text-white">
        <Navbar /> {/* Navegación */}
        <div className="container mx-auto py-4 px-10">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<TaskPage />} />
            <Route path="/newtask" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );  
}
