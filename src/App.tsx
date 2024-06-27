import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { useAppSelector } from "./hooks/useAppSelector";
import Home from "@/pages";
import Login from "@/pages/auth/login";
import NotFound from "@/pages/NotFound";
import Format from "@/pages/format";
import "./index.css";

const LoginRoute = ({ isLogin }: { isLogin: boolean }) => {
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

const LogoutRoute = ({ isLogin }: { isLogin: boolean }) => {
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export const App = () => {
  const { isLogin } = useAppSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        {/* Not Authenticated */}
        <Route element={<LogoutRoute isLogin={isLogin} />}>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* Authenticated */}
        <Route element={<LoginRoute isLogin={isLogin} />}>
          <Route path="home" element={<Home />} />
          <Route path="format" element={<Format />} />
        </Route>
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
