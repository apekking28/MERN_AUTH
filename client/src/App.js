import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
function App() {
  const isLoggedIn = false;
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <ProfileLayout /> : <AuthLayout />}
        />
      </Routes>
    </Router>
  );
}

export default App;
