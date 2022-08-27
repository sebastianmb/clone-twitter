import React from 'react'
import {SidebarIcon} from './styles'

const IconOption = ({text, Icon}) => {
  return (
    
      <SidebarIcon>
        {Icon}
        <h2>{text}</h2>

      </SidebarIcon>
    
  )
}

export default IconOption
