import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = [
      { name: 'Michael' },
      { name: 'Ryan' },
      { name: 'Tyler' }
    ]

    return <ol>
        {people.map(p => 
          <li key={p.name}> {p.name} </li>
        )}
      </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;
