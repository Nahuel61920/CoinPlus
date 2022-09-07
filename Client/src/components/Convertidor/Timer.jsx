import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (

      <div className='d-flex justify-content-center'>
        <span>{minutes}:</span><span>{seconds}</span>
      </div>

  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 900); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}