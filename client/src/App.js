import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  const user = false;

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          {/* Always */}
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Only for users */}
          <Route
            path="/write"
            element={user ? <Write /> : <Navigate to="/register" />}
          />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Navigate to="/register" />}
          />
          {/* Only no user */}
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
