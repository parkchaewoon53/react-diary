import "./Lotto.css";
import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";

function Lotto() {
  const [lottoArray, setLottoArray] = useState(makeLotto());
  const [count, setCount] = useState(3);
  const [winCount, setWinCount] = useState(0);
  const [isModalShow, setIsModalShow] = useState(false);

  // 당첨 로또 번호
  const winLotto = [3, 13, 28, 34, 38, 42];

  // 당첨 개수를 계산해서 리턴하는 함수
  const calWin = () => {
    let result = 0;
    lottoArray.forEach((num)=>{
      if(winLotto.includes(num)){
        result++;
      }
    });
    return result;
  }

  // 처음 한번 실행된 후
  // setLottoArray에 의해 lottoArray의 상태가 바뀔때마다 실행
  // useEffect는 두번째 파라미터 배열 내 상태값이 바뀔때마다 
  // 첫번째 파라미터의 익명함수가 실행됨
  useEffect(()=>{
    setWinCount(calWin());
  }, [lottoArray]);

  return (
    <div className="lotto-container">
      <h2 className="lotto-title">오늘의 운세</h2>

      <div className="lotto-box">
        {/* lottoArray 를 화면에 그리기 */}
        {/* num 가 winLotto 내부에 포함되어있다면 배경색 주기 */}
        {/* winLotto.includes(num) 가 true면 className에 bg-pink 추가 */}
        {lottoArray.map((num) => (
          <div key={num} className={`lotto-num ${winLotto.includes(num) ? "bg-pink" : null}`}>
            {num}
          </div>
        ))}
      </div>

      <div className="controll-box">
        <span>{winCount}개 일치</span>
        <span style={{margin: "0 16px"}}>기회 {count}회</span>
        <button onClick={() => {
          if(count > 0){
            setLottoArray(makeLotto());
            setCount(count - 1);
          }else{
            // 모달차의 출력 상태를 트루로 바꿔주기
            setIsModalShow(true);
          }
        }}>다시뽑기</button>
      </div>

      {/* 모달창 */}
      {/* 다시 뽑기시 기회가 0이면 모달창 출력 (상태관리 = useState)*/}
      {/* isModalShow가 true면 오른쪽 jsx구문이 화면에 출력 */}
      {/* isModalShow가 false면 오른쪽 jsx구문이 화면에 출력X */}
      { 
        isModalShow  && 
        // Home.jsx와 Lotto.jsx모두 Modal컴포넌트 사용중
        <Modal msg = "행복하세요" close = {()=>setIsModalShow(false)}/>
      }
    </div>
  );
}

// 2. Lotto 함수 밖에 함수 선언
function makeLotto() {
  // 중복되지 않는 랜덤 숫자 (1~45) 6개를 담고 있는 배열을 생성해서 리턴
  const numbers = new Set();

  // 중복되지 않는 숫자 6개를 생성
  while (numbers.size < 6) {
    const rand = Math.floor(Math.random() * 45) + 1; // 1 ~ 45
    numbers.add(rand);
  }

  // Set을 배열로 변환한 후 오름차순 정렬
  return Array.from(numbers).sort((a, b) => a - b);
}

export default Lotto;
