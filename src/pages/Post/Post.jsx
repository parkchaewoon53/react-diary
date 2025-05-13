import "./Post.css";
import PostList from "./PostList";
import PostWrite from "./PostWrite";
import PostDetail from "./postDetail";
import { Routes, Route } from "react-router-dom";
// 2번 생성한 contextpOST  불러오기
import { contextPost } from "./postContext";
import { useState } from "react";
import { data } from "./postData";
import PostEdit from "./PostEdit";
// post 컴퍼넌트에서 list, detail, write, edit은 화면 전환
function Post() {
  // 하위 컴포넌트에서 상위 컴포넌트인 post의 postArray 변수를 사용하고자 함
  // 일일히 props로 넘겨주는 것은 별로 >> context이용하자
  // 1. context 만들기  >> postContext.js 생성하기
  const [postArray, setPostArray] = useState(data);

  document.title = "감성 포스트"

  return (
    <div>
      {/* Routes로 post 관련 컴포넌트들 route 등록 */}
      {/* 3번 해당 contextPost를 사용할 하위 컴포넌트들을 감싸주기 */}
      {/* 공유 데이터 넣기(함수도 가능) */}
      <contextPost.Provider value={{postArray, setPostArray}}>
        <Routes>
          {/* 현재 /는 /post와 동일 */}
          <Route path="/" element={<PostList />} />
          <Route path="/write" element={<PostWrite />} />
          <Route path="/detail" element={<PostDetail />} />
          <Route path="/edit/:no" element={<PostEdit />} />
        </Routes>
      </contextPost.Provider>
    </div>
  );
}

export default Post;
