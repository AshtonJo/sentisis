import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindingPwd from "./routes/FindingPwd";
import Login from "./routes/Login";
import Main from "./routes/Main";
import SignUp from "./routes/SignUp";
import Withdrawal from "./routes/Withdrawal";
import Analysis from "./routes/Analysis";
import KakaoLogin from "./routes/SocialLogin";
import AllResult from "./routes/AllResult";
import Result from "./routes/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/member/login" element={<Login></Login>}></Route>
        <Route path="/member/password-forgotten" element={<FindingPwd></FindingPwd>}></Route>
        <Route path="/member/join" element={<SignUp></SignUp>}></Route>
        <Route path="/withdrawal" element={<Withdrawal></Withdrawal>}></Route>
        <Route path="/service/analysis" element={<Analysis></Analysis>}></Route>
        <Route path="/service/allresult" element={<AllResult></AllResult>}></Route>
        <Route path="/social-login/kakao" element={<KakaoLogin></KakaoLogin>}></Route>
        <Route path="/service/result" element={<Result></Result>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
