import "./App.css";
import Header from "./common/header";
import Footer from "./common/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import Attendance from "./attendance/attendance";
import { Orgchart } from './orgchart/orgchart'
function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/*" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/orgchart" element={<Orgchart />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
