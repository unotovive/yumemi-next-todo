import App from 'next/app'
import React from 'react'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import resetCss from 'ress';

import { Provider } from "react-redux";
import store from '../stores'


const GlobalStyle = createGlobalStyle`
  ${resetCss}
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
`
const theme = {
  colors: {
    black: '#00214D',
    white: '#fffffe',
    primary: '#FF5470',
    secondary: '#00EBC7',
    gray: '#888888',
    borderline: '#dddddd'
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}