import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Message(props) {
  return (
    <div>
      <p>Message: {props.text}</p>
    </div>
  )
}

const Parent = () => {
  const text = "Hello world!";

  return (
    <div className="message">
      <Message text={text}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Parent/>
  </React.StrictMode>,
  document.getElementById('root')
);
