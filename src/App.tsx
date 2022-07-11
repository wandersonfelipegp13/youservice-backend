import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Initial } from "./pages/Initial";
import { Home } from "./pages/Home";
import { NewService } from "./pages/NewService";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service/new" element={<NewService />} />
            <Route path="/service/:id" element={<NewService />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
