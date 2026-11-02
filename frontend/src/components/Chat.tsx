import React, { useState } from 'react';
import './Chat.css';
import avaOfMan from '../assets/man-ava.jpg';
import Cross from '../assets/cross1.svg?react';
import Search from '../assets/magnifier.svg?react';
import Dots from '../assets/three-dots.svg?react';
import Saved from '../assets/bookmark.svg?react'
import Emoji from '../assets/smiley1.svg?react';
import Attach from '../assets/clip.svg?react';
import Plane from '../assets/paperplane.svg?react';

export function Chat() {
    return (
        <div className="wrap-all">
            <section className="chat-info-section">
                <div className="chat-realname-ava">
                    <img className='chat-ava' src={avaOfMan} alt='man'/>
                    <h2 className='text'>Man</h2>
                    <Cross className='chat-option-icon' width={14} height={14}/>
                </div>
                <div className="chat-options">
                    <Search className='chat-option-icon' width={24} height={24}/>
                    <Saved className='chat-option-icon' width={24} height={24}/>
                    <Dots className='chat-option-icon' width={20} height={20} style={{ transform: 'rotate(90deg)', paddingTop: '6px'}}/>
                </div>
            </section>
            <section className='chat-main-section'>
                <div className='chat-messages'>
                    <div className="wrap-date"><p className='chat-message-date'>November 2</p></div>
                    <div className="chat-outcoming-message">
                        <div className="wrap-message" id='mess-out'>
                            <p className='text'>Tell me something</p>
                        </div>
                    </div>
                    <div className="chat-incoming-message">
                        <img className='chat-ava' src={avaOfMan} alt='man'/>
                        <div className="wrap-message"  id='mess-in'>
                            <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, hic possimus..</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='chat-input-section'>
                    <div className="chat-input-field">
                        <input type="text" className='chat-input' placeholder='Write a message..'/>
                    </div>
                    <div className='chat-input-options'>
                        <Plane className='chat-option-icon' width={24} height={24}/>
                        <Emoji className='chat-option-icon' id='smiley' width={24} height={24}/>
                        <Attach className='chat-option-icon' width={24} height={24}/>
                    </div>
            </section>
        </div>
    );
}