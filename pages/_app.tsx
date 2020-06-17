import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';
import Theme from '../theme/theme';
import GlobalStyle from '../theme/globalStyles';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}