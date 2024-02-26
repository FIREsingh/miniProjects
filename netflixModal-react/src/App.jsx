import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />

      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
