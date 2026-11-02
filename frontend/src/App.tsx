import { useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Chat } from './components/Chat'

import avaOfMan from './assets/man-ava.jpg'

function App() {
    const[isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
      <div className="wrap-app">
        <section className="leftHalf">
          <section className="section-head">
            <div className="sidebarbutton">
              <button id='sidebarButton' className='text' onClick={toggleSidebar}>☰</button>
            </div>
            <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar}/>
            <div className="searchbar">
              {/* <img src={searcher} alt="search" id='search-pic'/> */}
              <input type="text" placeholder='Search..' className='text' id='search-input'/>
            </div>
          </section>
          <section className="sectionChat">
              <div className="chatlist">
                <div className="chatbox">
                    <div className="chat-lefthalf">
                        <img src={avaOfMan} alt="man" className="avatar"/>
                    </div>
                    <div className="chat-righthalf">
                      <div id="chat-upper">
                        <h3 className="text"  id="chatName">Man</h3>
                        <time dateTime="2026-10-27T19:39">19:29</time>
                      </div>
                      <div id="chat-lower">
                        <p className="text" id='chat-last-message'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, hic possimus..</p>
                      </div>
                    </div>
                </div>
                <div className="chatbox">
                    <div className="chat-lefthalf">
                        <img src={avaOfMan} alt="man" className="avatar"/>
                    </div>
                    <div className="chat-righthalf">
                      <div id="chat-upper">
                        <h3 className="text"  id="chatName">Another Man</h3>
                        <time dateTime="2026-10-27T19:39">07:33</time>
                      </div>
                      <div id="chat-lower">
                        <p className="text" id='chat-last-message'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, hic possimus..</p>
                      </div>
                    </div>
                </div>
            </div>
          </section>
        </section>
        <section className="rightHalf">
          <div id="wrapDef">
            {/* <h2 className="text" id='textDef'>Start messaging with some folk..</h2> */}
            <Chat/>
          </div>
        </section>
      </div>
  )
}

export default App
