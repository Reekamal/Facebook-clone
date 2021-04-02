import React from 'react'
import './Sidebar.css'
import SidebarRow from "./SidebarRow"
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import PeopleIcon from "@material-ui/icons/People"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import StorefrontIcon from "@material-ui/icons/Storefront"
import ChatIcon from "@material-ui/icons/Chat"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import { useStateValue } from './StateProvider';

function Sidebar() {
    //const [{user},dispatch] = useStateValue();
    return (
        <div className="sidebar">
          {/* <SidebarRow src= {user.photoURL} title={user.displayName}/> */}
            <SidebarRow Icon ={LocalHospitalIcon} title="Info Center"/>
            <SidebarRow Icon ={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon ={PeopleIcon} title="Friends"/>
            <SidebarRow Icon ={ChatIcon} title="Messages"/>
            <SidebarRow Icon ={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon ={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon ={ExpandMoreOutlinedIcon} title="More"/>
             
            
        </div>
    )
}

export default Sidebar
