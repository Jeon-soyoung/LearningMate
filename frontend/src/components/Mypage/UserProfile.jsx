// 01.04 나현 추가
// 01.05 나현 수정

import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function UserProfile() {
  const [data, setData] = useState({ email: '', phone_number: '', nickname: '' });
  const [isloading, setLoading] = useState(true);
  const auth = useSelector((state) => state.auth.isAuth);
  console.log(auth);
  const localDomain = 'http://localhost:8000';
  const getData = useCallback(async () => {
    try {
      const resp = await axios.get(`${localDomain}/users/userinfo`, {
        withCredentials: true,
      });
      if (resp.data.data === false) window.alert('불러오기 실패');
      else setData((currentData) => ({ ...currentData, ...resp.data.data[0] }));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  if (isloading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <h3>
        {data.nickname}
        님, 안녕하세요.
      </h3>
      <h5>
        nickname:
        {data.nickname}
      </h5>
      <h5>
        휴대폰번호:
        {data.phone_number}
      </h5>
      <h5>
        email:
        {data.email}
      </h5>
    </>
  );
}

export default UserProfile;
