import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile/:username" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>

    </>
}

export default Router;