import avaOfMan from '../assets/man-ava.jpg'
import AvaDef from '../assets/ava-default.svg?react'
import Message from '../assets/messages.svg?react'
import Mute from '../assets/mute.svg?react'
import Block from '../assets/block.svg?react'
import Dots from '../assets/three-dots.svg?react'


export function Profile() {
    return (
        <div className="wrap-all">
            <div className="wrap-profile">
                <div className="profile-basic-info">
                    <div className="profile-name-ava">
                        <img src={avaOfMan} alt={AvaDef} className='profile-ava'/>
                        <h2 className='text'>Man</h2>
                    </div>
                    <div className="profile-options">
                        <button className='profile-option-button'><Message className="profile-option-icon"/>Message</button>
                        <button className='profile-option-button'><Mute className="profile-option-icon"/>Mute</button>
                        <button className='profile-option-button'><Block className="profile-option-icon"/>Block</button>
                    </div>
                </div>
                <div className="profile-details">
                    <ul className="profile-details-list">
                        <li className="profile-detail">
                            <h3 className="profile-detail-text">@someman</h3>
                            <h3 className='profile-detail-name'>Username</h3>
                        </li>
                        <li className="profile-detail">
                            <h3 className="profile-detail-text">+1234567890</h3>
                            <h3 className='profile-detail-name'>Phone Number</h3>
                        </li>
                        <li className="profile-detail">
                            <h3 className="profile-detail-text">29.09.2026</h3>
                            <h3 className='profile-detail-name'>Registration Date</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}