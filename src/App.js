import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./styles.css"

function App() {
  return <Router>
    <Routes>
      <Route path = "/ReactProj_MovieApp/movie/:id" element = {<Detail />}></Route>
      <Route path = "/ReactProj_MovieApp" element = {<Home />}></Route>
    </Routes>
  </Router>;
}


export default App;
