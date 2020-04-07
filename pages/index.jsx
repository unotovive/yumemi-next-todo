import React from 'react'
import Link from 'next/link';
import { RootStyle } from '../styles/common';

export default () => (
  <>
    <RootStyle>
      <Link href="/counter">
        <a>カウンターAPP</a>
      </Link>
      <Link href="/component-list">
        <a>コンポーネントリスト</a>
      </Link>
    </RootStyle>
  </>
)
