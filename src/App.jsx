import React from 'react';
import './App.less';
import background from './images/background.png';

function App() {
  return (
    <div className="App">
      <h1 className="text">
        Hello React Webpack
        <span style={{ fontSize: '36px', marginLeft: '10px', verticalAlign: 'middle' }}><i className="iconfont">&#xe799;</i></span>
      </h1>
      <img className="background" src={background} alt="" />
    </div>
  );
}

export default App;
