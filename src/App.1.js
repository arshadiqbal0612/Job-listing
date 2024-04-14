import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs/Jobs";
import Home from "./pages/Home/Home";
import Header from "../src/components/Header/Header";

export function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs" element={<Jobs />} />
                </Routes>
            </Router>
        </div>
    );
}
