import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import ResetLayout from "./Layouts/ResetLayout/ResetLayout";
import ActivateLayout from "./Layouts/ActiveteLayout/ActiveteLayout";

function App() {
  const isLoggedIn = true;

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <ProfileLayout /> : <AuthLayout />}
        />
        <Route
          exact
          path="/auth/reset-password/:token"
          element={<ResetLayout />}
        />
        <Route
          exact
          path="/api/auth/activate/activate_token:"
          element={<ActivateLayout />}
        />
      </Routes>
    </Router>
  );
}

export default App;
