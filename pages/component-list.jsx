import React, { useState } from 'react';
import styled from 'styled-components';

import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Select from '../components/Select';
import Input from '../components/Input';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`

export default () => {
  const [text, setText] = useState('test');
  const selectItem = [
    { id: '0', name: 'item0' },
    { id: '1', name: 'item1' },
    { id: '2', name: 'item2' },
    { id: '3', name: 'item3' },
    { id: '4', name: 'item4' },
  ]
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
    </DlWrapper >
  )
}