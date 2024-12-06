import React from 'react';

const ErrorMsgTwo = ({ errors }: any) => {
  return (
    <>
      <p className='error-msg-two' style={{ color: 'red' }}>{errors}</p>
    </>
  );
};

export default ErrorMsgTwo;