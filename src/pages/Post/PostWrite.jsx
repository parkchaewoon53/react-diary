import "./PostWrite.css";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contextPost } from "./postContext";
function PostWrite() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [no, setNo] = useState();
  const { postArray, setPostArray } = useContext(contextPost);
  const nav = useNavigate();
  const edit = () => {
    const newPost = { no, title, content };
    setPostArray([...postArray, newPost]);
    nav("/post");
  };
  return (
    <div className="write-container">
      <input
        type="text"
        className="write-title"
        onChange={(e) => setNo(e.target.value)}
      />
      <input
        type="text"
        className="write-title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name=""
        id=""
        className="write-content"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="text-align-end">
        <button className="btn-fill" onClick={edit}>
          등록
        </button>
        <button className="btn-empty">취소</button>
      </div>
    </div>
  );
}

export default PostWrite;
