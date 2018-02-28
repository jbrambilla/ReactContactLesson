import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

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
        <ContactList contacts = {[ 
          { name: 'Michael' },
          { name: 'Ryan' },
          { name: 'Tyler' } ]} />
        <ContactList contacts = {[ 
          { name: 'Fulano' },
          { name: 'Beltrano' },
          { name: 'Ciclano' } ]} />
      </div>
    );
  }
}

export default App;
