import css from "./style.module.css"
import React, { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
 const [searchName, setSearchName] = useState(''); 
  const [inputValue, setInputValue] = useState('');

    const handleChange = event => {
    setInputValue( event.target.value);
  };

   const handleSubmit = event => {
    event.preventDefault(); 
     const searchQuery = inputValue.trim(); 
     
     if (searchQuery !== searchName) {
      onSubmit(searchQuery);
      setSearchName(searchQuery);
      setInputValue('');
    }
  };
   
     
    return (
      <header className={css.searchBar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            name="searchName"
            placeholder="Search images and photos"
            value={inputValue}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }




export default Searchbar;