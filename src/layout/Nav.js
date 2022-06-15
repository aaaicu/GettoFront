import Notice from '../component/lotto/Notice';
import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
      <Notice/>

      <div className='Menu'>
      버튼 | 영역 | 목록 | 짠
      </div>
    </div>
  );
}

export default Nav;
