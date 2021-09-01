import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import anonymous1 from './anonymous1.jpg'

function Post(props){
  return <div className='main-div'>
    <div className='postDiv'>
      <h3>{props.name}</h3>
      <br />
      <img src={props.src}></img>
    </div>
  </div>
}

ReactDOM.render(<Post name='Qambar Ali' src={anonymous1} />,document.querySelector('#root'))

