import { useEffect, useState } from 'react';
import { api } from '../common/axios/customAxios';
import BallContainer from '../component/lotto/BallContainer';
import './Nav.scss';


function Nav() {
  const [ luckyNumber, setLuckyNumber ] = useState([]); 

  useEffect(()=> {
    async function fetchData() {
      const getLuckyNumber = await api.get('/api/last/lucky-number');
      // console.log(getLuckyNumber.data);
      setLuckyNumber(getLuckyNumber.data);
    }

    fetchData();
  }, [])
  

  return (
    <div className="Nav">
      {/* <Notice /> */}
      <div className="Menu">
      <ul>
        <li>홈</li>
        <li>공지사항</li>
        <li>나의 번호</li>
      </ul>
      </div>
      <BallContainer luckyNumber = {luckyNumber}/>
    </div>
  );
}

export default Nav;
