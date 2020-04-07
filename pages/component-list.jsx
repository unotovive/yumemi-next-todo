import React, { useState } from 'react';
import styled from 'styled-components';

import TextArea from '../components/TextArea';
import Button from '../components/Button';

const DlWrapper = styled.dl`
  dd {
    padding: 10px;
  }
`

export default () => {
  const [text, setText] = useState('test');
  return (
    <DlWrapper>
      <dt>TextArea</dt>
      <dd>
        <TextArea label="ラベル" value={text} setter={setText} />
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