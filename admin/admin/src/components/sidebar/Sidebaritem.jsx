import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useState } from 'react';

export default function Sidebaritem(){
    const [open , setOpen]=useState(false)
    return(
        
        <div className={open ? "sidebar-item open ":"sidebar-item"}>
        <div className="sidebar-title">
          <span>
            <i>
            <SettingsIcon className='bi-list' fontSize='small'/>
            General
            </i>
          </span>
          <i> <ExpandMoreIcon  className='bi-chevron-down toggle-btn'onclick={()=>setOpen(!open)}/> </i>
        </div>
       <div className='sidebar-content' >
        Hello
       </div>
       </div>      )
}