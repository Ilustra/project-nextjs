import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { menu } from './menu_data';
import Header from './Header';
import Menu from './menu';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import FrameWindow from './components/Window';
import { useState } from 'react';
import { combineTheme, dark, light, myTheme } from '../styles/themes';
import { Surface } from './components/packages';


export const Div = styled(Surface)`
    position: relative;
    display: flex;
    height:90vh; 
    top: 10vh; 
    z-index: 1;
    justify-content: center;
    align-items: center;
`;


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark));

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <button style={{position:'absolute', top: 0, left: 0, zIndex: 100}} onClick={toggleTheme}>olá</button>
        <div style={{ display: 'flex', height: '100vh', position: 'relative', overflow: 'hidden' }}>
          <Menu menu={menu} />
          <div style={{ display: 'flex', width: '100vw', flexDirection: 'column', position: 'relative' }}>
            <Header />
            <Div>
              <FrameWindow>
                <Component {...pageProps} />
              </FrameWindow>
            </Div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
