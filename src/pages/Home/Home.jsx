import { useRef } from "react";
import { useState } from "react";
import { getDate } from "../../common/common";
import './Home.css';    
// 홈화면에서 App.jsx의 네비게이션 아래 위치할 화면단
function Home() {
  const inPutText = useRef();
  // 버튼 클릭시 실행될 함수 선언
  const readText = () => {
    console.log(inPutText); //key값 current 내부에 input 태그 존재
    console.log(inPutText.current);
    console.log(inPutText.current.value);
    inPutText.current.value = "";
  };

  // 권장 방식 useState방식
  // input 태그의 value에 대한 상태관리
  // 2-1 useState import
  // 2-2 input 태그의 value 상태관리를 할 변수 선언
  // const [변수명, 변수를 바꿀 함수명] = useState(변수에 할당할 기본값)
  const [text, setText] = useState("");
  // input 태그의 value가 바뀔때마다 setText에 반영(= onchange 사용)

  // json객체들이 들어있는 배열을 화면에 그리기
  // useState으로 상태관리하기
  const [dataArray, setdataArray] = useState([
    {
      no: 1,
      title: "1번쨰",
      date: "2025.05.01",
    },
    {
      no: 2,
      title: "2번쨰",
      date: "2025.05.02",
    },
  ]);

  return (
    <>
      <div className="home-container">
        {/* 태그의 직접 주는 방법(구림 ㅇㅇ) */}
        <h1
          style={{ color: "hotpink", textAlign: "center", marginTop: "40px" }}
        >
          오늘의 한줄
        </h1>
        {/* useRef방식 */}
        <div className="input-box">
          <input className="input-text" type="text" ref={inPutText} />
          <button className="input-btn" onClick={readText}>
            등록
          </button>
        </div>
        {/* useState 방식 */}
        <div className="input-box">
          <input
            className="input-text"
            type="text"
            value={text}
            onChange={(e) => {
              console.log(e.target.value); //event.target.value랑 같음
              setText(e.target.value); //input태그의 value값을 text에 반영시키기
            }}
          />
          <button
            className="input-btn"
            onClick={() => {
              console.log(text);
              // json 객체 생성
              const temp = {};
              temp.title = text;
              temp.no = dataArray.length + 1;
              temp.date = getDate();
              // title: '아직 벅차게 좋아한단 말야', no: 3, date: '2025.05.07'
              console.log(temp);

              // dataArray에 반영 시키기
              dataArray.push(temp);

              // dataArray와 값은 같지만 메모리 주소가 다른 객체 생성
              const newCopyArray = [...dataArray];
              setdataArray(newCopyArray);
            }}
          >
            등록
          </button>
        </div>
        {/* dataArray를 나타낼 부분 (하드 코딩)*/}
        <div className="data-box">
          <div className="data">
            <span className="data-date">2018.06.18</span>
            <span className="data-comment">rip x</span>
          </div>
          <div className="data">
            <span className="data-date">2018.06.18</span>
            <span className="data-comment">rip x</span>
          </div>
        </div>

        {/* dataArray를 이용하여 화면 구현*/}
        {/* 아후 input-btn 버튼을 누르면 dataArray에 json 객체가 추가되고 화면에 반영 */}
        {/* dataArray를 useState으로 상태관리 하기 */}
        <div className="data-box">
          {dataArray.map((data) => (
            <div key={data.no} className="data">
              <span className="data-date">{data.date}</span>
              <span className="data-comment">{data.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
