import React from 'react'
import {SidebarIcon} from './styles'

const IconOption = ({text, Icon, active, primary}) => {
  return (
    
      <SidebarIcon active={active} primary={primary}>
        {Icon}
        <h2>{text}</h2>

      </SidebarIcon>
    
  )
}

export default IconOption
