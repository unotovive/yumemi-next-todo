import React, { useState } from 'react';
import styled from 'styled-components';

import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Select from '../components/Select';
import Input from '../components/Input';
import Task from '../components/Task';
import SideMenu from '../components/SideMenu';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`

export default () => {
  const [text, setText] = useState('test');
  const [menuSelected, setMenuSelected] = useState(-2);
  const selectItem = [
    { id: '0', name: 'item0' },
    { id: '1', name: 'item1' },
    { id: '2', name: 'item2' },
    { id: '3', name: 'item3' },
    { id: '4', name: 'item4' },
  ]
  const categories = [
    { name: 'Work', icon: 'bag' },
    { name: 'お買物リスト', icon: 'freezer' },
    { name: '買いたい', icon: 'fire' },
    { name: 'House', icon: 'house' },
    { name: 'その他', icon: 'stack' },
  ]
  const menuEvents = {
    selectMenu: (menuIndex) => {
      setMenuSelected(menuIndex);
      console.log(menuSelected);
    },
  }

  const events = {
    check: (id, done) => {
      const taskTmp = tasks.map((task, index) => {
        if (index === id) {
          return {
            ...task,
            done,
          }
        } else {
          return task
        }
      })
      setTasks(taskTmp)
    },
    info: (id) => {
      alert(tasks[id].info)
    },
    star: (id, isFavorite) => {
      const taskTmp = tasks.map((task, index) => {
        if (index === id) {
          return {
            ...task,
            isFavorite,
          }
        } else {
          return task
        }
      })
      setTasks(taskTmp)
    },
    delete: (id) => {
      setTasks(tasks.splice(id, 1));
    },
  };

  const [tasks, setTasks] = useState(
    [{
      title: '高沼カリキュラムを終わらせる',
      category: 'Work',
      limit: new Date('2020/4/10'),
      isFavorite: false,
      info: 'ここにはメモが入るよ！！！詳細とか書いてね',
      done: true,
    }, {
      title: '高沼カリキュラムを終わらせる',
      category: 'Work',
      limit: new Date('2020/4/11'),
      isFavorite: true,
      info: '',
      done: false,
    }, {
      title: '高沼カリキュラムを終わらせる',
      category: 'Work',
      limit: new Date('2020/4/12'),
      isFavorite: false,
      info: 'ここにはメモが入るよ！！！詳細とか書いてね',
      done: true,
    }, {
      title: '高沼カリキュラムを終わらせる',
      category: 'Work',
      limit: new Date('2020/4/13'),
      isFavorite: false,
      info: 'ここにはメモが入るよ！！！詳細とか書いてね',
      done: true,
    }, {
      title: '高沼カリキュラムを終わらせる',
      category: 'Work',
      limit: new Date('2020/4/14'),
      isFavorite: true,
      info: '',
      done: false,
    }, {
      title: '高沼カリキュラムを終わらせる',
      category: 'Work',
      limit: new Date('2020/4/15'),
      isFavorite: false,
      info: 'ここにはメモが入るよ！！！詳細とか書いてね',
      done: true,
    }, {
      title: '高沼カリキュラムを終わらせる',
      category: 'Work',
      limit: new Date('2020/4/16'),
      isFavorite: false,
      info: 'ここにはメモが入るよ！！！詳細とか書いてね',
      done: true,
    }, {
      title: '高沼カリキュラムを終わらせる',
      category: 'Work',
      limit: new Date('2020/4/17'),
      isFavorite: true,
      info: '',
      done: false,
    }, {
      title: '高沼カリキュラムを終わらせる',
      category: 'Work',
      limit: new Date('2020/4/18'),
      isFavorite: false,
      info: 'ここにはメモが入るよ！！！詳細とか書いてね',
      done: true,
    }]
  )

  return (
    <DlWrapper>
      <dt>Select</dt>
      <dd>
        <Select label="ラベル" value={1} items={selectItem} setter={setText} />
      </dd>
      <dt>TextArea</dt>
      <dd>
        <TextArea label="ラベル" value={text} setter={setText} />
      </dd>
      <dt>Input</dt>
      <dd>
        <Input label="text" value={text} type="text" setter={setText} />
      </dd>
      <dd>
        <Input label="number" value={text} type="number" setter={setText} />
      </dd>
      <dd>
        <Input label="password" value={text} type="password" setter={setText} />
      </dd>
      <dt>Button</dt>
      <dd>
        <Button text="outline" valiant="outline" onClick={() => alert('outline')} />
      </dd>
      <dd>
        <Button text="primary" valiant="primary" onClick={() => alert('primary')} />
      </dd>
      <dd>
        <Button text="secondary" valiant="secondary" onClick={() => alert('secondary')} />
      </dd>
      <dt>Task</dt>
      <dd>
        <Task task={tasks[0]} index={0} events={events} />
      </dd>
      <dt>Task With Date</dt>
      {
        tasks.map((task, index) => {
          return <dd key={index}><Task withDate={true} task={task} index={index} events={events} /></dd>;
        })
      }
      <dt>SideMenu</dt>
      <dd>
        <SideMenu categories={categories} active={menuSelected} events={menuEvents}></SideMenu>
      </dd>
    </DlWrapper >
  )
}