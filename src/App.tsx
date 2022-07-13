import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Initial } from "./pages/Initial";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { Service } from "./pages/Service";


import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Initial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service/new" element={<Service />} />
            <Route path="/service/:id" element={<Service />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
