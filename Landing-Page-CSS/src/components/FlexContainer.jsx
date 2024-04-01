import React from 'react'
import RightSideBar from './RightSidebar.jsx'
import LeftSidebar from './LeftSidebar.jsx'
import MainFlexItem from './MainFlexItem.jsx'
export default function FlexContainer () {
  
  return (

    <div className="container">
      <LeftSidebar />
      <MainFlexItem  />
      {/* <ButtonUsage /> */}
      <RightSideBar />
    </div>
  )
}