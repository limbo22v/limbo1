import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import EditPost from "./EditPost";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import Day5 from "./Day5";
import Day6 from "./Day6";
import Day7 from "./Day7";
import Day8 from "./Day8";
import Day9 from "./Day9";
import Day10 from "./Day10";
import Authentication from "./Authentication";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App></App>}></Route>
                <Route path="/Authentication" element={<Authentication></Authentication>}></Route>
                <Route path="Day2" element={<Day2></Day2>}></Route>
                <Route path="Day3" element={<Day3></Day3>}></Route>
                <Route path="Day4" element={<Day4></Day4>}></Route>
                <Route path="Day5" element={<Day5></Day5>}></Route>
                <Route path="Day6" element={<Day6></Day6>}></Route>
                <Route path="Day7" element={<Day7></Day7>}></Route>
                <Route path="Day8" element={<Day8></Day8>}></Route>
                <Route path="Day9" element={<Day9></Day9>}></Route>
                <Route path="Day10" element={<Day10></Day10>}></Route>
                <Route path="/edit/:id" element={<EditPost></EditPost>}></Route>


            </Routes>
        </Router>
    )
}

export default AppRouter;

