import React, { useState } from 'react'

function SearchPhoneBook({persons}) {
    const [searchTerm, setSearchTerm] = useState('');
    const searchFilter = () => {
        const searchInp = document.getElementById('search-filter').value;
        console.log(searchInp);
        setSearchTerm(searchInp);
        let searchResults = [];
        for (let p in persons){
            if (p.name.includes(searchTerm)){
                searchResults.push(p);
            }
        }
        console.log(searchResults);
        let divEl = document.getElementById('search-res')
        for (let i in searchResults){
            divEl.innerHTML = divEl.innerHTML + i.name + '<br />'
        }
    }
  return (
    <>
        <h2>SearchPhoneBook</h2>
        <input id='search-filter' onChange={searchFilter}></input>
        <div id='search-res'></div>
    </>
  )
}

export default SearchPhoneBook