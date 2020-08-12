import React from 'react';

const people = [
  { name: 'José', number: '210222333' },
  { name: 'Santi', number: '210333555' },
  { name: 'Aline', number: '210111333' },
  { name: 'Gonçalo', number: '210555777' }
];

const generateName = () =>
  [...new Array(8)]
    .fill(null)
    .map(() => 'ABCDEFGHI'[Math.floor(Math.random() * 9)])
    .join('');

const generatePhoneNumber = () => Math.floor(Math.random() * 10 ** 10).toString();

class ContactList extends React.Component {
  constructor() {
    super();
    this.state = {
      people: people
    };
  }

  sort = () => {
    const list = [...this.state.people];
    list.sort((firstItem, secondItem) => {
      return firstItem.name > secondItem.name ? 1 : -1;
    });
    this.setState({
      people: list
    });
  };

  sortReversed = () => {
    const list = [...this.state.people];
    list.sort((firstItem, secondItem) => {
      return firstItem.name > secondItem.name ? -1 : 1;
    });
    this.setState({
      people: list
    });
  };

  addElement = () => {
    const item = { name: generateName(), number: generatePhoneNumber() };
    // const list = [...this.state.people];
    // list.push(item);
    const list = [...this.state.people, item];
    this.setState({
      people: list
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.sort}>Sort alphabetically</button>
        <button onClick={this.sortReversed}>Sort reverse-alphabetically</button>
        <button onClick={this.addElement}>Add element to the array</button>
        {this.state.people.map(person => {
          return (
            <p key={person.number}>
              {person.name} - {person.number}
            </p>
          );
        })}
      </div>
    );
  }
}

export default ContactList;
