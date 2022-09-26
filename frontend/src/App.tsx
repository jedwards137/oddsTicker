import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DisplayPage from './pages/DisplayPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/display"
              element={<DisplayPage />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
