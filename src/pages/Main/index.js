import React, { useRef } from 'react';

import LeftNav from '../../components/LeftNav';

const Main = () => {
  const inputRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const showAlert = () => {
    const result = inputRef.current.value;
    alert(result);
  };

  return (

    <div style={{ display: 'flex' }}>
      <LeftNav />
      <div style={{ padding: '40px' }}>
        <input ref={inputRef} style={{ width: '140px' }} type="text" />
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={showAlert}>버.튼</button>
      </div>
    </div>
  );
};

Main.propTypes = {

};

export default Main;
