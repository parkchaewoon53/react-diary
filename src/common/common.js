// 현재 날짜를 yyyy.mm.dd 형태로 리턴 함수
// jsx 구문이 없으므로 .js 파일로 생성
// 여러 페이지에서 공통적으로 사용되는 함수들을 선언해놓음
// getDate함수를 .jsx 파일에서 import 해서 쓸 수 있도록 앞에 export를 붙여준다
export function getDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    return `${year}.${month}.${date}`;
}