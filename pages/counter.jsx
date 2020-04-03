import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, reduce, reset } from '../stores/counter'

export default () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);

  return (
    <>
      <button onClick={e => dispatch(add(1))}>増やす</button>
      <button onClick={e => dispatch(reduce(1))}>減らす</button>
      <button onClick={e => dispatch(reset())}>リセット</button>
      <div>{count}回</div>
    </>
  )
}