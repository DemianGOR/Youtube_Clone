import React from "react";
import "../css/Search/SearchBar.css";
import search from "../img/Search.png";
import microphone from "../img/microphone.png"

function SearchBar(){
    const searchInput = document.querySelector('.search__bar');
    const searchBtn = document.querySelector('.search__button');
    let searchLink = "https://www.youtube.com/results?search_query=";

    searchBtn.addEventListener('click', () => {
        if(searchInput.value.length){
            location.href = searchLink + searchInput.value;
        }
    })
    return(
        <div >
            <div className="top-header__inner">
                <form className="search_bar-container">
                    <input className="search__bar" placeholder="Search" required="" type="text"/>
                    <button className="search__button">
                    <img className="search__button-img" alt="logo" src={search}/>
                    </button>
                </form>
                <button className="search__microphone-button">
                    <img className="search__button-img" alt="logo" src={microphone}/>
                </button>
            </div>
        </div>
    )
}

export default SearchBar;