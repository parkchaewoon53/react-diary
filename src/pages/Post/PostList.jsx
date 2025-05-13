import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// context로 공유한 데이터 불러오기
// 1. 생성한 contextPost 불러오기
import { contextPost } from "./postContext";
// 사용을 한려면 useContext 불러오기
import { useContext, useState, useEffect } from "react";
function PostList() {
  const navigate = useNavigate();
  const {postArray, setPostArray} = useContext(contextPost);
  // 오름차순 내림차순 상태관리
  const[isDesc, setIsDesc] = useState(true);
  // useState
  // isDesc가 바뀔떄 마다 postArray를 정렬한 다음에 setPostArray에 적용 시키기
  // useEffect 사용하기
  useEffect(()=>{
    // isDesc가 true면 내림 차순 정렬
    if(isDesc){
      postArray.sort((a, b)=>{return a.no - b.no});
    }else{
        postArray.sort((a, b)=>{return b.no - a.no});
    }
    
    setPostArray([...postArray])
  }, [isDesc])  //배열내 isDesc가 변할때 마다 내부 익명함수가 실행
  return (
    <div className="post-container">
        <div className="text-align-end">
          {/* 클릭 할떄 마다 isDesc값을 반전 시키기 */}
          <span onClick={() => setIsDesc(!isDesc)}>{isDesc ? 'ㅗ최신순' : 'ㅜ오래된순'}</span>
        </div>

      <table className="post-list">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>닐짜</th>
          </tr>
        </thead>
        <tbody>
        {/* postArray에 데이터가 없다면 '글이 없음' 나오게 하기 */}
        {
          (postArray.length > 0) ? (postArray.map((post) => (
            <tr key={post.no}>
              <td>{post.no}</td>
              <td>
                <Link to={`/post/detail?no=${post.no}`}>{post.title}</Link>
              </td>
              <td>{post.content}</td>
              <td>{post.date}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>등록된 글이 없습니다</td>
          </tr>
        )
        }
        </tbody>
      </table>
      <div className="write-btn-box">
        {/* 글쓰기 버튼 클릭시 /postWrite 요청 -> useNavigate 이용 */}
        <button className="btn-fill" onClick={() => navigate("/post/write")}>
          글쓰기
        </button>
      </div>
    </div>
  );
}

export default PostList;
