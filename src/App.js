import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
