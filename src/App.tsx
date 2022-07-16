import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Initial } from "./pages/Initial";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { Service } from "./pages/Service";
import { ServiceList } from "./pages/ServiceList";
import { Category } from "./pages/Category";

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
            <Route path="/services" element={<ServiceList />} />
            <Route path="/services/new" element={<Service />} />
            <Route path="/categories" element={<Category />} />
          </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
