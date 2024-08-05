import { Link } from "react-router-dom";

export default function CreateAccountResult({ username }) {
  return (
    <div>
      <p>환영합니다! {username}님의 계정 생성이 완료되었습니다.</p>
      <br />
      <Link to="/user">로그인</Link>
    </div>
  );
}
