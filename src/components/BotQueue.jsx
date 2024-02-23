import React, { useState } from 'react';

function BotQueue() {
  const [queue, setQueue] = useState([]);
  const [botStatus, setBotStatus] = useState('idle');

  const addToQueue = (task) => {
    setQueue([...queue, task]);
  };

  const startBot = () => {
    setBotStatus('working');
    // ทำการประมวลผลงานในคิวที่นี่
  };

  return (
    <div>
      <h1>กรุณากดจองคิว</h1>
      <button onClick={() => addToQueue('R1')}>กดจองคิว</button>
      <h2>เลขบัตรคิว</h2>
      <ul>
        {queue.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default BotQueue;
