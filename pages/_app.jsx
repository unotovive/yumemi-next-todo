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
    primary: '#00214D',
    secondly: '#00214D',
    gray: '#00214D',
    borderline: '#dadada'
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