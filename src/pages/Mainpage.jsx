import React from 'react';
import { checkValidJwt } from '../modules/checkValidJwt';
import MainPage from '../components/organisms/mainPage';

const Mainpage = () => {
  //TODO: 이거 코드 나중에 다시 확인해야함. checkValidJwt가 계속 false 뱉음
  return <div>{checkValidJwt() ? <MainPage /> : <MainPage />}</div>;
};

export default Mainpage;
