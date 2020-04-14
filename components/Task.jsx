
import React from 'react';
import styled from 'styled-components';

import InfoIcon from '../public/icons/info.svg'
import StarIcon from '../public/icons/star.svg'
import DeleteIcon from '../public/icons/delete.svg'

import dayjs from 'dayjs';

import Check from '../components/Check.jsx';

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

  return (
    <TaskWrapper>
      {withDate && <DateWrapper><Date day={dayjs(task.limit).day()}>{dayjs(task.limit).format('DD')}</Date><Month>{dayjs(task.limit).format('MMM')}.</Month></DateWrapper>}
      <TaskBoxWrapper>
        <Check status={task.done} index={index} events={events} />
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
  width: 580px;
  min-width: 580px;
  border: 1px solid ${props => props.theme.colors.borderline};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  position: relative;
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