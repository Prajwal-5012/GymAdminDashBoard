import React from 'react'
import SideBar from './Components/SideBar'
import MyNavbar from './Components/MyNavbar'

const Layout = ({Maincontent}) => {
  return (
    <div>
        <MyNavbar/>
        <div className='flex flex-1 mt-1'>
            <SideBar/>
            <div className='flex-1'>
                <Maincontent/>
            </div>
        </div>
    </div>
  )
}

export default Layout;