import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import Landing from "./components/Landing";
import { AuthProvider } from "./providers/authProvider";
import createPosts from "./helper/createPosts";

function App() {
  console.log(createPosts(100));

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
