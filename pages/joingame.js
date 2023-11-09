import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://127.0.0.1:3000');

function JoinGame() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    socket.on('likeupdate', (count) => {
      setLikes(count);
    });
  }, []);

  const handleLike = () => {
    socket.emit('liked');
  };

  return (
    <div>
      <button onClick={handleLike} className="btn">
        aaaaaaay
      </button>
      <div id="likes">{likes}</div>
    </div>
  );
}

export default JoinGame;
