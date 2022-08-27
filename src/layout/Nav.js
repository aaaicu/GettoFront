import { useEffect, useState } from 'react';
import { api } from '../common/axios/customAxios';
import Ball from '../component/lotto/Ball';
import BallContainer from '../component/lotto/BallContainer';
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
      <BallContainer luckyNumber = {luckyNumber}/>
    </div>
  );
}

export default Nav;
