import React from 'react';
import LoginBox from '../components/molecules/loginBox';

const Signin = ({ history }) => {
  console.log(history);
  return (
    <div>
      <LoginBox props={{ history }} />
    </div>
  );
};

export default Signin;