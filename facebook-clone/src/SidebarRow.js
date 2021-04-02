import React from 'react'
import './SidebarRow.css'
import {Avatar} from "@material-ui/core"

function SidebarRow({src,Icon,title}) {
    return (
        <div className="sidebarRow">
        {/*If there is a src prop then place in Avatar,Also if there is an Icon prop then place Icon */}
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
             
            
        </div>
    )
}

export default SidebarRow

