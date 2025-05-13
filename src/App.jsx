import "./App.css";
import logo from "./assets/logo.png";
import Home from "./pages/Home/Home"; // home 컴포넌트 임포트. 이후 <home /> 사용가능
import Lotto from "./pages/Lotto/Lotto";
import Post from "./pages/Post/Post";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // intput 태그에 입력한 값 가져오기

  return (
    <div className="container">
      <div className="nav">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="menu-box">
          <Link className="menu" to="./post">
            갬성 포스트
          </Link>
          <Link className="menu" to ="./lotto">
            갬성 로또
          </Link>
          <Link className="menu" to ="./postwrite">
            갬성 글쓰기
          </Link>
        </div>
      </div>
      {/* Home컴포넌트 넣기 */}
      {/* Home.jsx의 return 에 해당하는 jsx코드가 이곳에 삽입 */}
      {/* 페이지 요청 주소에 따라서 컴포넌트가 교체될 영역 */}
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/lotto" element={<Lotto />}/>

        <Route path="/post/*" element={<Post />}/>

      </Routes>
    </div>
  );
}

export default App;
