import "./Modal.css";
import close from "../../assets/close.png"

// Lotto와 Home에서 props로 넘긴 msg값 꺼내기
// 1. Modal() 안에 props 넣기
// props에는 함수도 넘겨 줄 수 있음
function Modal(props) {

  console.log(props)
  console.log(props.msg);
  return (
    <div className="modal">
      <div className="modal-top">
        {/* 클릭시 모달창 닫기 */}
        <img
          className="modal-close"
          src={close}
          alt=""
          onClick={props.close}
        />
      </div>
      <div className="modal-bottom">{props.msg}</div>
    </div>  
  );
}

export default Modal;
