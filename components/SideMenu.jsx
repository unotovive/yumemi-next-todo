import React from 'react';
import styled from 'styled-components';
import Logo from '../public/logo.svg'
import Selector from '../public/selector.svg'

import iconHelper from '../utils/iconResolver';

const SideMenu = ({ categories = [], active = -2, events } = {}) => {

  const menuClickHandler = (index) => {
    console.log('handle')
    events.selectMenu(index)
  }

  return (
    <SideMenuWrapper>
      <TopIcon><Logo /></TopIcon>
      <MenuItem onClick={() => menuClickHandler(-2)} isActive={active === -2}><MenuIcon>{iconHelper('list')}</MenuIcon><MenuTitle>All</MenuTitle></MenuItem>
      <MenuItem onClick={() => menuClickHandler(-1)} isActive={active === -1}><MenuIcon>{iconHelper('star')}</MenuIcon><MenuTitle>Favorite</MenuTitle></MenuItem>
      <MenuSplit><p>Categories</p></MenuSplit>
      {
        categories.map((category, index) => {
          iconHelper(category.icon)
          return <MenuItem key={index} onClick={() => menuClickHandler(index)} isActive={active === index}><MenuIcon>{iconHelper(category.icon)}</MenuIcon><MenuTitle>{category.name}</MenuTitle></MenuItem>
        })
      }
      <SelectorWrapper active={String(active)}><Selector /></SelectorWrapper>
    </SideMenuWrapper >
  )
};

export default SideMenu;

const SideMenuWrapper = styled.div`
  height: 100vh;
  width: 280px;
  box-sizing: border-box;
  background: ${props => props.theme.colors.primary};
  position: relative;
  padding: 1rem;
  padding-top: 120px;
  overflow: hidden;
`

const TopIcon = styled.div`
  position: absolute;
  top: 32px;
  left: 40px;
`

const MenuItem = styled.button`
  height: 28px;
  display: flex;
  position: relative;
  align-items: center;
  margin: 1rem 0;
  transition: 0.6s;
  opacity: ${props => {
    return props.isActive ? 1 : 0.6;
  }};
  cursor: pointer;
  user-select: none;
`

const MenuIcon = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  path {
    fill: ${props => props.theme.colors.white}
  };
`

const MenuTitle = styled.p`
  font-family: 'Raleway';
  font-size: 18px;
  color: ${props => props.theme.colors.white};
`

const MenuSplit = styled.div`
  width: 5rem;
  margin-left: 1.1rem;
  margin-top: 2rem;
  position: relative;
  p {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 14px;
    position: relative;
    z-index:100000;
    padding-bottom: 3px;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.primary};
    width: 5rem;
  }
  &::before {
    width: 103%;
    height: 60%;
    background: ${props => props.theme.colors.white};
    position: absolute;
    right: -3%;
    bottom: -2px;
    content: '';
  }
`

const SelectorWrapper = styled.div`
  height:200vh;
  position: absolute;
  width:10px;
  right: 0;
  transition: 0.6s cubic-bezier(.85,-0.25,0,1.50);
  top: ${props => {
    switch (props.active) {
      case '-2':
        return '-1470px';
      case '-1':
        return '-1428px';
      default:
        return `-${1330 - 42 * props.active}px`;
    }
  }};
  svg {
    position: relative;
    right: 2.5rem;
  }
`