
import React from 'react';
import styled from 'styled-components';

import InfoIcon from '../public/icons/info.svg'
import StarIcon from '../public/icons/star.svg'
import DeleteIcon from '../public/icons/delete.svg'

import dayjs from 'dayjs';

const Task = ({ task = {}, index, withDate = false, events } = {}) => {
  const infoClickHandler = () => {
    events.info && events.info(index);
  }

  const starClickHandler = () => {
    events.star && events.star(index, !task.isFavorite);
  }

  const deleteClickHandler = () => {
    events.delete && events.delete(index);
  }

  const taskCheckHandler = () => {
    events.check && events.check(index, !task.done);
  }

  return (
    <TaskWrapper>
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
      {withDate && <DateWrapper><Date day={dayjs(task.limit).day()}>{dayjs(task.limit).format('DD')}</Date><Month>{dayjs(task.limit).format('MMM')}.</Month></DateWrapper>}
      <TaskBoxWrapper>
        <Checkbox onClick={taskCheckHandler}>
          <input type="checkbox" className="todo__state" readOnly checked={task.done} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 25" className="todo__icon">
            <use xlinkHref="#todo__line" className="todo__line"></use>
            <use xlinkHref="#todo__box" className="todo__box"></use>
            <use xlinkHref="#todo__check" className="todo__check"></use>
            <use xlinkHref="#todo__circle" className="todo__circle"></use>
          </svg >
        </Checkbox>
        <ContentsWrapper>
          <Title done={task.done}>{task.title}</Title>
          <Category>{task.category}</Category>
        </ContentsWrapper>
        <ControlWrapper>
          <IconWrapper type="info" active={task.info} onClick={infoClickHandler}><InfoIcon className="icon" /></IconWrapper>
          <IconWrapper type="star" active={task.isFavorite} onClick={starClickHandler}><StarIcon className="icon" /></IconWrapper>
          <IconWrapper type="delete" onClick={deleteClickHandler}><DeleteIcon className="icon" /></IconWrapper>
        </ControlWrapper>
      </TaskBoxWrapper >
    </TaskWrapper >
  )
};

export default Task;

const TaskWrapper = styled.div`
  display: flex;
  position: relative;
`

const SVGDefinition = styled.svg`
  position: absolute;
  z-index: -1;
  opacity: 0;
`

const Check = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`

const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 84px;
  padding: 0 1rem;
`

const Date = styled.p`
  font-family: 'Raleway';
  font-size: 36px;
  letter-spacing: 0.05em;
  color: ${
  props => {
    if (props.day === 6) {
      return '#23bcdd';
    } else if (props.day === 0) {
      return props.theme.colors.primary;
    } else {
      return props.theme.colors.black;
    }
  }
  };
`

const Month = styled.p`
  font-family: 'Raleway';
  font-size: 14px;
  letter-spacing: 0.05em;
  color: ${props => props.theme.colors.black};
`

const TaskBoxWrapper = styled.div`
  height: 84px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.borderline};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
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
const ContentsWrapper = styled.div`
  margin-left: 60px;
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 84px;
  z-index: 0;
`
const Title = styled.div`
  font-size: 18px;
  margin-bottom: 0.4      rem;
  color: ${props => {
    return props.done ? '#1B4A4E' : props.theme.colors.black;
  }};
  opacity: ${props => {
    return props.done ? 0.4 : 1;
  }};
  transition: all 0.3 linear 0.3;
`
const Category = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
`
const ControlWrapper = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  display: flex;
`
const IconWrapper = styled.div`
  .icon {
    & > path {
      fill: ${props => {
    switch (props.type) {
      case 'info':
        return props.active ? '#00DDEB' : props.theme.colors.gray;
        break;
      case 'star':
        return props.active ? '#FFDF6F' : props.theme.colors.gray;
        break;
      case 'delete':
        return props.theme.colors.gray;
        break;
    }
    return props.color || props.theme.colors.primary
  }};
    }
  }
  padding: 0.3rem;
`