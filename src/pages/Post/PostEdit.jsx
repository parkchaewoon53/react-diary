import { useParams } from "react-router-dom";
import { contextPost } from "./postContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostWrite.css";
function PostEdit(){

    // path variable 방식으로 넘어온 파라미터 no값 꺼내오기
    // 1.useParams임포트
    const params = useParams();
    console.log(params.no);
    const no = params.no;
    // postArray 내부 no에 대항하는 데이터 꺼내기
    let post;
    const {postArray} = useContext(contextPost);
    postArray.forEach((data) => {
        if(data.no == no){
            post = data
        }
    });
    const [title, setTitle] = useState(post.title);
    const[content, setContent] = useState(post.content); 
    const nav = useNavigate();

    // 등록 벝느 클릭시 실행될 함수
    const editDo = () => {
        post.title = title;
        post.content = content;
        console.log(post);
    // }
    // postArray로 부터 꺼냈던 post의 내용 수정시
    // postArray 내부 데이터가 변경되는지 확인
    console.log(postArray);
    // 포스트 목록으로 이동 시키기(navigate 실행)
    nav("/post");
    }

    console.log(post);
    return (
        <div className="write-container">
            {/* input 태그나 textarea에 초기 고정값 있는경우 defaultValue에 넣기 */}
            <input className="write-title" type="text" defaultValue={post.title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea className="write-content" name="" id="" defaultValue={post.content} onChange={(e)=> setContent(e.target.value)}></textarea>
            <div className="text-align-end">
                <button className="btn-fill" onClick={()=>{
                    editDo();
                }}>등록</button>
                <button className="btn-empty" onClick={()=>nav(`/post/detail?no=${no}`)}>취소</button>
            </div>
        </div>
    )
}
export default PostEdit;