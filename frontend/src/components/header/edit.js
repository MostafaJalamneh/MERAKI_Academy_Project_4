import React,{ useContext } from 'react'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import {LoginContext} from "./../../contexts/login"

const SettingsMenu =()=> {
  const loginContext = useContext(LoginContext);
        return (
          <DropdownMenu position='left' iconColor='#aabbcc'>
            <MenuItem text='edit profile' location='/profile/edit' />
            <MenuItem text='manage product' location='/manage/product' />
            <MenuItem text='create product' location='/create/product' />
            <MenuItem text='show and edit' location='/main/my/product' />
            <MenuItem text='history' location='/product/history' />
            <MenuItem text='pending approval' location='/products/approval' />
            <MenuItem type='separator' />
            <MenuItem text='signOut' onClick= {loginContext.logout } />
          </DropdownMenu>
        )
  }
  
  export default SettingsMenu;