import React, { useState } from 'react'
import './Sidebar.css'

import avaOfMan from '../assets/man-ava.jpg'
import Cross from '../assets/cross1.svg?react'
import UserProfile from '../assets/userava.svg?react';
import NewGroup from '../assets/people.svg?react'
import NewChannel from '../assets/speakers.svg?react'
import Contacts from '../assets/notebook.svg?react'
import SavedMessages from '../assets/bookmark.svg?react'
import Settings from '../assets/gear.svg?react'
import Logout from '../assets/exit.svg?react'

interface SidebarProps {
    isOpen: boolean;
    onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {

    return (
    <div className={`wrap-sidebar ${isOpen ? '' : 'closed'}`}>
        <div className="sidebarbutton">
            <button id='sidebarButtonInside' className='text' onClick={onToggle}><Cross width={14} height={14} style={{fill: '#6D7883'}}/></button>
        </div>
        <div className="basic-info">
            <img src={avaOfMan} alt="man" className="avatar"/>
            <h2 id='user-realname' className='text'>Main Man</h2>
        </div>
        <div className="sidebar-options">
            <ul className='list-options'>
                <li className='list-option'>
                    <UserProfile className='list-option-icon' width={24} height={24}/>
                    <h3 className='text' id='list-option-name'>My Profile</h3>
                </li>
                <li className='list-option'>
                    <NewGroup className='list-option-icon' width={24} height={24}/>
                    <h3 className='text' id='list-option-name'>New Group</h3>
                </li>
                <li className='list-option'>
                    <NewChannel className='list-option-icon' width={24} height={24}/>
                    <h3 className='text' id='list-option-name'>New Channel</h3>
                </li>
                <li className='list-option'>
                    <Contacts className='list-option-icon' width={24} height={24}/>
                    <h3 className='text' id='list-option-name'>Contacts</h3>
                </li>
                <li className='list-option'>
                    <SavedMessages className='list-option-icon' width={24} height={24}/>
                    <h3 className='text' id='list-option-name'>Saved Messages</h3>
                </li>
                <li className='list-option'>
                    <Settings className='list-option-icon' width={24} height={24}/>
                    <h3 className='text' id='list-option-name'>Settings</h3>
                </li>
                <li className='list-option'>
                    <Logout className='list-option-icon' width={24} height={24}/>
                    <h3 className='text' id='list-option-name'>Logout</h3>
                </li>
            </ul>
        </div>
    </div>
    );
}