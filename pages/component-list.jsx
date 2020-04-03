import React, { useState } from 'react';
import styled from 'styled-components';

import TextArea from '../components/TextArea';

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
    </DlWrapper>
  )
}