import logo from './logo.svg';
import './App.css';
import SearchPhoneBook from './components/SearchPhoneBook';

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const newPerson = (event) => {
    event.preventDefault();
    let res = persons.find( (e) =>  (e.name === newName));
    console.log(res)
    if (res !== undefined){
      alert(`${newName} already exists`)
      return
    }
    else
    {
      return setPersons([...persons,{name: newName, number: newNumber}])}
    }
  const textChange = (event) => {
    console.log(newName,persons);
    return setNewName(document.getElementById('name').value)
  }
  const numberChange = () => {
    return setNewNumber(document.getElementById('number').value)
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <SearchPhoneBook book={persons} />
      <h2>Add New Number</h2>
      <form onSubmit={newPerson}>
        <div>
          name: <input id="name" onChange={textChange}/><br />
          number: <input id="number" onChange={numberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => {
        return <p key={p.name}>{p.name} {p.number}</p>
      })}
    </div>
  )
}

export default App

