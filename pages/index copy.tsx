import type { NextPage } from 'next'
import Dashboard from './Dashboard';
import Header from './Header';

import Menu from './menu';


import { menu } from './menu_data'




const Home: NextPage = () => {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <div style={{display:'flex', height: '100vh', position:'relative', overflow:'hidden'}}>
       <Menu  menu={menu} />
        <div style={{ display: 'flex', width: '100vw', flexDirection:'column', position:'relative'}}>     
        <Header  />
        <Dashboard />
    </div>
    </div>
    </>

  )
}

export default Home
