import React, { useEffect, useState } from 'react';
import { incrementLike, decrementLike } from './Actions';
import { createStore } from 'redux';
import Reducer from './Reducer';

const store = createStore(Reducer);

const LikeCounter = () => {
  const [likes, setLikes] = useState(store.getState().likes);

  useEffect(() => {
    const subscribe = store.subscribe(() => {
      setLikes(store.getState().likes);
    });
    return subscribe;
  }, []);

  function handleLike() {
    store.dispatch(incrementLike());
  }

  function handleUnLike() {
    store.dispatch(decrementLike());
  }

  return (
    <div className='main'>
      <h1>{likes}</h1>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleUnLike}>Unlike</button>
    </div>
  );
};

export default LikeCounter;
