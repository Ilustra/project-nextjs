import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styled from 'styled-components';
import { menu } from './menu_data';
import Header from './Header';
import Menu from './menu';

export const Div = styled.div`
    position: relative;
    display: flex;
    height:90vh; 
    top: 10vh; 
    z-index: 1;
    background-color: #d4d4d4;
    justify-content: center;
    align-items: center;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <div style={{display:'flex', height: '100vh', position:'relative', overflow:'hidden'}}>
         <Menu  menu={menu} />
          <div style={{ display: 'flex', width: '100vw', flexDirection:'column', position:'relative'}}>     
          <Header  />
          <Div>
          <Component {...pageProps} />
          </Div>
      </div>
      </div>
      </>
  )
}

export default MyApp
