import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home/Home";
import Workouts from "./pages/Workouts/Workouts";
import Auth from "./pages/Auth/Auth";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import { useUser } from "./contexts/UserContext";

export default function Routing() {
    const {user} = useUser();
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={user ? <Workouts /> : <Navigate to="/auth" replace />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
        </Routes>
    )
}