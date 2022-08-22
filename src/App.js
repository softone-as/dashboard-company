import "antd/dist/antd.min.css";
import Layouts from "./layouts";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./pages/Customers";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Layouts children={<Dashboard />} />}
                />
                <Route
                    exact
                    path="/customers"
                    element={<Layouts children={<Customers />} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
