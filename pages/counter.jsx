import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, reduce, reset } from '../stores/counter'

import { RootStyle, Button } from '../styles/common';

export default () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);

  return (
    <>
      <RootStyle>
        <Button color="orange" onClick={e => dispatch(add(1))}>増やす</Button>
        <Button color="blue" onClick={e => dispatch(reduce(1))}>減らす</Button>
        <Button color="red" onClick={e => dispatch(reset())}>リセット</Button>
        <div>{count}回</div>
      </RootStyle>
    </>
  )
}