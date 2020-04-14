import React from 'react';
import styled from 'styled-components';

const Check = ({ status, index, events } = {}) => {
  const taskCheckHandler = () => {
    events.check && events.check(index, !status);
  }
  return (
    <Checkbox onClick={taskCheckHandler}>
      <SVGDefinition>
        <defs>
          <linearGradient id="boxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">
            <stop offset="0%" stopColor="#27FDC7" />
            <stop offset="100%" stopColor="#0FC0F5" />
          </linearGradient>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#0FC0F5" />
            <stop offset="100%" stopColor="#27FDC7" />
          </linearGradient>
          <path id="todo__line" stroke="url(#lineGradient)" d="M21 12.3h268v0.1z"></path>
          <path id="todo__box" stroke="url(#boxGradient)" d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"></path>
          <path id="todo__check" stroke="url(#boxGradient)" d="M10 13l2 2 5-5"></path>
          <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
        </defs>
      </SVGDefinition>
      <input type="checkbox" className="todo__state" readOnly checked={status} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 25" className="todo__icon">
        <use xlinkHref="#todo__line" className="todo__line"></use>
        <use xlinkHref="#todo__box" className="todo__box"></use>
        <use xlinkHref="#todo__check" className="todo__check"></use>
        <use xlinkHref="#todo__circle" className="todo__circle"></use>
      </svg >
    </Checkbox>
  )
};

export default Check;

const SVGDefinition = styled.svg`
  position: absolute;
  z-index: -1;
  opacity: 0;
`

const Checkbox = styled.div`
z-index: 100;
@keyframes explode {
        0% { stroke-width: 0; transform: scale(0.5) rotate(0deg); }
        30% {
          stroke-width: 3;
          stroke-opacity: 1;
          transform: scale(0.8) rotate(40deg);
          animation-timing-function: cubic-bezier(.89,.01,.95,.51);
        }
        100% {
          stroke-width: 0;
          stroke-opacity: 0;
          transform: scale(1.1) rotate(60deg);
          animation-timing-function: cubic-bezier(.08,.56,.04,.98);
        }
      }
.todo__line,
.todo__box,
.todo__check {
  transition: stroke-dashoffset 0.6s cubic-bezier(.9,.0,.5,1);
}
.todo__state {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.todo__circle {
  stroke: #27FDC7;
  stroke-dasharray: 1 6;
  stroke-width: 0;
  transform-origin: 13.5px 12.5px;
  transform: scale(0.4) rotate(0deg);
  animation: none 0.6s cubic-bezier(.08,.56,.04,.98);
}
.todo__icon {
  position: absolute;
  top: -1rem;
  bottom: 0;
  left: 0.5rem;
  width: 100%;
  height: auto;
  margin: auto;
  fill: none;
  stroke: #27FDC7;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
}
  .todo__box {
  stroke-dasharray: 56.1053, 56.1053;
  stroke-dashoffset: 0;
  transition-delay: 0.12s;
}
.todo__check {
  stroke: #27FDC7;
  stroke-dasharray: 9.8995, 9.8995; stroke-dashoffset: 9.8995;
  transition-duration: 0.24s;
}
.todo__line {
  stroke-dasharray: 268, 1684;
  stroke-dashoffset: 268;
}
.todo__circle {
  animation-delay: 0.42s;
  animation-duration: 0.42s;
}
.todo__state:checked {
  ~ .todo__icon .todo__box { stroke-dashoffset: 56.1053; transition-delay: 0s; }
  ~ .todo__icon .todo__line { stroke-dashoffset: -8; }
  ~ .todo__icon .todo__check { stroke-dashoffset: 0; transition-delay: 0.36s; }
  ~ .todo__icon .todo__circle {
      animation-name: explode;
    }
}
`