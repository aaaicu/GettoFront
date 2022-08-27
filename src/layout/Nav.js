import { useEffect, useState } from 'react';
import { api } from '../common/axios/customAxios';
import Notice from '../component/lotto/Notice';
import './Nav.css';


function Nav() {
  const [ luckyNumber, setLuckyNumber ] = useState([]); 

  const data = {};
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
      <Notice />
      <div className='Menu'>
      버튼 | 영역 | 목록 | 짠
      
      </div>
      <div>
      {luckyNumber.round} 회차 ({luckyNumber.createdAt})
      </div>
      <div>
      {luckyNumber.number1}, {luckyNumber.number2}, {luckyNumber.number3}, {luckyNumber.number4}, {luckyNumber.number5}, {luckyNumber.number6} + {luckyNumber.bonus}
      </div>
    </div>
  );
}

export default Nav;
