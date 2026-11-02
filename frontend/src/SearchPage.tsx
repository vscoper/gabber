import { useState } from 'react'
import './SearchPage.css'

function SearchPage() {
    return(
        <div className="wrap-all">
            <div className="searchbar">
                {/* <img src={searcher} alt="search" id='search-pic'/> */}
            <input type="text" placeholder='Search..' className='text' id='search-input'/>
            </div>
        </div>
    )
}