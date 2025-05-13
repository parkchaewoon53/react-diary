import "./PostDetail.css"
import { useSearchParams } from "react-router-dom";
import { contextPost } from "./postContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function PostDetail(){

    // query string으로 넘어온 파라미터 no값 꺼내기
    // 1. useSerarchParams import하기
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    console.log(searchParams.get("no"));

    const no = searchParams.get("no");
    const {postArray} = useContext(contextPost);
    // postArray 내 json 객체중 no가 n인 객체 찾기
    let post;
    postArray.forEach((data) => {
        if(data.no == no){
            post = data
        }
    });
    console.log(post)
    const nav = useNavigate();
    return(
        <div className="con">
            <h1 className="h1-post">{post.title}</h1>
            <div className="hot-input">{post.content}</div>
            <div className="btn-div">
            <button className="btn1" onClick={()=>nav("/post")}>목록</button>
            <button className="btn2" onClick={()=>nav(`/post/edit/${no}`)}>수정</button>
            </div>
        </div>
    )
}

export default PostDetail;